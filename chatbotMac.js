const tmi = require("tmi.js");
const config = require("./config");
const exec = require("child_process").exec;

let client = new tmi.client(config);

client.on("message", readMessage);

client.on("connected", connectionCheck);

client.connect();

let keyMap = [
  "FACE",
  "END",
  "HERO",
  "HP",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "H7",
  "H8",
  "H9",
  "H10",
  "B1",
  "B2",
  "B3",
  "B4",
  "B5",
  "B6",
  "B7",
  "B8",
  "B9",
  "B10",
  "B11",
  "B12",
  "B13",
  "E1",
  "E2",
  "E3",
  "E4",
  "E5",
  "E6",
  "E7",
  "E8",
  "E9",
  "E10",
  "E11",
  "E12",
  "E13"
];

let arrayToSend = [];

function connectionCheck(address, port) {
  console.log(`connected to ${address}:${port}`);
}

function readMessage(target, context, message, self) {
  if (self) {
    return;
  }

  let command = message.toUpperCase();

  if (keyMap.includes(command)) {
    let command = message.toUpperCase();
    arrayToSend.push(command);
    if (arrayToSend.length === 2) {
      exec("python3 key.py " + arrayToSend[0] + " " + arrayToSend[1]);
      console.log(arrayToSend);
      arrayToSend = [];
    }
  }
}

