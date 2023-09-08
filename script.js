const clock = document.getElementById("clock")

function getTime() {
  return new Date().toLocaleTimeString()
}

function updateClock() {
  const time = getTime()

  clock.querySelector(".hours").textContent = time.slice(0, 2);
  clock.querySelector(".minutes").textContent = time.slice(3, 5);
  clock.querySelector(".seconds").textContent = time.slice(6, 8);
}

setInterval(updateClock, 1000)

updateClock()