// console.log('До виклику SetTimeout');

// setTimeout(
//   x => {
//     console.log(x);
//     console.log('1 - Всередині callback для виклику функції');
//   },
//   2000,
//   5
// );

// setTimeout(
//   y => {
//     console.log(y);
//     console.log('2 - Всередині callback для виклику функції');
//   },
//   1000,
//   50
// );
// console.log('Після виклику SetTimeout');

// for (let index = 0; index < 10000; index++) {
//   console.log(index);
// }

// setTimeout(() {
//     console.log('1 - Всередині callback для виклику функції');
//   },2000,
// );

// setTimeout(() => {
//     console.log(y);
//     console.log('2 - Всередині callback для виклику функції');
//   },1000
// );
// console.log('Після виклику SetTimeout');

// const logger = time => {
//   console.log(`Log через ${time}ms, тому що не відмінили таймаут`);
// };

// const timerId = setTimeout(logger, 2000, 2000);

// const shouldCancelTimeout = Math.random() > 0.5;
// console.log(shouldCancelTimeout);

// if (shouldCancelTimeout) {
//   clearTimeout(timerId);
//   console.log('Відмінили виконання функції');
// }

// const logger = time => {
//   console.log(`Log через ${time}ms - ${Date.now()}`);
// };

// // console.log('До виклику SetInterval');
// // setInterval(logger, 2000, 2000);
// // console.log('Після виклику SetInterval');
// const intervalId = setInterval(logger, 2000, 2000);
// const shouldCancelInterval = Math.random() > 0.5;
// console.log(shouldCancelInterval);

// if (shouldCancelInterval) {
//   clearInterval(intervalId);
//   //   console.log('Відмінили виконання функції');
// }

// ===================================================
// =======================ПРАКТИКА====================
// ===================================================

//========================ОПОВІЩЕННЯ==================

// const NOTIFICATION_DELAY = 3000;
// let timerId = null;
// const refs = {
//   notification: document.querySelector('.js-allert'),
// };

// refs.notification.addEventListener('click', onNotificationClick);

// showNotification();

// function onNotificationClick() {
//   hideNotification();
//   clearInterval(timerId);
// }

// function showNotification() {
//   refs.notification.classList.add('is-visible');

//   timerId = setTimeout(() => {
//     console.log('Закриваємо автоматично');
//     hideNotification();
//   }, NOTIFICATION_DELAY);
// }

// function hideNotification() {
//   refs.notification.classList.remove('is-visible');
// }

// =================РОЗСИЛКА================

// const PROMT_DELAY = 1000; // час інтервалу
// const MAX_PROMT_ATTEMPS = 3; // кількість автоматичних появлянь
// // const intervalId - ID інтервалу
// let promtCounter = 0; // скільки разів попросили людину підписатися
// let hasSubcribed = false; // людина підписалася на розсилку

// const intervalId = setInterval(() => {
//   if (promtCounter === MAX_PROMT_ATTEMPS || has) {
//     console.log('Потрібно зупинити інтервал');
//     clearInterval(intervalId);
//     return;
//   }
//   console.log('Підпишись на розсилку! -' + Date.now());
//   promtCounter += 1;
// }, PROMT_DELAY);

//===================BOOTSTRAP===================
//===============================================
//===================НАДОЇДАЛКА==================

// import '../css/common.css';
// import BSN from 'bootstrap.native';

// const modal = new BSN.Modal('#subscription-modal');
// console.log(modal);

// const refs = {
//   modal: document.querySelector('#subscription-modal'),
//   subscribedDtn: document.querySelector('button[data-subscribe]'),
// };

// const PROMT_DELAY = 3000;
// const MAX_PROMT_ATTEMPS = 3;
// let promtCounter = 0;
// let hasSubcribed = false;

// openModal();

// refs.modal.addEventListener('hide.bs.modal', openModal);

// refs.subscribedDtn.addEventListener('click', onSubscribedClick);

// function openModal() {
//   if (promtCounter === MAX_PROMT_ATTEMPS || hasSubcribed) {
//     console.log('Максимальна кількість надоїдань, або людина підписалась');
//     return;
//   }
//   setTimeout(() => {
//     console.log('Відкриваємо надоїдалку');
//     modal.show();
//     promtCounter += 1;
//   }, PROMT_DELAY);
// }

// function onSubscribedClick() {
//   hasSubcribed = true;
//   modal.hide();
// }

//=========================================
//================ДАТА=====================
//=========================================
import '../css/common.css';

// const date = new Date(1674406901486);
// console.log(date);
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getTime());

// const date1 = new Date().getTime();
// const date1 = Date.now();
// console.log(date1);
// setTimeout(() => {
//   // const date2 = new Date().getTime();
//   const date2 = Date.now();
//   console.log(date1);
//   console.log(date2);
//   console.log(date2 - date1);
// }, 2000);

//================TIMER================

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
    this.init();
  }
  init() {
    const time = this.getComponents(0);
    this.onTick(time);
  }
  start() {
    if (this.isActive) {
      return;
    }
    const startTime = Date.now();
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getComponents(deltaTime);
      this.onTick(time);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.getComponents(0);
    this.onTick(time);
  }
  getComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new Timer({
  onTick: updateClockface,
});

// const timer = {
//   intervalId: null,
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActive = true;
//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = getComponents(deltaTime);
//       updateClockface(time);
//       // console.log(`${hours}:${mins}:${secs}`);
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   },
// };

// timer.start();

refs.startBtn.addEventListener('click', timer.start.bind(timer));

refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

// refs.startBtn.addEventListener('click', () => {
//   timer.start();
// });

// refs.stopBtn.addEventListener('click', () => {
//   timer.stop();
// });

//Приймає час у мілісекундах
// Вираховує скільки в них годин/хвилин/секунд
//Малює інтерфейс

function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

// Приймає число, приводить до рядка і додає на початок 0б якщо число менше 2 знаків
// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function getComponents(time) {
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   return { hours, mins, secs };
// }
