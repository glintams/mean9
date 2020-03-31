function view() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var i_1 = args_1[_a];
        console.log(i_1);
    }
}
view(10, 30, 50, 50, "hello", true);
var str1 = '123';
var i = str1; // Type assertion
console.log("After assertion type of i :", str1);
var b = 'true';
var t = b;
console.log(typeof t);
function greetings(msg, x) {
    console.log(msg);
    console.log(x);
}
greetings("good eve");
function addition(i, j) {
    console.log(i, j);
}
addition(10, 100);
addition("hello", "world");
function getvalues(x) {
    if (typeof (x) == "string") {
        console.log("message :", x);
    }
    else {
        for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
            var e = x_1[_i];
            console.log(e);
        }
    }
}
getvalues("hello all");
getvalues(["message:", "hi", "hello"]);
// map and filter functions
var values = [10, 11, 22, 30];
var mappedarray = values.map(function (x) {
    return Math.pow(x, 2);
});
var filterredarray = values.filter(function (x) {
    if (x % 2 == 0) {
        return x;
    }
});
console.log(mappedarray);
console.log(filterredarray);
