var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bank;
(function (Bank) {
    var Bank_ = /** @class */ (function () {
        function Bank_(name, ifsc, branch) {
            this.balance = 0;
            this.name = name;
            this.ifsc = ifsc;
            this.branch = branch;
        }
        Bank_.prototype.deposit = function (amount) {
            this.balance += amount;
        };
        Bank_.prototype.withdraw = function (amount) {
            if (this.balance > amount) {
                this.balance -= amount;
            }
        };
        return Bank_;
    }());
    Bank.Bank_ = Bank_;
})(Bank || (Bank = {}));
///<reference path ="ibank.ts"/>
var Bank;
(function (Bank) {
    var Accounts;
    (function (Accounts) {
        var SavingsAccount = /** @class */ (function (_super) {
            __extends(SavingsAccount, _super);
            function SavingsAccount(name, branch, ifsc) {
                var _this = _super.call(this, name, branch, ifsc) || this;
                _this.interestrate = 0.5;
                return _this;
            }
            SavingsAccount.prototype.findInterest = function () {
                console.log("savings account");
            };
            return SavingsAccount;
        }(Bank.Bank_));
        Accounts.SavingsAccount = SavingsAccount;
        var FixedAccount = /** @class */ (function (_super) {
            __extends(FixedAccount, _super);
            function FixedAccount() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.interestrate = 1.5;
                return _this;
            }
            FixedAccount.prototype.findInterest = function () {
                console.log("fixed account");
            };
            return FixedAccount;
        }(Bank.Bank_));
        Accounts.FixedAccount = FixedAccount;
    })(Accounts = Bank.Accounts || (Bank.Accounts = {}));
})(Bank || (Bank = {}));
///<reference path ="ibank.ts"/>
///<reference path ="ibank1.ts"/>
function getBankdetails(obj) {
    console.log(obj.name);
    console.log(obj.ifsc);
    console.log(obj.branch);
    obj.deposit(1000);
    console.log(obj.balance);
}
var bank1 = new Bank.Bank_("SBI", "sbi100", "Kochi");
getBankdetails(bank1);
var account = new Bank.Accounts.SavingsAccount("Federal", "f101", "ekm");
getBankdetails(account);
