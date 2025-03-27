// const user1={
//     name:"Priyanshu",
//     age:22,
//     getAge(){
//        return new Date().getFullYear()- this.age;
//     }
// }
// console.log(user1.getAge())


// const createUser=(firstName,lastName,age)=>{
//     const user={
//         // firstName:firstName,
//         // lastName:lastName,
//         // age:age
//         firstName,
//         lastName, 
//         age,
//         getAge(){
//             return new Date().getFullYear()- this.age;
//          }
//     }
//     return user;
// }
// let user2 = createUser("priyanshu","tamta",22);
// // console.log(user2.firstName)
// // console.log(user2.getAge())




// function createUser(fname,lname,age){
//     let user={
//         fname,
//         lname,
//         age,
//         getBirthYear:createUser.commonMethods.getBirthYear,
//     }
//     return user;
// }
// createUser.commonMethods={
//      getBirthYear(){
//         return new Date().getFullYear()- this.age;
//     }
// }

// const user1 = createUser("priyanshu","tamta",22) 
// console.log(user1.getBirthYear());


function CreateUser(Fname,Lname,age){
    this.Fname=Fname,
    this.Lname=Lname,
    this.age=age
}
CreateUser.prototype.getBirthYear = function (){
    return new Date().getFullYear() - this.age
}

const user1 = new CreateUser("priyanshu","tamta",22)
// console.log(user1);
// console.log(user1.__proto__)
