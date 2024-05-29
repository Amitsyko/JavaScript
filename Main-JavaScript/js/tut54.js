    console.log("Hey Welcome to tut54.js in this tut we can create --Alarm Clock-- (tut52.js)");




    /*----------------------Resolving this code beacuse alram is not set--------------------*/




    let display = document.getElementById("MyClockDisplay");
    const audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    audio.loop = true;
    let alarmTime = null;
    let alarmTimeout = null;

    //step 2 = display clock--
    function updateTime(){
        const date = new Date();
        const hours = formatTime(date.getHours());
        const minutes = formatTime(date.getMinutes());
        const seconds = formatTime(date.getSeconds());
    
        display.innerHTML = hours + " : " + minutes + " : " + seconds;
    }
        function formatTime(time){
            if(time < 10) return "0" + time;
            return time;
        }
    
    setInterval(updateTime, 1000);


    //Step 3 : Set the Alarm
    function setAlarmTime(value){
        alarmTime = value;
    }

    function setAlarm(){
        if(alarmTime) {
            const current = new Date();
            const timeToAlarm = new Date(alarmTime);

            if(timeToAlarm > current){
                const timeout = timeToAlarm.getTime() - current.getTime();
                alarmTimeout = setTimeout(function(){
                    audio.play();
                    shakeImage();
                }, timeout);
                alert("Alarm Set")
            }
        }
    }

    //Step 4 : Set the Alarm
    function clearAlarm(){
        audio.pause();
        if(alarmTimeout){
            clearTimeout(alarmTimeout);
            alert("Alarm Clear..!")
        }
        const img = document.getElementById("alarmImage");
        if (img) {
            img.classList.remove("shake");
        }
    }


    function shakeImage(){
        const img = document.getElementById("alarmImage");
        if (img) {
            img.classList.add("shake");
        }
    }