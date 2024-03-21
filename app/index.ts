import { Hono } from 'hono'
import { logger } from './utils/logger'

const app = new Hono()

app.get('/', (c) => {
    logger.log({
        level: 'info',
        message: 'From GET /',
        request: c.req,
    })

    return c.text('Hello world!')
})

export default app
