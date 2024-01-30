export const fetcher = async (...args: [RequestInfo, RequestInit?]) => {
  const res = await fetch(...args);
  return res.json();
};

export async function getInvoices() {
  const res = await fetch(`${process.env.API_BASE_URL}/api/invoices`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch invoices");
  }

  return res.json();
}
