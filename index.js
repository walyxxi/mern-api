const express = require("express");
const app = express();
const port = 3210;

app.use(() => {
  console.log("jalankan...");
});

app.listen(port, () => {
  console.log(`Running server on port ${port}`);
});
