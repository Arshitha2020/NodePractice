const http = require("http");
const fs = require("fs");
const url = require("url");

const data = fs.readFileSync(`${__dirname}/file1.txt`, "utf-8");

http
  .createServer(function (req, res) {
    const { query, pathName } = url.parse(req.url, true);
    //res.write(query)
    if (pathName === "/home") {
      res.writeHead(200, { "Content-type": "text/html" });
      res.write(data);
      res.end();
    } else if (pathName === "/") {
      res.writeHead(200, { "Content-type": "text/html" });
      res.end("Hello");
    }
  })
  .listen(3000);

console.log("You ran");
//console.log(name);
const fun = function (name) {
  return name;
};

const funny = (name) => {
  return name;
};

console.log(funny("joe"));
