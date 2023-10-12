import React from 'react'


export default function Timer({seconds, minutes, hours, changeSeconds, changeMinutes, changeHours}) {
  return (
    <>
    <div className='flex space-x-2 lg:p-5 p-2 border-2 border-white rounded-md'>
      <div><input value={hours} onChange={changeHours} className='focus:outline-none w-28 text-4xl text-center border-2 border-white bg-transparent text-white px-7 py-2 uppercase rounded tracking-wider cursor-pointer flex items-center space-x-2 font-Lora'/></div>
      <div><input value={minutes} onChange={changeMinutes} className='focus:outline-none w-28 text-4xl text-center border-2 border-white  bg-transparent text-white px-7 py-2 uppercase rounded tracking-wider cursor-pointer flex items-center space-x-2 font-Lora'/></div>
      <div><input value={seconds} onChange={changeSeconds} className='focus:outline-none w-28 text-4xl text-center border-2 border-white  bg-transparent text-white px-7 py-2 uppercase rounded tracking-wider cursor-pointer flex items-center space-x-2 font-Lora'/></div>
    </div>
    </>
  )
}
