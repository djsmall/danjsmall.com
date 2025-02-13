const http = require("http");

http
  .createServer(function (req, res) {
    res.write(
      "<html><head><meta charset='utf-8' /></head><body><p>¯\\_(ツ)_/¯ Nothing here yet, stay tuned!</p></body></html>"
    );
    res.end();
  })
  .listen(3000);

console.log("Server started on port 3000");
