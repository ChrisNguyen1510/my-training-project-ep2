export function formatCurrency(value: number, currency: string = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(value);
}

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat("en-GB").format(new Date(date));
}
