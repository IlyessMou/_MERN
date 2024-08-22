const express = require("express");
const app = express();
const port = 5000;
const cors=require("cors")

require('dotenv').config();
require("./config/mongoose.config")

app.use(express.json(), express.urlencoded({ extended: true }),cors());


const AuthorsRoutes = require("./routes/routes.author")
AuthorsRoutes(app)

app.listen(port, () => console.log(`Listening on port: ${port}`));
