const CURRENCY_CONVERTER = new Intl.NumberFormat("en-US", {
  currency: "GBP",
  style: "currency",
});

export function formatCurrency(number: number) {
  return CURRENCY_CONVERTER.format(number);
}
