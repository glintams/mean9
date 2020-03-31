class Test{
    i=1
    static j=1
    constructor(){
        this.i += 1
        Test.j += 1

        console.log(this.i)
        console.log(Test.j)
    }
}

let t1 = new Test()
let t2 = new Test()
// console.log(Test.j)