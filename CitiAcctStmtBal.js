var statementBalanceAmount = $("#paymentTile > div.payment-tile-body > div.row-1 > div:nth-child(1) > div.balance-amount").text().replace(/[\s,$]+/g,"")
var currentBalanceAmount = $("#cardsBalanceTile > div.sce-bottom-half.ng-star-inserted > div.current-balance-wrapper > div.current-balance.negative-balance").text().replace(/[\s,$]+/g,"")
var acctStmtBalStr = `"AcctBal","StmtBal"`+'\n'+ '"'+currentBalanceAmount+'",' + '"'+statementBalanceAmount + '"'
//console.log(currentBalanceAmount,statementBalanceAmount);
var dt = new Date();
var MM = (dt.getMonth() + 1).toString().padStart(2, "0");
var DD = dt.getDate().toString().padStart(2, "0");
var MMDD = MM+DD;
var createJEsJson = `[
{"mmdd":"${MMDD}","acctamt":[{"acct":"140","amt":"-${currentBalanceAmount}"}],"cract":"304","desc":"AcctBal * -1"},
{"mmdd":"${MMDD}","acctamt":[{"acct":"140","amt":"${statementBalanceAmount}"}],"cract":"304","desc":"StmtBal"},
{"mmdd":"${MMDD}","acctamt":[{"acct":"140","amt":"-${statementBalanceAmount}"}],"cract":"304","desc":"StmtBal * -1"},
{"mmdd":"${MMDD}","acctamt":[{"acct":"140","amt":"${currentBalanceAmount}"}],"cract":"304","desc":"AcctBal"}
]`


