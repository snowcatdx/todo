// Select the Elements
const clear = document.querySelector(".refresh-btn");
const date_elem = document.getElementById("date");
const list = document.getElementById("list");
const form = document.querySelector(".add-item");
const input = document.getElementById("input");
const add_btn = document.querySelector(".add-btn");


// Variables
let todo_list, id;

// Show todays date
const options = {weekday:"long", month:"short", day:"numeric"};
const today = new Date();
date_elem.innerHTML = today.toLocaleDateString("ru-RU", options);

// Add to do elements
function add_todo(todo, id, done, trash) {
    if(trash) {
        return;
    }
    const completed = done ? "completed" : "";
    const position = "beforeend";
    const item = `
                    <li class="item ${completed}">
                        <i class="check-btn" id="${id}"></i>
                        <p class="text">${todo}</p>
                        <i class="del-btn" id="${id}"></i>
                    </li>
                `;
    list.insertAdjacentHTML(position, item);
}

//User input
add_btn.addEventListener('click', function () {
    const todo = input.value;
    // If the input isn't empty
    if(todo) {
        add_todo(todo);
    }
    input.value = "";
})


