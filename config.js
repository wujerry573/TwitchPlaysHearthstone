let config = {
  options: {
    debug: true
  },
  os: "windows or mac",
  connection: {
    reconnect: true
  },
  identity: {
    username: "your username",
    password: "your OAUTH token"
  },
  channels: ["your channel name(usually your username)"]
};

module.exports = config;
