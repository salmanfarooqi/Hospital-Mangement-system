// impelement this if any doctor don't want to take appointment
// on a specific date or day
export const disabledDates = [
  // new Date("2023-05-29"),
  // new Date("2023-05-18"),
  // new Date("2023-05-29"),
];

// if hours or minutes less than 10 then write 0 to it's left
export const tostring = (item) => {
  if (item < 10) {
    return "0" + item.toString();
  } else {
    return item.toString();
  }
};

// adds minutes to a given time string and returns the result in 24-hour format:
export const addMinutes = (time, minutes) => {
  const [hours, mins] = time.split(":");
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(mins);
  date.setMinutes(date.getMinutes() + minutes);
  const newHours = date.getHours().toString().padStart(2, "0");
  const newMins = date.getMinutes().toString().padStart(2, "0");
  return `${newHours}:${newMins}`;
};

//  converts a time in the format "18:00" to "06:00 pm":
export function formatTime(time) {
  const [hours, minutes] = time.split(":");
  let formattedHours = hours % 12 || 12;
  const ampm = hours >= 12 ? "pm" : "am";
  formattedHours = formattedHours < 10 ? "0" + formattedHours : formattedHours;
  return `${formattedHours}:${minutes} ${ampm}`;
}

// Checking whether specific date is booked or available
export const isDateDisabled = (date) => {
  return !disabledDates.some(
    (disabledDate) => disabledDate.getDate() === date.getDate()
  );
};

// Function to add custom class names to specific dates
// change color of booked dates
export const getDayClassName = (date) =>
  disabledDates.some(
    (disabledDate) => disabledDate.getDate() === date.getDate()
  )
    ? "random"
    : undefined;

/*
  // Handle doctor Name Select ---- no longer use, becz it is used direct with tag
  const handleDoctorName = (e) => {
    setDoctorId(e.target.value);
    setAvailableSlots([]);
  };
  */
