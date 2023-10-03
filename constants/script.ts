import { number } from "zod"

setInterval(setClock, 1000)

const hourHand = document.querySelector<HTMLElement>('[data-hour-hand]')
const minuteHand = document.querySelector<HTMLElement>('[data-minute-hand]')
const secondHand = document.querySelector<HTMLElement>('[data-second-hand]')
const dateWindow = document.querySelector<HTMLElement>('[data-date-window]')
const dayWindow = document.querySelector<HTMLElement>('[data-day-window]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

  if (secondHand !== null) {
    setRotation(secondHand, secondsRatio);
  }

  if (minuteHand !== null) {
      setRotation(minuteHand, minutesRatio);
  }

  if (hourHand !== null) {
      setRotation(hourHand, hoursRatio);
  }

  if (dateWindow !== null) {
      const date = currentDate.getDate().toString();
      dateWindow.textContent = date;
  }

  if (dateWindow !== null) {
    const date = currentDate.getDate().toString();
    dateWindow.textContent = date;
  }

  if (dayWindow !== null) {
      const options: Intl.DateTimeFormatOptions = { weekday: 'short' };
      const day = currentDate.toLocaleDateString('en-US', options);
      dayWindow.textContent = day;
  }
}

function setRotation(element: HTMLElement, rotationRatio: number) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()