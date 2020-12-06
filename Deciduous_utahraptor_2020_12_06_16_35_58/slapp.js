var tmonth, tday, thour, tminute, tsec;
var cmonth, cday, chour, cminute, csec;
var memoryTable = document.getElementById("contentTable");





var monthDays = [31,28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function setup() {
  //createCanvas(500, 500);
  //createCanvas(windowWidth, windowHeight);
  //textSize(20);
  //rectMode(CENTER);
  noCanvas();

  tmonth = 12;
  tday = 24;
  thour = 20;
  tminute = 0;
  tsec = 0;
}

function draw() {
  background(220);
  cmonth =  month();
  cday = day();
  chour = hour();
  cminute = minute();
  csec = second();
  //console.log(relate());
  text(relate(), width/2, height/2, 300, 100);
  
  text(day() + "." + month() + "." + year(), 0, height);

}

function relate() {
  let sec = tsec - csec;
  let min = tminute - cminute;
  let hour = thour -chour;
  let day = tday - cday;
  let mon = tmonth - cmonth;
  if (sec < 0) {
    sec += 60;
    min -= 1;
  }
  if (min < 0) {
    min += 60;
    hour -= 1;
  }
  if (hour < 0) {
    hour += 24;
    day -= 1;
  }
  if (day < 0) {
    day += monthDays[(cmonth -1) % 12];
    console.log((cmonth -1) % 12);
    mon -= 1;
  }
  monthV.innerHTML = mon;
  dayV.innerHTML = day;
  hourV.innerHTML = hour;
  minuteV.innerHTML = min;
  secV.innerHTML = sec;
  
  return mon + ": " + day + " : " + hour + " : " + min + " : " + sec;
}

/*function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}*/

