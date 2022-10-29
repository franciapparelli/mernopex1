import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

//Configuration of .env file
dotenv.config();

//Create an Express APP
const app: Express = express();
const port: number | string = process.env.PORT || 9000;

// Define the first route
app.get('/', (req: Request, res: Response) => {
    //Send Hello World
    res.send('Welcome to APP Express + TS + Nodemon + Jest + Swagger + Mongoose');
})

// Define the second route
app.get('/hello', (req: Request, res: Response) => {
    //Send Hello World
    res.send('Welcome to GET Route: Hello!');
})

// Execute the APP and Listen Request to PORT
app.listen(port, () => {
    console.log(`Express Server: Running at http://localhost:${port}`)
});