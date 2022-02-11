// Select the Elements
const clear = document.querySelector(".refresh-btn");
const date_elem = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const add_btn = document.querySelector(".add-btn");

// Prevent refresh form
const form = document.querySelector(".add-item");
form.addEventListener('submit', function (e) {
    e.preventDefault();
})


// Variables
let todo_items = [];
let id = 0;

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
        add_todo(todo, id, false, false);

        todo_items.push({
            name: todo,
            id: id,
            done: false,
            trash: false
        });
        id++;
    }
    input.value = "";
});

//Complete to do
function complete_todo(element) {
    element.parentNode.toggle(completed);
    todo_items[element.id].done = todo_items[element.id].done ? false : true;
}

//Remove to do




