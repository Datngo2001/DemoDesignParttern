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

class Level2Factory extends bulletFactory {

    constructor(context: any, player: any) {
        super(context, player)
    }
    public produceBullet(): bullet {
        var bullet = new BasicBulet({
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
        bullet.radius = 10
        return bullet
    }
}

class Level3Factory extends bulletFactory {
    useAdvance: boolean = true

    constructor(context: any, player: any) {
        super(context, player)
    }
    public produceBullet(): bullet {
        if (this.useAdvance) {
            this.useAdvance = !this.useAdvance
            return new addvanceBulet({
                context: this.c,
                position: {
                    x: this.player.position.x + this.player.width / 2,
                    y: this.player.position.y
                },
                velocity: {
                    x: 0,
                    y: -7
                }
            });
        } else {
            this.useAdvance = !this.useAdvance
            var bullet = new BasicBulet({
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
            bullet.radius = 10
            return bullet
        }
    }
}


class Level4Factory extends bulletFactory {

    constructor(context: any, player: any) {
        super(context, player)
    }
    public produceBullet(): bullet {
        return new addvanceBulet({
            context: this.c,
            position: {
                x: this.player.position.x + this.player.width / 2,
                y: this.player.position.y
            },
            velocity: {
                x: 0,
                y: -30
            }
        });
    }
}

class Level5Factory extends bulletFactory {

    constructor(context: any, player: any) {
        super(context, player)
    }
    public produceBullet(): bullet {
        var xvelocity = getRandomArbitrary(-5, 5)
        return new addvanceBulet({
            context: this.c,
            position: {
                x: this.player.position.x + this.player.width / 2,
                y: this.player.position.y
            },
            velocity: {
                x: xvelocity,
                y: -30
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

class addvanceBulet implements bullet {
    position: { x: number, y: number }
    velocity: { x: number, y: number }
    c: any
    bulletWidth = 10
    bulletHeight = 50

    constructor({ context, position, velocity }) {
        this.position = position
        this.velocity = velocity
        this.c = context
    }

    draw() {
        this.c.beginPath()
        this.c.rect(this.position.x - this.bulletWidth / 2, this.position.y - this.bulletHeight, this.bulletWidth, this.bulletHeight)
        this.c.fillStyle = 'Orange'
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

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}