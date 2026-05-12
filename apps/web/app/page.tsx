import { HomeScreen } from '@starter/app/home'
import { appRouter, createTRPCContext } from '@starter/api'

export default async function Page() {
  const caller = appRouter.createCaller(await createTRPCContext())
  const status = await caller.health.status()

  return <HomeScreen runtime="web" status={status} />
}
