// const cart=["pants","tshirt","eraser","table"];

// createOrder(cart,function(orderId){
//     proceedToPayment(orderId)
// })

// const promise= createOrder(cart);
// promise.then(function (orderId){
//     proceedToPayment(orderId)
// })







// function gharAao(callback){

//     setTimeout(() => {
//         console.log("ghr aa gya");
//         callback();
//     }, 1500);
// }
// function changeKaro(callback){

//     setTimeout(() => {
//         console.log("change kar diya");
//         callback();
//     }, 2000);
// }

// function pdaiKaro(callback){

//     setTimeout(() => {
//         console.log("pdai karne lg gya");
//         callback()
//     }, 1000);
// }

// gharAao(()=>{
//     changeKaro(()=>{
//         pdaiKaro(()=>{
//             console.log("sare task kr diye");
            
//         })
//     })
// })


// function gharAao(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("ghr aa gya");
//         }, 1500);
//     })
   
// }
// function changeKaro(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("change kar diya");
//         }, 2000);
//     })

// }

// function pdaiKaro(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("pdai karne lg gya");
//         }, 2000);
//     })
// }


// gharAao().then(value=>{console.log(value);return changeKaro()})
//          .then(value=>{console.log(value);return pdaiKaro()})
//          .then(value=>{console.log(value);console.log("All task done!")})

// const cart= ["pant","tshirt","jeans","shirt","shoes"];

// const promise= createOrder(cart)

// promise.then(function(orderId){
//     console.log(orderId);
    
// })

// function createOrder(cart){
//     const pr = new Promise (function(resolve,reject){

//         if(!ValiditeCart(cart)){
//             const err=new Error("Something went wrong");
//             reject(err)
//         }

//         const orderId="3413";
//         if(orderId){
//             setTimeout(function(){
//                 resolve(orderId)
//             },5000)
//         }
//     })

//     return pr
// }
// const ValiditeCart=()=>{
//     return true;
// }



// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("done!"), 4000);
//   });
  
//   // resolve runs the first function in .then
//   promise.then(
//     result => console.log(result), // shows "done!" after 1 second
//     error => console.log(error) // doesn't run
//   );

const a=10,b=20;

// async function getData() {
//     const resultFromServer= await fetch("https://api.github.com/users/Priyanshu090803");
//     console.log(resultFromServer);       
//     console.log("hello");
    
// };
// fetch("https://api.github.com/users/Priyanshu090803")
// .then((value)=>{console.log(value)})
// .catch((err)=>{console.log(err)})

// console.log(a+b);

// // getData()


// const customPromise = () =>{
//     return new Promise((resolve,reject)=>{
//         let a=10,b=20;
//         let ans=a+b;
//         resolve(ans)
//     })
// }

// customPromise().
//               then((value)=>console.log(value))
//               .catch((err)=>console.log(err))
//               .finally(()=>console.log("this will run every time!"))






















// const customPromise = new Promise((resolve,reject)=>{
//         let a=10,b=20;
//         let ans=a+b;
//         resolve(ans)
//     })


// customPromise.
//               then((value)=>console.log(value))
//               .catch((err)=>console.log(err))
//               .finally(()=>console.log("this will run every time!"))



// const promise1 = new Promise (function(res,rej){
//     setTimeout(function(){
//         console.log("Task 1 is started!")
//         let a="hello ji hello";
//         res(a);
//     },2000)
// })
// promise1.then(function(value){
//     console.log(value);
//     console.log("Task 1 is completed!")
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Task 2 is started!")
       
//         let a="hello ji hello kaise ho";
//         resolve(a); 
//     }, (3000));
// }).then(function(value){
//     console.log(value);
//     console.log("Task 2 is also completed!")

// })



// const promise4= new Promise((resolve, reject) => {
//     setTimeout(function(){ 
//         let err=false;
//         if(!err){
//             let obj1={username:"priyanshu",email:"priyanshu243@gmail.com"}
//             resolve(obj1)
//         }
//         else{
//             reject("ERROR: Something went wrong")
//         }
//     },2000)
// })
// promise4.
//         then((value)=>{
//             console.log(value)
//             return value.username;
//         })
//         .then((value)=>{
//             console.log(value)
//         })
//         .catch((error)=>{
//             console.log(error);
//         })


// const promise5 = new Promise(function(res,rej){

//     setTimeout(() => {
//         let err=false;
//         let obj2={username:'priyanshu',email:'priyanshu@gmail.com',id:42332}
//         if(!err){
//            resolve(obj2)
//         }
//         else{
//            reject("Can't resolve")
//         }
//     }, 2000);
// })

// promise5.
//         then((value)=>{
//             return value
//         }).then((value)=>console.log(value))
//         .catch((err)=>{console.log(err)})

// const promise6 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let err=false;
//         let obj3={username:"suresh",email:"suresh@gmail.com",id:4323}
//         if(!err){
//             resolve(obj3)
//         }else{
//             reject("Someting went wrong!")
//         }
//     }, 2000);
// })

// async function consumePromise6(){
//     try{
//         let resposne = await promise6;
//         console.log(resposne)
//     }
//     catch(err){
//         console.log("ERROR:"+err)
//     }
// }
// consumePromise6()






// async function getuserData(){
//     try{const resposne = await fetch("https://fakestoreapi.com/products")
//     const jsonData=await resposne.json();
//     console.log(jsonData)
// }catch(error){
//     console.log("ERROR"+error)
// }
// }
// getuserData()




// fetch("https://fakestoreapi.com/products")
//                                           .then((value)=>data=value.json())
//                                           .then((data)=>console.log(data))
//                                           .catch((err)=>console.log(err))