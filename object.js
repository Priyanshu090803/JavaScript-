// const mysym=Symbol("key1")

// const greet={
//     [mysym]:"key1"
// }
// console.log(greet["mysym"]);
// console.log(typeof greet["mysym"]);


// const hello={
//     "first Name": "Priyanshu",
//     age:21
// };
// hello["last name"]="tamta";
// console.log(hello)

// const obj= new Date();
// console.log(`${obj.getDate()}: ${obj.getFullYear()} ${obj.getMonth()}`)

// const obj = new Object();
    
//       obj.firstName= "priyanshu"
//       obj["last Name"] = "tamta"

//       console.log(ob)
// const person={
//       "name":"priyanshu",
//       check(){
//             return(`my name is ${this.name}`)
//       }
// }

// console.log(person.check());



function person(firstName,lastName){
      this.fName=firstName;
      this.lName=lastName;
}
let name1=person("priyanshu","tamta");
console.log(name1.firstName)
