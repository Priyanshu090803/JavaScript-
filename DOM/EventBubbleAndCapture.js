document.querySelector(".grandParent").addEventListener("click",(e)=>{
    console.log("Grandparent clicked")
},true)
document.querySelector(".parent").addEventListener("click",(e)=>{
    console.log("parent clicked")
},true)
document.querySelector(".child").addEventListener("click",(e)=>{
    console.log("child clicked")
    e.stopPropagation()

},true)