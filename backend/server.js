const express = require("express");
const verifyToken = require("./middleware/VerifyToken");

const dotenv = require("dotenv").config();

const app = express();
var cors = require('cors')

const port = process.env.PORT;

const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));
app.use(express.json());
app.use("/movie", verifyToken, require("./routes/MovieRoutes"));
app.use("/signin", require("./routes/SignInRoutes"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})