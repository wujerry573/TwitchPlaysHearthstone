const config = {
  options: {
    debug: true
  },
  os: "windows",
  connection: {
    reconnect: true
  },
  identity: {
    username: "darwinnn_bot",
    password: "oauth:gg6kwfnif6r7r839dzxp37mzgahdkn"
  },
  channels: ["darwinnn_"]
};

const keyMap = [
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

let votes = {
  FACE: 0,
  END: 0,
  HERO: 0,
  HP: 0,
  H1: 0,
  H2: 0,
  H3: 0,
  H4: 0,
  H5: 0,
  H6: 0,
  H7: 0,
  H8: 0,
  H9: 0,
  H10: 0,
  B1: 0,
  B2: 0,
  B3: 0,
  B4: 0,
  B5: 0,
  B6: 0,
  B7: 0,
  B8: 0,
  B9: 0,
  B10: 0,
  B11: 0,
  B12: 0,
  B13: 0,
  E1: 0,
  E2: 0,
  E3: 0,
  E4: 0,
  E5: 0,
  E6: 0,
  E7: 0,
  E8: 0,
  E9: 0,
  E10: 0,
  E11: 0,
  E12: 0,
  E13: 0
};

let voteOptions = { ANARCHY: 0, DEMOCRACY: 0 };

module.exports = { config, keyMap, votes, voteOptions };
