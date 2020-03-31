namespace Bank{
    export interface IBank{
        name:string
        ifsc:string
        branch:string
        deposit(amount:number)
        withdraw(amount:number)
    }

    export class Bank_ implements IBank{
        name:string
        ifsc:string
        balance:number=0
        branch:string
        constructor(name:string,ifsc:string,branch){
            this.name=name
            this.ifsc=ifsc
            this.branch=branch

        }
        deposit(amount:number){
            this.balance+=amount
        }
        withdraw(amount:number){
            if(this.balance>amount){
            this.balance-=amount
        }}
    }
}