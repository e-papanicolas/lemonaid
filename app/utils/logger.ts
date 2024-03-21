import { createLogger, format, transports } from 'winston'

const LOG_DIR = process.env.LOG_DIR || './logs'

export const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    defaultMeta: { service: 'MAIN-LOGGER' },
    transports: [
        //
        // - Write to all logs with level `info` and below to `lemonaid-combined.log`.
        // - Write all logs error (and below) to `lemonaid-error.log`.
        //
        new transports.File({ filename: `${LOG_DIR}/MAIN-LOGGER-error.log`, level: 'error' }),
        new transports.File({ filename: `${LOG_DIR}/MAIN-LOGGER-combined.log` }),
    ],
})

//
// If we're not in production then **ALSO** log to the `console`
// with the colorized simple format.
//
if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new transports.Console({
            format: format.combine(format.colorize(), format.simple(), format.prettyPrint()),
        })
    )
}
