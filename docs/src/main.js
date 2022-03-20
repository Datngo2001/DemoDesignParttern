const canvas = document.querySelector('#canvas1')
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

class Player {
    constructor() {
        this.velocity = {
            x: 0,
            y: 0
        }

        const image = new Image()
        image.src = './asset/starship.png'
        image.onload = () => {
            const scale = 1
            this.image = image
            this.width = image.width * scale
            this.height = image.height * scale
            this.position = {
                x: canvas.width / 2 - this.width / 2,
                y: canvas.height - this.height - 20
            }
        }
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        if (this.image) {
            this.draw()
            this.position.x += this.velocity.x
        }
    }
}

const player = new Player()
var currentFactory = new BasicFactory(c, player)
const projectiles = []
const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    space: {
        pressed: false
    }
}

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    projectiles.forEach((projectile, index) => {
        if (projectile.position.y <= 0) {
            setTimeout(() => {
                projectiles.splice(index, 1)
            }, 0);
        } else {
            projectile.update()
        }
    })

    if (keys.a.pressed == true && player.position.x > 0) {
        player.velocity.x = -5
    } else if (keys.d.pressed == true && player.position.x + player.width < canvas.width) {
        player.velocity.x = 5
    } else {
        player.velocity.x = 0
    }
}

animate()

addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'a':
            keys.a.pressed = true
            break;
        case 'd':
            keys.d.pressed = true
            break;
        case ' ':
            keys.space.pressed = true
            projectiles.push(currentFactory.produceBullet())
            break;

        default:
            break;
    }
})

addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a':
            keys.a.pressed = false
            break;
        case 'd':
            keys.d.pressed = false
            break;
        case ' ':
            keys.space.pressed = false
            break;

        default:
            break;
    }
})

// ############### Gun Selection ###############
const gunSelect = document.getElementById('gunSelect')
gunSelect.addEventListener('change', () => {
    switch (gunSelect.value) {
        case '1':
            currentFactory = new BasicFactory(c, player)
            break;
        case '2':
            currentFactory = new Level2Factory(c, player)
            break;
        case '3':
            currentFactory = new Level3Factory(c, player)
            break;
        case '4':
            currentFactory = new Level4Factory(c, player)
            break;
        case '5':
            currentFactory = new Level5Factory(c, player)
            break;
        default:
            break;
    }
})