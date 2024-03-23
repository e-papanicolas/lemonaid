import { Hono } from 'hono'
import { logger } from './utils/logger'
import { db } from '../database/db'
import { users } from '../database/schema'

const app = new Hono()

app.get('/', async (c) => {
    logger.log({
        level: 'info',
        message: 'request received',
        requestPath: c.req.path,
        requestMethod: c.req.method,
        requestHeader: c.req.header(),
        requestBody: await c.req.parseBody(),
    })

    const allUsers = await db.select().from(users)
    const user = allUsers[0]

    console.log(allUsers)

    return c.text(`Hello ${user.name}!`)
})

export default app
