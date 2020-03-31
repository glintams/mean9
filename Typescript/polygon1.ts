interface IPolygon{
    nsides:number
    area(): number
    getsides():number
}

interface IPaint extends IPolygon{

    drawImage():void
}

class Circle implements IPaint{

    nsides:number
    r= 12
    drawImage(): void{
        console.log("Drawing acircle")
    }

    area():number{
        return 3.14*this.r**2
        
    }

    getsides():number{

        console.log("Sides")
        return this.nsides
    }
}

let c= new Circle()
c.drawImage()
c.getsides()
c.area()