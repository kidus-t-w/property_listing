import express from "express";
import { userRouter } from "./routes";
import {connect, isAlive} from './utils/db'


async function setup() {
    const app = express();
    await connect();

    app.get('/stats', (req, res) => {
        const value = isAlive()
        res.json({ dbConnection : value})
    })
    
    app.use('/users', userRouter)

    return app
}   


export default setup;
