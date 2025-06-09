import express from 'express';

export const globalMiddleware = {
    jsonParser: express.json()
}

export const apiMiddleware = {
    // note: add api middlewares here
}
export const webMiddleware = {
    // note: add web middlewares here
}