import { useState, useEffect } from "react";

function Timer() {

  // workTime
  const workMinutes = 25;
  const workSeconds = 0;

  // breakTime
  const breakMinutes = 5;
  const breakSeconds = 0;

  const [seconds, setSeconds] = useState(workSeconds);
  const [minutes, setMinutes] = useState(workMinutes);
  const [isActive, setIsActive] = useState(false);
  const [isWorking, setIsWorking] = useState(true);
  const [sessions, setSessions] = useState(1);

  const toggleWorking = () => {
    if (isWorking) {
      setSessions(sessions + 1)
      setIsWorking(false);
      setSeconds(breakSeconds);
      setMinutes(breakMinutes);
    } else {
      setIsWorking(true);
      setSeconds(workSeconds);
      setMinutes(workMinutes);
    }
  }

  useEffect(() => {
    let timerInterval;
    if (isActive) {
      timerInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timerInterval); // Stop the timer when it reaches 0:0
            setIsActive(false);
            toggleWorking();
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    }
    return () => clearInterval(timerInterval); // Cleanup on component unmount
  }, [seconds, minutes, isActive]);

  const startTimer = () => setIsActive(true);
  const pauseTimer = () => setIsActive(false);
  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  }
  const doneTimer = () => {
    setIsActive(false);
    toggleWorking();
  }


  return (
    <div className="Timer mt-10 mb-10">
      <h1 className="text-4xl mb-4" >{isWorking ? "Focus up!" : "Break time!"}</h1>
      <h2 className="text-5xl mb-10">{minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}</h2>

      <p>
      {minutes === 0 && seconds === 0 ? "Times up!": ""}  
      </p>

      <div className="flex gap-2">
        <button onClick={startTimer} >Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
        <button onClick={doneTimer} >Done</button>
      </div>

      <p>#{sessions}</p>
    </div>
  );
}

export default Timer;