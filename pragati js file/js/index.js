// alert("hello world");
const Fname = "pragati";
// console.log(Fname.length);
// let p=(Fname.trim());
// Fname.trim();
// console.log(p)
// console.log(p.length)
// First =Fname.toLocaleUpperCase();
// console.log(First.toLocaleUpperCase());



// const r="SONAM";
// k=r.toLocaleLowerCase();
// console.log(k.toLocaleLowerCase());



// slice (start index ending index)
// let str=Fname.slice(0,4);
// console.log(str)


//  for loop

// let p = 1;
// for (let p = 1; p <= 10; p++) {
     
//      console.log(p * 8)
     
// }
// for (let p = 1; p <= 10; p++) {
//      console.log(p * 1);
// }


// let total=0;
// let num=10;
// for(let i=1;i<=num;i++){
//      total=total+i
// }
// console.log(total)

// a
// rray----orderd collection of ClipboardItem

// let fruits=["appale","banana","grapes"];

// console.log(fruits[1]);
// fruits.push("mango","apple");
// console.log(fruits)
// fruits[0]="kiwi";
// console.log(fruits)

// console.log(typeof fruits)
// console.log(Array.isArray(fruits));


// fruits.pop();
// console.log(fruits);


// fruits.unshift("pineapple")
// console.log(fruits)


// fruits.shift()
// console.log(fruits)


// let num1=5;
// let num2=5;
// console.log("num one value is",num1)
// console.log("num two value is",num2)
// num1++;
// console.log("num one value is",num1)
// console.log("num two value is",num2)
// // num1+1;

// let array1=["item1","item2"];
// let array2=array1;

// console.log(array1);
// console.log(array2);
// array1.push("item3");

// console.log(array1);
// console.log(array2);



// table print 2 to five


// const end =5;
// for (let i = 2; i <= end; i++) {
//    for (let j = 1; j<=10; j++) {
//     console.log(`${i} X ${j} = ${i*j}`)

     
//    }
//      console.log("hello, task is complete") ;
// }


let array1=["item1","iteam2"];
// let array2=["item1","iteam2"];
// let array2=array1.splice(0);
// let array2=[].concat(array1);
let array2=[...array1];
array1.push("item3");
// let array2=array1;
console.log(array1===array2);
console.log(array1)
console.log(array2)