function WeekDays() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <>
      {days.map((day) => (
        <div
          key={day}
          style={{
            padding: "10px",
            fontWeight: "bold",
            textAlign: "center",
            background: "#eef2ff",
          }}
        >
          {day}
        </div>
      ))}
    </>
  );
}

export default WeekDays;