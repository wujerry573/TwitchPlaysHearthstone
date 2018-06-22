const tmi = require("tmi.js");
const config = require("./config");
const exec = require("child_process").exec;

let client = new tmi.client(config.config);

client.on("message", readMessage);

client.on("connected", connectionCheck);

client.connect();

function connectionCheck(address, port) {
  console.log(`connected to ${address}:${port}`);
}

function readMessage(target, context, message) {
  let command = message.toUpperCase();
  if (config.keyMap.includes(command)) {
    if (config.config.os === "windows") {
      exec("key.py " + command);
    } else {
      exec("python3 key.py " + command);
    }
    console.log(command);
  }
}
