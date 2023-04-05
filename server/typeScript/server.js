"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
//new
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes_1 = require("./routes/routes");
//endnew
var app = express();
exports.app = app;
//new
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
}));
app.use(cookieParser());
app.use('/api', routes_1.default);
//endnew
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.send("Hello world!");
});
var server = app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
exports.server = server;
function closeServer() {
    server.close();
}
exports.closeServer = closeServer;
//# sourceMappingURL=server.js.map