
let counter=0;
function getData(){
    console.log("Fetching Data"+counter++)
}
function DebounceFun(call,delay){
    let timer;
    return function(...args){
    if(timer){
        clearTimeout(timer) 
    }
    timer=setTimeout(() => {
        call(...args)
    }, delay);
}
}
let magicFun = DebounceFun(getData,400)