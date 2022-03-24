var Level1EnemyFactory = /** @class */ (function () {
    function Level1EnemyFactory(context, canvas) {
        this.distance = 150;
        this.spawnStartWeak = 0;
        this.spawnStartStrong = 0;
        this.c = context;
        this.cv = canvas;
    }
    Level1EnemyFactory.prototype.spawnWeakEnemy = function () {
        this.spawnStartWeak += this.distance;
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
    };
    Level1EnemyFactory.prototype.spawnStrongEnemy = function () {
        this.spawnStartStrong += this.distance;
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
    };
    return Level1EnemyFactory;
}());
var Level2EnemyFactory = /** @class */ (function () {
    function Level2EnemyFactory(context, canvas) {
        this.distance = 150;
        this.spawnStartWeak = 0;
        this.spawnStartStrong = 0;
        this.c = context;
        this.cv = canvas;
    }
    Level2EnemyFactory.prototype.spawnWeakEnemy = function () {
        this.spawnStartWeak += this.distance;
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
    };
    Level2EnemyFactory.prototype.spawnStrongEnemy = function () {
        this.spawnStartStrong += this.distance;
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
    };
    return Level2EnemyFactory;
}());
var Level3EnemyFactory = /** @class */ (function () {
    function Level3EnemyFactory(context, canvas) {
        this.distance = 150;
        this.spawnStartWeak = 0;
        this.spawnStartStrong = 0;
        this.c = context;
        this.cv = canvas;
    }
    Level3EnemyFactory.prototype.spawnWeakEnemy = function () {
        this.spawnStartWeak += this.distance;
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
    };
    Level3EnemyFactory.prototype.spawnStrongEnemy = function () {
        this.spawnStartStrong += this.distance;
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
    };
    return Level3EnemyFactory;
}());
var Level4EnemyFactory = /** @class */ (function () {
    function Level4EnemyFactory(context, canvas) {
        this.distance = 130;
        this.spawnStartWeak = 0;
        this.spawnStartStrong = 0;
        this.c = context;
        this.cv = canvas;
    }
    Level4EnemyFactory.prototype.spawnWeakEnemy = function () {
        this.spawnStartWeak += this.distance;
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
    };
    Level4EnemyFactory.prototype.spawnStrongEnemy = function () {
        this.spawnStartStrong += this.distance;
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
    };
    return Level4EnemyFactory;
}());
var Level5EnemyFactory = /** @class */ (function () {
    function Level5EnemyFactory(context, canvas) {
        this.distance = 130;
        this.spawnStartWeak = 0;
        this.spawnStartStrong = 0;
        this.c = context;
        this.cv = canvas;
    }
    Level5EnemyFactory.prototype.spawnWeakEnemy = function () {
        this.spawnStartWeak += this.distance;
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
    };
    Level5EnemyFactory.prototype.spawnStrongEnemy = function () {
        this.spawnStartStrong += this.distance;
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
    };
    return Level5EnemyFactory;
}());
var WeakEnemyLevel1 = /** @class */ (function () {
    function WeakEnemyLevel1(_a) {
        var context = _a.context, canvas = _a.canvas, position = _a.position, velocity = _a.velocity;
        this.c = context;
        this.cv = canvas;
        this.position = position;
        this.velocity = velocity;
        this.loadImage(canvas);
    }
    WeakEnemyLevel1.prototype.loadImage = function (canvas) {
        var _this = this;
        var image = new Image();
        image.src = './asset/game2/weakEnemyLevel1.png';
        image.onload = function () {
            var scale = 1;
            _this.image = image;
            _this.width = image.width * scale;
            _this.height = image.height * scale;
        };
    };
    WeakEnemyLevel1.prototype.draw = function () {
        this.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    };
    WeakEnemyLevel1.prototype.update = function () {
        if (this.image) {
            if (this.position.x < 0 || (this.position.x + this.width) > this.cv.width) {
                this.velocity.x = -this.velocity.x;
            }
            this.position.x += this.velocity.x;
            this.draw();
        }
    };
    return WeakEnemyLevel1;
}());
var WeakEnemyLevel2 = /** @class */ (function () {
    function WeakEnemyLevel2(_a) {
        var context = _a.context, canvas = _a.canvas, position = _a.position, velocity = _a.velocity;
        this.c = context;
        this.cv = canvas;
        this.position = position;
        this.velocity = velocity;
        this.loadImage(canvas);
    }
    WeakEnemyLevel2.prototype.loadImage = function (canvas) {
        var _this = this;
        var image = new Image();
        image.src = './asset/game2/weakEnemyLevel2.png';
        image.onload = function () {
            var scale = 1;
            _this.image = image;
            _this.width = image.width * scale;
            _this.height = image.height * scale;
        };
    };
    WeakEnemyLevel2.prototype.draw = function () {
        this.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    };
    WeakEnemyLevel2.prototype.update = function () {
        if (this.image) {
            if (this.position.x < 0 || (this.position.x + this.width) > this.cv.width) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y < 0 || (this.position.y + this.height) > this.cv.height) {
                this.velocity.y = -this.velocity.y;
            }
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.draw();
        }
    };
    return WeakEnemyLevel2;
}());
var StrongEnemyLevel1 = /** @class */ (function () {
    function StrongEnemyLevel1(_a) {
        var context = _a.context, canvas = _a.canvas, position = _a.position, velocity = _a.velocity;
        this.c = context;
        this.cv = canvas;
        this.position = position;
        this.velocity = velocity;
        this.loadImage(canvas);
    }
    StrongEnemyLevel1.prototype.loadImage = function (canvas) {
        var _this = this;
        var image = new Image();
        image.src = './asset/game2/strongEnemyLevel1.png';
        image.onload = function () {
            var scale = 1;
            _this.image = image;
            _this.width = image.width * scale;
            _this.height = image.height * scale;
        };
    };
    StrongEnemyLevel1.prototype.draw = function () {
        this.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    };
    StrongEnemyLevel1.prototype.update = function () {
        if (this.image) {
            if (this.position.x < 0 || (this.position.x + this.width) > this.cv.width) {
                this.velocity.x = -this.velocity.x;
            }
            this.position.x += this.velocity.x;
            this.draw();
        }
    };
    return StrongEnemyLevel1;
}());
var StrongEnemyLevel2 = /** @class */ (function () {
    function StrongEnemyLevel2(_a) {
        var context = _a.context, canvas = _a.canvas, position = _a.position, velocity = _a.velocity;
        this.c = context;
        this.cv = canvas;
        this.position = position;
        this.velocity = velocity;
        this.loadImage(canvas);
    }
    StrongEnemyLevel2.prototype.loadImage = function (canvas) {
        var _this = this;
        var image = new Image();
        image.src = './asset/game2/strongEnemyLevel2.png';
        image.onload = function () {
            var scale = 1;
            _this.image = image;
            _this.width = image.width * scale;
            _this.height = image.height * scale;
        };
    };
    StrongEnemyLevel2.prototype.draw = function () {
        this.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    };
    StrongEnemyLevel2.prototype.update = function () {
        if (this.image) {
            if (this.position.x < 0 || (this.position.x + this.width) > this.cv.width) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y < 0 || (this.position.y + this.height) > this.cv.height) {
                this.velocity.y = -this.velocity.y;
            }
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.draw();
        }
    };
    return StrongEnemyLevel2;
}());
// ############### END REGION ###############
