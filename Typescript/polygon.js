var Square = /** @class */ (function () {
    function Square(side, nsides) {
        this.nsides = 4;
        this.nsides = nsides;
        this.side = side;
    }
    Square.prototype.area = function () {
        console.log("i have this " + this.nsides + "sides");
        return Math.pow(this.side, 2);
    };
    return Square;
}());
var s = new Square(10, 4);
var Area = s.area();
console.log("Area =", Area);
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.area = function () {
        console.log("i have this " + this.nsides + "sides");
        return Math.pow(this.nsides, 4);
    };
    return Rectangle;
}());
