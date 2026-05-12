import { z } from 'zod'

const publicEnvSchema = z.object({
  EXPO_PUBLIC_API_URL: z.string().url().optional(),
  EXPO_PUBLIC_WEB_URL: z.string().url().optional(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().optional(),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional(),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORTLESS_URL: z.string().url().optional(),
})

export const publicEnv = publicEnvSchema.parse({
  EXPO_PUBLIC_API_URL: process.env.EXPO_PUBLIC_API_URL,
  EXPO_PUBLIC_WEB_URL: process.env.EXPO_PUBLIC_WEB_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  PORTLESS_URL: process.env.PORTLESS_URL,
})
