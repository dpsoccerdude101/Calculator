/**
 * This is an array to hold the operators and operands to be evaluated
 */
let inputArray = [];

/**
 * This is a function that returns if a button has been clicked from the
 * event that is passed as parameter
 *
 * The event that is passed has a child element called
 * target. In this child element of target there will also be
 * a child of dataset. How do we test if this dataset element
 * has children of number or operator?
 *
 * Returns boolean
 */
function clickedButton(eventClick) {
  //The event must have a child of target and that target must have a non-empty child of dataset
  /**
   *
   */
  // Yay we can write here!!
  if (eventClick.target.dataset.number || eventClick.target.dataset.operator)
    return true;
  else return false;
}

/**
 * This is a variable that holds the reference to the output element
 */
let output = document.querySelector("output");

/**
 * This is a function that takes an string as a parameter
 * and updates the output of the calculator with what is passed
 * as the parameter
 */
function updateOutput(displayedNumbers) {
  output.innerText = displayedNumbers;
}

function handleEqualsOperator() {
  try {
    let inputString = inputArray.join("");
    let evaluation = String(math.evaluate(inputString));
    resetCalculator();
    inputArray = evaluation.split("");
    updateOutput(inputArray.join(""));
  } catch (error) {
    alert(error);
  }
  //console.log(evaluation);
}

/**
 * This is a function that enables the click listeners of the buttons
 */
document.addEventListener("click", function (e) {
  if (clickedButton(e)) {
    let dataset = e.target.dataset;
    let value;
    if (dataset.number) value = dataset.number;
    else value = dataset.operator;

    switch (value) {
      case "=":
        handleEqualsOperator();
        break;
      case "↺":
        inputArray.pop();
        break;
      default:
        inputArray.push(value);
    }
    updateOutput(inputArray.join(""));
  }
  //console.log(clickedButton(e));
  //console.dir(e.target.dataset);
});

/**
 * This is a function tht reset the input array and output element
 */
function resetCalculator() {
  inputArray = [];
  updateOutput(inputArray.join(""));
}

/**
 * Next Todos:
 * -Clear All
 *      Listened long-press on the rewind symbol
 *      Invoke resetCalculator()
 * -Add Parantheses, comma, and trigonometric functions as buttons
 * 
 * -Write code that can test sin(90 deg)
 *      sin(90 deg)
 *      Write tester function that uses regex
 * 
 * -State listener function
 * 
 * 
 */
