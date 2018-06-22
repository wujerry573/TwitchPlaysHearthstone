# Twitch Plays Hearthstone

Inspired by [TwitchPlaysPokemon](https://www.twitch.tv/twitchplayspokemon) and [DisguistedToastHS](http://twitch.tv/disguisedtoasths)

Connects a chat bot to Twitch chat via IRC to receive and send commands to a python script that controlls Hearthstone

Tested and working on Windows 10 and MacOS

## Example:

![](https://media.giphy.com/media/5zblpopO3ekPg7BW6F/giphy.gif)

## How it works

The bot reads every line of chat from twitch chat and will move to the command location and click

- For example, H5 will move the mouse to the card in hand at H5 and pick it up
- A subsequent command i.e B7 will move the card to B7 on the board and then drop it

- Currently, the coordinates are hard-coded for 1080p and won't work for any other resolution unless they are changed manually
  - A python script to find monitor coordinates is included in the repo

## Installation

```sh
#Download and install node.js and python

Node.js: https://nodejs.org/download/
Python 3: https://www.python.org/downloads/release/python-365/

#Clone the repo

git clone https://github.com/wujerry573/TwitchPlaysHearthstone.git
cd TwitchPlaysHearthstone

#Install Twitch node modules

npm install twi.js

#Install python modules (pyautogui)

pip install pyautogui (python 2) or pip3 install pyautogui (python 3)
```

## Setup up config file

Edit the config.js file to your Twitch username, OAUTH token, and channel name

- http://www.twitchapps.com/tmi to generate your OAUTH token

## Running the bot

```sh
node chatbot.js
```

## Future Plans

(06/21/18) An anarchy and democracy mode is being planned currently as well as a coordinate converter for different resolutions

## Contact me

Feel free to send me questions, comments, suggestions, and report bugs to wu573@gmail.com

## Special thanks

Thanks to Eliot and Charley for testing early versions of the code
