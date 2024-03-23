import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'
import { connectionStringFromEnv as connectionString } from '../drizzle.config'

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString || '', { prepare: false })
export const db = drizzle(client, { schema })
