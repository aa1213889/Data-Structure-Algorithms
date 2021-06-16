function a () {
  b()
  console.log('func a')
}

function b () {
  c()
  console.log('func b')
}

function c () {
  d()
  console.log('func c')
}

function d () {
  console.log('func d')
}

a()

