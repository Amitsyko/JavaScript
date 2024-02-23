console.log("Hey Welcome to tut54.js in this tut we can create --Alarm Clock-- (tut52.js)");




/*----------------------Resolving this code beacuse alram is not set--------------------*/




function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10)? "0" + h : h;
    m = (h < 10)? "0" + m : m;
    s = (h < 10)? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    // document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
};

showTime();

var audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");

function ringbell(){
    audio.play();
}


let alarmSubmit = document.getElementById("alarmSubmit");
alarmSubmit.addEventListener("click",setAlarm);

function setAlarm(e){
    e.preventDefault();

    console.log("you have set your alarm");

    const alarm = document.getElementById("alarm");
    alarmDate = new Date(alarm.value);  
    console.log(`Setting alarm for ${alarmDate}`);


    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);


    if(timeToAlarm>=0){
        setTimeout(() => {
            ringbell();
        }, timeToAlarm);
    }
}