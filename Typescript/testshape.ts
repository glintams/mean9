///<reference path="ishape.ts"/>
///<reference path="triangle.ts"/>
///<reference path="circle.ts"/>

function testShape(obj:Drawing.Ishape){
    obj.draw()
}

let circle = new Drawing.Circle()
let triangle = new Drawing.Triangle

// circle.draw()
// triangle.draw()

testShape(circle)
testShape(triangle)



//tsc ishape triangle circle testshape --out test.js          ----- TO COMPILE
//  node test                                                 ------ TO RUN