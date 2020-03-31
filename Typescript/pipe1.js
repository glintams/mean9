"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var st = rxjs_1.of(1, 2, 3, 4, 5);
var pr = rxjs_1.pipe(operators_1.filter(function (n) { return n % 2 == 0; }), operators_1.map(function (n) { return n * n; }));
var obs = pr(st);
obs.subscribe(function (v1) {
    console.log(v1);
});
