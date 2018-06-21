import pyautogui
import time
import sys


keyMap = {
  "FACE": [962, 204],#[842,asd]
  "HERO": [959, 817],#[842,asd]
  "HP": [1133, 817],#[842,asd]
  "END": [1561, 489],#[842,asd]
  "H1": [623, 1057], #[842,asd]
  "H2": [693, 1057],#[842,asd]
  "H3": [756, 1057],#[842,asd]
  "H4": [807, 1057],#[842,asd]
  "H5": [862, 1057],#[842,asd]
  "H6": [918, 1057],#[842,asd]
  "H7": [971, 1057],#[842,asd]
  "H8": [1031, 1057],#[842,asd]
  "H9": [1090, 1057],#[842,asd]
  "H10": [1162, 1057],#[842,asd]
  "B1": [541, 583],#[842,asd]
  "B2": [611, 583],#[842,asd]
  "B3": [680, 583],#[842,asd]
  "B4": [746, 583],#[842,asd]
  "B5": [811, 583],#[842,asd]
  "B6": [885, 583],#[842,asd]
  "B7": [955, 583],#[842,asd]
  "B8": [1022, 583],#[842,asd]
  "B9": [1094, 583],#[842,asd]
  "B10": [1162, 583],#[842,asd]
  "B11": [1239, 583],#[842,asd]
  "B12": [1310, 583],#[842,asd]
  "B13": [1400, 583],#[842,asd]
  "E1": [545, 390],#[842,asd]
  "E2": [613, 390],#[842,asd]
  "E3": [682, 390],#[842,asd]
  "E4": [743, 390],#[842,asd]
  "E5": [818, 390],#[842,asd]
  "E6": [884, 390],#[842,asd]
  "E7": [952, 390],#[842,asd]
  "E8": [1017, 390],#[842,asd]
  "E9": [1087, 390],#[842,asd]
  "E10": [1159, 390],#[842,asd]
  "E11": [1232, 390],#[842,asd]
  "E12": [1300, 390],#[842,asd]
  "E13": [1381, 390] #[842,asd]
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

