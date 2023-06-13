// TO-DO !
let todoList = JSON.parse(localStorage.getItem("todoData")) || [];

// let todoList = [];

const todoListElement = document.querySelector("#myUL");
const theamMode = document.getElementById("theamMode");
const headerBG = document.getElementById("headerBG");
const bgColor = document.querySelector(".bgColor");
const bgColorDiv = document.querySelectorAll(".bgColorDiv");

// document.querySelector("#add_button").addEventListener("click", addTodo);
document.querySelector("#myInput").addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    addTodo();
  }
});

//-------GETTING VALUES FROM INPUT TO ARRAY OF OBJECTS-------
function addTodo() {
  const todoText = document.querySelector("#myInput").value;

  if (todoText == "") {
    alert("You did not enter any item");
  } else {
    const todoObject = {
      id: Math.trunc(Math.random() * 1000),
      todoText: todoText,
      isDone: false,
    };

    //---WITH UNSHIFT WE ADD THE NEW ELEMENT TO THE BEGINNING OF THE ARRAY
    //--SO THAT THE NEW ITEMS SHOW UP ON TOP
    todoList.unshift(todoObject);
    localStorage.setItem("todoData", JSON.stringify(todoList));
    const getTodo = JSON.parse(localStorage.getItem("todoData"));
    displayTodos(getTodo);
  }
}

//------CHANGING THE isDone VALUE TO TRUE WHEN THE ELEMENT IS CLICKED
//------OR TO FALSE IF IT WAS TRUE BEFORE
function doneTodo(todoId) {
  // const selectedTodoIndex = todoList.findIndex((item) => item.id == todoId);
  // console.log(todoList, selectedTodoIndex, todoId);
  // todoList[selectedTodoIndex].isDone
  //   ? (todoList[selectedTodoIndex].isDone = false)
  //   : (todoList[selectedTodoIndex].isDone = true);
  // console.log(todoList);
  const newTodo = todoList.map((todo) => {
    if (todoId == todo.id) {
      return { ...todo, isDone: !todo.isDone };
    } else {
      return todo;
    }
  });
  // console.log(newTodo);
  localStorage.setItem("todoData", JSON.stringify(newTodo));
  location.reload();
  // localStorage.clear("todoData", todoId);
  // localStorage.clear();
  displayTodos(newTodo);
}

function deleteItem(x) {
  const oldTodo = [...todoList];
  console.log(oldTodo);
  // todoList.splice(
  //   todoList.findIndex((item) => item.id == x),
  //   1
  // );
  // console.log(x);
  const newTodo = oldTodo.filter((todo) => todo.id != x);
  // console.log(newTodo);
  localStorage.setItem("todoData", JSON.stringify(newTodo));

  location.reload();
  // const removeTodo = JSON.clear(localStorage.getItem("todoData"));
  displayTodos(newTodo);
}

//---------DISPLAYING THE ENTERED ITEMS ON THE SCREEN------
function displayTodos(todoList) {
  todoListElement.innerHTML = "";
  document.querySelector("#myInput").value = "";

  todoList.forEach((item) => {
    const listElement = document.createElement("div");
    const innerDivlistElement = document.createElement("div");
    // const inputElement = document.createElement("input");
    const checkElement = document.createElement("check");
    // const gradientElement = document.createElement("gradient1");
    const liElement = document.createElement("li");
    const buttonDivElement = document.createElement("div");
    const buttonElement = document.createElement("button");

    // container styling
    listElement.classList.add("list-item-space", "liBoard");

    // innerDivlistElement styling
    innerDivlistElement.classList.add("list-item");

    // inputElement styling
    // inputElement.classList.add("form-check-input", "rounded-5", "isCompleted");
    checkElement.classList.add("checkBox");
    //

    // liElement styling
    liElement.classList.add("test");

    // buttonElement styling
    buttonElement.classList.add("btn-close", "btn-close-white");

    // set attributes
    // inputElement.setAttribute("type", "checkbox");

    // inputElement.setAttribute("value", "");
    // inputElement.setAttribute("id", item.id);
    checkElement.setAttribute("id", item.id);

    liElement.setAttribute("id", item.id);
    liElement.innerHTML = item.todoText;

    buttonElement.setAttribute("id", item.id);
    buttonElement.setAttribute("type", "button");
    buttonElement.setAttribute("aria-label", "close");

    // append childs

    innerDivlistElement.appendChild(checkElement);
    // innerDivlistElement.appendChild(inputElement);
    innerDivlistElement.appendChild(liElement);

    buttonDivElement.appendChild(buttonElement);

    listElement.appendChild(innerDivlistElement);
    listElement.appendChild(buttonDivElement);

    if (item.isDone) {
      // inputElement.setAttribute("checked", true);
      checkElement.setAttribute("checked", true);
      checkElement.classList.add("gradient");
      liElement.classList.add("isCompleted");
    }

    // inputElement.addEventListener("click", function (e) {
    //   console.log(e);
    //   const selectedId = e.target.getAttribute("id");
    //   doneTodo(selectedId);
    // });
    checkElement.addEventListener("click", function (e) {
      console.log("click");
      console.log(e);
      const selectedId = e.target.getAttribute("id");
      doneTodo(selectedId);
    });

    buttonDivElement.addEventListener("click", function (e) {
      const delId = e.target.getAttribute("id");
      deleteItem(delId);
    });

    todoListElement.appendChild(listElement);
  });
  itemsLeft();
  // console.log(todoList);
}

const items = document.querySelector("#itemsLeft");
const all = document.querySelector("#all");
const active = document.querySelector("#active");
const completed = document.querySelector("#complete");
const clearCompleted = document.querySelector("#clearCompleted");

const itemsLeft = () => {
  if (todoList.length >= 1) {
    items.innerText = `${todoList.length} items left`;
  } else {
    items.innerHTML = "0 items left";
  }
};
itemsLeft();

all.addEventListener("click", () => {
  displayTodos(todoList);
  all.classList.add("isActive");
  active.classList.remove("isActive");
  completed.classList.remove("isActive");
});

active.addEventListener("click", (e) => {
  let newlist = todoList.filter((item) => item.isDone == false);
  displayTodos(newlist);
  active.classList.add("isActive");
  all.classList.remove("isActive");
  completed.classList.remove("isActive");
});

completed.addEventListener("click", (e) => {
  let newlist = todoList.filter((item) => item.isDone == true);
  displayTodos(newlist);
  completed.classList.add("isActive");
  active.classList.remove("isActive");
  all.classList.remove("isActive");
});

clearCompleted.addEventListener("click", () => {
  let newlist = todoList.filter((item) => item.isDone == false);
  todoList = newlist;
  localStorage.setItem("todoData", JSON.stringify(newlist));
  location.reload();
  displayTodos(todoList);
});

theamMode.addEventListener("click", () => {
  if (theamMode.getAttribute("src") == "images/icon-sun.svg") {
    theamMode.src = "images/icon-moon.svg";
    headerBG.src = "images/bg-desktop-light.jpg";
    bgColor.style.backgroundColor = "#fafafa";
    bgColorDiv.forEach((elem) => (elem.style.backgroundColor = "#ffffff"));
  } else {
    theamMode.src = "images/icon-sun.svg";
    headerBG.src = "images/bg-desktop-dark.jpg";
    bgColor.style.backgroundColor = "#181724";
    bgColorDiv.forEach((elem) => (elem.style.backgroundColor = "#25263c"));
  }
});

displayTodos(todoList);
