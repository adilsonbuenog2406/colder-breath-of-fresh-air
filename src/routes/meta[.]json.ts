import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/meta.json")({
  server: {
    handlers: {
      GET: () =>
        new Response(
          JSON.stringify({
            status: "ok",
            name: "colder-breath-of-fresh-air",
          }),
          {
            status: 200,
            headers: {
              "content-type": "application/json",
              "cache-control": "no-store",
            },
          },
        ),
    },
  },
});
