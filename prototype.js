// let car={
//     tyre:4
// }
// let tesla={
//     driver:'AI',
//     __proto__:car
// }
// console.log(tesla.__proto__)
let car={
    tyre:4
}
let tesla={
    driver:'AI'
}
Object.setPrototypeOf(tesla,car);
console.log(tesla)
console.log(Object.getPrototypeOf(tesla))