const express = require("express");
const route = express.Router();
const os = require("os");
var osu = require("node-os-utils");
var cpu = osu.cpu;



// cpu.free().then((info) => {
//   console.log(info);
// });
route.get("/", (req, res) => {
  cpu.free().then((info) => {
    console.log(info);
    res.status(200).send(info.toString());
  });
});

// console.log(os.cpus());
// console.log(os.totalmem());
// console.log(os.freemem())
module.exports = route;