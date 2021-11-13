import { Platform } from "react-native";

const liveHost = "https://us-central1-notam-rn.cloudfunctions.net";
const localHost = "http://localhost:5001/notam-rn/us-central1";

// Revert to the live server if the app is being run on android because android prevents
// non https API calls which the local firebase functions server is
export const isAndroid = Platform.OS === "android";

export const isDevelopment = process.env.NODE_ENV === "development";
export const host = isDevelopment || isAndroid ? localHost : liveHost;
// export const host = localHost;
export const isMock = true;
