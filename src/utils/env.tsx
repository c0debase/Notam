const liveHost = "https://us-central1-notam-rn.cloudfunctions.net";
const localHost = "http://localhost:5001/notam-rn/us-central1";
export const isDevelopment = process.env.NODE_ENV === "development";
export const host = isDevelopment ? localHost : liveHost;
