import React, { useState } from 'react';

function CalculatorApp() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const buttonItems = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '%', '+', 'C', '='];

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
        <div className="flex items-center w-full justify-center h-screen bg-[#0f172a] flex-col gap-5">
            <p className='text-xl font-bold text-white'>Simple Calculator App</p>
            <div className="w-1/2 bg-gradient-to-br from-purple-400 to-orange-300 p-6 rounded-lg shadow-lg">
                <div className="bg-[#0f172a] p-4 rounded-lg text-right mb-4 text-white flex flex-col">
                    <input className="caret-[#0f172a] bg-inherit text-right" disabled value={input} />
                    <input className="text-4xl font-bold caret-[#0f172a] bg-inherit text-right" disabled value={result} />
                </div>
                <div className="buttons grid grid-cols-4 gap-2">
                    {buttonItems.map((value, index) => (
                        <button
                            key={value}
                            className={`bg-[#0f172a] p-4 rounded-lg shadow-md text-xl font-semibold text-white hover:bg-[#383d4b] ${index >= buttonItems.length - 2 ? 'col-span-2' : ''}`}
                            onClick={() => handleButtonClick(value)}
                        >
                            {value}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CalculatorApp;

