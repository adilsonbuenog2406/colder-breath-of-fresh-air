import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/health")({
  server: {
    handlers: {
      GET: () =>
        new Response("ok", {
          status: 200,
          headers: { "cache-control": "no-store" },
        }),
    },
  },
});
