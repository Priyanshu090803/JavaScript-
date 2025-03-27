function updateFun(){
    console.log("Added to cart");
    
    document.getElementById("button").disabled=false;
}
function Throttle(fn,delay){
    return function(...args){
        document.getElementById("button").disabled=true;
    setTimeout(() => {
        fn(...args)
    }, delay);
    }
}

const newFun = Throttle(updateFun,3000);


function getData (){
    console.log("Fething data")
}
function Debounce(fn,delay){
    let timer;
    return function (...args){
        if(timer) {
            clearTimeout(timer);
         }
       timer = setTimeout(() => {
            fn(...args)
        }, delay);
    }
}

const magicFun = Debounce(getData,3000)