function arg(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
        
        }
        return sum;    
}
console.log(arg(2,3,4,6,1))