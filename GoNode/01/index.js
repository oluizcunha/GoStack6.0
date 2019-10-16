const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("Req:");
  console.log(req);
  console.log("Res:");
  console.log(res);
  return res.send("res");
});

app.listen(4000);
