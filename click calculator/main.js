function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}


function calculate() {
  try {
    var display = document.getElementById("display").value;
    var result = eval(display);
     document.getElementById("display").value = result;
   
  } catch (error) {
    alert("Error " + error.message);
    clearDisplay();
  }
}
