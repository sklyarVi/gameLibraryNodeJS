import express, {Request, Response} from "express";

import dataNames from 'src/data/users.json';

// USERS - START
export const readUsers = (req: Request, res: Response) => {
    res.json(dataNames.users);
}

//TODO
const getIdFromToken = (token: string) => {
    //npm jwt
    return 1;
}

export const loginUser = (req: Request, res: Response) => {
    const token = req.headers?.authorization
    const id = getIdFromToken(token as string);

    const user = dataNames.users.filter(user => user.id === id);
    if(user) {
        res.status(200);
        res.json({...user?.[0], password: "***********"});
    } else {
        res.status(401);
        res.send();
    }
}

export const readUser = (req: Request, res: Response) => {
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
}

export const addUser = (req: Request, res: Response) => {
    const userAdd = req.body
    let filtres = dataNames.users.filter((user) => user.id == userAdd.id)

    if (filtres.length == 1) {
        console.log('xD')
        res.send('Provided game ID is occupied!')
    } else if (filtres.length == 0) {
        dataNames.users.push(userAdd)
        res.json(userAdd)
    }
}

export const updateUser = (req: Request, res: Response) => {
    const gameUpdate = req.body
    const { id } = req.params
    const myID = parseInt(id)
    gameUpdate.id = parseInt(id)

    let index = dataNames.users.findIndex((item) => item.id === myID)
    console.log(id, index)

    if (index == undefined || index <= -1) {
        res.send('Provided game ID is occupied!')
    } else {
        console.log(dataNames.users[index])
        dataNames.users[index] = gameUpdate
        res.json(gameUpdate)

        console.log(dataNames.users[index])
    }
}

export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params
    //let mY = parseInt(id) - 1;
    const deleted = dataNames.users.find(
        (user) => user.id.toString() === id,
    )

    if (deleted) {
        //delete dataGames.games[mY];
        dataNames.users = dataNames.users.filter(
            (user) => user.id.toString() !== id,
        )
        res.json(deleted)
    } else {
        res.send('Provided game id is invalid!')
    }
    //console.log(deleted);
}
