setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const dateWindow = document.querySelector('[data-date-window]')
const dayWindow = document.querySelector('[data-day-window]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

    if (dateWindow !== null) {
      const date = currentDate.getDate();
      dateWindow.textContent = date;
  }

  if (dayWindow !== null) {
      const options = { weekday: 'short' };
      const day = currentDate.toLocaleDateString('en-US', options);
      dayWindow.textContent = day;
  }
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()