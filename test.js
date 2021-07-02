const popUp = {}
popUp[Symbol('isOpen')] = true
popUp[Symbol('isOpen')] = 123
console.log(popUp)
console.log(Object.getOwnPropertySymbols(popUp))

const objVals = Object.getOwnPropertySymbols(popUp)
console.log(popUp[objVals[0]]) //true
console.log(popUp[objVals[1]]) //123
