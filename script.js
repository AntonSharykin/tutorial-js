'use strict'; 

let money,time;
let appData = {
    budjet : money,
    timeData : time,
    expenses : {},
    optionalExpenses:{},
    income:[],
    savings : true
    }

function start(){
    money = +prompt("Till month: ");
    time = prompt("Date YYYY-MM-DD");
    while(isNaN(money) || money=="" || money==null){
    money = +prompt("Till month",'');
    }
    
}

function detectBudjet(){
    appData.budjet=money;
    appData.moneyPerDay=(appData.budjet/30).toFixed(1);
    alert("Ежедневный бюджет" +appData.moneyPerDay);
}

function choseExpenses(){
    for(let i=0;i<2;i++){
        let tempStrForName=prompt("Name of minuses"),
        mSum=prompt("sum",0);
        if((typeof(tempStrForName))==='string' && (typeof(tempStrForName)!=null)){
        appData.expenses[tempStrForName]=mSum;
    }
    }
}

function choseOptExpenses(){
    for(let i=0;i<3;i++){
       let mSum=+prompt("Optional Exp sum");
       let counter=1;
       if((mSum!=null) && (mSum!="")){ 
        appData.optionalExpenses[counter]=mSum;
        counter++;
       }
    }
}

function checkSavings(){
    if(appData.savings== true){
        let save = +prompt("how much did you save?","0"),
        percent=+prompt("what percent do you have?");
        appData.monthIncome = save/100/12*percent;
        alert("Month incoming: "+appData.monthIncome);
    }
}

function detectLevel(){
    if(appData.moneyPerDay<=500) {
        console.log("Low level");
    } else if((appData.moneyPerDay)>500 && (appData.moneyPerDay)<5000){
        console.log("Medium level");
    }else if((appData.moneyPerDay)>5000){
        console.log("High level");
    }
}

start();
detectBudjet();
detectLevel();
choseExpenses();
choseOptExpenses();
checkSavings();






