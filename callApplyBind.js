// let name1={
//     firstName:"priyanshu",
//     lastName:"tamta",
//     printFullName: function(){
//         console.log(this.firstName+" "+ this.lastName)
//     }
// }
// let name2={
//     firstName: "Nikita",
//     lastName : "Kharkwal",
// }
// name1.printFullName();
// name1.printFullName.call(name2);

// let name1={
//     firstName:"Priyanshu",
//     lastName:"Tamta",
// }
// let name2={
//     firstName:"Nikita",
//     lastName:"Khrakwal"
// }
// let printFullName = function(){
//     console.log(this.firstName+" "+this.lastName)
// }

// printFullName.call(name1);
// printFullName.call(name2)


let name1={
    firstName:"Priyanshu",
    lastName:"Tamta",
}
let name2={
    firstName:"Nikita",
    lastName:"Khrakwal"
}
let printFullName = function(city,state,country){
    console.log(this.firstName+" "+this.lastName +" "+city +" "+state +" "+country)
}

// printFullName.call(name1,"Pithoragarh","uttrakhand","india");
// printFullName.apply(name2,["pithoragarh","uttrakhand","india"]);

let callBind= printFullName.bind(name1,'pithoragarh','uttrakhand','india')

console.log(callBind)
callBind()
