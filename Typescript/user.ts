class User{

    name:string
    age:number
    mobile:number
    usertype:string

    update(phoneno:number){

        this.mobile = phoneno
    }

    constructor(name,age,mobile,usertype){

        this.name = name
        this.age = age
        this.mobile = mobile
        this.usertype = usertype
    }
}

let user1:User = new User("Glinta",22,8943499559,"Admin")
console.log(user1)
