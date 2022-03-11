const http = require("http");
const fs = require("fs");
const url = require("url");

fs.readFile("filee.txt", "utf-8", (err, data) => {
  const data1 = data;
  console.log(data1);
});

const server = http.createServer(function (req, res) {
  const { query, pathName } = url.parse(req.url, true);
  //res.write(query)

  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("data");
});
server.listen(8090, () => {
  console.log("Listenening to requests on port 8080"); // we started to listen to incoming requests on local host IP and port
});

console.log("You ran");
//console.log(name);
const fun = function (name) {
  return name;
};

const funny = (name) => {
  return name;
};

console.log(funny("joe"));
