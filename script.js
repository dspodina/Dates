// Task 1

const now = new Date();
const brusselsTime = document.querySelector('.brussels');
brusselsTime.innerText = new Date();


const anchorage = document.querySelector('.anchorage');
const anchorageTime = now.toLocaleTimeString('en-US',{timeZone: 'America/Anchorage',hourCycle:'h24'});
anchorage.innerText = anchorageTime;

const reykjavik = document.querySelector('.reykjavik');
const reykjavikTime = now.toLocaleTimeString('fr-BE',{timeZone: 'Atlantic/Reykjavik',hourCycle:'h24'});
reykjavik.innerText = reykjavikTime;

const saintPetersburg = document.querySelector('.saintPetersburg');
const saintPetersburgTime = now.toLocaleTimeString('RU',{timeZone:'Europe/Moscow',hourCycle:'h24'});
saintPetersburg.innerText = saintPetersburgTime;


// Task 2

const now = new Date();
const dateBirth = new Date('1990 4 5');
const timeDifference = now.getTime() - dateBirth.getTime();
const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
const ageDays = document.querySelector('.ageDays');
ageDays.innerText = daysDifference;


// Task 3

const date = new Date();
date.setHours(date.getHours() + 80000);
console.log(date);


  
// Task 4