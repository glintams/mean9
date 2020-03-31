interface Polygon{

    nsides:number
    area():number

}

class Square implements Polygon{
    nsides: number = 4; 
    side:number  
    constructor(side:number,nsides){

        this.nsides = nsides
        this.side = side

    } 
    area(): number {

        console.log("i have this "+ this.nsides+ "sides")
        return this.side**2
    }


}

let s= new Square(10,4)
let Area = s.area()
console.log("Area =",Area)

class Rectangle implements Polygon{
    nsides: number;   
    area(): number {

        console.log("i have this "+ this.nsides+ "sides")
        return this.nsides**4
        
    }

    
}