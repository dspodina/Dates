// Task 1

const brusselsTime = document.getElementById('brussels');
brussels.innerText = new Date();

const now = new Date();

const anchorage = document.getElementById('anchorage');
const anchorageTime = now.toLocaleDateString('en-US',{timeZone: 'America/Anchorage',timeStyle:'medium',hourCycle:'h24'});
anchorage.innerText() = anchorageTime;

const reykjavik = document.getElementById('reykjavik');
const reykjavikTime = now.toLocaleDateString('fr-BE',{timeZone: 'Atlantic/Reykjavik',timeStyle:"medium",hourCycle:'h24'});
reykjavik.innerText() = reykjavikTime;

const saintPetersburg = document.getElementById('saintPetersburg');
const saintPetersburgTime = now.toLocaleDateString('RU',{timeZone:'Europe/Moscow',timeStyle:"medium",hourCycle:'h24'});
saintPetersburg.innerText (saintPetersburgTime);


// Task 2

const now = new Date();
const dateBirth = new Date('1990 4 5');
const timeDifference = now.getTime() - dateBirth.getTime();
const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
document.write(daysDifference);
// const ageDays = document.getElementById('ageDays');
// ageDays.innerText() = 


// Task 3

const date = new Date();
date.setHours(date.getHours() + 80000);
console.log(date);


  
// Task 4