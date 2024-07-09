import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeButton, setActiveButton] = useState(null);
  const [value, setValue] = useState(0);

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
    if (activeButton === "add") {
      setValue(value + 1);
    }
    else if (activeButton === "subtract") {
      setValue(value - 1);
    }
  };

  return (
    <div className="justify-center flex items-center min-h-screen w-full gap-5">
      <button
        className={` px-5 py-4 rounded-lg ${activeButton === 'add' ? 'bg-red-500' : 'bg-emerald-300'}`}
        onClick={() => handleClick('add')}
      >
        Add
      </button>
      <button
        className={` px-5 py-4 rounded-lg ${activeButton === 'subtract' ? 'bg-red-500' : 'bg-emerald-300'}`}
        onClick={() => handleClick('subtract')}
      >
        Subtract
      </button>
      <h1>{value}</h1>
    </div>
  );
}

export default App;
