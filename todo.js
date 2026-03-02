let addBtn=document.getElementById("addBtn");
let taskInput=document.getElementById("taskInput");
let taskList=document.getElementById("taskList");
let counter=document.getElementById("counter");

let colors=["#ff6b6b","#6bcB77","#4d96ff","#f06595","#ffa94d"];

addBtn.addEventListener("click",addTask);

taskInput.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        addTask();
    }
});

function updateCounter(){
    counter.textContent="Total Tasks: "+taskList.children.length;
}

function addTask(){

    let task=taskInput.value.trim();

    if(task===""){
        alert("Enter a task first!");
        return;
    }

    let li=document.createElement("li");

    let randomColor=colors[Math.floor(Math.random()*colors.length)];
    li.style.background=randomColor;

    let span=document.createElement("span");
    span.textContent=task;

    span.onclick=function(){
        span.classList.toggle("completed");
    }

    let deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete";
    deleteBtn.className="deleteBtn";

    deleteBtn.onclick=function(){
        li.remove();
        updateCounter();
    }

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value="";

    updateCounter();
}
