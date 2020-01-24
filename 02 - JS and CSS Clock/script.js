const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setData() {
    const now = new Date()

    const seconds = now.getSeconds()
    const secondsHand = ((seconds / 100) * 360) + 90

    const mins = now.getMinutes()
    const minsHand = ((mins / 60) * 360) + 90

    const hours = now.getHours();
    const hoursHand = ((hours / 24) * 360) + 90;
    
    secondHand.style.transform = `rotate(${secondsHand}deg)`
    minHand.style.transform = `rotate(${minsHand}deg)`
    hourHand.style.transform = `rotate(${hoursHand}deg)`

}

setInterval(setData, 1000)
