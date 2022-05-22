import { Request, Response } from 'express'

import dataGames from 'src/data/games.json'

export const readGames = (req: Request, res: Response) => {
    res.json(dataGames.games)
}

export const readGame = (req: Request, res: Response) => {
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
}

export const addGame = (req: Request, res: Response) => {
    const gameAdd = req.body
    const filtres = dataGames.games.filter((game) => game.id == gameAdd.id)

    if (filtres.length == 1) {
        console.log('xD')
        res.send('Provided game id is occupied!')
    } else if (filtres.length == 0) {
        dataGames.games.push(gameAdd)
        res.json(gameAdd)
    }
}

export const updateGame = (req: Request, res: Response) => {
    const gameUpdate = req.body
    const { id } = req.params
    const myID = parseInt(id)
    gameUpdate.id = parseInt(id)

    const index = dataGames.games.findIndex((item) => item.id === myID)

    if (index == undefined || index <= -1) {
        res.send('Provided game id is occupied!')
    } else {
        dataGames.games[index] = gameUpdate
        res.json(gameUpdate)
    }
}

export const deleteGame = (req: Request, res: Response) => {
    const { id } = req.params
    const deleted = dataGames.games.find((game) => game.id.toString() === id)

    if (deleted) {
        dataGames.games = dataGames.games.filter(
            (game) => game.id.toString() !== id,
        )
        res.json(deleted)
    } else {
        res.send('Provided game id is invalid!')
    }
}
