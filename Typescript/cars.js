"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(e, distance) {
        this.engine = e;
        this.distancecovered = distance;
    }
    Car.prototype.getengine = function () {
        return this.engine;
    };
    Car.prototype.getmilege = function (fuelinliters) {
        return this.distancecovered / fuelinliters;
    };
    Car.prototype.add = function (x, y) {
        return x + y;
    };
    return Car;
}());
exports.Car = Car;
