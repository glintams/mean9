///<reference path="ishape.ts"/>
var Drawing;
(function (Drawing) {
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log("Drawing a Circle");
        };
        return Circle;
    }());
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));
