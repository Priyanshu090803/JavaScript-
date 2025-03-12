let input=document.querySelector(".input");
let clickBtn=document.querySelector(".btn");
let todo=document.querySelector(".todo");

let localTodolist=[];

let getItemFromLocal=()=>{
    return JSON.parse(localStorage.getItem("todolist"))
}
localTodolist=getItemFromLocal() || [];


const addTodoDynamicElement=(value)=>{
    let divEl=document.createElement('div'); 
    divEl.classList.add("todo_div");
    divEl.innerHTML=`<p>${value}</p><button class="dltBtn">Delete</button>`
    todo.append(divEl)
}


const showTodo=()=>{
    console.log(localTodolist);    
}
showTodo()

localTodolist.forEach((value)=>{
    addTodoDynamicElement(value)
})

clickBtn.addEventListener("click",(e)=>{

    e.preventDefault();
    let divEl=document.createElement('div'); 
    const todoListvalue=input.value.trim();
    input.value=""

   if( todoListvalue!="" && !localTodolist.includes(todoListvalue)) {
    localTodolist.push(todoListvalue)
    localTodolist= [...new Set (localTodolist)]
    console.log(localTodolist);

    localStorage.setItem("todolist",JSON.stringify(localTodolist))
}

    divEl.classList.add("todo_div");
    divEl.innerHTML=`<p>${input.value}</p><button class="dltBtn">Delete</button>`
    todo.append(divEl)

    
})
