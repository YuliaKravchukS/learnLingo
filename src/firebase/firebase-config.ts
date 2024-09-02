import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const app = initializeApp({
  apiKey: "AIzaSyDtmLLNGeVfXD9Sy9cBwb7sjpVDv3lxfDc",
  authDomain: "learn-lingo-639aa.firebaseapp.com",
  projectId: "learn-lingo-639aa",
  storageBucket: "learn-lingo-639aa.appspot.com",
  messagingSenderId: "18810231843",
  appId: "1:18810231843:web:f4aad13d6bfe34371ae596",
});

export const firebaseAuth = getAuth(app);
export const db = getDatabase(app);
export default app;
