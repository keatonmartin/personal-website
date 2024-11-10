const startDate = new Date("2021-8-17");
const endDate = new Date("2024-12-20");

const startDateMs = startDate.getTime();
const endDateMs = endDate.getTime();

setInterval(function() {
  let percent = ( Date.now() - startDateMs ) / (endDateMs - startDateMs);
  $("#percent").text((percent * 100).toFixed(8) + "%");
}, 50);
