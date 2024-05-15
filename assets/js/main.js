const year = document.querySelector("#year");
const dayOfWeek = document.querySelector("#week-day");
const nextDayOfWeek = document.querySelector("#next-week-day");
const dayOfMonth = document.querySelector("#month-day");
const month = document.querySelector("#month");
const nextMonth = document.querySelector("#next-month");
const hours = document.querySelector("#hours");
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
nextMonth.textContent = `// --> ${months[date.getMonth() + 1]}`;
dayOfMonth.textContent = date.getDate();
dayOfWeek.textContent = `\'${daysOfWeek[date.getDay()]}\'`;
nextDayOfWeek.textContent = `// --> ${daysOfWeek[date.getDay() + 1]}`;
hours.textContent = date.getHours();
minutes.textContent = date.getMinutes();
seconds.textContent = date.getSeconds();

if (seconds.textContent.length === 1) {
  seconds.textContent = `0${date.getSeconds()}`;
} else if (seconds.textContent.length > 1) {
  seconds.textContent = `${date.getSeconds()}`;
}

if (minutes.textContent.length === 1) {
  minutes.textContent = `0${date.getMinutes()}`;
} else if (minutes.textContent.length > 1) {
  minutes.textContent = `${date.getMinutes()}`;
}

if (hours.textContent.length === 1) {
  hours.textContent = `0${date.getHours()}`;
} else if (hours.textContent.length > 1) {
  hours.textContent = `${date.getHours()}`;
}