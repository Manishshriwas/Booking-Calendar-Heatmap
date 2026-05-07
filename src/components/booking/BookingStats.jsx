function BookingStats({ bookings }) {
  // Only confirmed bookings
  const confirmedBookings = bookings.filter(
    (booking) =>
      booking.status === "confirmed"
  );

  // Total bookings
  const totalBookings =
    confirmedBookings.length;

  // Unique occupied rooms
  const occupiedRooms = new Set(
    confirmedBookings.map(
      (booking) => booking.roomNumber
    )
  ).size;

  // Occupancy %
  const occupancyRate = (
    (occupiedRooms / 10) *
    100
  ).toFixed(0);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(4, 1fr)",
        gap: "20px",
        marginBottom: "20px",
      }}
    >
      {/* Total Bookings */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h3>Total Bookings</h3>

        <p
          style={{
            marginTop: "10px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {totalBookings}
        </p>
      </div>

      {/* Occupied Rooms */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h3>Occupied Rooms</h3>

        <p
          style={{
            marginTop: "10px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {occupiedRooms}/10
        </p>
      </div>

      {/* Occupancy Rate */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h3>Occupancy Rate</h3>

        <p
          style={{
            marginTop: "10px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {occupancyRate}%
        </p>
      </div>

      {/* Confirmed */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h3>Confirmed</h3>

        <p
          style={{
            marginTop: "10px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {confirmedBookings.length}
        </p>
      </div>
    </div>
  );
}

export default BookingStats;