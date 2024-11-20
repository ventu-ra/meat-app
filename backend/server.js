"use strict";
exports.__esModule = true;

const express = require('express')

const app = express()

var authz_1 = require("./authz");
var auth_1 = require("./auth");
var jsonServer = require("json-server");
var fs = require("fs");
var https = require("https");
var PORT = 3001;
var server = jsonServer.create();
var router = jsonServer.router("db.json");
var middleware = jsonServer.defaults();
// Set default middleware (logger, static, cors and no-cache)
server.use(middleware);
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
// middleware para login
server.post("/login", auth_1.handleAuthentication);
server.use("/orders", authz_1.handleAuthorization);
// Use default router
server.use(router);
// var options = {
//     cert: fs.readFileSync("./keys/cert.pem"),
//     key: fs.readFileSync("./keys/key.pem")
// };
// https.createServer({}, server).listen(PORT, function () {
//     console.log("JSON Server is running https://localhost:" + PORT);
// });


app.use(middleware)
app.use(jsonServer.bodyParser);
app.post("/login", auth_1.handleAuthentication);
app.use("/orders", authz_1.handleAuthorization);
app.use(router);

app.listen(PORT, () => {
    console.log(`JSON Server is running http://localhost:${PORT}`)
})
