import { calculateNights } from "../../utils/booking";

function BookingCard({ booking }) {
  const nights = calculateNights(
    booking.checkIn,
    booking.checkOut
  );

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "15px",
        background: "#f9fafb",
      }}
    >
      <h3>{booking.guestName}</h3>

      <p style={{ marginTop: "10px" }}>
        <strong>Room:</strong>{" "}
        {booking.roomNumber}
      </p>

      <p style={{ marginTop: "5px" }}>
        <strong>Check-in:</strong>{" "}
        {booking.checkIn}
      </p>

      <p style={{ marginTop: "5px" }}>
        <strong>Check-out:</strong>{" "}
        {booking.checkOut}
      </p>

      <p style={{ marginTop: "5px" }}>
        <strong>Nights:</strong> {nights}
      </p>

      <p style={{ marginTop: "5px" }}>
        <strong>Status:</strong>{" "}
        {booking.status}
      </p>
    </div>
  );
}

export default BookingCard;