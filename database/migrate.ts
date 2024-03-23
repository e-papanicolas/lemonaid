import { migrate } from 'drizzle-orm/postgres-js/migrator'
import { db, client } from './db'

// This will run migrations on the database, skipping the ones already applied
await migrate(db, { migrationsFolder: './database/migrations' })

// Don't forget to close the connection, otherwise the script will hang
await client.end()
