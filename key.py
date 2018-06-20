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

commandArray = []
filledArray = False


def insertIntoArray():
        pyautogui.moveTo(738, 842, 0.5, pyautogui.easeOutQuad)
        pyautogui.mouseDown(button='left')
        pyautogui.moveTo(722, 503, 0.5, pyautogui.easeOutQuad)
        pyautogui.mouseUp(button='left')

    # pyautogui.dragTo(1348, 556, 0.5, pyautogui.easeOutQuad)
    # print(pyautogui.position())


# def executeCommand():
#     print('hello')


time.sleep(3)


if sys.argv[1] in keyMap:
    insertIntoArray()



# print('hello!')
