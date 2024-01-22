export async function getCountries() {
  const res = await fetch(
    "https://referential.p.rapidapi.com/v1/country?fields=iso_a3&limit=250",
    {
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY || "",
        "X-RapidAPI-Host": "referential.p.rapidapi.com",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }

  return res.json();
}
