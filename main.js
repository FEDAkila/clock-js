setInterval(function time(){

// var alls=document.getElementById("all");
let today=new Date();

// alls.innerHTML=today;	


const weekday = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];
let days = weekday[today.getDay()];
document.getElementById("day");

day.innerHTML ="Day"+"<br><br>"+days;




const mth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let months = mth[today.getMonth()];
document.getElementById("month");
month.innerHTML ="Month"+"<br><br>"+"&nbsp;&nbsp;&nbsp;"+months;

var date=document.getElementById("date");
var dates=today.getDate();
date.innerHTML="Date"+"<br><br>"+":"+"&nbsp;&nbsp;&nbsp;"+dates;

var year=document.getElementById("year");
var years=today.getFullYear();
year.innerHTML="year"+"<br><br>"+":"+"&nbsp;&nbsp;&nbsp;"+years;

var period = "";

if (hour >= 12) {
 period = "PM";
} else {
 period = "AM";
}

var hour=document.getElementById("hour");
var hours=today.getHours();
	
if(hours>12){
	list=hour-12;
	hour.innerHTML=list;
}
else{
	
hour.innerHTML="Hour"+"<br><br>"+"&nbsp;&nbsp;&nbsp;"+hours;
}


var minutes=document.getElementById("minutes");
var min=today.getMinutes();
minutes.innerHTML="Min"+"<br><br>"+":"+"&nbsp;&nbsp;&nbsp;"+min;



var seconds=document.getElementById("seconds");
var sec=today.getSeconds();
seconds.innerHTML="Sec"+"<br><br>"+":"+"&nbsp;&nbsp;&nbsp;"+sec+"&nbsp;&nbsp;"+period;
},10);












