"use strict";
exports.__esModule = true;
var cars_1 = require("./cars");
var chai_1 = require("chai");
describe("testing", function () {
    it("test for car milege function", function () {
        var obj = new cars_1.Car("Alto", 1000);
        chai_1.assert(obj.getmilege(100)).to.be(1);
    });
    it("Testing add function", function () {
        var obj = new cars_1.Car("Alto", 1000);
        chai_1.expect(obj.add(10, 20)).to.equals(30);
    });
});
