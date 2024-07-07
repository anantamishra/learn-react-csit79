import React, { useState } from 'react';

export default function App() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('');

  function handleChange1(e) {
    setValue1(e.target.value);
  }
  function handleChange2(e) {
    setValue2(e.target.value);
  }
  function add() {
    setResult(Number(value1) + Number(value2))
  }


  return (
    <div className='flex w-full min-h-screen justify-center items-center flex-col gap-5'>
      <div className='flex gap-5'>
        <input value={value1} onChange={handleChange1} className='border-black border-2 rounded px-4 py-2' />
        <input value={value2} onChange={handleChange2} className='border-black border-2 rounded px-4 py-2' />
      </div>
      <button onClick={add} className='px-4 py-2 bg-blue-600 rounded text-white'>
        Add
      </button>
      <p>{result}</p>
    </div>
  );
}

