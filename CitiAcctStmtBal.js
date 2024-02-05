var statementBalanceAmount = $("#paymentTile > div.payment-tile-body > div.row-1 > div:nth-child(1) > div.balance-amount").text()
var currentBalanceAmount = $("#cardsBalanceTile > div.sce-bottom-half.ng-star-inserted > div.current-balance-wrapper > div.current-balance.negative-balance").text()
var acctStmtBalStr = `"AcctBal","StmtBal"`+'\n'+ '"'+currentBalanceAmount+'",' + '"'+statementBalanceAmount + '"'
console.log(currentBalanceAmount,statementBalanceAmount);
