const timer = document.querySelector("#timer");
const days = document.querySelector("#timer__days");
const hours = document.querySelector("#timer__hours");
const minutes = document.querySelector("#timer__minutes");
const seconds = document.querySelector("#timer__seconds");

// Устанавливаем дату и время, когда закончится акция
let countDownDate = new Date("April 1, 2024 00:00:00").getTime();

let updateTimer = setInterval(function () {
  // Получаем текущее дату и время
  let now = new Date().getTime();
  // Находим разницу между текущим временем и датой окончания
  let difference = countDownDate - now;

  // Рассчитываем дни, часы, минуты и секунды
  let daysDif = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hoursDif = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutesDif = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let secondsDif = Math.floor((difference % (1000 * 60)) / 1000);

  // Вставляем значения в таймер
  days.innerHTML = daysDif < 10 ? "0" + daysDif : daysDif;
  hours.innerHTML = hoursDif < 10 ? "0" + hoursDif : hoursDif;
  minutes.innerHTML = minutesDif < 10 ? "0" + minutesDif : minutesDif;
  seconds.innerHTML = secondsDif < 10 ? "0" + secondsDif : secondsDif;

  // Когда таймер дойдет до заданной даты и времени
  if (difference < 0) {
    clearInterval(updateTimer);
    timer.innerHTML = "Акция закончилась. Следите за новостями";
  }
  // Обновляем функцию с интервалом 1 секунда
}, 1000);

export default updateTimer;
