let box=document.querySelector(".box");
let btn=document.querySelector(".btn");
let input=document.querySelector(".input")
let para = document.querySelector(".para")
btn.addEventListener("click",()=>{
        box.classList.add("transition")
})

const handlePress=(event)=>{
        console.log(event.code)
        console.log(event.key)
        console.log(event.type)
document.querySelector(".para").textContent=event.key

}

input.addEventListener('keydown',(event)=>{
        console.log(event.code)
document.querySelector(".para").textContent=event.key

})

input.addEventListener("input",(event)=>{
        console.log(event.target.value)
        console.log(event.target.name)
        console.log(event.inputType)
        console.log(event.type)
})
