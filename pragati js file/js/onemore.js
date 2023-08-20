// let fruits = ["apple", "banana", "grapes"];
// console.log(fruits)
// console.log(fruits.length)
// console.log(fruits[fruits.length-1])
// // console.log((fruitsfruits.length-1)
// console.log(fruits[0])



// let fruits2 = []
// for (let i = 0; i < fruits.length; i++) {

//      fruits2.push(fruits[i].toLocaleUpperCase())
// }
// console.log(fruits2);

// const fruits = ["apple", "banana", "grapes"];
// fruits.push("kiwi");
// console.log(fruits)


// while loop
const fruits = ["apple", "banana", "grapes"];
// i=0;
// while (i<fruits.length) {
//      console.log(fruits[i].toLocaleUpperCase());
//      i++;
// }

// for of loop
// for (let fruit of fruits) {
//      console.log(fruit);
// }



// for in loop
const fruits3=[]
for (const key in fruits) {
//     console.log(fruits[key])
fruits3.push(fruits[key].toLocaleUpperCase())
}
console.log(fruits3)