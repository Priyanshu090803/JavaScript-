// (
//     function sum(a,b){
//         console.log(a+b)
//     }
// )(2,3)

// FUNCTION DECLARATION


// function yo(name){
//     console.log(`hello ${name} welcome back`);
//     console.log(name+"ji apka nam sach mai "+name+"hai")    
// }
// yo('priyanshu')
// yo('rahul')


// FUNCTION EXPRESSION           //using function as a variable known as function expression

// let func= function(a,b){
//     return a+b;
// }
// console.log(func(1,2))

// function hello(a,b){
//     return a+b;
// }
// var hlsfa=hello;
// console.log(hlsfa(2,3))


// IIFE
// let result=(function(){
//     console.log('hello')
// })()

// result;

// let ans=function(){
//     console.log('hello2')
// }
// ans();
// ans();
// ans();


//  WRITE A JAVASCRIPT FUNCTION CALCULATOR THAT TAKES TWO NUMBERS AND A OPERATOR  AS A PARAMETER AND RETURNS THE RESULT OF THE PARAMETER AND RETURNS THE RESULT OF THE OPERATION. THE FUNCTION SHOULD SUPPORT ADDITION , SUBSTRACTION , MULTIPLICATION AND DIVISION
// EG   =>   console.log(2,4,"+")   output=>6
 
// By if else 
// function calculator(a,b,sym){
//     if(sym=="+"){
//         return a+b;
//     }
//     else if(sym == "-"){
//         return a-b;
//     }
//     else if(sym == "*"){
//         return a*b;
//     }
//     else if(sym == "/"){
//         return a/b;
//     }
//     else{
//         return "can't resolve this problem"
//     }
// }
// console.log(calculator(1,4,'.'));


// BY SWITCH STATEMENT

// function calculator(a,b,sym){
    
//     switch(sym){
//         case "+":return(a+b);
        
//         case "-":return(a-b);
        
//         case "*":return(a*b);
        
//         case "/":
//         if(a==0 || b==0){
//             return (`0 is not allowed`)
//         }    
//         else{
//             return(a/b);
            
            
//         }
//         default:return (`can't find`)
//     }
// }
// console.log(calculator(0,0,"/"));



// Reverse a string 
// function Reverse(name){
//     let reverse ="";
//     for(let i=name.length-1;i>=0;i--){
//         reverse=reverse+name[i]
    
//     }
//     console.log(reverse);
    
// }
// Reverse("priyanshu")



//  PALLINDROME NUMBER CHECK
// function Reverse(name){
//     let reverse ="";
//     for(let i=name.length-1;i>=0;i--){
//         reverse=reverse+name[i]
    
//     }
//     return(name==reverse?'pallendrome':'non pallendrome')    
// }
// console.log( Reverse("priyanshu") );

function wow(mst){
    return `Kiase ho :${mst}`
}

function hello(wow){
    return wow("badiya")
}
let y= hello(wow)

console.log(y);
