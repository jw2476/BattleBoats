"use strict";
exports.__esModule = true;
var express = require("express");
var http = require("http");
var socket_io_1 = require("socket.io");
var app = express();
var server = http.createServer(app);
var io = new socket_io_1.Server(server);
app.use(express.static("public"));
io.on("connection", function (socket) {
    console.log("Connected");
});
server.listen(process.env.PORT, function () {
    console.log("Server has started");
});
