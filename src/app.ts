import express from 'express';
import api from '@/routes/api'
import web from '@/routes/web';
import { globalMiddleware } from '@/middlewares/middleware';

const app = express();

Object.values(globalMiddleware).forEach(
    item => app.use(item)
)

// Add routes here
app.use('/', web);
app.use('/api', api);

// Example: applying custom middleware(s) on specific routes
// Use spread operator (...) when passing multiple middleware functions
// app.use('/someUrl', ...customMiddlewareArray, router); for objects: ...Object.values(customMiddleware)

export default app;