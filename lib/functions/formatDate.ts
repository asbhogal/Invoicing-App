export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const localeDateString = new Intl.DateTimeFormat("en-UK", options).format(
    date,
  );
  return localeDateString;
}
