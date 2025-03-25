
// function autoEmail(to){
//     return function(subject){
//         return function(body){
//             console.log(`Hey!,${to} we send you mail for ${subject} ${body}`)
//         }
//     }
// }
// let step1=autoEmail("Priyanshu@gmail.com");
// let step2 = step1("Development");
// step2("I hope you would like it")

// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(sum(2)(3)(4))


// function evaluvate(operation){
//         return function(a){
//             return function(b){
//                 if(operation=="sum"){
//                     return a+b;
//                 }
//                 if(operation=="substract"){
//                     return a-b;
//                 }
//                 if(operation=="multiply"){
//                     return a*b;
//                 }
//                 if(operation=="substract"){
//                     return a/b;
//                 }
//                 else{
//                     return "Error";
//                 }
//             }
//         }
// }

// // console.log(evaluvate("multiply")(3)(4))
// const mul= evaluvate("multiply");
// console.log(mul(4)(4))
// console.log(mul(6)(2))


// function add(a){
//     return function(b){
//         if (b){
//             return add (a+b);
//         }
//         return a;
//     }
// }
// console.log(add(1)(3)(4)(8))

function updateElement(id){
    return function(content){
        document.querySelector("#"+id).textContent=content;
    }
}
let update= updateElement("heading")
update("Hello my name is priyanshu")