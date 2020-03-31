var num1 = 123;
var str = "hello"; // Type annotation
var num2;
num2 = 234;
console.log("Type of :", typeof num2);
var x = [10, 30, 20]; //for ANY there is no type restrictions
x = 123;
console.log("Type of :", typeof x);
var condition = true;
var add = function (a, b) {
    return a + b;
};
console.log(add(10, 20));
function greetings(msg) {
    console.log("mesaage is :", msg);
}
greetings("welcome g");
var names = ["Apple", "Mango", "Orange", "Alphonso"];
names.push("strawberry");
console.log(names);
var newarray2 = names.filter(function (i) {
    if (i.startsWith("A")) {
        return i;
    }
});
console.log(newarray2);
