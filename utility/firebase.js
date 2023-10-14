import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEhxxSKrjdTtcEHK1a1nnKKziTY9xhjLY",
  authDomain: "summit-23.firebaseapp.com",
  databaseURL: "https://summit-23-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "summit-23",
  storageBucket: "summit-23.appspot.com",
  messagingSenderId: "924550678836",
  appId: "1:924550678836:web:78b3b55876678c5ffa7d61",
  measurementId: "G-BGVL3Q3EQL"
};
let app; // Declare the app variable

// Initialize the Firebase app if it hasn't been initialized already
if (!app) {
  app = initializeApp(firebaseConfig, "yourAppName");
}
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
