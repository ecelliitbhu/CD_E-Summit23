import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNsxpenEgeTL9lonsFrIDF3EWXoUwXpHQ",
  authDomain: "cdportal23-6cfb5.firebaseapp.com",
  projectId: "cdportal23-6cfb5",
  storageBucket: "cdportal23-6cfb5.appspot.com",
  messagingSenderId: "1061299705925",
  appId: "1:1061299705925:web:c8a94792fa03993b99ab2c",
  measurementId: "G-4XS90GK351"
};

const app = initializeApp(firebaseConfig,"firstApp");
export const auth = getAuth(app);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);

