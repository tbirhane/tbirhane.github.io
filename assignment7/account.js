(function () {
    //"use strict";
    var accountInfoList = [];
    var accountModule = function () {
        var account = {
            name: ' ',
            balance: 0.0,
            create: function (name, balance) {
                this.name = name;
                this.balance = balance;
            }
        }

        return account;
    }

    function createAccount() {
        var name = document.getElementById("account-name");
        var balance = document.getElementById("balance");

        var account = accountModule();
        account.create(name.value, balance.value);

        return account;
    }

    function accountInfoList() {
        var account = createAccount();
        accountInfoList.push(account);
        var textAreaObj = document.getElementById("textarea");

        //textAreaObj.value += account.name + ": " + account.balance;
        var accounts;
        for(var i =0 ; i < accountInfoList.length; i++){
            accounts += accountInfoList[i].name + ": "+ accountInfoList[i].balance + "\n";
        }
        textAreaObj.value = accounts;
    }
     function getObjects() {
        var btnCreateObj = document.getElementById("btnCreateA");
         btnCreateObj.onclick = accountInfoList;
    }
    window.onload = getObjects;

})();