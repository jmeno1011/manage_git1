const dotenv = require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");
const PORT = 3333;
const cpu = require('./cpu');
const server = require('http').createServer()
const os = require('os-utils');
const io = require('socket.io')(server, {
    transports: ['websocket', 'polling']
  });

app.use(cors());
app.use(session({
  secret:'tlzmflt',
  resave:false,
  saveUninitialized:true
}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/cpu', cpu);

let tick = 0;
// 1. listen for socket connections
io.on('connection', client => {
  setInterval(() => {
    // 2. every second, emit a 'cpu' event to user
    os.cpuUsage(cpuPercent => {
      client.emit('cpu', {
        name: tick++,
        value: cpuPercent
      });
    });
  }, 1000);
});
app.listen(PORT, () => console.log(`${PORT}에 연결됨`));