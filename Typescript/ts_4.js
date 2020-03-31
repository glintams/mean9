var Test = /** @class */ (function () {
    function Test() {
        this.i = 1;
        this.i += 1;
        Test.j += 1;
        console.log(this.i);
        console.log(Test.j);
    }
    Test.j = 1;
    return Test;
}());
var t1 = new Test();
var t2 = new Test();
