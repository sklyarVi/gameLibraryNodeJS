import express, {Request, Response} from "express";

import dataNames from 'src/data/users.json'

// USERS - START
export const redUsers = (req: Request, res: Response) => {
    res.json(dataNames);
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