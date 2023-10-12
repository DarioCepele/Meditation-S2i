import React from 'react'
import { Link } from 'react-router-dom'
import meditation from './assets/meditation.svg'
import Footer from './components/footer'

function App() {

  return (
    <>
      <div className='h-screen grid lg:grid-cols-2 lg:grid-rows-2 place-items-center bg-gradient-to-t from-rose-400 to-red-500'>
        <div className='lg:mt-96 mt-32'>
          <h1 className='text-white text-5xl md:text-6xl font-Libre '>MeditateNow</h1>
          <button className='font-Oswald mt-6 lg:mt-8 border-2 px-4 py-2 text-sm lg:text-xl uppercase rounded hover:bg-white hover:text-rose-500 dark:hover:text-slate-700 text-white tracking-wider cursor-pointer hover:scale-105 duration-300 '><Link to={'CountDown'}>GET STARTED</Link></button>
        </div>
        <div>
        <img src={meditation} alt="logo" className='w-[300px] lg:w-[700px] lg:mt-96 '/>
        </div>
       <footer className='lg:col-start-1 lg:col-end-3 self-end mb-10'>
        <Footer />
       </footer>
      </div>
    </>
  )
}

export default App
