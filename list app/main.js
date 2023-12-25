const textAdd = document.getElementById("textAdd");
const buttonAdd = document.getElementById("buttonAdd");
const listContainer = document.getElementById("list-container");

function addTask(){

    if(textAdd.value === ''){
        alert("You must write something!");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = textAdd.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    textAdd.value = "";

}

listContainer.addEventListener("click", function(e){

    if(e.target.TagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.TagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

listContainer.addEventListener('dblclick', function(){
    toDoContainer.removeChild(listContainer);
})