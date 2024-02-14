import express from "express";
import { config } from "./Config/config.js";
import { connectToDB } from "./Database/db.js";

const app = express();
const port = config.server.port;

// Middlewares
connectToDB();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
