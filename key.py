import pyautogui
import time
import sys


keyMap = {
  "FACE": [962, 204],
  "HERO": [959, 817],
  "HP": [1133, 817],
  "END": [1561, 489],
  "H1": [623, 1057],
  "H2": [693, 1057],
  "H3": [756, 1057],
  "H4": [807, 1057],
  "H5": [862, 1057],
  "H6": [918, 1057],
  "H7": [971, 1057],
  "H8": [1031, 1057],
  "H9": [1090, 1057],
  "H10": [1162, 1057],
  "B1": [541, 583],
  "B2": [611, 583],
  "B3": [680, 583],
  "B4": [746, 583],
  "B5": [811, 583],
  "B6": [885, 583],
  "B7": [955, 583],
  "B8": [1022, 583],
  "B9": [1094, 583],
  "B10": [1162, 583],
  "B11": [1239, 583],
  "B12": [1310, 583],
  "B13": [1400, 583],
  "E1": [545, 390],
  "E2": [613, 390],
  "E3": [682, 390],
  "E4": [743, 390],
  "E5": [818, 390],
  "E6": [884, 390],
  "E7": [952, 390],
  "E8": [1017, 390],
  "E9": [1087, 390],
  "E10": [1159, 390],
  "E11": [1232, 390],
  "E12": [1300, 390],
  "E13": [1381, 390]
}


time.sleep(1)
key1 = sys.argv[1]
key2 = sys.argv[2]

if key1 == 'END':
    pyautogui.moveTo(keyMap[key1][0], keyMap[key2][1], 0.5)
    pyautogui.click(clicks=1, button='left')
else:
    pyautogui.moveTo(keyMap[key1][0], keyMap[key1][1], 0.5, pyautogui.easeOutQuad)
    pyautogui.mouseDown(button='left')
    pyautogui.moveTo(keyMap[key2][0], keyMap[key2][1], 0.5, pyautogui.easeOutQuad)
    pyautogui.mouseUp(button='left')

