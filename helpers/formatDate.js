function formatDate(unix) {
  const date = new Date(unix * 1000);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let hours = date.getHours();
  hours = hours < 10 ? `0${hours}` : hours;

  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  let monthDay = date.getDate();
  monthDay = monthDay < 10 ? `0${monthDay}` : monthDay;

  return `${hours}:${minutes} on ${days[date.getDay()]} ${
    months[date.getMonth()]
  } ${monthDay}, ${date.getFullYear()}`;
}

module.exports = formatDate;
