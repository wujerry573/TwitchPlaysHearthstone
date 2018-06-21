let config = {
  options: {
    debug: true
  },
  connection: {
    reconnect: true
  },
  identity: {
    username: "your username",
    password: "your oauth token"
  },
  channels: ["your channel name"]
};

module.exports = config;
