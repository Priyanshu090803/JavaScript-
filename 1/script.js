let left=document.querySelector(".left");
let right=document.querySelector(".right");
let copyCode=document.querySelector(".copyCode");
let main= document.querySelector(".main");


let color=()=>{
    let hexNum="0123456789abcdef";
    let colors="#";
    for(let i=0; i<6; i++){
        colors=colors+hexNum[Math.floor(Math.random()*16)];
    }
    
    return colors;
}

let btn1=()=>{
    let rgb1=color()
    console.log(rgb1)
    main.style.backgroundImage=`linear-gradient(to right ,${rgb1} ,#FFFFFF ` ;
    copyCode.textContent=  `background-image: linear-gradient(to right , rgb(${rgb1}),rgb(#FFFFFF))`
    left.textContent=rgb1;
}
let btn2=()=>{
    let rgb2=color()
    console.log(rgb2)
    main.style.backgroundImage=`linear-gradient(to right ,#444  ,${rgb2} ` ;
    copyCode.textContent=  `background-image: linear-gradient(to right , rgb(143,43,45),rgb(${rgb2}))`
    right.textContent=rgb2;
    
}

left.addEventListener("click",btn1);
right.addEventListener("click",btn2);

