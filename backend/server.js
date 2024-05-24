const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const verifyToken = require("./middleware/VerifyToken");

const dotenv = require("dotenv").config();

const app = express();
var cors = require('cors')

const port = process.env.PORT;

app.use(cors())
app.use(express.json());
app.use("/movie", require("./routes/MovieRoutes"));
app.use("/signin", require("./routes/SignInRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})