import express, {Request, Response} from 'express';

const api = express.Router();

api.get('/', (_req: Request, res: Response) => {
    res.json({'message': 'Start building APIs'});
})

// add api routes here

export default api;