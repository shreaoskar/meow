const { DateTime } = luxon;
const startDate = DateTime.fromISO("2024-07-26T12:00:00");

function updateElapsedTime() {
  const now = DateTime.now();

  if (now <= startDate) {
    document.getElementById("elapsed").textContent =
      "That date hasn't arrived yet!";
    return;
  }

  const diff = now
    .diff(startDate, ["months", "days", "hours", "minutes", "seconds"])
    .toObject();

  const months = Math.floor(diff.months);
  const days = Math.floor(diff.days);
  const hours = Math.floor(diff.hours);
  const minutes = Math.floor(diff.minutes);
  const seconds = Math.floor(diff.seconds);

  document.getElementById("elapsed").textContent =
    `${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

updateElapsedTime();
setInterval(updateElapsedTime, 1000);
