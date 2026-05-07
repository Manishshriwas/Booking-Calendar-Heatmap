export function generateCalendarDays(currentDate) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);

  const startDay = firstDay.getDay();

  const totalDays = new Date(year, month + 1, 0).getDate();

  const days = [];

  // Previous month
  const prevMonthTotalDays = new Date(
    year,
    month,
    0
  ).getDate();

  for (let i = startDay - 1; i >= 0; i--) {
    const date = new Date(
      year,
      month - 1,
      prevMonthTotalDays - i
    );

    days.push({
      fullDate: date,
      currentMonth: false,
    });
  }

  // Current month
  for (let day = 1; day <= totalDays; day++) {
    const date = new Date(year, month, day);

    days.push({
      fullDate: date,
      currentMonth: true,
    });
  }

  // Next month
  let nextDay = 1;

  while (days.length % 7 !== 0) {
    const date = new Date(year, month + 1, nextDay);

    days.push({
      fullDate: date,
      currentMonth: false,
    });

    nextDay++;
  }

  return days;
}