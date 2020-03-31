///<reference path ="ibank.ts"/>
///<reference path ="ibank1.ts"/>
function getBankdetails(obj:Bank.Bank_){
    console.log(obj.name)
    console.log(obj.ifsc)
    console.log(obj.branch)
    obj.deposit(1000)
    console.log(obj.balance)
}

let bank1 = new Bank.Bank_("SBI","sbi100","Kochi")
getBankdetails(bank1)

let account = new Bank.Accounts.SavingsAccount("Federal","f101","ekm")
let account1 = new Bank.Accounts.FixedAccount("Federal","f101","ekm")
getBankdetails(account)