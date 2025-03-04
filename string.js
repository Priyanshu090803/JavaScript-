// let char=""
// for(let i="a".charCodeAt(0);i<='z'.charCodeAt(0);i++){
//     console.log(String.fromCharCode(i))
// }

const Check=(str)=>{
    const vowels="aeiou"
    if(str.includes(vowels.split(" "))){
        return "contain vowels "
    }
    else{
        return "not contain vowels"
    }
}
console.log(Check("my name is priyanshu tamta"));
