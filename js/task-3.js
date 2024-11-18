`use strict`;

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  if(event.target.value.trim() === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = event.target.value.trim();
  }
});
