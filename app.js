const videoEl = document.querySelector('#video')
const audioEl = document.querySelector('#audio')
const audioName = document.querySelector('#audio-track-name')
const timerButtons = document.querySelectorAll('.timer-button')
const soundButtons = document.querySelectorAll('.sounds-button')
const backgroundButtons = document.querySelectorAll('.background-button')
const timerCountainer = document.querySelector('.timer-countdown-container')
const timerDisplay = document.querySelector('#timer-display')
const playButton = document.querySelector('#play')
const pauseButton = document.querySelector('#pause')
const resetButton = document.querySelector('#reset')

// Background Image Change
backgroundButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.id === 'overhead-beach-background') {
      videoEl.src = './Background videos/Overhead Beach.mp4'
    } else if (e.target.id === 'bubbles') {
      videoEl.src = './Background videos/Underwater Bubbles.mp4'
    }
  })
})

// Audio Change
soundButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.id === 'ocean-waves-1') {
      audioName.textContent = 'Waves Soothing'
      audioEl.src = './Meditation Sounds/Ocean-Waves-Relaxing.mp3'
    } else if (e.target.id === 'ocean-waves-2') {
      audioName.textContent = 'Waves Relaxing'
      audioEl.src = './Meditation Sounds/Ocean-Waves-Sound.mp3'
    } else if (e.target.id === 'sea-waves') {
      audioName.textContent = 'Sea Waves'
      audioEl.src = './Meditation Sounds/Sea-Waves.mp3'
    }
  })
})

// Timer Area Countdown
timerDisplay.textContent = '00 : 00'
let minutes

timerButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.value === '5') {
      minutes = '05'
    }
    if (e.target.value === '15') {
      minutes = '15'
    }
    if (e.target.value === '30') {
      minutes = '30'
    }
    if (e.target.value === '60') {
      minutes = '60'
    }

    //Set Starting Display
    timerDisplay.textContent = minutes + ': 00'

    // Turn Minutes into Seconds
    function getSeconds(min) {
      let countdownAmountSeconds = min * 60
      return countdownAmountSeconds
    }

    let seconds = getSeconds(minutes)

    // SetInterval
    let timerIntervalId

    // Play Function
    function playFunc() {
      timerIntervalId = setInterval(timerCountdown, 1000)
      playAudio()
    }

    // Display Countdown Function
    function timerCountdown() {
      seconds--
      let min = Math.floor(seconds / 60)
      let sec = seconds % 60

      if (min === 00 && sec === 00) {
        timerDisplay.textContent = 'Namaste, Have a great and positive day!'
        clearInterval(timerIntervalId)
        currentAudio.src = ''
        playButton.removeEventListener('click', playFunc)
      } else {
        if (min < 10) {
          min = '0' + min
        }
        if (sec < 10) {
          sec = '0' + sec
        }
        timerDisplay.textContent = min + ':' + sec
      }
    }

    // Play Button
    playButton.addEventListener('click', playFunc)

    // Pause Button
    pauseButton.addEventListener('click', () => {
      clearInterval(timerIntervalId)
      currentAudio.pause()
    })

    // Reset Button
    resetButton.addEventListener('click', () => {
      clearInterval(timerIntervalId)
      timerDisplay.textContent = '00 : 00'
      restartAudio()
      playButton.removeEventListener('click', playFunc)
    })
  })
})

// Choose Audio Track

// Audio Control
let currentAudio = document.querySelector('#audio')

function playAudio() {
  currentAudio.play()
  currentAudio.loop = true
}

function pauseAudio() {
  currentAudio.pause()
}

function restartAudio() {
  currentAudio.src = ''
}
