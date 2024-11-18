`use strict`;

  function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
    }
    
  const createButton = document.querySelector("[data-create]");
  const destroyButton = document.querySelector("[data-destroy]");
  const boxes = document.querySelector("#boxes");
  const textInput = document.querySelector("input");

  createButton.addEventListener("click", createBoxes);
  destroyButton.addEventListener("click", destroyBoxes);

  function createBoxes() {
    boxes.innerHTML = "";
    const amount = parseInt(textInput.value);

    if (amount >= 1 && amount <= 100) {
      const fragment = document.createDocumentFragment();
      let boxSize = 30;

      for (let i = 0; i < amount; i++) {
        const block = document.createElement("div");
        block.style.width = `${boxSize}px`;
        block.style.height = `${boxSize}px`;
        block.style.backgroundColor = getRandomHexColor();
        fragment.appendChild(block);
        boxSize += 10;
      }

      boxes.appendChild(fragment);
    }

    textInput.value = "";
  }

  function destroyBoxes() {
    boxes.innerHTML = "";
  }