let input=document.querySelector(".input");
let listContainer= document.querySelector(".list-container");

let addTask=()=>{
    if(input.value===""){
        alert("Write something")
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=input.value;
        listContainer.appendChild(li);

        let span=document.createElement('span');
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    input.value=""
    saveData();

}

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName=== 'LI'){
        e.target.classList.toggle("checked")
        saveData();
        
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
    saveData();
    }
},false)


let saveData=()=>{
    localStorage.setItem("savedItem",listContainer.innerHTML)
}
let showData=()=>{
   listContainer.innerHTML= localStorage.getItem("savedItem")
}
showData(); 