const tmi = require("tmi.js");
const config = require("./config");
const exec = require("child_process").exec;

let client = new tmi.client(config);

client.on("message", readMessage);

client.on("connected", connectionCheck);

client.connect();

let arrayToSend = [];

function connectionCheck(address, port) {
  console.log(`connected to ${address}:${port}`);
}

function readMessage(target, context, message) {
  let command = message.toUpperCase();

  if (config.keyMap.includes(command)) {
    let command = message.toUpperCase();
    arrayToSend.push(command);
    if (arrayToSend.length === 2) {
      exec("key.py " + arrayToSend[0] + " " + arrayToSend[1]);
      console.log(arrayToSend);
      arrayToSend = [];
    }
  }
}
