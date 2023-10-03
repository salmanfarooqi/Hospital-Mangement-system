function addMinutes(oldTime, minutes) {
  const [hours, minutesStr, amPm] = oldTime
    .match(/^(\d+):(\d+) ([ap]m)$/i)
    .slice(1);
  let totalMinutes = parseInt(hours, 10) * 60 + parseInt(minutesStr, 10);
  totalMinutes += minutes;
  const newHours = Math.floor(totalMinutes / 60) % 12 || 12;
  const newMinutes = totalMinutes % 60;
  const newAmPm = totalMinutes < 720 ? amPm : amPm === "am" ? "pm" : "am";
  return `${newHours}:${newMinutes.toString().padStart(2, "0")} ${newAmPm}`;
}

export default addMinutes;
