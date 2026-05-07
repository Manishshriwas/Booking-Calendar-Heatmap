import {
  getOccupancyCount,
  getHeatmapColor,
} from "../../utils/occupancy";

import { isDateInRange } from "../../utils/selection";

function DayCell({
  fullDate,
  currentMonth,
  bookings,
  selectedRange,
  handleMouseDown,
  handleMouseEnter,
  handleMouseUp,
}) {
  const occupancyCount = getOccupancyCount(
    fullDate,
    bookings
  );

  const backgroundColor =
    getHeatmapColor(occupancyCount);

  const isSelected = isDateInRange(
    fullDate,
    selectedRange.start,
    selectedRange.end
  );

  return (
    <div
      onMouseDown={() =>
        handleMouseDown(fullDate)
      }
      onMouseEnter={() =>
        handleMouseEnter(fullDate)
      }
      onMouseUp={handleMouseUp}
      style={{
        border: isSelected
          ? "3px solid #2563eb"
          : "1px solid #ddd",

        height: "100px",

        padding: "8px",

        background: backgroundColor,

        opacity: currentMonth ? 1 : 0.5,

        cursor: "pointer",

        userSelect: "none",
      }}
    >
      <p style={{ fontWeight: "bold" }}>
        {fullDate.getDate()}
      </p>

      <p
        style={{
          marginTop: "10px",
          fontSize: "14px",
        }}
      >
        {occupancyCount}/10 rooms
      </p>
    </div>
  );
}

export default DayCell;