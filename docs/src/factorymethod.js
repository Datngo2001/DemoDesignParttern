var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ################ FACTORY ################
var bulletFactory = /** @class */ (function () {
    function bulletFactory(context, player) {
        this.c = context;
        this.player = player;
    }
    return bulletFactory;
}());
var BasicFactory = /** @class */ (function (_super) {
    __extends(BasicFactory, _super);
    function BasicFactory(context, player) {
        return _super.call(this, context, player) || this;
    }
    BasicFactory.prototype.produceBullet = function () {
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
    };
    return BasicFactory;
}(bulletFactory));
var Level2Factory = /** @class */ (function (_super) {
    __extends(Level2Factory, _super);
    function Level2Factory(context, player) {
        return _super.call(this, context, player) || this;
    }
    Level2Factory.prototype.produceBullet = function () {
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
        bullet.radius = 10;
        return bullet;
    };
    return Level2Factory;
}(bulletFactory));
var Level3Factory = /** @class */ (function (_super) {
    __extends(Level3Factory, _super);
    function Level3Factory(context, player) {
        var _this = _super.call(this, context, player) || this;
        _this.useAdvance = true;
        return _this;
    }
    Level3Factory.prototype.produceBullet = function () {
        if (this.useAdvance) {
            this.useAdvance = !this.useAdvance;
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
        }
        else {
            this.useAdvance = !this.useAdvance;
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
            bullet.radius = 10;
            return bullet;
        }
    };
    return Level3Factory;
}(bulletFactory));
var Level4Factory = /** @class */ (function (_super) {
    __extends(Level4Factory, _super);
    function Level4Factory(context, player) {
        return _super.call(this, context, player) || this;
    }
    Level4Factory.prototype.produceBullet = function () {
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
    };
    return Level4Factory;
}(bulletFactory));
var Level5Factory = /** @class */ (function (_super) {
    __extends(Level5Factory, _super);
    function Level5Factory(context, player) {
        return _super.call(this, context, player) || this;
    }
    Level5Factory.prototype.produceBullet = function () {
        var xvelocity = getRandomArbitrary(-5, 5);
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
    };
    return Level5Factory;
}(bulletFactory));
var BasicBulet = /** @class */ (function () {
    function BasicBulet(_a) {
        var context = _a.context, position = _a.position, velocity = _a.velocity;
        this.position = position;
        this.velocity = velocity;
        this.radius = 3;
        this.c = context;
    }
    BasicBulet.prototype.draw = function () {
        this.c.beginPath();
        this.c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        this.c.fillStyle = 'Red';
        this.c.fill();
        this.c.closePath();
    };
    BasicBulet.prototype.update = function () {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    };
    return BasicBulet;
}());
var addvanceBulet = /** @class */ (function () {
    function addvanceBulet(_a) {
        var context = _a.context, position = _a.position, velocity = _a.velocity;
        this.bulletWidth = 10;
        this.bulletHeight = 50;
        this.position = position;
        this.velocity = velocity;
        this.c = context;
    }
    addvanceBulet.prototype.draw = function () {
        this.c.beginPath();
        this.c.rect(this.position.x - this.bulletWidth / 2, this.position.y - this.bulletHeight, this.bulletWidth, this.bulletHeight);
        this.c.fillStyle = 'Orange';
        this.c.fill();
        this.c.closePath();
    };
    addvanceBulet.prototype.update = function () {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    };
    return addvanceBulet;
}());
// ############### END REGION ###############
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
