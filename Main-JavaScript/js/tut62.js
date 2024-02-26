console.log("Hey Welcome to tut61.js in this tut we can learn --JavaScript Wall Clock: Exercise 6--(This Excersie is tut61.js)");


function updateClock(){

    //Get the current Date--
    let currentTime = new Date();
    // console.log(currentDate);

    //Extract hours, minutes, & seconds for the date--
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    

    //Pad 0 if minutes or second is less than 10(single digit)--
    currentMinutes = (currentMinutes < 10) ? "0" : "" + currentMinutes;
    currentSeconds = (currentSeconds < 10) ? "0" : "" + currentSeconds;

    // Choose AM/PM as per time of the day
    let timeofDay = (currentHours < 12) ? "AM" : "PM";


    // convert railway clock to AM/PM Clock--
    currentHours = (currentHours) ? currentHours -12 : currentHours;
    currentHours = (currentHours === 0) ? 12 : currentHours;


    // Prepare the time string from hours, minutes and seconds--
    let currentTimeStr = currentHours + ":" + currentMinutes + ":" + currentSeconds + ":" + timeofDay;

    document.getElementById("clock").innerHTML= currentTimeStr;
}
// updateClock();

