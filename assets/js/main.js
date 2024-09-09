if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register('./assets/js/checkOnline.js')
    .then((registration) => {
      console.log('Service worker registered:', registration);
    })
    .catch((error) => {
      console.log('Error registering service worker:', error);
    });
}

const year = document.querySelector('#year');
const dayOfWeek = document.querySelector('#week-day');
const nextDayOfWeek = document.querySelector('#next-week-day');
const dayOfMonth = document.querySelector('#month-day');
const month = document.querySelector('#month');
const nextMonth = document.querySelector('#next-month');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

let date = new Date();

const daysOfWeek = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье'
];

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь'
];

year.textContent = `${date.getFullYear()}`;
month.textContent = `\'${months[date.getMonth()]} (${date.getMonth() + 1})\'`;
nextMonth.textContent = `// --> ${months[date.getMonth() + 1]}`;
dayOfMonth.textContent = date.getDate();
date.getDay() - 1 === -1
  ? (dayOfWeek.textContent = "'Воскресенье'")
  : (dayOfWeek.textContent = `\'${daysOfWeek[date.getDay() - 1]}\'`);
nextDayOfWeek.textContent = `// --> ${daysOfWeek[date.getDay()]}`;
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

setInterval(() => {
  if (parseInt(seconds.textContent) > 58) {
    minutes.textContent = parseInt(minutes.textContent) + 1;
    seconds.textContent = 0;
    seconds.textContent = `0${parseInt(seconds.textContent) + 1}`;
  }
  if (parseInt(seconds.textContent) > 8) {
    seconds.textContent = parseInt(seconds.textContent) + 1;
  } else if (parseInt(seconds.textContent) >= 0) {
    seconds.textContent = `0${parseInt(seconds.textContent) + 1}`;
  }
  if (parseInt(minutes.textContent) > 59) {
    window.location.href = '/';
  }
}, 1000);
