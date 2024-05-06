const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function formatDate(isoDate: string): string {
  // Validate the date string
  if (!isoDate || isNaN(Date.parse(isoDate))) {
    console.error(`Invalid date string: ${isoDate}`);
    return "Invalid date";
  }

  const date = new Date(isoDate);

  const localeDateString = dateFormatter.format(date);

  return localeDateString;
}
