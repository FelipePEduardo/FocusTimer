import Timer from "./timer.js"
import Sound from "./sounds.js"
import { 
  buttonPlay,
  buttonStop,
  buttonAdd,
  buttonRemove,
  buttonForest,
  buttonRain,
  buttonCoffeShop,
  buttonFire,
  minutesDisplay,
  secondsDisplay, 
} from "./elements.js"

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  minutes,
})

const sound = Sound()

function toggleAudioPlay(myAudio) {
  let isPaused = myAudio.paused
  if (isPaused) {
    myAudio.play()
  } else {
    myAudio.pause()
  }
}

buttonPlay.addEventListener('click', function () {
  timer.countdown()
})

buttonStop.addEventListener('click', function () {
  timer.reset()
})

buttonAdd.addEventListener('click', function() {
  timer.increaseMinutes()
  
  /* minutes = Number(minutesDisplay.textContent)
  timer.updateDisplay(String(minutes + 5),0)*/
})

buttonRemove.addEventListener('click', function() {
  timer.decreaseMinutes()
  
  /* inutes = Number(minutesDisplay.textContent)
  if (minutes < 5 ) {
    minutes = 5
  }

  timer.updateDisplay(String(minutes - 5),0) */
})

buttonForest.addEventListener('click', function() {
  buttonForest.classList.toggle('onFocus')
  buttonRain.classList.remove('onFocus')
  buttonCoffeShop.classList.remove('onFocus')
  buttonFire.classList.remove('onFocus')
  toggleAudioPlay(sound.forestAudio)
  sound.rainAudio.pause()
  sound.coffeShopAudio.pause()
  sound.fireAudio.pause()
})

buttonRain.addEventListener('click', function() {
  buttonRain.classList.toggle('onFocus')
  buttonForest.classList.remove('onFocus')
  buttonCoffeShop.classList.remove('onFocus')
  buttonFire.classList.remove('onFocus')
  toggleAudioPlay(sound.rainAudio)
  sound.forestAudio.pause()
  sound.coffeShopAudio.pause()
  sound.fireAudio.pause()
})

buttonCoffeShop.addEventListener('click', function() {
  buttonCoffeShop.classList.toggle('onFocus')
  buttonForest.classList.remove('onFocus')
  buttonRain.classList.remove('onFocus')
  buttonFire.classList.remove('onFocus')
  toggleAudioPlay(sound.coffeShopAudio)
  sound.rainAudio.pause()
  sound.forestAudio.pause()
  sound.fireAudio.pause()
})

buttonFire.addEventListener('click', function() {
  buttonFire.classList.toggle('onFocus')
  buttonForest.classList.remove('onFocus')
  buttonRain.classList.remove('onFocus')
  buttonCoffeShop.classList.remove('onFocus')
  toggleAudioPlay(sound.fireAudio)
  sound.rainAudio.pause()
  sound.coffeShopAudio.pause()
  sound.forestAudio.pause()
})

