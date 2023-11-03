import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANZuT3dApIHAUgtdnxuPmDxxSMCuRDF38",
  authDomain: "cd-e-summit23.firebaseapp.com",
  projectId: "cd-e-summit23",
  storageBucket: "cd-e-summit23.appspot.com",
  messagingSenderId: "559960224463",
  appId: "1:559960224463:web:e77d6382a06d878ea3fdba",
  measurementId: "G-6GFRSVHGMB"
};

const app = initializeApp(firebaseConfig,"fiirstApp");
export const auth = getAuth(app);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);

