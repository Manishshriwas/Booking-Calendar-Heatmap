export function getBookingsForRange(
  bookings,
  startDate,
  endDate
) {
  if (!startDate || !endDate) return [];

  return bookings.filter((booking) => {
    // Ignore cancelled bookings
    if (booking.status === "cancelled") {
      return false;
    }

    const checkIn = new Date(booking.checkIn);

    const checkOut = new Date(booking.checkOut);

    // Overlap logic
    return (
      checkIn <= endDate &&
      checkOut > startDate
    );
  });
}

export function calculateNights(
  checkIn,
  checkOut
) {
  const start = new Date(checkIn);

  const end = new Date(checkOut);

  const difference =
    end.getTime() - start.getTime();

  return difference / (1000 * 60 * 60 * 24);
}