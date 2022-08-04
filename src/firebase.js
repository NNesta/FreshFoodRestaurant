import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrCf8PMy1eN7dgVSoeIe1khQjIQW5zCCE",
  authDomain: "freshfoodrestaurant-ace6d.firebaseapp.com",
  projectId: "freshfoodrestaurant-ace6d",
  storageBucket: "freshfoodrestaurant-ace6d.appspot.com",
  messagingSenderId: "269318595023",
  appId: "1:269318595023:web:c09c5d972f8f63d25772ba",
  measurementId: "G-17LLZNNRB2"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;