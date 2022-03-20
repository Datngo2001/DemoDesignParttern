// ################ FACTORY ################
abstract class bulletFactory {
    c: any
    player: any
    constructor(context: any, player: any) {
        this.c = context
        this.player = player
    }
    public abstract produceBullet(): bullet;
}

class BasicFactory extends bulletFactory {

    constructor(context: any, player: any) {
        super(context, player)
    }
    public produceBullet(): bullet {
        return new BasicBulet({
            context: this.c,
            position: {
                x: this.player.position.x + this.player.width / 2,
                y: this.player.position.y
            },
            velocity: {
                x: 0,
                y: -5
            }
        });
    }
}
// ############### END REGION ###############


// ################ PRODUCT ################
interface bullet {
    draw(): void;
    update(): void;
}

class BasicBulet implements bullet {
    position: { x: number, y: number }
    velocity: { x: number, y: number }
    radius: number
    c: any

    constructor({ context, position, velocity }) {
        this.position = position
        this.velocity = velocity
        this.radius = 3
        this.c = context
    }

    draw() {
        this.c.beginPath()
        this.c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        this.c.fillStyle = 'Red'
        this.c.fill()
        this.c.closePath()
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

// ############### END REGION ###############