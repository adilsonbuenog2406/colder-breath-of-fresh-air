import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { htmlResponse, withHtmlPublicCache } from "./lib/html-cache-headers";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return htmlResponse(renderErrorPage(), 500);
}

let requestCount = 0;

const LEGACY_HERO_VIDEO = /^\/assets\/video-04-[^/]+\.mp4$/;

function agentLog(payload: Record<string, unknown>) {
  const line = JSON.stringify({
    sessionId: "6c2070",
    timestamp: Date.now(),
    ...payload,
  });
  // #region agent log
  console.log(`[debug-6c2070] ${line}`);
  fetch("http://127.0.0.1:7616/ingest/1458b51a-03ec-405f-8c15-55a2675233fe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "6c2070",
    },
    body: line,
  }).catch(() => {});
  // #endregion
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const started = Date.now();
    const path = new URL(request.url).pathname;
    const shouldLog =
      requestCount < 5 ||
      path === "/health" ||
      path === "/" ||
      path === "/meta.json" ||
      path === "/video-04.mp4" ||
      LEGACY_HERO_VIDEO.test(path);

    requestCount += 1;

    if (path === "/climatizadores-industrias" || path === "/climatizadores-industrias/") {
      return Response.redirect(
        new URL("/segmentos/climatizadores-para-industrias", request.url),
        301,
      );
    }

    if (LEGACY_HERO_VIDEO.test(path)) {
      // #region agent log
      agentLog({
        runId: process.env.DEBUG_RUN_ID ?? "pre-fix",
        hypothesisId: "G",
        location: "src/server.ts:legacy-video-redirect",
        message: "redirecting legacy hashed hero video URL",
        data: { from: path, to: "/video-04.mp4" },
      });
      // #endregion
      return Response.redirect(new URL("/video-04.mp4", request.url), 301);
    }

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      const finalResponse = withHtmlPublicCache(await normalizeCatastrophicSsrResponse(response));

      if (shouldLog) {
        // #region agent log
        agentLog({
          runId: process.env.DEBUG_RUN_ID ?? "pre-fix",
          hypothesisId: "C",
          location: "src/server.ts:fetch",
          message: "request handled",
          data: {
            path,
            method: request.method,
            status: finalResponse.status,
            durationMs: Date.now() - started,
            requestCount,
            userAgent: request.headers.get("user-agent")?.slice(0, 120) ?? null,
          },
        });
        // #endregion
      }

      return finalResponse;
    } catch (error) {
      // #region agent log
      agentLog({
        runId: process.env.DEBUG_RUN_ID ?? "pre-fix",
        hypothesisId: "D",
        location: "src/server.ts:fetch",
        message: "request failed",
        data: {
          path,
          method: request.method,
          durationMs: Date.now() - started,
          error: error instanceof Error ? error.message : String(error),
        },
      });
      // #endregion
      console.error(error);
      return htmlResponse(renderErrorPage(), 500);
    }
  },
};
