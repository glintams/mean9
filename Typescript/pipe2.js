"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
rxjs_1.interval(1000).pipe(operators_1.filter(function (num) { return (num % 2) === 0; }), operators_1.map(function (num) { return num * num; }))
    .subscribe(function (val) {
    console.log(val);
});
