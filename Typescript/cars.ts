export class Car{
    
    engine:string
    distancecovered:number

    constructor(e:string,distance:number){

        this.engine = e
        this.distancecovered = distance
    }

    getengine(){
         
        return this.engine

    }

    getmilege(fuelinliters:number){

        return this.distancecovered/fuelinliters
    }

    add(x,y){

        return x+y
    }
}