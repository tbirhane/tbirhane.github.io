(function () {
    "use strict";
    var btnCreateObj;
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
        account.create(name, balance);

        return account;
    }

    function accountInfoList() {
        var account = createAccount();
        var textAreaObj = document.getElementById("textarea");
        textAreaObj.value = account.name + ": " + account.balance;
    }
     function getObjects() {
         btnCreateObj = document.getElementById("btnCreateA");
    }
    window.onload = getObjects;
    if (btnCreateObj)
            btnCreateObj.onclick = accountInfoList;

})();