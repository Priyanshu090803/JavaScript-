
function logic(){
    document.getElementById("button").disabled=false;
    console.log("User clicked")
}

const myThrottle=(fn,delay)=>{
        return function(...args){
        document.getElementById("button").disabled=true
        setTimeout(() => {
            fn()
        }, delay);
    }
}

let newFun = myThrottle(logic,3000)