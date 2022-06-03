export default class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    normalize() {
        let length = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        this.x = this.x / length;
        this.y = this.y / length;
    }

    /**
     * @param {number} angle
     */
    setFromAngle(angle) {
        let newX = Math.cos(angle);
        let newY = -Math.sin(angle);
        if (this.x != 0 && Math.sign(newX) != Math.sign(this.x)) {
            newX = newX * -1;
        }
        if (this.y != 0 && Math.sign(newY) != Math.sign(this.y)) {
            newY = newY * -1;
        }
        this.x = newX;
        this.y = newY;
    }

    reverseX() {
        this.x = this.x * -1;
    }

    reverseY() {
        this.y = this.y * -1;
    }

    multiplyScalar(scalar) {
        this.x = this.x * scalar;
        this.y = this.y * scalar;
    }

    /**
     * @param {Number} direct 
     */
    setDirectionX(direct) {
        if (direct == 1) {
            if (this.x < 0) {
                this.x = this.x * -1;
            }
        } else {
            if (this.x > 0) {
                this.x = this.x * -1;
            }
        }
    }

    setDirectionY(direct) {
        if (direct == 1) {
            if (this.y < 0) {
                this.y = this.y * -1;
            }
        } else {
            if (this.y > 0) {
                this.y = this.y * -1;
            }
        }
    }

    getDirectionX() {
        return Math.sign(this.x);
    }

    
    /**
     * @param {Vector2} vector
     */
    DistanceTo(vector) {
        let newX = vector.x - this.x;
        let newY = vector.y - this.y;

        return Math.sqrt(Math.pow(newX, 2) + Math.pow(newY, 2));
    }
}