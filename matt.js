// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

function zero(innerMath=null) {
  if (innerMath) {
   return Math.trunc(eval(`0 ${innerMath}`))
  }
  return 0
}

function one(innerMath=null) {
  return innerMath ? Math.trunc(eval(`1 ${innerMath}`)) : 1
}

function two(innerMath=null) {
  return innerMath ? Math.trunc(eval(`2 ${innerMath}`)) : 2
}

function three(innerMath=null) {
  return innerMath ? Math.trunc(eval(`3 ${innerMath}`)) : 3
}

function four(innerMath=null) {
  return innerMath ? Math.trunc(eval(`4 ${innerMath}`)) : 4
}

function five(innerMath=null) {
  return innerMath ? Math.trunc(eval(`5 ${innerMath}`)) : 5
}

function six(innerMath=null) {
  return innerMath ? Math.trunc(eval(`6 ${innerMath}`)) : 6
}

function seven(innerMath=null) {
  return innerMath ? Math.trunc(eval(`7 ${innerMath}`)) : 7
}

function eight(innerMath=null) {
  return innerMath ? Math.trunc(eval(`8 ${innerMath}`)) : 8
}

function nine(innerMath=null) {
  return innerMath ? Math.trunc(eval(`9 ${innerMath}`)) : 9
}


function plus(num) {
  return `+ ${num}`
}

function minus(num) {
  return `- ${num}`
}

function times(num) {
  return `* ${num}`
}

function dividedBy(num) {
  return `/ ${num}`
}