import { createStart, createMiddleware } from "@tanstack/react-start";

import { htmlResponse } from "./lib/html-cache-headers";
import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return htmlResponse(renderErrorPage(), 500);
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));
