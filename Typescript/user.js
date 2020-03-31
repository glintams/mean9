var User = /** @class */ (function () {
    function User(name, age, mobile, usertype) {
        this.name = name;
        this.age = age;
        this.mobile = mobile;
        this.usertype = usertype;
    }
    User.prototype.update = function (phoneno) {
        this.mobile = phoneno;
    };
    return User;
}());
// var user1 = new User("Glinta", 22, 8943499559, "Admin");
// console.log(user1);

function save(){

    Name = document.getElementById("name").value
    Age = document.getElementById("age").value
    Mobile = document.getElementById("mobile").value
    Usertype = document.getElementById("usertype").value

    var obj = new User(Name,Age,Mobile,Usertype)
    console.log(obj)
}
