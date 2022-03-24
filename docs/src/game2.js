const canvas = document.querySelector('#canvas1')
const spawnBtn = document.querySelector('#spawnBtn')
const clearBtn = document.querySelector('#clearBtn')
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight


var currentFactory = new Level1EnemyFactory(c, canvas)
var enemies = []

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    enemies.forEach((enemy) => {
        enemy.update()
    })
}

animate()

// ############### Spaw Enemy ###############
spawnBtn.addEventListener('click', () => {
    for (let i = 0; i < 5; i++) {
        enemies.push(currentFactory.spawnWeakEnemy());
        enemies.push(currentFactory.spawnStrongEnemy());
    }
    spawnBtn.disabled = true
    clearBtn.disabled = false
})

// ############### Clear Enemy ###############
clearBtn.addEventListener('click', () => {
    enemies = []
    spawnBtn.disabled = false
    clearBtn.disabled = true
})

// ############### Enemy Selection ###############
const gunSelect = document.getElementById('levelSelect')
gunSelect.addEventListener('change', () => {
    switch (gunSelect.value) {
        case '1':
            currentFactory = new Level1EnemyFactory(c, canvas)
            break;
        case '2':
            currentFactory = new Level2EnemyFactory(c, canvas)
            break;
        case '3':
            currentFactory = new Level3EnemyFactory(c, canvas)
            break;
        case '4':
            currentFactory = new Level4EnemyFactory(c, canvas)
            break;
        case '5':
            currentFactory = new Level5EnemyFactory(c, canvas)
            break;
        default:
            break;
    }
})