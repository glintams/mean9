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
///<reference path="ishape.ts"/>
///<reference path="triangle.ts"/>
///<reference path="circle.ts"/>
function testShape(obj) {
    obj.draw();
}
var circle = new Drawing.Circle();
var triangle = new Drawing.Triangle;
// circle.draw()
// triangle.draw()
testShape(circle);
testShape(triangle);
