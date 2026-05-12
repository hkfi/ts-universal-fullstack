import { initTRPC } from '@trpc/server'
import superjson from 'superjson'
import type { TRPCContext } from './context'

const t = initTRPC.context<TRPCContext>().create({
  transformer: superjson,
})

const startedAt = new Date().toISOString()

export const appRouter = t.router({
  health: t.router({
    status: t.procedure.query(() => ({
      ok: true,
      service: 'api',
      startedAt,
      timestamp: new Date().toISOString(),
    })),
  }),
})

export type AppRouter = typeof appRouter
