const toDoForm = document.getElementById("todo-form");
// toDoForm안에 들어 있는 input
const toDoInput = toDoForm.querySelector("input");
// 결국 toDoInput = document.querySelector("#todo-input" input); 과 같은 말!
const toDoList = document.getElementById("todo-list");

function paintTodo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  // li > span 이 되도록 만들기
  li.appendChild(span);
  span.innerText = newToDo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  // submit의 특징을 막기 ~
  event.preventDefault();

  // 기존의 내용 저장 - input의 value를 새로운 변수에 복사하는 것
  const newToDo = toDoInput.value;

  // 새로고침시 input창  - newToDo에는 영향 없음
  toDoInput.value = "";

  paintTodo(newToDo);
}

//submit은 기본적으로 새로고침하는 특징
toDoForm.addEventListener("submit", handleToDoSubmit);
