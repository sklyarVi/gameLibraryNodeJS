import express, { json, Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import limit from 'express-rate-limit'

import dataGames from 'src/data/games.json'
import dataReviews from 'src/data/reviews.json'
import { logger } from 'src/logger'
import { TServer } from 'src/types/server.types'
import config from 'src/config'
import {loginUser,readUsers, readUser, addUser, updateUser, deleteUser} from "src/routes/users";
import {readGames, readGame, addGame, updateGame, deleteGame} from "src/routes/games";
import {readReviews, readReview, addReview, updateReview, deleteReview} from "src/routes/reviews";
// import dataRegister from 'data/register.json'

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
    server.get('/users', readUsers)
    server.get('/user/:id', readUser)
    server.get('/users/login', loginUser)
    server.post('/user/post', addUser)
    server.delete('/user/del/:id', deleteUser)
    server.put('/user/update/:id', updateUser)
    // USERS - END

    // GAMES - START
    server.get('/games', readGames)
    server.get('/game/:id', readGame)
    server.post('/game/post', addGame)
    server.put('/game/update/:id', updateGame)
    server.delete('/game/del/:id', deleteGame)
    // GAMES - END

    // REVIEWS - START
    server.get('/reviews', readGames)
    server.get('/review/:id', readGame)
    server.post('/review/post', addGame)
    server.put('/review/update/:id', updateGame)
    server.delete('/review/del/:id', deleteGame)
    // REVIEWS - END

    server.listen(port, () => {
        logger.info(`Server for ${config.name} ready at port ${port}`)
    })
}

// {
//     "id": 1,
//     "title": "Counter-Strike Global Offensive",
//     "genre": "Action",
//     "released": 2012,
//     "ranking": 4
// }