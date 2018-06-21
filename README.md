# Twitch Plays Hearthstone

Inspired by TwitchPlaysPokemon and DisguistedToastHS

Connects a chat bot to Twitch chat via IRC to receive and send commands to a python script that controlls Hearthstone

Tested and working on Windows 10 and MacOS

# Example:

![](https://media.giphy.com/media/5zblpopO3ekPg7BW6F/giphy.gif)

> Check DisguistedToastHS at http://twitch.tv/disguisedtoasths

## How it works

The bot receives every single command from twitch chat and feeds two commands at a time to the python script

- For example, H5 B7 will play a card in your hand at H5 and bring it to the board at B7
  - Commands must be entered one at a time and are executed in pairs

The python script will run after receiving two commands and move the mouse to the respective coordinates

- Currently, the coordinates are hard coded for 1080p and won't work for any other resolution unless they are changed manually
  - A coordinate finder python script is included in the repo

## Installation

Download and install node.js and python

- Node.js: https://nodejs.org/download/
- Python 3: https://www.python.org/downloads/release/python-365/

Clone the repo

- git clone https://github.com/wujerry573/TwitchPlaysHearthstone.git
- cd TwitchPlaysHearthstone

Initialize node modules

- npm install

Initialize python modules (pyautogui)

- pip install pyautogui (python 2) or pip3 install pyautogui (python 3)

## Setup up config

Edit the config.js file to your twitch username, OAUTH token, and channel name

- http://www.twitchapps.com/tmi to generate your token

## Running the bot

```sh
node chatbotMac.js or chatbotWindows.js to start the bot depending on your OS
```

## Future Plans

An anarchy and democracy mode is being planned currently as well as a coordinate converter for different resolutions

## Contributions

Feel free to send me comments, suggestions, or reviews to wu573@gmail.com
