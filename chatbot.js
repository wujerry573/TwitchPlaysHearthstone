const tmi = require("tmi.js");
const haikudos = require("haikudos");
const config = require("./config");
const exec = require("child_process").exec;

let commandPrefix = "!";

let storage = [];

let client = new tmi.client(config);

client.on("message", readMessage);

client.on("connected", connectionCheck);

client.connect();

let knownCommands = { echo, haiku, hello, goodbye, showStorage };

function connectionCheck(address, port) {
  console.log(`connected to ${address}:${port}`);
}

function echo(target, context, params) {
  // If there's something to echo:
  if (params.length) {
    // Join the params into a string:
    const msg = params.join(" ");
    // Send it back to the correct place:
    sendCommand(target, context, msg);
  } else {
    // Nothing to echo
    console.log(`* Nothing to echo`);
  }
}

function haiku(target, context) {
  // Generate a new haiku:
  haikudos(newHaiku => {
    // Split it line-by-line:
    newHaiku.split("\n").forEach(h => {
      // Send each line separately:
      sendCommand(target, context, h);
    });
  });
}

function hello(target, context) {
  sendCommand(target, context, "Hello!");
}

function goodbye(target, context) {
  sendCommand(target, context, "Goodbye!");
}

function showStorage(target, context) {
  storage.forEach(string => {
    sendCommand(target, context, string);
  });
}

function sendCommand(target, context, message) {
  client.say(target, message);
}

// Called every time a message comes in:
function readMessage(target, context, message, self) {
  if (self) {
    return;
  } // Ignore messages from the bot

  // This isn't a command since it has no prefix:
  if (message.substr(0, 1) !== commandPrefix) {
    console.log(
      `[${target} (${context["message-type"]})] ${context.username}: ${message}`
    );
    return;
  }

  // Split the message into individual words:
  const parse = message.slice(1).split(" "); //slice(1)
  // The command name is the first (0th) one:
  const commandName = parse[0];
  // The rest (if any) are the parameters:
  const params = parse.splice(1);

  // If the command is known, let's execute it:
  if (commandName in knownCommands) {
    // Retrieve the function by its name:
    const command = knownCommands[commandName];
    // Then call the command with parameters:
    console.log(storage);
    command(target, context, params);

    console.log(`* Executed ${commandName} command for ${context.username}`);
  }
  storage.push(commandName);
}
