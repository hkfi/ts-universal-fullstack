import { HomeScreen } from '@starter/app/home'

export default function Index() {
  return (
    <HomeScreen
      runtime="native"
      status={{
        ok: true,
        service: 'mobile-shell',
        timestamp: new Date().toISOString(),
      }}
    />
  )
}
