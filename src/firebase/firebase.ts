import { firebaseAuth } from "./firebase-config";
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { LoginFormValues, UserFormValues } from "../types/indexTypes";

setPersistence(firebaseAuth, browserLocalPersistence);

export const firebaseSignIn = async ({ email, password }: LoginFormValues) => {
  return await signInWithEmailAndPassword(firebaseAuth, email, password);
};

export const firebaseSignUp = async ({
  email,
  password,
  displayName,
}: UserFormValues) => {
  const userCredential = await createUserWithEmailAndPassword(
    firebaseAuth,
    email,
    password
  );
  const user = userCredential.user;
  await updateProfile(user, { displayName });
  return userCredential;
};

export const firebaseSignOut = async () => {
  await signOut(firebaseAuth);
};
