const canvas = document.querySelector('#draw')
const input = document.querySelector('input')
const selector = document.querySelector('select')

console.log(selector.value)

const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight - 15
ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 0
//ctx.globalCompositeOperation = 'source-out'

let isDrawing = false;
let lastX = 0
let lastY = 0
let hue = 0
let direction = true

function draw(e){
    if (!isDrawing) return
    console.log(e)
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath()
    //start from
    ctx.moveTo(lastX, lastY)
    //go to
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    lastX = e.offsetX
    lastY = e.offsetY
    hue++

    if( hue >= 360) hue = 0

    if ((ctx.lineWidth >= 40) || (ctx.lineWidth <= 1)) {
        direction = !direction
    }

    if (direction) {
       // ctx.lineWidth++
    } else {
        //ctx.lineWidth--
    }
}

function handleChangeInput(e) {
    ctx.lineWidth = this.value
}

function handleChangeSelect() {
    ctx.globalCompositeOperation = ''+this.value+''
    console.log(ctx.globalCompositeOperation)
}

function getGlobalCompositeOperation() {
    var gco = [ 'source-over','source-in','source-out','source-atop',
            'destination-over','destination-in','destination-out','destination-atop',
            'lighter', 'copy','xor', 'multiply', 'screen', 'overlay', 'darken',
            'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light',
            'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'
          ]
          console.log(gco)

          gco.map(el => {
              const o = document.createElement('option')
              o.text = `${el}`
              o.setAttribute('value', `${el}`)
              selector.options.add(o)
          })
}

getGlobalCompositeOperation()
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]
})
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)
input.addEventListener('change', handleChangeInput)
selector.addEventListener('change', handleChangeSelect)