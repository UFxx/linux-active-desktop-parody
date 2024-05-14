const year = document.querySelector("#year");
const dayOfWeek = document.querySelector("#week-day");
const dayOfMonth = document.querySelector("#month-day");
const month = document.querySelector("#month");
const hour = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const date = new Date();

const daysOfWeek = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

year.textContent = `${date.getFullYear()}`;
month.textContent = `\'${months[date.getMonth()]} (${date.getMonth()})\'`;
dayOfMonth.textContent = date.getDate();
dayOfWeek.textContent = `\'${daysOfWeek[date.getDay()]}\'`;
hour.textContent = date.getHours();

let secondsStorage = date.getSeconds();
let minutesStorage = date.getMinutes();

minutes.textContent = minutesStorage;
seconds.textContent = secondsStorage;

setInterval(() => {
  secondsStorage += 1;
  seconds.textContent = secondsStorage;
  minutes.textContent = minutesStorage;
  if (secondsStorage > 58) {
    secondsStorage = 0;
    minutesStorage += 1;
  }
}, 1000);

setTimeout(() => {
  window.location.href = '';
}, 300000)
