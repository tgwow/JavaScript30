const panels = document.querySelectorAll('.panel')

function open(){
    this.classList.toggle('open')
}

function close(event){
    if (event.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
    
}

panels.forEach(panel => panel.addEventListener('click', open))
panels.forEach(panel => panel.addEventListener('transitionend', close))
