const canvas = document.querySelector('#canvas1')
const c = canvas.getContext('2d') 
canvas.width = innerWidth
canvas.height = innerHeight

class Player{
    constructor() {
        this.position = {
            x: 200,
            y: 200
        }

        this.velocity = {
            x: 0,
            y: 0
        }

        const image = new Image()
        image.src = './asset/starship.png'

        this.image = image
        this.width = 100
        this.height = 100
    }

    draw() {
       c.drawImage(this.image, this.position.x, this.position.y) 
    }
}

const player = new Player()

function animate() {
    requestAnimationFrame(animate)
    player.draw()
}

animate()