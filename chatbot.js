const tmi = require("tmi.js");
const config = require("./config");
const exec = require("child_process").exec;
const _unct = require("underscore");

let client = new tmi.client(config.config);

//default mode is anarchy, or false. true is democray
let government = true;
let voteCounter = 0;

client.connect();
client.on("connected", connectionCheck);
client.on("whisper", rtv);

client.on("message", readMessage);
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
  config.voteOptions.ANARCHY = 0;
  config.voteOptions.DEMOCRACY = 0;

  if (userstate.username === "darwinnn_") {
    client.say(target, "Vote for anarchy or democracy!!!");
    client.say(target, "Vote for anarchy or democracy!!!");
  }

  console.log("config.voteoptions: ", config.voteOptions);
  await new Promise(resolve => setTimeout(resolve, 10000));
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

async function readMessage(target, context, message, self) {
  if (self) return;
  if (!government) {
    let command = message.toUpperCase();
    if (command === "ANARCHY") {
      config.voteOptions.ANARCHY++;
      console.log("voteOptions: ", config.voteOptions);
    }
    if (command === "DEMOCRACY") {
      config.voteOptions.DEMOCRACY++;
      console.log("voteOptions: ", config.voteOptions);
    }

    if (config.keyMap.includes(command)) {
      if (config.config.os === "windows") {
        exec("key.py " + command);
      } else {
        exec("python3 key.py " + command);
      }
    }
  }
  if (government) {
    if (self) return;
    console.log("in democracy");
    let command = message.toUpperCase();

    if (command === "ANARCHY") {
      config.voteOptions.ANARCHY++;
      console.log("voteOptions: ", config.voteOptions);
    }
    if (command === "DEMOCRACY") {
      config.voteOptions.DEMOCRACY++;
      console.log("voteOptions: ", config.voteOptions);
    }
    if (config.keyMap.includes(command)) {
      config.votes[command]++;
      voteCounter++;
      console.log("votes: ", voteCounter);
      if (voteCounter === 5) {
        let winning = countVote();
        voteCounter = 0;
        console.log(winning);
        if (config.config.os === "windows") {
          await exec("key.py " + winning[0]);
          await new Promise(resolve => setTimeout(resolve, 1000));
          await exec("key.py " + winning[1]);
        } else {
          await exec("python3 key.py " + winning[0]);
          await new Promise(resolve => setTimeout(resolve, 1000));
          await exec("python3 key.py " + winning[1]);
        }
        for (let key in config.votes) {
          config.votes[key] = 0;
        }
      }
    }
  }
}

function countVote() {
  let highest1 = 0;
  let highest2 = 0;
  let current = 0;
  for (let key in config.votes) {
    current = config.votes[key];
    if (current > highest1) {
      highest1 = current;
    }
  }
  current = 0;
  for (let key in config.votes) {
    current = config.votes[key];
    if (current === highest1) {
      current = 0;
    } else if (current > highest2 && highest2 < highest1) {
      highest2 = current;
    }
  }

  return [
    _unct.invert(config.votes)[highest1],
    _unct.invert(config.votes)[highest2]
  ];
}
