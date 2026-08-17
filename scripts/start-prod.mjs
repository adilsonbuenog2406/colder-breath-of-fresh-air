import { appendFileSync, existsSync, readdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEBUG_LOG =
  process.env.DEBUG_LOG_PATH ?? resolve(__dirname, "../../.cursor/debug-6c2070.log");

function agentLog(payload) {
  const line = JSON.stringify({
    sessionId: "6c2070",
    timestamp: Date.now(),
    ...payload,
  });
  // #region agent log
  console.log(`[debug-6c2070] ${line}`);
  try {
    appendFileSync(DEBUG_LOG, `${line}\n`);
  } catch {
    // prod container may not have .cursor path
  }
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

const port = process.env.PORT ?? "(unset)";
const host = process.env.HOST ?? process.env.NITRO_HOST ?? "(unset)";

// #region agent log
agentLog({
  runId: process.env.DEBUG_RUN_ID ?? "pre-fix",
  hypothesisId: "A",
  location: "scripts/start-prod.mjs:startup",
  message: "process env before server import",
  data: {
    pid: process.pid,
    ppid: process.ppid,
    port,
    host,
    nodeEnv: process.env.NODE_ENV ?? "(unset)",
    argv: process.argv.slice(0, 3),
  },
});
// #endregion

for (const signal of ["SIGTERM", "SIGINT", "SIGHUP"]) {
  process.on(signal, () => {
    // #region agent log
    agentLog({
      runId: process.env.DEBUG_RUN_ID ?? "pre-fix",
      hypothesisId: "B",
      location: "scripts/start-prod.mjs:signal",
      message: `received ${signal}`,
      data: { pid: process.pid, uptimeSec: Math.round(process.uptime()) },
    });
    // #endregion
  });
}

await import("../.output/server/index.mjs");

const assetsDir = resolve(__dirname, "../.output/public/assets");
const publicVideoPath = resolve(__dirname, "../.output/public/video-04.mp4");
const sourceVideoPath = resolve(__dirname, "../public/video-04.mp4");
// #region agent log
agentLog({
  runId: process.env.DEBUG_RUN_ID ?? "pre-fix",
  hypothesisId: "F",
  location: "scripts/start-prod.mjs:asset-manifest",
  message: "hero video on disk",
  data: {
    publicVideoInOutput: existsSync(publicVideoPath),
    publicVideoInSource: existsSync(sourceVideoPath),
    legacyHashedAssets: existsSync(assetsDir)
      ? readdirSync(assetsDir).filter((f) => f.startsWith("video-04-"))
      : [],
  },
});
// #endregion

const probePort = Number.parseInt(process.env.PORT ?? "3000", 10);
for (const probePath of ["/health", "/meta.json", "/video-04.mp4", "/"]) {
  try {
    const res = await fetch(`http://127.0.0.1:${probePort}${probePath}`);
    const body =
      probePath === "/health" ? await res.text() : `(html ${(await res.text()).length}b)`;
    // #region agent log
    agentLog({
      runId: process.env.DEBUG_RUN_ID ?? "pre-fix",
      hypothesisId: "C",
      location: "scripts/start-prod.mjs:self-probe",
      message: "internal health probe",
      data: { probePath, probePort, status: res.status, bodyPreview: body.slice(0, 80) },
    });
    // #endregion
  } catch (error) {
    // #region agent log
    agentLog({
      runId: process.env.DEBUG_RUN_ID ?? "pre-fix",
      hypothesisId: "C",
      location: "scripts/start-prod.mjs:self-probe",
      message: "internal health probe failed",
      data: {
        probePath,
        probePort,
        error: error instanceof Error ? error.message : String(error),
      },
    });
    // #endregion
  }
}
