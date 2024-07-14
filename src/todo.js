import React from 'react'

export default function TODO() {
    return (
        <div className='flex min-h-screen w-full justify-center items-center flex-col'>
            <div className='p-10 shadow rounded border flex flex-col gap-2'>
                <h1 className='font-bold'>TO DOs</h1>
                <div className='flex gap-2'>
                    <input type="text" placeholder="Add to item" className='border border-black p-2 rounded' />
                    <button className=' bg-red-500 rounded-sm text-white font-bold h-10 w-10 flex justify-center items-center'>+</button>
                </div>
                <div>
                    <input type="checkbox" id="input1" name="input1" value="Car" />
                    <label for="input1"> I have a car</label>
                </div>
                <div>
                    <input type="checkbox" id="input1" name="input1" value="Car" />
                    <label for="input1" className='line-through'> I have a car</label>
                </div>
            </div>
        </div>
    )
}
