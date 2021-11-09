import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import Constants from "expo-constants";

// add firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAtj2NefohVYh_MMFtF1MqczZID-Ojs218",
  authDomain: "notam-rn.firebaseapp.com",
  projectId: "notam-rn",
  storageBucket: "notam-rn.appspot.com",
  messagingSenderId: "753315431130",
  appId: "1:753315431130:web:41eb98ea4201b12e419be3",
};

// initialize firebase
initializeApp(firebaseConfig);

// initialize auth
const auth = getAuth();

export { auth };
