(() => {
  let inputArray = [];
  const output = document.getElementsByTagName("output")[0];

  const clickedButton = (eventClick) => {
    return eventClick.target.dataset;
  };

  const setOutput = (displayedNumbers) => {
    console.log(displayedNumbers);
    output.innerText = displayedNumbers;
  };

  const handleEqualsOperator = () => {
    const inputString = inputArray.join("");
    try {
      const evaluation = String(math.evaluate(inputString));
      resetCalculator();
      inputArray = evaluation.split("");
      console.dir(inputArray);
      setOutput(inputArray.join(""));
    } catch (error) {
      alert(error);
    }
  };

  const enableClickListeners = () => {
    document.addEventListener("click", function (e) {
      //clickedButton(event) == Does this click event's source
      // element correspond to a dataset attribute
      if (clickedButton(e)) {
        const dataSet = clickedButton(e);
        let value;
        if (dataSet.number) value = dataSet.number;
        else value = dataSet.operator;
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
        setOutput(inputArray.join(""));
      }
    });
  };

  enableClickListeners();

  resetCalculator = () => {
    inputArray = [];
    setOutput(inputArray.join(""));
  };
})();
