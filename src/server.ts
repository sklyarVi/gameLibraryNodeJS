import express, { json, Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import limit from 'express-rate-limit'
import dataNames from 'src/data/users.json'
import dataGames from 'src/data/games.json'
import dataReviews from 'src/data/reviews.json'

// import dataRegister from 'data/register.json'

import { logger } from 'src/logger'
import { TServer } from 'src/types/server.types'
import config from 'src/config'
import { parse } from 'dotenv'
import { List, String } from 'lodash'

const LIMITER_TIME = 15 * 60 * 1000
const LIMITER_MAX = 250

export const startServer = ({ port, corsOptions }: TServer) => {
    const server = express()
    server.use(helmet())
    server.use(cors(corsOptions || {}))
    server.disable('x-powered-by')
    server.use(limit({ windowMs: LIMITER_TIME, max: LIMITER_MAX }))

    server.use(express.json())
    server.use(express.urlencoded({ extended: true }))

    logger.info(`Server will be started at port ${port}`)
    logger.info('Starting server...')

    server.get('/', (req, res) => {
        res.send('<h1> Welcome to our Game Library </h1>')
    })

    // USERS - START
    server.get('/users', (req: Request, res: Response) => {
        res.json(dataNames);
    })

    server.get('/user/:id', (req: Request, res: Response) => {
        let found = false
        dataNames.users.forEach((element) => {
            if (element.id.toString() === req.params.id) {
                res.json(element);
                found = true;
            }
        })
        if (!found) {
            res.send('Provided user id is invalid!')
        }
    })
    // USERS - END

    // GAMES - START
    server.get('/games', (req: Request, res: Response) => {
        res.json(dataGames);
    })

    server.get('/game/:id', (req: Request, res: Response) => {
        let found = false
        dataGames.games.forEach((element) => {
            if (element.id.toString() === req.params.id) {
                found = true;
                res.json(element);
            }
        })
        if (!found) {
            res.send('Provided game id is invalid!')
        }
    })
    // GAMES - END

    // REVIEWS - START
    server.get('/reviews', (req: Request, res: Response) => {
        res.json(dataReviews);
    })

    server.get('/review/:id', (req: Request, res: Response) => {
        let found = false
        dataReviews.reviews.forEach((element) => {
            if (element.id.toString() === req.params.id) {
                found = true
                res.json(element)
            }
        })
        if (!found) {
            res.send('Provided review id is invalid!')
        }
    })
    // REVIEWS - END

    server.listen(port, () => {
        logger.info(`Server for ${config.name} ready at port ${port}`)
    })
}
