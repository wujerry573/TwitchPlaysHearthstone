import pyautogui
import time
import sys

# def click(x,y):
#     pyautogui.click((x, y))
#
# click(10, 10)

keyMap = [
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
  "E13"]

counter = 0;

def test():
    global counter

    if counter == 0:
        pyautogui.moveTo(1162, 1057, 0.5, pyautogui.easeOutQuad)
        pyautogui.mouseDown(button='left')
        counter += 1

    if counter == 1:
        pyautogui.moveTo(955, 583, 0.5, pyautogui.easeOutQuad)
        pyautogui.mouseUp(button='left')
        counter -= 1

    # pyautogui.dragTo(1348, 556, 0.5, pyautogui.easeOutQuad)
    # print(pyautogui.position())


time.sleep(0.1)


if sys.argv[1] in keyMap:
    x = 1

    while (x != 2):
        test()
        x += 1


# print('hello!')
