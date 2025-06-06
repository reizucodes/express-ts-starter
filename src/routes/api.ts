import express, {Request, Response} from 'express';
import SampleController from '@/controllers/SampleController';

const api = express.Router();

api.get('/', (_req: Request, res: Response) => {
    res.json({'message': 'Start building APIs'});
})

api.get('/sample', SampleController.index)


export default api;