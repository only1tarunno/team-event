import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCBZsoZduAhFudmrkSXdOe2rcthpszGGwA",
  authDomain: "teamevent-b5d3a.firebaseapp.com",
  projectId: "teamevent-b5d3a",
  storageBucket: "teamevent-b5d3a.appspot.com",
  messagingSenderId: "407742414579",
  appId: "1:407742414579:web:7a18f9084a22fcf6024186",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
