const app = "I don't do much."
function destructivelyAppendKitten (name){
  window.kittens.push(name)
}
function destructivelyPrependKitten(name){
  window.kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  window.kittens.pop(name)
}
function destructivelyRemoveFirstKitten(){
  window.kittens.shift(name)
}
function appendKitten(name){
  return [...window.kittens, name]
}
function prependKitten(name){
  return [name, ...window.kittens]
}
function removeLastKitten(){
  return window.kittens.slice(0, window.kittens.length - 1)
}
function removeFirstKitten(){
  return window.kittens.slice(1)
}
