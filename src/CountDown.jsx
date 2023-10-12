import React, { useState, useEffect } from "react";
import Timer from './components/timer.jsx'
import Footer from "./components/Footer.jsx";

export default function CountdownTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(null);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours((hours) => hours - 1);
          setMinutes(59);
          setSeconds(59);
        }
      }, 1000);
    }

    if (hours === 0 && minutes === 0 && seconds === 0) {
      resetTimer();
    }
    return () => clearInterval(interval);
  }, [seconds, minutes, hours, isRunning]);

  // Start Pause & Stop functions

  // Start
  function startTimer() {
    if (hours !== 0 || minutes !== 0 || seconds !== 0) {
      setIsRunning(true);
    } else {
      window.alert("Add Time.");
    }
  }

  // Pause
  function pauseTimer() {
    setIsRunning(false);
  }
  // Stop

  function stopTimer() {
    resetTimer();
  }

  function addFiveMinutes() {
    if (minutes == '00')
    setMinutes(5);
    else{
      setMinutes(minutes + 5)
    }
  }

  function resetTimer() {
    setIsRunning(false);
    setSeconds('00');
    setMinutes('00');
    setHours('00');
  }
  // Handlers

  const changeSeconds = (e) => {
    setSeconds(e.target.value);
  };
  const changeMinutes = (e) => {
    setMinutes(e.target.value);
  };
  const changeHours = (e) => {
    setHours(e.target.value);
  };
  return (
    <div className="h-screen grid grid-cols-1 grid-rows-4 place-items-center bg-gradient-to-t from-rose-400 to-red-500">
        <div className="self-end">
            <Timer
            seconds={seconds}
            minutes={minutes}
            hours={hours}
            changeSeconds={changeSeconds}
            changeMinutes={changeMinutes}
            changeHours={changeHours}
            />
        </div>
        <div className="flex space-x-4">
            {!isRunning && (
            <button className="hover:bg-gradient-to-r hover:from-teal-600 hover:to-emerald-500 border-2 text-white px-7 py-2 uppercase rounded tracking-wider cursor-pointer flex items-center space-x-2 hover:scale-110 duration-300" onClick={startTimer}>
                play
            </button>
            )}
            {isRunning && (
            <button className="hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-500 border-2 text-white px-7 py-2 uppercase rounded tracking-wider cursor-pointer flex items-center space-x-2 hover:scale-110 duration-300" onClick={pauseTimer}>
                pause
            </button>
            )}{" "}
            <button className="hover:bg-gradient-to-r hover:from-rose-800 hover:to-rose-600 border-2 text-white px-7 py-2 uppercase rounded tracking-wider cursor-pointer flex items-center space-x-2 hover:scale-110 duration-300" onClick={stopTimer}>
                stop
            </button>
            <button className="hover:bg-gradient-to-r hover:from-teal-600 hover:to-emerald-500 border-2 text-white px-3 py-2 rounded tracking-wider cursor-pointer flex items-center space-x-2 hover:scale-110 duration-300" onClick={addFiveMinutes}>
                + 5 Minutes
            </button>
        </div>
        <div>
          
        </div>
        <div >
          <Footer />
        </div>
    </div>
  );
}

