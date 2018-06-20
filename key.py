import pyautogui
import time
import sys

# def click(x,y):
#     pyautogui.click((x, y))
#
# click(10, 10)


def facemove():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def endmove():
    pyautogui.moveTo(722, 503, 0.5, pyautogui.easeOutQuad)


def heromove():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def hpmove():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def h1move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def h2move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def h3move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def h4move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def h5move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def h6move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def h7move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def h8move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def h9move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def h10move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def b1move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def b2move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def b3move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def b4move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def b5move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def b6move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def b7move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def b8move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def b9move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def b10move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def b11move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def b12move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def b13move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def e1move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def e2move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def e3move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def e4move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def e5move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def e6move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def e7move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def e8move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def e9move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def e10move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def e11move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def e12move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)


def e13move():
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)

dic = {

}

keyMap = {
  "FACE": facemove,
  "HERO": heromove,
  "HP": hpmove,
  "END": endmove,
  "H1": h1move,
  "H2": h2move,
  "H3": h3move,
  "H4": h4move,
  "H5": h5move,
  "H6": h6move,
  "H7": h7move,
  "H8": h8move,
  "H9": h9move,
  "H10": h10move,
  "B1": b1move,
  "B2": b2move,
  "B3": b3move,
  "B4": b4move,
  "B5": b5move,
  "B6": b6move,
  "B7": b7move,
  "B8": b8move,
  "B9": b9move,
  "B10": b10move,
  "B11": b11move,
  "B12": b12move,
  "B13": b13move,
  "E1": e1move,
  "E2": e2move,
  "E3": e3move,
  "E4": e4move,
  "E5": e5move,
  "E6": e6move,
  "E7": e7move,
  "E8": e8move,
  "E9": e9move,
  "E10": e10move,
  "E11": e11move,
  "E12": e12move,
  "E13": e13move
}


def executecommand(key1, key2):
    pyautogui.moveTo(834, 969, 0.5, pyautogui.easeOutQuad)
    pyautogui.mouseDown(button='left')
    pyautogui.moveTo(722, 503, 0.5, pyautogui.easeOutQuad)
    pyautogui.mouseUp(button='left')


time.sleep(1)
key1 = sys.argv[1]
key2 = sys.argv[2]

keyMap[key1]()
pyautogui.mouseDown(button='left')
keyMap[key2]()
pyautogui.mouseUp(button='left')

# executecommand(key1, key2)
#
# if key1 in keyMap:
#     print(keyMap[key1])


# print('hello!')
