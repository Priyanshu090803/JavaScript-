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


function gharAao(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("ghr aa gya");
        }, 1500);
    })
   
}
function changeKaro(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("change kar diya");
        }, 2000);
    })

}

function pdaiKaro(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("pdai karne lg gya");
        }, 2000);
    })
}


gharAao().then(value=>{console.log(value);return changeKaro()})
         .then(value=>{console.log(value);return pdaiKaro()})
         .then(value=>{console.log(value);console.log("All task done!")})