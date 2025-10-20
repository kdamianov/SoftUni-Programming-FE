function timePlus15(hours, minutes) {
  minutes += 15;

  if (minutes >= 60) {
    hours += 1;
    minutes -= 60;
  }

  if (hours >= 24) {
    hours = 0;
  }

  const formattedMinutes = minutes.toString().padStart(2, '0');

  console.log(`${hours}:${formattedMinutes}`);
}

timePlus15(23, 59)