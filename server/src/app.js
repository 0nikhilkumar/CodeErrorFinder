const express = require("express");
const aiRoute = require("./routes/ai.routes.js");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello")
});

app.use("/ai", aiRoute);

module.exports = app;