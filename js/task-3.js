const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const valueInput = event.target.value.trim();
  nameOutput.textContent = valueInput === "" ? "Anonymous" : valueInput;
});
