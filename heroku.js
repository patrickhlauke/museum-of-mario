"use strict";

var path = require("path"),
    auth = require("http-auth"),
    basic = auth.basic({
        realm: "Private area",
        file: path.join(__dirname,"users.htpasswd")
    }),
    server = require(path.join(__dirname,"marioserver.js"))
;

server.start({
    port: process.env.PORT || 5000,
    host: ""
},basic);
