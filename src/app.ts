import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

// Health check route
app.get('/', (_req: Request, res: Response) => {
    res.send('expressAPI');
});

// add routes here

export default app;