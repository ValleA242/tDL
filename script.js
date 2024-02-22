const btn = document.querySelector(".addItem");
const form = document.querySelector(".mainForm");
const list = document.querySelector(".toDoList");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputValue = document.querySelector("#listItem").value;
  const newLi = document.createElement("li");
  newLi.innerText = inputValue;
  const delBtnCreate = document.createElement("button");
  delBtnCreate.textContent = "Delete";
  delBtnCreate.className = "deleteButton";
  list.append(newLi, delBtnCreate);
  delBtnCreate.addEventListener("click", function (e) {
    newLi.remove();
    delBtnCreate.remove();
  });
});
