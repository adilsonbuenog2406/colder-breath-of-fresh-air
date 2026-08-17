/** Safe CDN/browser caching for public HTML pages without personalized data. */
export const HTML_PUBLIC_CACHE_HEADERS: Record<string, string> = {
  "Cache-Control": "public, max-age=0, s-maxage=60, stale-while-revalidate=300",
  "CDN-Cache-Control": "public, max-age=60, stale-while-revalidate=300",
};

/** Keep no-store for error pages and non-public HTML. */
export const HTML_NO_CACHE_HEADERS: Record<string, string> = {
  "Cache-Control": "no-cache, no-store, must-revalidate",
  Pragma: "no-cache",
  Expires: "0",
  "CDN-Cache-Control": "no-store",
};

export function withHtmlPublicCache(response: Response): Response {
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) return response;

  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(HTML_PUBLIC_CACHE_HEADERS)) {
    headers.set(key, value);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

/** @deprecated Prefer withHtmlPublicCache for public SSR pages. */
export function withHtmlNoCache(response: Response): Response {
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) return response;

  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(HTML_NO_CACHE_HEADERS)) {
    headers.set(key, value);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export function htmlResponse(body: string, status = 200): Response {
  const cacheHeaders = status >= 400 ? HTML_NO_CACHE_HEADERS : HTML_PUBLIC_CACHE_HEADERS;
  return new Response(body, {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      ...cacheHeaders,
    },
  });
}
