'use strict';
let deadline= '2019-06-10';

function getTimeRemaining(endTime){
    let t=Date.parse(endTime)-Date.parse(new Date()),
    seconds=Math.floor((t/1000)%60),
    minutes=Math.floor(((t/1000)/60)%60),
    hours=Math.floor((t/(1000*60*60)));
    return {
        'total':t,
        'hours':hours,
        'minutes':minutes,
        'seconds':seconds
    };
    //days=Math.floor((t/(1000*60*60*24)));
}

function setClock(id,endTime){
    let timer = document.getElementById('timer'),
    hours = timer.querySelector('.hours'),
    minutes=timer.querySelector('.minutes'),
    seconds=timer.querySelector('.seconds'),
    timeInterval=setInterval(updateClock,1000); 
    function updateClock(){
        let t = getTimeRemaining(endTime);
        hours.textContent=t.hours;
        minutes.textContent=t.minutes;
        seconds.textContent=t.seconds;
        if(t.total<=0) {
            clearInterval();
        }
    }
}

setClock('timer',deadline);


