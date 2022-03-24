// ################ FACTORY ################
interface AbstractFactory {
    spawnWeakEnemy(): AbstractWeakEnemy;

    spawnStrongEnemy(): AbstractStrongEnemy;
}

class Level1EnemyFactory implements AbstractFactory {

    c: any
    cv: any
    distance: number = 150
    spawnStartWeak: number = 0
    spawnStartStrong: number = 0
    constructor(context: any, canvas: any) {
        this.c = context;
        this.cv = canvas
    }

    public spawnWeakEnemy(): AbstractWeakEnemy {
        this.spawnStartWeak += this.distance
        return new WeakEnemyLevel1({
            context: this.c,
            canvas: this.cv,
            position: {
                x: this.spawnStartWeak,
                y: 10
            },
            velocity: {
                x: 5,
                y: 0
            }
        });
    }

    public spawnStrongEnemy(): AbstractStrongEnemy {
        this.spawnStartStrong += this.distance
        return new StrongEnemyLevel1({
            context: this.c,
            canvas: this.cv,
            position: {
                x: this.spawnStartStrong,
                y: 70
            },
            velocity: {
                x: 5,
                y: 0
            }
        });
    }
}

class Level2EnemyFactory implements AbstractFactory {
    c: any
    cv: any
    distance: number = 150
    spawnStartWeak: number = 0
    spawnStartStrong: number = 0
    constructor(context: any, canvas: any) {
        this.c = context;
        this.cv = canvas
    }

    public spawnWeakEnemy(): AbstractWeakEnemy {
        this.spawnStartWeak += this.distance
        return new WeakEnemyLevel2({
            context: this.c,
            canvas: this.cv,
            position: {
                x: this.spawnStartWeak,
                y: 10
            },
            velocity: {
                x: 5,
                y: 0
            }
        });
    }

    public spawnStrongEnemy(): AbstractStrongEnemy {
        this.spawnStartStrong += this.distance
        return new StrongEnemyLevel1({
            context: this.c,
            canvas: this.cv,
            position: {
                x: this.spawnStartStrong,
                y: 70
            },
            velocity: {
                x: 5,
                y: 0
            }
        });
    }
}

class Level3EnemyFactory implements AbstractFactory {
    c: any
    cv: any
    distance: number = 150
    spawnStartWeak: number = 0
    spawnStartStrong: number = 0
    constructor(context: any, canvas: any) {
        this.c = context;
        this.cv = canvas
    }

    public spawnWeakEnemy(): AbstractWeakEnemy {
        this.spawnStartWeak += this.distance
        return new WeakEnemyLevel1({
            context: this.c,
            canvas: this.cv,
            position: {
                x: this.spawnStartWeak,
                y: 10
            },
            velocity: {
                x: 5,
                y: 0
            }
        });
    }

    public spawnStrongEnemy(): AbstractStrongEnemy {
        this.spawnStartStrong += this.distance
        return new StrongEnemyLevel2({
            context: this.c,
            canvas: this.cv,
            position: {
                x: this.spawnStartStrong,
                y: 70
            },
            velocity: {
                x: 5,
                y: 0
            }
        });
    }
}

class Level4EnemyFactory implements AbstractFactory {
    c: any
    cv: any
    distance: number = 130
    spawnStartWeak: number = 0
    spawnStartStrong: number = 0
    constructor(context: any, canvas: any) {
        this.c = context;
        this.cv = canvas
    }

    public spawnWeakEnemy(): AbstractWeakEnemy {
        this.spawnStartWeak += this.distance
        return new WeakEnemyLevel2({
            context: this.c,
            canvas: this.cv,
            position: {
                x: this.spawnStartWeak,
                y: 10
            },
            velocity: {
                x: 5,
                y: 5
            }
        });
    }

    public spawnStrongEnemy(): AbstractStrongEnemy {
        this.spawnStartStrong += this.distance
        return new StrongEnemyLevel2({
            context: this.c,
            canvas: this.cv,
            position: {
                x: this.spawnStartStrong,
                y: 70
            },
            velocity: {
                x: 5,
                y: 0
            }
        });
    }
}

class Level5EnemyFactory implements AbstractFactory {
    c: any
    cv: any
    distance: number = 130
    spawnStartWeak: number = 0
    spawnStartStrong: number = 0

    constructor(context: any, canvas: any) {
        this.c = context;
        this.cv = canvas
    }

    public spawnWeakEnemy(): AbstractWeakEnemy {
        this.spawnStartWeak += this.distance
        return new WeakEnemyLevel2({
            context: this.c,
            canvas: this.cv,
            position: {
                x: this.spawnStartWeak,
                y: 10
            },
            velocity: {
                x: 5,
                y: 0
            }
        });
    }

