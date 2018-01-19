const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.reverse()
  kittens.pop()
  kittens.reverse()
  return kittens
}
function destructivelyPrependKitten(name) {
 kittens.reverse()
 kittens.push(name)
 kittens.reverse()
 return kittens
}
function appendKitten(name){
  var kittens_copy = kittens.slice()
  kittens_copy.push(name)
  return kittens_copy
}

function prependKitten(name){
var kittens_copy = kittens.slice()
kittens_copy.unshift(name)
return kittens_copy
}

function removeLastKitten() {
  var kittens_copy = kittens.slice()
  kittens_copy.pop()
  return kittens_copy
}
function removeFirstKitten() {
    var kittens_copy = kittens.slice()
    kittens_copy.shift()
    return kittens_copy
}
