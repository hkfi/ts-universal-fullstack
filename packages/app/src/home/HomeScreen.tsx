'use client'

import { AppButton, Card, Screen, Stack, Text, Title } from '@starter/ui'
import { Linking } from 'react-native'

type Status = {
  ok: boolean
  service: string
  timestamp: string
  startedAt?: string
}

type HomeScreenProps = {
  runtime: 'web' | 'native'
  status: Status
}

export function HomeScreen({ runtime, status }: HomeScreenProps) {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL ?? 'https://starter.localhost'

  return (
    <Screen>
      <Stack gap={24}>
        <Stack gap={10}>
          <Text tone="muted">Universal TypeScript starter</Text>
          <Title>Next, Expo, tRPC, Drizzle, Portless.</Title>
          <Text>
            This is the shared app surface from <Text weight="700">packages/app</Text>, rendered
            through React Native Web on web and React Native on mobile.
          </Text>
        </Stack>

        <Stack direction="row" gap={12} wrap>
          <AppButton
            label="Open web app"
            onPress={() => Linking.openURL(process.env.EXPO_PUBLIC_WEB_URL ?? apiUrl)}
          />
          <AppButton
            label="Open API status"
            variant="secondary"
            onPress={() => Linking.openURL(`${apiUrl}/api/trpc/health.status`)}
          />
        </Stack>

        <Stack direction="row" gap={16} wrap>
          <Card title="Runtime" value={runtime} />
          <Card title="API" value={status.ok ? status.service : 'offline'} />
          <Card title="Checked" value={new Date(status.timestamp).toLocaleTimeString()} />
        </Stack>
      </Stack>
    </Screen>
  )
}
