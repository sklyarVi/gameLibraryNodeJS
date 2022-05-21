import express, { json, Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import limit from 'express-rate-limit'
import dataNames from 'src/data/users.json'
import dataGames from 'src/data/games.json'
import dataReviews from 'src/data/reviews.json'
import { logger } from 'src/logger'
import { TServer } from 'src/types/server.types'
import config from 'src/config'
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
    server.get('/users', (req: Request, res: Response) => {
        res.json(dataNames)
    })

    server.get('/user/:id', (req: Request, res: Response) => {
        let found = false
        dataNames.users.forEach((element) => {
            if (element.id.toString() === req.params.id) {
                res.json(element)
                found = true
            }
        })

        if (!found) {
            res.send('Provided user id is invalid!')
        }
    })
    // USERS - END

    // GAMES - START
    // (READ) GET
    //GET ALL
    server.get('/games', (req: Request, res: Response) => {
        // res.setHeader('Content-Type', 'application/json')
        // res.send(JSON.stringify(dataGames))
        res.json(dataGames.games)
    })
    //GET ONE
    server.get('/game/:id', (req: Request, res: Response) => {
        let found = false
        dataGames.games.forEach((element) => {
            if (element.id.toString() === req.params.id) {
                found = true
                res.json(element)
            }
        })

        if (!found) {
            res.send('Provided game id is invalid!')
        }
    })
    // END --> (READ) GET

    // (CREATE) PUT/POST
    server.post('/game/post', (req: Request, res: Response) => {
        const gameAdd = req.body
        let filtres = dataGames.games.filter((game) => game.id == gameAdd.id)

        if (filtres.length == 1) {
            console.log('xD')
            res.send('Provided game ID is occupied!')
        } else if (filtres.length == 0) {
            dataGames.games.push(gameAdd)
            res.json(gameAdd)
            console.log(gameAdd)
        }
    })
    // END --> (CREATE) PUT/POST

    // (DELETE) DEL
    server.delete('/game/del/:id', (req: Request, res: Response) => {
        const { id } = req.params
        //let mY = parseInt(id) - 1;
        const deleted = dataGames.games.find(
            (game) => game.id.toString() === id,
        )

        if (deleted) {
            //delete dataGames.games[mY];
            dataGames.games = dataGames.games.filter(
                (game) => game.id.toString() !== id,
            )
            res.json(deleted)
        } else {
            res.send('Provided game id is invalid!')
        }
        //console.log(deleted);
    })
    // END --> (DELETE) DEL

    // UPDATE (PUT)
    server.put('/game/update/:id', (req: Request, res: Response) => {
        const gameUpdate = req.body
        const { id } = req.params
        const myID = parseInt(id)
        gameUpdate.id = parseInt(id)

        let index = dataGames.games.findIndex((item) => item.id === myID)
        console.log(id, index)

        if (index == undefined || index <= -1) {
            res.send('Provided game ID is occupied!')
        } else {
            console.log(dataGames.games[index])
            dataGames.games[index] = gameUpdate
            res.json(gameUpdate)

            console.log(dataGames.games[index])
        }
    })
    // END --> UPDATE (POST)
    // GAMES - END

    // REVIEWS - START
    server.get('/reviews', (req: Request, res: Response) => {
        res.json(dataReviews)
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

// {
//     "id": 1,
//     "title": "Counter-Strike Global Offensive",
//     "genre": "Action",
//     "released": 2012,
//     "ranking": 4
// }
