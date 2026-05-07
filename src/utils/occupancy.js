export function getOccupancyCount(date, bookings) {
  let occupiedRooms = 0;

  bookings.forEach((booking) => {
    // Ignore cancelled bookings
    if (booking.status === "cancelled") return;

    const checkIn = new Date(booking.checkIn);
    const checkOut = new Date(booking.checkOut);

    // Booking occupies nights only
    if (date >= checkIn && date < checkOut) {
      occupiedRooms++;
    }
  });

  return occupiedRooms;
}

// Heatmap color function
export function getHeatmapColor(count) {
  if (count === 0) return "#f3f4f6";

  if (count <= 2) return "#d1fae5";

  if (count <= 5) return "#86efac";

  if (count <= 8) return "#facc15";

  return "#ef4444";
}