///<reference path ="ibank.ts"/>
namespace Bank{

    export namespace Accounts{
        interface I_Account{
            account:string
        }

       export class SavingsAccount extends Bank_ implements I_Account{

            interestrate=0.5
            account:string
            constructor(name,branch,ifsc){

            super(name,branch,ifsc)
            }

            findInterest(){
                console.log("savings account")
            }

         
        }
        export class FixedAccount extends Bank_{

            interestrate =1.5
            findInterest(){
                console.log("fixed account")
            }
        }
    }
    
}