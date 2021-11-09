import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const loginRequest = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);