    public spawnStrongEnemy(): AbstractStrongEnemy {
        this.spawnStartStrong += this.distance
        return new StrongEnemyLevel2({
            context: this.c,
            canvas: this.cv,
            position: {
                x: this.spawnStartStrong,
                y: 70
            },
            velocity: {
                x: 5,
                y: 5
            }
        });
    }
}
// ############### END REGION ###############


// ################ PRODUCT ################
interface AbstractWeakEnemy {
    draw(): void;
    update(): void;
    loadImage(canvas): void;
}

class WeakEnemyLevel1 implements AbstractWeakEnemy {

    c: any
    cv: any
    image: any
    width: number
    height: number
    position: { x: number, y: number }
    velocity: { x: number, y: number }

    constructor({ context, canvas, position, velocity }) {
        this.c = context
        this.cv = canvas
        this.position = position
        this.velocity = velocity

        this.loadImage(canvas);
    }

    loadImage(canvas): void {
        const image = new Image()
        image.src = './asset/game2/weakEnemyLevel1.png'
        image.onload = () => {
            const scale = 1
            this.image = image
            this.width = image.width * scale
            this.height = image.height * scale
        }
    }

    draw(): void {
        this.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }

    update(): void {
        if (this.image) {
            if (this.position.x < 0 || (this.position.x + this.width) > this.cv.width) {
                this.velocity.x = - this.velocity.x
            }
            this.position.x += this.velocity.x
            this.draw()
        }
    }
}

class WeakEnemyLevel2 implements AbstractWeakEnemy {

    c: any
    cv: any
    image: any
    width: number
    height: number
    position: { x: number, y: number }
    velocity: { x: number, y: number }

    constructor({ context, canvas, position, velocity }) {
        this.c = context
        this.cv = canvas
        this.position = position
        this.velocity = velocity

        this.loadImage(canvas);
    }

    loadImage(canvas): void {
        const image = new Image()
        image.src = './asset/game2/weakEnemyLevel2.png'
        image.onload = () => {
            const scale = 1
            this.image = image
            this.width = image.width * scale
            this.height = image.height * scale
        }
    }

    draw(): void {
        this.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }

    update(): void {
        if (this.image) {
            if (this.position.x < 0 || (this.position.x + this.width) > this.cv.width) {
                this.velocity.x = - this.velocity.x
            }
            if (this.position.y < 0 || (this.position.y + this.height) > this.cv.height) {
                this.velocity.y = - this.velocity.y
            }
            this.position.x += this.velocity.x
            this.position.y += this.velocity.y
            this.draw()
        }
    }
}

interface AbstractStrongEnemy {
    draw(): void;
    update(): void;
    loadImage(canvas): void;
}

class StrongEnemyLevel1 implements AbstractStrongEnemy {

    c: any
    cv: any
    image: any
    width: number
    height: number
    position: { x: number, y: number }
    velocity: { x: number, y: number }

    constructor({ context, canvas, position, velocity }) {
        this.c = context
        this.cv = canvas
        this.position = position
        this.velocity = velocity

        this.loadImage(canvas);
    }

    loadImage(canvas): void {
        const image = new Image()
        image.src = './asset/game2/strongEnemyLevel1.png'
        image.onload = () => {
            const scale = 1
            this.image = image
            this.width = image.width * scale
            this.height = image.height * scale
        }
    }

    draw(): void {
        this.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }

    update(): void {
        if (this.image) {
            if (this.position.x < 0 || (this.position.x + this.width) > this.cv.width) {
                this.velocity.x = - this.velocity.x
            }
            this.position.x += this.velocity.x
            this.draw()
        }
    }
}

class StrongEnemyLevel2 implements AbstractStrongEnemy {

    c: any
    cv: any
    image: any
    width: number
    height: number
    position: { x: number, y: number }
    velocity: { x: number, y: number }

    constructor({ context, canvas, position, velocity }) {
        this.c = context
        this.cv = canvas
        this.position = position
        this.velocity = velocity

        this.loadImage(canvas);
    }

    loadImage(canvas): void {
        const image = new Image()
        image.src = './asset/game2/strongEnemyLevel2.png'
        image.onload = () => {
            const scale = 1
            this.image = image
            this.width = image.width * scale
            this.height = image.height * scale
        }
    }

    draw(): void {
        this.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }

    update(): void {
        if (this.image) {
            if (this.position.x < 0 || (this.position.x + this.width) > this.cv.width) {
                this.velocity.x = - this.velocity.x
            }
            if (this.position.y < 0 || (this.position.y + this.height) > this.cv.height) {
                this.velocity.y = - this.velocity.y
            }
            this.position.x += this.velocity.x
            this.position.y += this.velocity.y
            this.draw()
        }
    }
}
// ############### END REGION ###############
