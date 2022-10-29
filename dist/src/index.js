"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//Configuration of .env file
dotenv_1.default.config();
//Create an Express APP
const app = (0, express_1.default)();
const port = process.env.PORT || 9000;
// Define the first route
app.get('/', (req, res) => {
    //Send Hello World
    res.send('Welcome to APP Express + TS + Nodemon + Jest + Swagger + Mongoose');
});
// Define the second route
app.get('/hello', (req, res) => {
    //Send Hello World
    res.send('Welcome to GET Route: Hello!');
});
// Execute the APP and Listen Request to PORT
app.listen(port, () => {
    console.log(`Express Server: Running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map