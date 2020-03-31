///<reference path="ishape.ts"/>
///<reference path="triangle.ts"/>
///<reference path="circle.ts"/>
function testShape(obj) {
    obj.draw();
}
var circle = new Drawing.Circle();
circle.draw();
var triangle = new Drawing.Triangle;
triangle.draw();
