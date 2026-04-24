import express from 'express';
import path from 'path';
import {ENV} from "./lib/env.js";
import { connect } from 'http2';
import { connectDB } from './lib/db.js';
import cors from 'cors';
import {serve} from "inngest/express";
import { inngest, functions } from './lib/inngest.js'; 

const app = express();
const __dirname = path.resolve();

app.use(express.json());

//here client_url is the url of the frontend application which will be making requests to this backend server. 
// By setting credentials: true, we allow cookies and other credentials to be sent along with the requests from the frontend to the backend, enabling features like authentication and session management.
app.use(cors({origin:ENV.CLIENT_URL , credentials: true}));


app.get('/health', (req, res) => {
    res.status(200).json({ message: "Hello World!" });
});
app.get('/', (req, res) => {
    res.send("Backend is running 🚀");
    // res.status(200).json({ message: "Good now" });
});

// Inngest function handler
app.use("/api/inngest", serve({client:inngest , functions}));

// make our app ready for deployment
// if (ENV.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   app.get("/{*any}", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//   });
// }

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
  } catch (error) {
    console.error("💥 Error starting the server", error);
  }
};

startServer();
