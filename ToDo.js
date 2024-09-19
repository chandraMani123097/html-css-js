let inputs = document.getElementById("inp");
let inputs2 = document.getElementById("inpDate");
let text = document.querySelector(".text");
//

function Add() {
  if (inputs.value && inputs2.value === "") {
    alert("please enter task");
  } else {
    let newEl = document.createElement("ul");
    newEl.innerHTML = `${inputs.value}  on this Date- ${inputs2.value} <i class="fa-solid fa-trash"></i>`;
    text.appendChild(newEl);
    inputs.value = "";
    inputs2.value = "";
    newEl.querySelector("i").addEventListener("click", remove);
    function remove() {
      newEl.remove();
    }
  }
}
function Reset() {
  let dlt = document.querySelector(".a");

  if (text.value === "") {
    alert("Your ToDo is empty");
  } else {
    text.innerHTML = "";
  }
}
