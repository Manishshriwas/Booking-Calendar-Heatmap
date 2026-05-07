export function isDateInRange(
  currentDate,
  startDate,
  endDate
) {
  if (!startDate || !endDate) return false;

  const current = currentDate.getTime();

  const start = startDate.getTime();

  const end = endDate.getTime();

  // Forward drag
  if (start <= end) {
    return current >= start && current <= end;
  }

  // Backward drag
  return current >= end && current <= start;
}