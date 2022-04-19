import { logger } from 'src/logger'
import { startServer } from 'src/server'
import config from 'src/config'
import express from 'express'

logger.info('Hello info!')

startServer({
    port: config.options.port,
    corsOptions: config.options.cors,
})
