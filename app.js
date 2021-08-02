const videoEl = document.querySelector('#video')
const audioEl = document.querySelector('#audio')
const timerButtons = document.querySelectorAll('.timer-button')
const soundButtons = document.querySelectorAll('.sounds-button')
const backgroundButtons = document.querySelectorAll('.background-button')

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
      audioEl.src = './Meditation Sounds/Ocean-Waves-Relaxing.mp3'
    } else if (e.target.id === 'ocean-waves-2') {
      audioEl.src = './Meditation Sounds/Ocean-Waves-Sound.mp3'
    } else if (e.target.id === 'sea-waves') {
      audioEl.src = './Meditation Sounds/Sea-Waves.mp3'
    }
  })
})
