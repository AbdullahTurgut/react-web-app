class DateUtils {
  static getFormattedDate(date: Date) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Tuesday",
      "Friday",
      "Saturday",
    ];
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
    const dayName = days[date.getDay()]; // get the name of the day
    const day = date.getDate(); // get the day of the month
    const month = months[date.getMonth()]; // get the name of the month
    const year = date.getFullYear(); // get the full year

    return `${dayName} ${day} ${month}, ${year}`;
  }
}

export default DateUtils;

export const getFormattedToday = (): string => {
  const today = new Date();
  return today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getFormatTaskDate = (date: string) => {
  const formattedDate = new Date(date); // String'i Date nesnesine dönüştür
  return formattedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
