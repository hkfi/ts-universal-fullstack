import { serverEnv } from '@starter/env/server'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

type Database = ReturnType<typeof drizzle<typeof schema>>

let client: postgres.Sql | null = null
let db: Database | null = null

export function getDb() {
  if (!client) {
    client = postgres(serverEnv.DATABASE_URL, {
      max: 10,
      prepare: false,
    })
  }

  if (!db) {
    db = drizzle(client, { schema })
  }

  return db
}
