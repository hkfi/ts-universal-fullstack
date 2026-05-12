export type CreateTRPCContextOptions = {
  headers?: Headers
}

export async function createTRPCContext(options: CreateTRPCContextOptions = {}) {
  return {
    headers: options.headers ?? new Headers(),
  }
}

export type TRPCContext = Awaited<ReturnType<typeof createTRPCContext>>
