import { handleAuthorization } from "./authz";
import { handleAuthentication } from "./auth";
import * as jsonServer from "json-server";
import { Express } from "express";

import * as fs from "fs";
import * as https from "https";

const PORT: number = 3001;

const server: Express = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();

// Set default middleware (logger, static, cors and no-cache)
server.use(middleware);
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

// middleware para login
server.post("/login", handleAuthentication);
server.use("/orders", handleAuthorization);

// Use default router
server.use(router);

const options = {
  cert: fs.readFileSync("./keys/cert.pem"),
  key: fs.readFileSync("./keys/key.pem"),
};

https.createServer(options, server).listen(PORT, () => {
  console.log(`JSON Server is running https://localhost:${PORT}`);
});
