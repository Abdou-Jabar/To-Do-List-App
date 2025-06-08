const input = document.getElementById("input");
const listContainer = document.getElementById("listContainer")

function addTask(){

    const li = document.createElement("li");
    li.setAttribute("onclick", "toggleTask(this)");

    if(input.value === ''){
        alert("You must write something...")
    }
    else {
        li.innerHTML = `<div class="flex items-center justify-between space-x-4">
                    <img src="unchecked.png" class="h-7 w-7 flex-none" alt="">
                    <p class="grow ml-2">${input.value}</p>
                    <span onclick="removeTask(event)" class="flex-none text-red-500 text-2xl font-bold hover:text-red-700 transition cursor-pointer">\u00d7</span>
                </div>`
        listContainer.appendChild(li)
    }
    input.value = "";
    saveData()
}

listContainer.addEventListener("click", function(e) {
    const target = e.target;

    const liElement = target.closest("li");

    if (!liElement) return; // Sécurité

    const img = liElement.querySelector("img");

if (target.tagName === "IMG" || target.tagName === "P") {
    const li = target.closest("li");
    const img = li.querySelector("img");
    const p = li.querySelector("p");

    const isChecked = img.getAttribute("src") === "checked.png";
    img.setAttribute("src", isChecked ? "unchecked.png" : "checked.png");
    p.classList.toggle("line-through");

    saveData();
}

    if (target.tagName === "SPAN") {
        liElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function getData(){
    listContainer.innerHTML = localStorage.getItem("data")
}

getData();