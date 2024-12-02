// let obj = {a:1, b:2, c:3, d:4}
// let {a, b, ...other }  = obj
// console.log(a)
// console.log(b)
// console.log(other)

let obj = { a: 1, b: 2 }
let copy = { ...obj }
console.log(copy)