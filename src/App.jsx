import { useState } from "react";

import CalendarHeader from "./components/calender/CalendarHeader";
import CalendarGrid from "./components/calender/CalendarGrid";

import BookingPanel from "./components/booking/BookingPanel";
import BookingStats from "./components/booking/BookingStats";

import SearchBar from "./components/common/SearchBar";

import useBookings from "./hooks/useBookings";
import useDragSelection from "./hooks/useDragSelection";

function App() {
  // Current month
  const [currentDate, setCurrentDate] =
    useState(new Date());

  // Search
  const [searchTerm, setSearchTerm] =
    useState("");

  // Fetch bookings
  const { bookings, loading, error } =
    useBookings();

  // Drag selection
  const {
    selectedRange,
    handleMouseDown,
    handleMouseEnter,
    handleMouseUp,
  } = useDragSelection();

  // Filter bookings
  const filteredBookings = bookings.filter(
    (booking) =>
      booking.guestName
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  // Loading
  if (loading) {
    return (
      <h1 style={{ padding: "20px" }}>
        Loading...
      </h1>
    );
  }

  // Error
  if (error) {
    return (
      <h1 style={{ padding: "20px" }}>
        {error}
      </h1>
    );
  }

  return (
    <div className="app">
      {/* HEADER */}
      <CalendarHeader
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />

      {/* SEARCH + STATS */}
      <div style={{ padding: "20px" }}>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* <BookingStats
          bookings={filteredBookings}
        /> */}
      </div>

      {/* MAIN CONTENT */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
        }}
      >
        {/* CALENDAR */}
        <CalendarGrid
          currentDate={currentDate}
          bookings={filteredBookings}
          selectedRange={selectedRange}
          handleMouseDown={handleMouseDown}
          handleMouseEnter={handleMouseEnter}
          handleMouseUp={handleMouseUp}
        />

        {/* BOOKING PANEL */}
        <BookingPanel
          selectedRange={selectedRange}
          bookings={filteredBookings}
        />
      </div>
    </div>
  );
}

export default App;