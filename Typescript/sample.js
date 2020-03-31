var result = [10, 20, 30, 40].reduce(function (a, b) {
    console.log("a=", a);
    console.log("b=", b);
    return a + b;
});
console.log("result =", result);
var result1 = [10, 20, 30, 40].reduce(function (a, b) {
    return a + b;
});
console.log("result =", result1);
var l = ["a", "b", "c", "d"];
console.log(l.shift());
console.log(l);
console.log(l.unshift("e"));
console.log(l);
var k = [10, 20, 30, 40].reduceRight(function (a, b) {
    console.log(a);
    console.log(b);
    return a - b;
});
console.log(k);
var l1 = [11, 22, 33, 10].map(function (x) {
    return Math.pow(x, 2);
});
console.log(l1);
var l2 = [11, 22, 33, 10].filter(function (x) {
    if (x % 2 == 0) {
        return x;
    }
});
console.log(l2);
var s = ["a", "b", "c"].join(",");
console.log(s);
var x = ['a', 'b', 'c'];
var v1 = x[0], v2 = x[1], v3 = x[2];
console.log(v1);
var x1 = [[10, 20, 30], [40, 50, 60]];
console.log(x1);
console.log(x1[0][1]);
console.log(x1[1]);
var a = new Array(3);
a.push(1);
a.push(1);
a.push(1);
console.log(a);
console.log(typeof a);
