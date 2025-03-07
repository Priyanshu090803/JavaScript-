let input=document.querySelector(".input");
let clickBtn=document.querySelector(".btn");
let todo=document.querySelector(".todo");


clickBtn.addEventListener("click",()=>{
    let para=document.createElement('p');   
    // let btn=document.createElement('button');
    todo.append(para)
    // todo.append(btn)
    para.textContent=input.value;
    // btn.textContent="delete"

    input.value="";
    // btn.addEventListener('click',()=>{
    //     btn.remove()
    //     para.remove();
    // })
    todo.addEventListener("click",(event)=>{
        event.target.remove();
    })

})
