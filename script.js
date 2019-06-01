var money = prompt("Till month","0");
var time = prompt("Date YYYY-MM-DD");
let appData = {
budjet : money,
timeData : time,
expenses : {},
optionalExpenses:{},
income:[],
savings : false
}

let tempStrForName1=prompt("Name of minuses"),
mSum1=prompt("sum"),
tempStrForName2=prompt("Name of minuses"),
mSum2 = prompt("sum");
appData.expenses.tempStrForName1=mSum1;
appData.expenses.tempStrForName2=mSum2;

alert("1 day "+appData.money/30);