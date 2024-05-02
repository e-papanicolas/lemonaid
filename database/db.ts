import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import validateEnvVar from '../app/utils/validateEnvVar'
import { connectionStringFromEnv as connectionString } from '../drizzle.config'
import * as schema from './schema'

const verifiedConnectionString = validateEnvVar(connectionString, 'connection string')
export const client = postgres(verifiedConnectionString, { prepare: false })
export const db = drizzle(client, { schema })
