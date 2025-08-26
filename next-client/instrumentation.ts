export async function register() {
  console.log("[Instrumentation] Register called (server start)");
}

export async function onRequestStart(request: Request) {
  console.log(`[Instrumentation] Request started: ${request.url}`);
  return {
    startTime: Date.now(),
  };
}

export async function onRequestEnd(request: Request, response: Response, context: any) {
  const duration = Date.now() - context.startTime;
  console.log(`[Instrumentation] Request ended: ${request.url} (${duration}ms)`);
}

export async function onBeforeShutdown() {
  console.log("[Instrumentation] Server shutting down...");
}


export async function onRequestError(err: any, request: Request, context: any) {
    console.error(`[Instrumentation] Request error: ${request.url}`, err);
}