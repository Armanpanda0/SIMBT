const inputbox =document.getElementById("input-box");
const listcontainer =document.getElementById("list-container");

function addTask(){
    if (inputbox.value === ''){
        alert("Wirte Your Works! toDo");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML = "<i class='bx bxs-trash-alt'></i>";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}
listcontainer.addEventListener("click" , function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showMe(){
    listcontainer.innerHTML =localStorage.getItem("data");
}
showMe();