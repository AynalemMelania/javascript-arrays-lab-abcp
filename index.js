const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens = [...,kittens]
}
1) Arrays destructivelyAppendKitten(name) appends a kitten to the end of the kittens array:
     ReferenceError: destructivelyAppendKitten is not defined
      at Context.<anonymous> (test/index-test.js:14:7)
  2) Arrays destructivelyPrependKitten(name) prepends a kitten to the beginning of the kittens
array:
     ReferenceError: destructivelyPrependKitten is not defined
      at Context.<anonymous> (test/index-test.js:21:7)
  3) Arrays destructivelyRemoveLastKitten() removes the last kitten from the kittens array:
     ReferenceError: destructivelyRemoveLastKitten is not defined
      at Context.<anonymous> (test/index-test.js:29:7)
  4) Arrays destructivelyRemoveFirstKitten() removes the First kitten from the kittens array:
     ReferenceError: destructivelyRemoveFirstKitten is not defined
      at Context.<anonymous> (test/index-test.js:37:7)
  5) Arrays appendKitten(name) appends a kitten to the kittens array and returns a new array, l
eaving the kittens array unchanged:
     ReferenceError: appendKitten is not defined
      at Context.<anonymous> (test/index-test.js:45:7)
  6) Arrays prependKitten(name) prepends a kitten to the kittens array and returns a new array,
 leaving the kittens array unchanged:
     ReferenceError: prependKitten is not defined
      at Context.<anonymous> (test/index-test.js:53:7)
  7) Arrays removeLastKitten() removes the last kitten in the kittens array and returns a new a
rray, leaving the kittens array unchanged:
     ReferenceError: removeLastKitten is not defined
      at Context.<anonymous> (test/index-test.js:61:7)

      8) Arrays removeFirstKitten() removes the first kitten from the kittens array and returns a n
ew array, leaving the kittens array unchanged:
     ReferenceError: removeFirstKitten is not defined
      at Context.<anonymous> (test/index-test.js:69:7)
