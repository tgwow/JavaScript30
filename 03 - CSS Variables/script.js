const inputs = document.querySelectorAll('.controls input')
const root = document.getRootNode;
function handleChange(e) {
    const suffix = this.dataset.sizing || '';
    
    //root.style.setProperty('--spacing', this.value + 'px')
     document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => {
    input.addEventListener('change', handleChange)
})
inputs.forEach(input => {
    input.addEventListener('mousemove', handleChange)
})
