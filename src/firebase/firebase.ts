import { firebaseAuth } from "./firebase-config";
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { LoginFormValues, UserFormValues } from "../types/indexTypes";
setPersistence(firebaseAuth, browserLocalPersistence);

export const firebaseSignIn = async ({ email, password }: LoginFormValues) => {
  return await signInWithEmailAndPassword(firebaseAuth, email, password);
};

export const firebaseSignUp = async ({ email, password }: UserFormValues) => {
  return await createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export const firebaseSignOut = async () => {
  await signOut(firebaseAuth);
};
