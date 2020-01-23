function playSound(e){
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if(!sound) return

    sound.currentTime = 0;
    sound.play()
    
    key.classList.add('playing')
    
    key.ontransitionend = () => {
        key.classList.remove('playing')
    }
}

window.addEventListener('keydown', playSound)