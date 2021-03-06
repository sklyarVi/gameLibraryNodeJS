import { Request, Response } from 'express'

import dataReviews from 'src/data/reviews.json'

export const readReviews = (req: Request, res: Response) => {
    res.json(dataReviews.reviews)
}

export const readReview = (req: Request, res: Response) => {
    let found = false
    dataReviews.reviews.forEach((element) => {
        if (element.idGame.toString() === req.params.id) {
            found = true
            res.json(element)
        }
    })

    if (!found) {
        res.send('Provided review id is invalid!')
    }
}

export const addReview = (req: Request, res: Response) => {
    const revAdd = req.body
    const filtres = dataReviews.reviews.filter((rev) => rev.idGame == revAdd.id)

    if (filtres.length == 1) {
        console.log('xD')
        res.send('Provided review id is occupied!')
    } else if (filtres.length == 0) {
        dataReviews.reviews.push(revAdd)
        res.json(revAdd)
    }
}

export const updateReview = (req: Request, res: Response) => {
    const gameUpdate = req.body
    const { idGame } = req.params
    const myID = parseInt(idGame)
    gameUpdate.idGame = parseInt(idGame)

    const index = dataReviews.reviews.findIndex((item) => item.idGame === myID)

    if (index == undefined || index <= -1) {
        res.send('Provided review id is occupied!')
    } else {
        dataReviews.reviews[index] = gameUpdate
        res.json(gameUpdate)
    }
}

export const deleteReview = (req: Request, res: Response) => {
    const { id } = req.params
    const deleted = dataReviews.reviews.find(
        (rev) => rev.idGame.toString() === id,
    )

    if (deleted) {
        dataReviews.reviews = dataReviews.reviews.filter(
            (rev) => rev.idGame.toString() !== id,
        )
        res.json(deleted)
    } else {
        res.send('Provided review id is invalid!')
    }
}
