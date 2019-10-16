const http = require("http");

http
  .createServer((req, res) => {
    console.log(req);
    return res.end("eai");
  })
  .listen(3000);
