///<reference path="ishape.ts"/>
var Drawing;
(function (Drawing) {
    var Triangle = /** @class */ (function () {
        function Triangle() {
        }
        Triangle.prototype.draw = function () {
            console.log("drawing a Triangle");
        };
        return Triangle;
    }());
    Drawing.Triangle = Triangle;
})(Drawing || (Drawing = {}));
