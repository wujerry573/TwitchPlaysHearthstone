const tmi = require("tmi.js");
const config = require("./config");
const exec = require("child_process").exec;

let client = new tmi.client(config.config);

//default mode is anarchy, or false. true is democray
let government = true;

client.connect();
client.on("connected", connectionCheck);
client.on("whisper", rtv);

client.on("message", modeChecker);

// if (government) {
//   console.log(government);
//   client.on("message", democracyMode);
// } else {
//   console.log("in anarchy", government);
//   console.log(government);
//   client.on("message", anarchyMode);
// }

function connectionCheck(address, port) {
  console.log(`connection successful to ${address}:${port}`);
}

async function rtv(from, userstate, message, self) {
  if (self) return;
  let target = "#darwinnn_";
  if (userstate.username === "darwinnn_") {
    client.say(target, "Vote for anarchy or democracy!!!");
    client.say(target, "Vote for anarchy or democracy!!!");
  }
  for (let key in config.votes) {
    config.votes[key] = 0;
  }
  console.log(config.votes);
  await new Promise(resolve => setTimeout(resolve, 30000));
  if (government && config.voteOptions.ANARCHY > config.voteOptions.DEMOCRACY) {
    client.say(target, "Anarchy reigns!!!");
    government = !government;
    console.log(government);
    console.log("option 1");
    return;
  }
  if (government && config.voteOptions.ANARCHY < config.voteOptions.DEMOCRACY) {
    client.say(target, "Democracy rules!!!");
    console.log("option 2");
    console.log(government);
    return;
  }
  if (
    !government &&
    config.voteOptions.ANARCHY < config.voteOptions.DEMOCRACY
  ) {
    client.say(target, "Democracy rules!!!");
    government = !government;
    console.log("option 3");
    console.log(government);
    return;
  }
  if (
    !government &&
    config.voteOptions.ANARCHY > config.voteOptions.DEMOCRACY
  ) {
    client.say(target, "Anarchy reigns!!!");
    console.log("option 4");
    console.log(government);
    return;
  }
  config.voteOptions.ANARCHY = 0;
  config.voteOptions.DEMOCRACY = 0;
}

function anarchyMode(target, context, message, self) {
  if (self) return;
  console.log("in anarchy");
  let command = message.toUpperCase();
  if (command === "ANARCHY") {
    config.voteOptions.ANARCHY++;
  }
  if (command === "DEMOCRACY") {
    config.voteOptions.DEMOCRACY++;
  }

  if (config.keyMap.includes(command)) {
    if (config.config.os === "windows") {
      exec("key.py " + command);
    } else {
      exec("python3 key.py " + command);
    }
  }
}

function democracyMode(target, context, message, self) {
  if (self) return;
  console.log("in democracy");
  let command = message.toUpperCase();
  let voteCounter = 0;
  if (command === "ANARCHY") {
    config.voteOptions.ANARCHY++;
  }
  if (command === "DEMOCRACY") {
    config.voteOptions.DEMOCRACY++;
  }
  if (config.keyMap.includes(command)) {
    config.votes[command]++;
    voteCounter++;
    if (voteCounter === 20) {
      let winning = countVote();
      if (config.config.os === "windows") {
        console.log(winning);
        exec("key.py " + winning[0]);
        exec("key.py " + winning[1]);
      } else {
        exec("python3 key.py " + winning[0]);
        exec("python3 key.py " + winning[1]);
      }
      voteCounter = 0;
    }
  }
}

function countVote() {
  let highest1 = 0;
  let highest2 = 0;
  let current = 0;
  for (let key in config.votes) {
    config.votes[key] = current;
    if (current > highest1) {
      highest1 = current;
    }
  }
  for (let key in config.votes) {
    config.votes[key] = current;
    if (current > highest2) {
      highest2 = current;
    }
    if (highest2 > highest1) {
      let temp = highest1;
      highest1 = highest2;
      highest2 = highest1;
    }
  }
  return [highest1, highest2];
}

function modeChecker() {
  console.log("in modechecker ", government);
  if (government) {
    client.on("message", democracyMode);
  } else {
    client.on("message", anarchyMode);
  }
}
