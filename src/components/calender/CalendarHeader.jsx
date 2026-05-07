function CalendarHeader({ currentDate, setCurrentDate }) {
  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  });

  const year = currentDate.getFullYear();

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(year, currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(year, currentDate.getMonth() + 1, 1)
    );
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <div
      style={{
        padding: "20px",
        background: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <button onClick={handlePrevMonth}>{"<"}</button>

        <h2>
          {monthName} {year}
        </h2>

        <button onClick={handleNextMonth}>{">"}</button>
      </div>

      <button onClick={handleToday}>Today</button>
    </div>
  );
}

export default CalendarHeader;