import express, {Request, Response} from 'express';

const web = express.Router();

web.get('/', (_req: Request, res: Response) => {
    res.send('expressAPI');
})

export default web;