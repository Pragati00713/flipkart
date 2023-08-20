// iterate object

// const person = {
//     Name :"Aman",
//     age :18,
//     address:"bhopal",
//     key:121
// }

// for (const key in person) {
// //    console.log(`${key} :-  ${person[key]}`);
//    console.log(`${key} :-  ${person[key]}`);
// }

// . []
// person.game = "game"

// for (const key in person) {
//     //    console.log(`${key} :-  ${person[key]}`);
//        console.log(`${key} :-  ${person[key]}`);
//     }

// spread operator

const person = {
  Name: "Aman",
  age: 18,
  address: "bhopal",
  key: 121,
};

// const p1 = {...person}

// const p2 = person
// console.log(p1);
// console.log(p2);
// person.Name = "Shiv"
// console.log(p1);
// console.log(p2);
// p2.Name = "shyam"
// console.log(person);
// console.log(p0);

// concate object

// const l = ["aman"]
// const m = ["shiv"]

// const l1 = [...l,...m]
// const l1 = [l,m] not goood
// const l1 = [l + m] bad way
// console.log(l1);
// const person1 = {

//     Subject : "javascript"
// }

// const person2 = {...person,...person1}
// console.log(person2);

// const fname = "Aman"
// const lname = "pandey"
// const fullname = fname + lname
// console.log(fullname);

// object destructuring

// const person1 = {
//     Name :"Aman",
//     age :18,
//     address:"bhopal",
//     key:121,
//     Subject : "javascript"
// }

// const {address,Name,Subject,age} = person1

// console.log(person1.Name);
// console.log(Name);
// console.log(Subject);
// console.log(age);

// const Student = [
//   {
//     rollNo :1,
//     Name: "Aman",
//     age: 22,
//   },
//   {
//     rollNo :2,
//     Name: "Vishnu",
//     age: 23,
//   },
//   {
//     rollNo :3,
//     Name: "shyaam",
//     age: 24,
//   },
//   {
//     rollNo :4,
//     Name: "pragati",
//     age: 25,
//   },
//   {
//     rollNo :5,
//     Name: "shafak",
//     age: 26,
//   },
//   {
//     rollNo :6,
//     Name: "Samiksha",
//     age: 27,
//   },
// ];


// console.log(Student);

// console.log(Student[2]);
// console.log(Student[2].age);
// console.log(Student[2]["Name"]);

// for (const key in Student) {

//     console.log(key);
// }
// for (const key in person1) {

//     console.log(key);
// }
// for (const key of Student) {

//     console.log(key);
// }


// key :Value 

// for (const iterator of Object.keys(person1)) {
//     console.log(person1[iterator]);
// }

// const Student = [
//     {
//       rollNo :1,
//       Name: "Aman",
//       age: 22,
//     },
//     {
//       rollNo :2,
//       Name: "Vishnu",
//       age: 23,
//     },
//     {
//       rollNo :3,
//       Name: "shyaam",
//       age: 24,
//     },
//     {
//       rollNo :4,
//       Name: "pragati",
//       age: 25,
//     },
//     {
//       rollNo :5,
//       Name: "shafak",
//       age: 26,
//     },
//     {
//       rollNo :6,
//       Name: "Samiksha",
//       age: 27,
//     },
//   ];

//   for (const key of Student) {
//       const {Name,age ,rollNo} = key
//       console.log("----------------------");
//       console.log(`rollNo :- ${rollNo}`);
//     console.log(`Name :- ${Name}`);
//     console.log(`age :- ${age}`);
//     console.log("----------------------");
//   }

//   for (const key of Student) {
//     console.log("----------------------");
//     console.log(`rollNo :- ${key.rollNo}`);
//   console.log(`Name :- ${key.Name}`);
//   console.log(`age :- ${key["age"]}`);
//   console.log("----------------------");
// }

