const firebaseConfig = {
  apiKey: "AIzaSyDtmLLNGeVfXD9Sy9cBwb7sjpVDv3lxfDc",
  authDomain: "learn-lingo-639aa.firebaseapp.com",
  projectId: "learn-lingo-639aa",
  storageBucket: "learn-lingo-639aa.appspot.com",
  messagingSenderId: "18810231843",
  appId: "1:18810231843:web:f4aad13d6bfe34371ae596",
};

export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.ts"
    );
  } else {
    return firebaseConfig;
  }
}
