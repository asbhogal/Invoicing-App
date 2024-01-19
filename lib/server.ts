import clientPromise from "./mongodb";

export default async function getMongoDB() {
  let isConnected = false;

  try {
    await clientPromise;
    isConnected = true;
  } catch (e) {
    console.error(e);
  }

  return isConnected;
}
