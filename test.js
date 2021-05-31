// subtract 1 from month since month is null based 
const targetDate = new Date(2021, 8 - 1, 27);
let yearNode, dayNode, hourNode, minNode, secNode, eof;
function getTimeDifferenceToNow(toDate) {
    const now = new Date();
    const millisecondsInBetween = toDate - now;
    const isInFuture = millisecondsInBetween > 0;
    let seconds = Math.trunc(millisecondsInBetween / 1000);
    let minutes = Math.trunc(seconds / 60);
    seconds %= 60;
    let hours = Math.trunc(minutes / 60);
    minutes %= 60;
    let days = Math.trunc(hours / 24);
    hours %= 24;      
    // ignore leap years
    let years = Math.trunc(days / 365);
    days %= 365;
    return {years, days, hours, minutes, seconds, isInFuture};
    }

function update() {
    const timeDiff = getTimeDifferenceToNow(targetDate);
    if (timeDiff.isInFuture) {
        displayTimeDiff(timeDiff);
        setTimeout(update, 500);
        return;
    }
    setMessage('Target reached');
}

function setMessage(msg) {
    yearNode.hidden = true;
    dayNode.hidden = true;
    hourNode.hidden = true;
    minNode.hidden = true;
    secNode.hidden = true;
    eof.hidden = false;
    eof.textContent = msg;
}

function displayTimeDiff(timeDiff) {
    yearNode.innerText = `${timeDiff.years} Years`;
    dayNode.innerText = `${('' + timeDiff.days).padStart(3, '0')} Days`;
    hourNode.innerText = `${('' + timeDiff.hours).padStart(2, '0')} Hours`;
    minNode.innerText = `${('' + timeDiff.minutes).padStart(2, '0')} Minutes`;
    secNode.innerText = `${('' + timeDiff.seconds).padStart(2, '0')} Seconds`;
}

function createTimeNode(id) {
    const node = document.createElement('span');
    node.appendChild(document.createTextNode(''));
    node.id = id;
    document.getElementsByTagName('body')[0].appendChild(node);
    return node;
}

function createHiddenNode(id) {
    const node = document.createElement('span');
    node.appendChild(document.createTextNode(''));
    node.id = id;
    node.hidden = true;
    document.getElementsByTagName('body')[0].appendChild(node);
    return node;
}

function setUpNodesIfNotExisting() {
    yearNode = document.getElementById('year') ?? createTimeNode('year');
    dayNode = document.getElementById('day') ?? createTimeNode('day');
    hourNode = document.getElementById('hour') ?? createTimeNode('hour');
    minNode = document.getElementById('min') ?? createTimeNode('min');
    secNode = document.getElementById('sec') ?? createTimeNode('sec');
    eof = document.getElementById('eof') ?? createHiddenNode('eof');
}

setUpNodesIfNotExisting();
update();