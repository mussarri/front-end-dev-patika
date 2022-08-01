var addBtn;
var delBtn;
var input;
var list;
var listEl;
var delAllBtn;
var tasks = JSON.parse(localStorage.getItem("tasks")) || []

const elementUpdate = () => {
    addBtn = document.getElementById("add-btn")
    delBtn = document.querySelectorAll(".del-btn")
    input = document.getElementById("input")
    list = document.getElementById("list")
    listEl = document.getElementById("list-el")
    delAllBtn = document.getElementById("delAll-btn")
}

elementUpdate()

const createTaskLi = (i) => {
    const taskLi = document.createElement("li")
    taskLi.className = "list-el d-flex justify-content-between w-75 mx-auto p-1 px-2"    
    taskLi.setAttribute("id", "list-el")
    taskLi.innerHTML = `<span>${i}</span>
    <button class="btn btn-sm btn-danger del-btn" id="del-btn">x</button>`
    list.appendChild(taskLi)   
}

const addTaskToList = (i) =>{    
    tasks.push(i)
    localStorage.setItem("tasks", JSON.stringify(tasks))
} 

tasks.forEach(element => {
    createTaskLi(element)     
})

// event listeners
list.addEventListener("click", (e) => {
    if(e.target.innerHTML == "x" ){
        e.target.parentElement.remove() //delete task
        tasks.splice(tasks.indexOf(e.target.parentElement.firstElementChild.innerHTML), 1)  
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
    if(e.target.localName == "li"){       
        if(!e.target.classList.contains("bg-success")){
            e.target.classList.add("bg-success")
            e.target.style.textDecoration = "line-through"
        }else{
            e.target.classList.remove("bg-success")
            e.target.style.textDecoration = "none"
        }
    }
})


addBtn.addEventListener("click", () => {
    if(input.value == ""){
        alert("Lütfen bir görev giriniz.")
    }else{
        addTaskToList(input.value)
        createTaskLi(input.value)    
        input.value = "";  
    }
})




