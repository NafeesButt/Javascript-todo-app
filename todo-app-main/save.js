// const toDoList = [];
// const completed = [];
// const element = document.getElementById("myUL");
// const complete = document.getElementById("complete");

const itemsLeft = () => {
  if (toDoList.length >= 1) {
    document.getElementById(
      "itemsLeft"
    ).innerText = `${toDoList.length} items left`;
  } else {
    document.getElementById("itemsLeft").innerHTML = "0 items left";
  }
};

// function createTodo() {
//   let inputValue = document.getElementById("myInput");
//   if (inputValue.value === "") return;
//   toDoList.push({ id: Date.now(), text: inputValue.value, completed: false });
//   inputValue.value = "";
//   readTodo();
//   itemsLeft();
// }

function readTodo() {
  const newTodoList = toDoList
    .map((todo) => {
      if (todo.completed == false) {
        return `<div class="list-item-space liBoard">
        <div class="list-item">
        <input
        class="form-check-input rounded-5 isCompleted"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        onClick="updateTodo(${todo.id})"
      />
       <li class=""  id="${todo.id}" )">${todo.text}</li>
       </div>
       <div><button type="button" id="${todo.id}" class="btn-close btn-close-white" disabled aria-label="Close"></button></div>
        </div>
        `;
      }
      return `

            <div class="list-item-space liBoard">
            <div class="list-item">
            <input
        class="form-check-input rounded-5 isCompleted"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        onClick="updateTodo(${todo.id})"
        checked
      /><li  class="isCompleted " id="${todo.id}" )">${todo.text}</li>
      </div>
      <div><button type="button" id="${todo.id}" class="btn-close btn-close-white" disabled aria-label="Close"></button></div>
            </div>

      `;
    })
    .join("");
  element.innerHTML = newTodoList;
}

// function updateTodo(id) {
//   const itemComplete = document.getElementById(id);
//   toDoList.forEach((item) => {
//     if (item.id === id) {
//       item.completed = !item.completed;
//       itemComplete.classList.toggle("isCompleted");
//       return;
//     }
//   });
// }

// function removeElement(params) {
//   console.log("values ", toDoList);
// }

// const all = document.getElementById("all");
// all.addEventListener("click", function () {
//   console.log("active");
//   // readTodo();
// });

// all.addEventListener("click", function () {
//   console.log("active");
//   removeElement();
// });

// complete.addEventListener("click", function () {
//   const todoCompleted = toDoList.filter((item) => {
//     if (item.completed === true) {
//       return item;
//     }
//   });
//   console.log(todoCompleted);
//   const completedTodoList1 = todoCompleted
//     .map((todo) => {
//       return ` <div class="list-item-space liBoard">
//       <div class="list-item">
//       <input
//   class="form-check-input rounded-5 isCompleted"
//   type="checkbox"
//   value=""
//   id="flexCheckDefault"
//   onClick="updateTodo(${todo.id})"
//   checked
// />

//        <li >${todo.text}</li>
//        </div>
//        <div><button type="button" class="btn-close btn-close-white" disabled aria-label="Close"></button></div>
//        </div>`;
//     })
//     .join("");

//   element.innerHTML = completedTodoList1;
// });

// const activeTodo = document.getElementById("active");
// activeTodo.addEventListener("click", function () {
//   console.log("active");
//   const activeItems = toDoList.filter((active) => {
//     if (active.completed == false) {
//       return active;
//     }
//   });
//   console.log("active todos: ", activeItems);
//   const completedTodoList = activeItems
//     .map((todo) => {
//       return ` <div class="list-item-space liBoard">
//       <div class="list-item">
//       <input
//   class="form-check-input rounded-5 isCompleted"
//   type="checkbox"
//   value=""
//   id="flexCheckDefault"
// /> <li > ${todo.text}</li>
// </div>
// <div><button type="button" class="btn-close btn-close-white" disabled aria-label="Close"></button></div>
// </div>`;
//     })
//     .join("");
//   element.innerHTML = completedTodoList;
// });

// itemsLeft();
// document.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     createTodo();
//   }
// });

// changeImage.addEventListener("click", () => {
//   changeImage.style.display = "none";
//   changeImage1.style.display = "block";
// });
// changeImage1.addEventListener("click", () => {
//   changeImage1.style.display = "none";
//   changeImage.style.display = "block";
// });
// const img = document.createElement("img");
// img.src = "images/icon-moon.svg";
// changeImage.appendChild(img);

// const img1 = document.createElement("img");
// img1.src = "images/icon-sun.svg";
// changeImage1.appendChild(img1);
