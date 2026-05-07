import WeekDays from "./WeekDays";
import DayCell from "./DayCell";

import { generateCalendarDays } from "../../utils/calendar";

function CalendarGrid({
  currentDate,
  bookings,
  selectedRange,
  handleMouseDown,
  handleMouseEnter,
  handleMouseUp,
}) {
  const days = generateCalendarDays(currentDate);

  return (
    <div
      style={{
        flex: 3,
        background: "white",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
        }}
      >
        <WeekDays />

        {days.map((day, index) => (
          <DayCell
            key={index}
            fullDate={day.fullDate}
            currentMonth={day.currentMonth}
            bookings={bookings}
            selectedRange={selectedRange}
            handleMouseDown={handleMouseDown}
            handleMouseEnter={handleMouseEnter}
            handleMouseUp={handleMouseUp}
          />
        ))}
      </div>
    </div>
  );
}

export default CalendarGrid;