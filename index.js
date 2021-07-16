var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var size = document.getElementById("size");
var dates = document.getElementById("date");
var months = document.getElementById("month");
var years = document.getElementById("year");
var days = document.getElementById("day");




// var timeZone =document.getElementById("timezone");

var clock = setInterval(
    function time() {
        var date_now = new Date();
        var hr = date_now.getHours();
        var min = date_now.getMinutes();
        var sec = date_now.getSeconds();
        var date = date_now.getDate();
        var month = date_now.getMonth();
        var year = date_now.getFullYear();
        var day = date_now.getDay();
        // For time
        if(hr>12){
            hr = hr - 12;
        }
        if (hr < 10) {
            hr = "0" + hr;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        // For date
        if(date<10){
            date = "0" + date;
        }

        // for month
        if(month<10){
            month ="0" + month;
        }
   
        // for days

        if(day==7){
            day = "Sunday";
        }
        if(day==1){
            day = "Monday";
        }
        if(day==2){
            day = "Tuesday";
        }
        if(day==3){
            day = "Wednesday";
        }
        if(day==4){
            day = "Thursday";
        }
        if(day==5){
            day = "Friday";
        }
        if(day==6){
            day = "Saturday";
        }

        console.log(date);
        console.log(month);
        console.log(year);
        console.log(day);
        dates.textContent = date;
        months.textContent = month;
        years.textContent = year;
        days.textContent = day;
        hour.textContent = hr;
        minute.textContent = min;
        second.textContent = sec;
        // dt.textContent = date;
        
        
        
    },1000
    );
   