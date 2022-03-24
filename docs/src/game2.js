const canvas = document.querySelector('#canvas1')
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight


// var currentFactory = new BasicFactory(c, player)
const enemys = []

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    console.log('OK')
    // projectiles.forEach((projectile, index) => {
    //     if (projectile.position.y <= 0) {
    //         setTimeout(() => {
    //             projectiles.splice(index, 1)
    //         }, 0);
    //     } else {
    //         projectile.update()
    //     }
    // })
}

animate()

// ############### Enemy Selection ###############
// const gunSelect = document.getElementById('levelSelect')
// gunSelect.addEventListener('change', () => {
//     switch (gunSelect.value) {
//         case '1':
//             currentFactory = new BasicFactory(c, player)
//             break;
//         case '2':
//             currentFactory = new Level2Factory(c, player)
//             break;
//         case '3':
//             currentFactory = new Level3Factory(c, player)
//             break;
//         case '4':
//             currentFactory = new Level4Factory(c, player)
//             break;
//         case '5':
//             currentFactory = new Level5Factory(c, player)
//             break;
//         default:
//             break;
//     }
// })