'use strict'

var money,time;
var appData = {
    budjet : money,
    timeData : time,
    expenses : {},
    optionalExpenses:{},
    income:[],
    savings : true,
    choseExpenses: function(){
            for(let i=0;i<2;i++){
                let tempStrForName=prompt("Name of minuses"),
                mSum=prompt("sum",0);
                if((typeof(tempStrForName))==='string' && (typeof(tempStrForName)!=null)){
                appData.expenses[tempStrForName]=mSum;
                }
            }
    },
    detectDayBudjet: function(){
        appData.budjet=money;
        appData.moneyPerDay=(appData.budjet/30).toFixed(1);
        alert("Ежедневный бюджет" +appData.moneyPerDay);
    },
    detectLevel: function(){
        if(appData.moneyPerDay<=500) {
            console.log("Low level");
        } else if((appData.moneyPerDay)>500 && (appData.moneyPerDay)<5000){
            console.log("Medium level");
        }else if((appData.moneyPerDay)>5000){
            console.log("High level");
        }
    },
    checkSavings: function(){
        if(appData.moneyPerDay<=500) {
            console.log("Low level");
        } else if((appData.moneyPerDay)>500 && (appData.moneyPerDay)<5000){
            console.log("Medium level");
        }else if((appData.moneyPerDay)>5000){
            console.log("High level");
        }
    },
    choseOptExpenses: function(){
        for(let i=0;i<3;i++){
            let mSum=+prompt("Optional Exp sum");
            let counter=1;
            if((mSum!=null) && (mSum!="")){ 
             appData.optionalExpenses[counter]=mSum;
             counter++;
            }
        }
    },
    choseIncome:function(){
        
        let items = prompt("Ways of aditional incomes?","");
        while((typeof(items)!='string') || (typeof(items)==null) || (items==="")){
            items = prompt("Ways of aditional incomes?",""); 
        }
        appData.income=items.split(', ');
        appData.income.sort();
        appData.income.forEach(function(item, i, arr) {
            alert( (i+1) + ": " + item );
          });
    },

    info: function(){
        console.log("we have a such info:");
        for(let key in appData){
            console.log(appData[key]);
        }
    }

}

function start(){
    money = +prompt("Till month: ");
    time = prompt("Date YYYY-MM-DD");
    console.log(money);
    while(isNaN(money) || money==="" || money==null){
    money = +prompt("Till month",'');
    }
    
}

start();
appData.info();









