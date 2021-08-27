var titleName = "Surprise";


var memoryTable = document.getElementById("contentTable");

var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var units = [0, 12, "xx", 24, 60, 60];
var targetDate = [0, 0, 0, 0, 0, 0];
var currDate = [0, 0, 0, 0, 0, 0];
var deltaDate = [0, 0, 0, 0, 0, 0];
var tableSlots;



var dateAchieved = false;


const fireworks = [];
let gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(52);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  
  title.innerHTML = titleName;
  title.style.color = "#ff0000";
  title.style.fontSize = "50px";
  tableSlots = [yearV, monthV, dayV, hourV, minuteV, secV];
  let tyear = 2021;
  let tmonth = 8;
  let tday = 27;
  let thour = 18;
  let tminute = 17;
  let tsec = 0;
  targetDate = [tyear, tmonth, tday, thour, tminute, tsec];

  
}

function draw() {
  currDate = [year(), month(), day(), hour(), minute(), second()];

  if(dateAchieved) {
    fire();
  } else {
  relate();
    if (deltaDate[0] < 0) {
      contentTable.style.display = "none";
      title.style.display = "none";
      eof.style.display = "none";
      eof.innerHTML = "Event has passed";
      eof.style.color = "#ff0000";
      dateAchieved = true;
    }
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

function fire() {
  colorMode(RGB);
  background(52, 52, 52, 25);
  textAlign(CENTER, CENTER);
  textSize(32);
  noStroke()
  fill(255, 0, 0);
  text("Happy Birthday", width/2, height/2)
  
  if (random(1) < 0.04) {
    fireworks.push(new Firework());
  }
  
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
