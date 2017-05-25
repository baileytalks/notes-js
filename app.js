"use-strict";

var httpServer = require("http-server");
var path = require("path");

var server = httpServer.createServer({root: __dirname, cache: 1});
server.listen(3000);
