var Circle = /** @class */ (function () {
    function Circle() {
        this.r = 12;
    }
    Circle.prototype.drawImage = function () {
        console.log("Drawing acircle");
    };
    Circle.prototype.area = function () {
        var a = 3.14 * Math.pow(this.r, 2);
        console.log(a);
    };
    Circle.prototype.getsides = function () {
        console.log("Sides");
        return this.nsides;
    };
    return Circle;
}());
var c = new Circle();
c.drawImage();
c.getsides();
c.area();
