import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const Calculator = () => {
  const [firstINT, setFirstINT] = useState("");
  const [secondINT, setSecondINT] = useState("");
  const [output, setOutput] = useState("");

  //identify operators so that we can say after we've typed an op we now start the second integer
  const operators = ["÷", "x", "+", "-", "."];

  
  //update firstINT is going to let me take the number associated with my button and put that value in the display box.
  
  //if expression attempts to include an operator and there's no integer, and if the last input was a operator, return the current state. this way we can't type > 1 operator in a row

  //I want to say, if we typed an operator then go to the second integer. 
  const updateCalc = value => {
    if (
      operators.includes(value) && firstINT === '' ||
      operators.includes(value) && operators.includes(firstINT.slice(-1)
      ))
      {
        return
      }
      if (
        firstINT.includes(operators)
      )
      return secondINT
          
    setFirstINT (firstINT + value);
  };
  const updateCalc2 = value => {
    if (
      operators.includes(value) && secondINT === '' ||
      operators.includes(value) && operators.includes(secondINT.slice(-1)
      ))
      {
        return
      }
          
    setSecondINT (secondINT + value);
  };





  const Submit = () => {
    axios.post("/api/sum", {firstINT, secondINT})
  }


  return (
    <div className='calculator-grid'>
        <div className='display'>
          
          <div className='firstINT'>{firstINT}</div>
          <div className='secondINT'>{secondINT}</div>
        </div>
        {/* onclick remove last entered item, use put method  */}
        <button className='wide-btn span-two'> C</button>
        {/* onclick delete all everything use delete method */}
        <button>DEL</button>
        {/* onclick add their values to the display */}
        <button onClick={() => updateCalc("÷")}>÷</button>
        <button onClick={() => updateCalc("1")}>1</button>
        <button onClick={() => updateCalc("2")}>2</button>
        <button onClick={() => updateCalc("3")}>3</button>
        <button onClick={() => updateCalc("*")}>x</button>
        <button onClick={() => updateCalc("4")}>4</button>
        <button onClick={() => updateCalc("5")}>5</button>
        <button onClick={() => updateCalc("6")}>6</button>
        <button onClick={() => updateCalc("+")}>+</button>
        <button onClick={() => updateCalc("7")}>7</button>
        <button onClick={() => updateCalc("8")}>8</button>
        <button onClick={() => updateCalc("9")}>9</button>
        <button onClick={() => updateCalc("-")}>-</button>
        <button onClick={() => updateCalc(".")}>.</button>
        <button onClick={() => updateCalc("0")}>0</button>
        {/* when they hit = it will post the 2 integers and the math operator to the back - and the back will return the solution */}
        <button className='wide-btn span-two' onClick={Submit}>=</button>
    </div>
  )
}
export default Calculator;