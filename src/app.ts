import express from 'express';
import api from './routes/api'
import web from './routes/web';

const app = express();
app.use(express.json());

// Add routes here
app.use('/', web);
app.use('/api', api);

// Add middleware, error handlers here

export default app;