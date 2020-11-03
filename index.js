const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3210;

app.use(bodyParser.json());
app.use(cors());

app.use("/blog", require("./src/routers/blogs"));

app.listen(port, () => {
  console.log(`Running server on port ${port}`);
});
