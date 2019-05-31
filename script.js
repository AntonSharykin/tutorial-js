var money = prompt("Till month","0");
var time = prompt("Date YYYY-MM-DD");
var appData = new Object();
appData.money = money;
appData.timeData = time;
appData.expenses=new Object();
appData.optionalExpenses=new Object;
appData.income = [];
appData.savings = false;

var tempStrForName=prompt("Name of minuses");

appData.expenses[tempStrForName] = prompt("sum");

tempStrForName=prompt("Name of minuses");

appData.expenses[tempStrForName] = prompt("sum");

alert("1 day "+appData.money/30);