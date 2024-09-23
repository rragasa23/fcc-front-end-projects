import "./JavaScriptCalculator.css";
import { useState } from "react";

function JavaScriptCalculator() {
  const [curr, setCurr] = useState("");
  const [equation, setEquation] = useState("");
  const [display, setDisplay] = useState("0");

  const updateNumber = (event) => {
    const value = event.target.value;
    if (value === "." && curr.includes(".")) {
      return;
    }
    if (curr === "0" && value !== ".") {
      setCurr(value);
      setEquation((prev) => prev.slice(0, -1) + value);
      setDisplay(value);
    } else {
      const updatedCurr = curr + value;
      setCurr(updatedCurr);
      setEquation((prev) => prev + value);
      setDisplay(updatedCurr);
    }
  };

  const updateOperator = (event) => {
    const value = event.target.value;
    const operatorRegex = /[+\-*/]/;
    const lastOperator = equation[equation.length - 1];
    const secondLastOperator = equation[equation.length - 2]; // need this to allow for neg values
    if (!operatorRegex.test(lastOperator)) {
      // if the last char is not an operator
      setEquation((prev) => prev + value);
      setDisplay(value);
      setCurr("");
    } else {
      // if the last char is an operator
      if (value === "-" && operatorRegex.test(secondLastOperator)) {
        return;
      } else if (value === "-" && !operatorRegex.test(secondLastOperator)) {
        setEquation((prev) => prev + value);
        setDisplay(value);
      } else if (!operatorRegex.test(secondLastOperator)) {
        setEquation((prev) => prev.slice(0, -1) + value);
        setDisplay(value);
      } else {
        setEquation((prev) => prev.slice(0, -2) + value);
        setDisplay(value);
      }
    }
  };

  const calculate = () => {
    const result = eval(equation);
    setDisplay(result);
    setEquation(result);
    setCurr("");
  };

  const clear = () => {
    setEquation("");
    setDisplay("0");
    setCurr("0");
  };

  return (
    <div className="container">
      <div className="input-output-container">
        <div className="input">
          <p>{equation}</p>
        </div>
        <div className="output" id="display">
          <p>{display}</p>
        </div>
      </div>
      <div className="button-wrapper">
        <button id="clear" onClick={clear}>
          AC
        </button>
        <button id="zero" value="0" onClick={updateNumber}>
          0
        </button>
        <button id="one" value="1" onClick={updateNumber}>
          1
        </button>
        <button id="two" value="2" onClick={updateNumber}>
          2
        </button>
        <button id="three" value="3" onClick={updateNumber}>
          3
        </button>
        <button id="four" value="4" onClick={updateNumber}>
          4
        </button>
        <button id="five" value="5" onClick={updateNumber}>
          5
        </button>
        <button id="six" value="6" onClick={updateNumber}>
          6
        </button>
        <button id="seven" value="7" onClick={updateNumber}>
          7
        </button>
        <button id="eight" value="8" onClick={updateNumber}>
          8
        </button>
        <button id="nine" value="9" onClick={updateNumber}>
          9
        </button>
        <button id="decimal" value="." onClick={updateNumber}>
          .
        </button>
        <button id="add" value="+" onClick={updateOperator}>
          +
        </button>
        <button id="subtract" value="-" onClick={updateOperator}>
          -
        </button>
        <button id="multiply" value="*" onClick={updateOperator}>
          *
        </button>
        <button id="divide" value="/" onClick={updateOperator}>
          /
        </button>
        <button id="equals" value="0" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default JavaScriptCalculator;
