const express = require("express");
const verifyToken = require("./middleware/VerifyToken");
const verifyApiKey = require('./middleware/VerifyApiKey');

const dotenv = require("dotenv").config();

const app = express();
var cors = require('cors')

const port = process.env.PORT;
const host = process.env.HOST;

const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));
app.use(express.json());
app.use("/health", require("./routes/HealthRoutes"));
app.use("/movie", verifyApiKey, verifyToken, require("./routes/MovieRoutes"));
app.use("/user", verifyApiKey, require("./routes/UserRoutes"));

app.listen(port, host, () => {
    console.log(`Server running on ${host}:${port}`);
})