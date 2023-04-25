export function generateMonthItems(date, pastRange, futureRange) {
  const currentDate = new Date(date);
  const currentYear = currentDate.getFullYear();
  const monthItems = [];
  for (let year = currentYear - pastRange; year <= currentYear + futureRange; year++) {
    for (let month = 0; month < 12; month++) {
      monthItems.push({
        year,
        month
      });
    }
  }
  return monthItems;
}