var titleName = "Slaps-Christmas";


var memoryTable = document.getElementById("contentTable");

var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var units = [0, 12, "xx", 24, 60, 60];
var targetDate = [0, 0, 0, 0, 0, 0];
var currDate = [0, 0, 0, 0, 0, 0];
var deltaDate = [0, 0, 0, 0, 0, 0];
var tableSlots;




function setup() {

  noCanvas();
  title.innerHTML = titleName;
  title.style.color = "#ff0000";
  title.style.fontSize = "50px";
  tableSlots = [yearV, monthV, dayV, hourV, minuteV, secV];
  let tyear = 2020;
  let tmonth = 12;
  let tday = 24;
  let thour = 20;
  let tminute = 0;
  let tsec = 0;
  targetDate = [tyear, tmonth, tday, thour, tminute, tsec];

}

function draw() {
  currDate = [year(), month(), day(), hour(), minute(), second()];

  relate();
  if (deltaDate[0] < 0) {
    contentTable.style.display = "none";
    eof.innerHTML = "Event has passed";
    eof.style.color = "#ff0000";
    noLoop();
  }

}


function relate() {
  for (let i = 0; i < deltaDate.length; i++) {
    deltaDate[i] = targetDate[i] - currDate[i];
  }


  for (let i = deltaDate.length; i > 0; i--) {
    if (deltaDate[i] < 0) {
      deltaDate[i] += ((i == 2) ? monthDays[(currDate[1] - 1) % 12] : units[i]);
      deltaDate[i - 1] -= 1;
    }

  }
  for (let i = 0; i < tableSlots.length; i++) {
    tableSlots[i].innerHTML = deltaDate[i];
  }




}