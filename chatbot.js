const tmi = require("tmi.js");
const config = require("./config");
const exec = require("child_process").exec;

let client = new tmi.client(config);

client.on("message", readChat);

client.on("connected", connectionCheck);

client.connect();

function connectionCheck(address, port) {
  console.log(`connected to ${address}:${port}`);
}

let rtv = setTimeout(() => {}, 6000000);

function sendChat(target, context, message) {
  client.say(target, message);
}

function readChat(target, context, message) {
  let command = message.toUpperCase();
  if (config.keyMap.includes(command)) {
    if (config.os === "windows") {
      exec("key.py " + command);
    } else {
      exec("python3 key.py " + command);
    }
    console.log(command);
  }
}
