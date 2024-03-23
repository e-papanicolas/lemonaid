import type { Config } from 'drizzle-kit'

const env = process.env.NODE_ENV

export const connectionStringFromEnv = env === 'development' ? process.env.DEV_DB_URL : process.env.PROD_DB_URL

export default {
    schema: './database/schema',
    out: './database/migrations',
    driver: 'pg',
    dbCredentials: {
        connectionString: connectionStringFromEnv || '',
    },
} satisfies Config
