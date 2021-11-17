const textInput = document.querySelector("#text-input");
const output = document.querySelector("#output");

textInput.addEventListener("input", showError);

function showError() {
  var inputText = textInput.value;
  if (inputText.length > 10) {
    output.innerText = "Eror";
    output.style.color = "red";
  }
  if (inputText.length < 10) {
    output.innerText = "";
  }
}
