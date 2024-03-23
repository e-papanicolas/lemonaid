import { index, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const users = pgTable(
    'users',
    {
        id: serial('id').primaryKey(),
        created_at: timestamp('created_at'),
        name: text('name'),
    },
    (users) => ({
        nameIdx: index('name_idx').on(users.name),
    })
)
