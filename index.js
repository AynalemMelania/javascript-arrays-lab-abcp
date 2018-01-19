const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

public destructivelyAppendKitten(name) {
  kittens.push(name)
}
public destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.slice()
}
function appendKitten(name){
  var kittens_copy = kittens.slice()
  kittens_copy.push(name)
  return kittens_copy
}
function prependKitten(name){
var kittens_copy = kittens_copy.slice()
kittens_copy.unshift(name)
return kittens_copy
}  
function removeLastKitten() {
  var kittens_copy = kittens_copy.slice()
  kittens_copy.pop()
  return kittens_copy
}
  removes the last kitten in the kittens array and returns a new a
rray, leaving the kittens array unchanged:
     ReferenceError: removeLastKitten is not defined
      at Context.<anonymous> (test/index-test.js:61:7)

      8) Arrays removeFirstKitten() removes the first kitten from the kittens array and returns a n
ew array, leaving the kittens array unchanged:
     ReferenceError: removeFirstKitten is not defined
      at Context.<anonymous> (test/index-test.js:69:7)
