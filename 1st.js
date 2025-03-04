// const result=  'hlo' * 10 
// console.log(result)

// var age=18
// var license=true;
// var citizen=true;
// if ( age >=18 && license && citizen){
//     console.log('You can drive')
// }
// else{
//     console.log(`you can't drive car`)
// }

// var marks=0;
// var result=marks>=30 ? "yes":"no";
// console.log(result)



// console.log(2<12<4);


// console.log("20"+10+10) // it will convert everything to the string 
// console.log(10+10+"20")
// console.log(10+"10"+10) // value go from left to the right


// var age=20;
// var isCitizen=false;
// var isRegistered=false;

// if(age>=18){
//     if(isCitizen){
//         if(isRegistered){
//             console.log('you can vote')
//         }
//         else {
//             console.log('you are not ')
//         }
//     }
//     else{
//         console.log('you are not citizen')
//     }
// }
// else{
//     "your age is not valid"
// }



//  Even or odd

// var num=12;
// if(num%2==0){
//     console.log('even')
// }
// else{
//     console.log('odd')
// }

// Prime number

// var num=12;
// var isPrime=true;

// for(let i=2; i<num;i++){
//     if(num%i==0){
//         isPrime=false;
//         break;
//     }   
// }
// if(isPrime==true){
//     console.log('prime no.')
// }
// else{
//     console.log('non prime no.')
// }


// check no. is -ve or +ve or 0;
// var num=0;
// if(num >0){
//     console.log('positive')
// }
// else if(num==0){
//     console.log('zero');
    
// }
// else {
//     console.log('negative')
// }




// const age=12;
// const check =age==13? "same":"not same";
// console.log(check);


// const day='wed';
// const check=day=='saf'? 'sahi h' : "galt h";
// console.log(check)




// const age=19;
// check = age>=18 ? "yes you can vote" : "no you can't vote";
// console.log(check)


// let num="10";
// let numb=Number(num);
// console.log(typeof(numb));
// console.log(numb)
// let num='10'
// let convo=String(num)
// console.log(convo)
// console.log(typeof(convo))


// const pallendrome=(name)=>{
//      let value="";
//     for(let i=name.length-1 ; i>=0; i--){
//          value+=name[i];
//     }
//     if(name==value){
//         return "Pallendrome "
//     }
//     else{
//         return "not pallendrome"
//     }
// }

// console.log(pallendrome("naman"));

// const pallendrome =(name)=>{
//     // const reverse=name.split("").reverse().join("");
//     const reverse= [...name].reverse().join("");
//     if(name == reverse){
//         return "pallendrome"
//     }
//     else{
//         return "not a pallendrome"
//     }
// }
// console.log(pallendrome("naman"))

// const name="priyanshu tamta";
// console.log(name.length);
// console.log(name.toUpperCase())