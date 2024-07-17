import React, { useState } from 'react';

function CalculatorApp() {
    return (
        <div className="flex items-center w-full justify-center h-screen bg-white">
            <Calculator />
        </div>
    );
}

export default CalculatorApp;



export const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            calculateResult();
        } else if (value === 'C') {
            clearInput();
        } else {
            setInput(input + value);
        }
    };

    const calculateResult = () => {
        try {
            setResult(eval(input).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    function clearInput() {
        setInput('');
        setResult('');
    };

    return (
        <div className=" w-1/2 bg-gradient-to-br from-purple-400 to-orange-300 p-6 rounded-lg shadow-lg">
            <div className="display bg-white p-4 rounded-lg text-right mb-4">
                <div className="text-gray-600 text-sm py-10">{input}</div>
                <div className="text-4xl font-bold">{result}</div>
            </div>
            <div className="buttons grid grid-cols-4 gap-2">
                {['7', '8', '9', '/'].map((value) => (
                    <button key={value} className="button" onClick={() => handleButtonClick(value)}>{value}</button>
                ))}
                {['4', '5', '6', '*'].map((value) => (
                    <button key={value} className="button" onClick={() => handleButtonClick(value)}>{value}</button>
                ))}
                {['1', '2', '3', '-'].map((value) => (
                    <button key={value} className="button" onClick={() => handleButtonClick(value)}>{value}</button>
                ))}
                {['0', '.', '=', '+'].map((value) => (
                    <button key={value} className="button col-span-1" onClick={() => handleButtonClick(value)}>{value}</button>
                ))}
                <button className="button col-span-2" onClick={() => handleButtonClick('C')}>C</button>
                <button className="button col-span-2" onClick={() => handleButtonClick('%')}>%</button>
            </div>
        </div>
    );
};
