import {Request, Response, NextFunction} from 'express'

import { Science, Technology } from './model'

export const science = async (req : Request, res : Response, next : NextFunction) => {
    try {
        return res.status(200).json( await Science() )
    } catch (error) {
        return console.log(res.status(401).json(error))
    }
    
}


export const technology = async (req : Request, res : Response, next : NextFunction) => {
    try {
        return res.status(200).json( await Technology() )
    } catch (error) {
        return console.log(res.status(401).json(error))
    }
}


