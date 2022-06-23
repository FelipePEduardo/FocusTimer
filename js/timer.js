export default function Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  minutes,
}) {
  let updateMinutes;

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0)

      if (isFinished) {
        return
      }

      if (seconds <= 0) {
        seconds = 60

        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function updateDefault(minutes) {
    updateMinutes = minutes
  }

  function increaseMinutes() {
    minutes = minutes < 60 ? Number(minutes) + 5 : (minutes = 5)
    
    updateDisplay(minutes, 0)
    updateDefault(minutes)
  }

  function decreaseMinutes() {
    minutes = minutes > 5 ? Number(minutes) - 5 : (minutes = 60)
    
    updateDisplay(minutes, 0)
    updateDefault(minutes)
  }


  return {
    countdown,
    reset,
    updateDisplay,
    updateDefault,
    increaseMinutes,
    decreaseMinutes
  }
}
