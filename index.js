import express from "express";
import { config } from "./Config/config.js";
import { connectToDB } from "./Database/db.js";
import { userRouters } from "./Routes/userRoutes.js";

const app = express();
const port = config.server.port;

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

// Home
app.get('/', (req, res) => {
    res.send('Connected to Backend Successfully.')
})
// Routes
app.use('/api/v1', userRouters)
connectToDB();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
