const office_data = [
     {
          Employ_Name: "Sonam",
          Post: "hr",
          Age: 30,
          Salary: 50000
     },
     {
          Employ_Name: "Sarita",
          Post: "hr_2",
          Age: 32,
          Salary: 45000
     },
     {
          Employ_Name: "Samiksha",
          Post: "CEO",
          Age: 20,
          Salary: 60000
     },
     {
          Employ_Name: "Samar",
          Post: "Manager",
          Age: 35,
          Salary: 30000
     },
     {
          Employ_Name: "Poonam",
          Post: "hr",
          Age: 30,
          Salary: 50000
     },
]


console.log(office_data)
// console.log(office_data[0].Employ_Name)
// for (const key in office_data) {
//      console.log(key)
// }

for (const i of office_data) {
     console.log(i)
     console.log(i["Employ_Name"])
     console.log(i["Post"])
     console.log(i["Age"])
     console.log(i["Salary"])
}

for (const key of office_data) {
     const { Employ_Name, Age, Salary, Post } = key
     console.log(Age)
     console.log("****")
     console.log(Salary)
     console.log("****")
     console.log(Post)
     console.log("****")
     console.log(Employ_Name)
}

