const startDate = new Date("2021-8-17");
const endDate = new Date("2025-5-5");

const startDateMs = startDate.getTime();
const endDateMs = endDate.getTime();



setInterval(function() {
  let percent = ( Date.now() - startDateMs ) / (endDateMs - startDateMs);
  $("#percent").text(percent.toFixed(8) + "%");
}, 50);
