const express = require("express");
const database = require("./database");
const cors = require("cors");
const routes = require("./routes");
const app = express();

app.use(express.json())
app.use(cors())
database();

app.use(routes);
app.listen(3000, () => console.log(`http://localhost:${3000}`))