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

year.textContent = date.getFullYear();
dayOfWeek.textContent = daysOfWeek[date.getDay()];
dayOfMonth.textContent = date.getDate();
month.textContent = `${months[date.getMonth()]} (${date.getMonth()})`;
hour.textContent = date.getHours();
minutes.textContent = date.getMinutes();

let secondsStorage = date.getSeconds();
seconds.textContent = secondsStorage;
setInterval(() => {
  secondsStorage += 1;
  seconds.textContent = secondsStorage;
  if (secondsStorage > 59) {
    secondsStorage = 0;
  }
}, 1000);
