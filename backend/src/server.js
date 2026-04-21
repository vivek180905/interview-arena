import express from 'express';
// import dotenv from 'dotenv';
// dotenv.config();
import {ENV} from "./lib/env.js";

const app = express();

console.log(ENV.PORT); // Accessing the PORT variable from .env
console.log(ENV.DB_URL); // Accessing the DB_URL variable from .env
app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello World!" });
});

app.listen(ENV.PORT, () => {
    console.log(`Server is running on port ${ENV.PORT}`);
}); 

