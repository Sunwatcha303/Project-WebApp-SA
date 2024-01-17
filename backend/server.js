const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();
var cors = require('cors')

const port = process.env.Port || 5000;

app.use(cors())
app.use(express.json());
app.use("/movie", require("./routes/movieRoutes"));
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})