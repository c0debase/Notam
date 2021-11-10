import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase/firebase";

export const loginRequest = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const logoutRequest = () => signOut(auth);
