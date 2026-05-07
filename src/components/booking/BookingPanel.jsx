import BookingCard from "./BookingCard";

import { getBookingsForRange } from "../../utils/booking";

function BookingPanel({
  selectedRange,
  bookings,
}) {
  const selectedBookings =
    getBookingsForRange(
      bookings,
      selectedRange.start,
      selectedRange.end
    );

  return (
    <div
      style={{
        flex: 1,
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        minHeight: "500px",
        maxHeight: "700px",
        overflowY: "auto",
      }}
    >
      <h2>Booking Details</h2>

      {/* Selected dates */}
      <div style={{ marginTop: "20px" }}>
        <p>
          <strong>Start:</strong>{" "}
          {selectedRange.start
            ? selectedRange.start.toDateString()
            : "Not Selected"}
        </p>

        <p style={{ marginTop: "10px" }}>
          <strong>End:</strong>{" "}
          {selectedRange.end
            ? selectedRange.end.toDateString()
            : "Not Selected"}
        </p>
      </div>

      {/* Booking list */}
      <div style={{ marginTop: "30px" }}>
        {selectedBookings.length === 0 ? (
          <p style={{ color: "gray" }}>
            No bookings found
          </p>
        ) : (
          selectedBookings.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default BookingPanel;