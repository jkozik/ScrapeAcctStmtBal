var statementBalanceAmount = $("#slideIn-accountLastStatementBalanceChicklet > span").text().replace(/[\s,$]+/g,"")
var currentBalanceAmount = $("#slideIn-accountCurrentBalanceLinkWithReconFlyoutValue").text().replace(/[\s,$]+/g,"")

var dt = new Date();
var MM = (dt.getMonth() + 1).toString().padStart(2, "0");
var DD = dt.getDate().toString().padStart(2, "0");
var MMDD = MM+DD;

var createJEsJson = `[
{"line":"${MMDD},-140,-${currentBalanceAmount};301-,AcctBal * -1","mmdd":"${MMDD}","acctamt":[{"acct":"140","amt":"-${currentBalanceAmount}"}],"cract":"301","desc":"AcctBal * -1"},
{"line":"${MMDD},-140,${statementBalanceAmount};301-,StmtBal","mmdd":"${MMDD}","acctamt":[{"acct":"140","amt":"${statementBalanceAmount}"}],"cract":"301","desc":"StmtBal"},
{"line":"${MMDD},-140,-${statementBalanceAmount};301-,StmtBal * -1","mmdd":"${MMDD}","acctamt":[{"acct":"140","amt":"-${statementBalanceAmount}"}],"cract":"301","desc":"StmtBal * -1"},
{"line":"${MMDD},-140,${currentBalanceAmount};301-,AcctBal","mmdd":"${MMDD}","acctamt":[{"acct":"140","amt":"${currentBalanceAmount}"}],"cract":"301","desc":"AcctBal"}
]
`
copy(createJEsJson)
