import { useState } from "react";
import styles from "../Calculator/Calculator.module.css"
export default function Calculator() {
    const [currentNumber, setCurrentNumber] = useState("");
    const [previousNumber, setPreviousNumber] = useState(""); 
    const [operation, setOperation] = useState(""); 

    function handleClick(e) {
        setCurrentNumber(prev => prev + e.target.value); 
    }

    function handleOperation(op) {
        if (currentNumber === "") return; 
        if (previousNumber !== "") {
            const result = calculate(previousNumber, currentNumber, operation);
            setCurrentNumber(result.toString());
        }
        setPreviousNumber(currentNumber); 
        setOperation(op); 
        setCurrentNumber(""); 
    }

    function calculate(num1, num2, op) {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        switch (op) {
            case "+":
                return n1 + n2;
            case "-":
                return n1 - n2;
            case "*":
                return n1 * n2;
            case "/":
                return n2 !== 0 ? n1 / n2 : "Error"; 
            default:
                return 0;
        }
    }

    function handleEqual() {
        if (currentNumber === "" || previousNumber === "") return; 
        const result = calculate(previousNumber, currentNumber, operation);
        setCurrentNumber(result.toString()); 
        setPreviousNumber(""); 
        setOperation(""); 
    }

    function handleClear() {
        setCurrentNumber("");
        setPreviousNumber("");
        setOperation("");
    }
    return (
        <>
        <div className={styles.container}>
        <h1>Simple Calc</h1>
            <div className="calc">
                <div className="calc-container">
                    <div className="calc-header">
                        <h4>{currentNumber}</h4>
                    </div>
                    <div className={styles.calcbody}>
                        <button onClick={handleClick} value={9}>9</button>
                        <button onClick={handleClick} value={8}>8</button>
                        <button onClick={handleClick} value={7}>7</button>
                        <button onClick={handleClick} value={6}>6</button>
                        <button onClick={handleClick} value={5}>5</button>
                        <button onClick={handleClick} value={4}>4</button>
                        <button onClick={handleClick} value={3}>3</button>
                        <button onClick={handleClick} value={2}>2</button>
                        <button onClick={handleClick} value={1}>1</button>
                        <button onClick={() => handleOperation("/")}>/</button>
                        <button onClick={() => handleOperation("*")}>*</button>
                        <button onClick={() => handleOperation("-")}>-</button>
                        <button onClick={() => handleOperation("+")}>+</button>
                        <button onClick={handleEqual}>=</button>
                        <button onClick={handleClear}>C</button> {/* Clear button */}
                    </div>
                </div>
            </div>
        </div>
           
        </>
    );
}