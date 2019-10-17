const express = require("express");

const app = express();

const logmiddleaware = (req, res, next) => {
  console.log("midware");
  // para que nção bloqueie a chamada de nova ação
  return next();
};

// Todas as coisas vao passar por esse use
app.use(logmiddleaware);

app.get("/", logmiddleaware, (req, res) => {
  console.log("Req:");
  console.log(req);
  console.log("Res:");
  console.log(res);
  return res.send("res");
});

app.get("/variavel", (req, res) => {
  return res.send(`Bem vindo ${req.query.name}`);
});

app.get("/json", (req, res) => {
  return res.json({
    mensagem: `Bem vindo ${req.query.name}`
  });
});

app.listen(4000);
