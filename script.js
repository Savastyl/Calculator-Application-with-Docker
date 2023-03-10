const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    let value = this.innerHTML;
    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      display.value = eval(display.value);
    } else {
      display.value += value;
    }
  });
});
