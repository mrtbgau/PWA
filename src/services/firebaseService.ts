import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";

// Firebase setup
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "webrtc-13b0c.firebaseapp.com",
  projectId: "webrtc-13b0c",
  storageBucket: "webrtc-13b0c.firebasestorage.app",
  messagingSenderId: "1071169679558",
  appId: "1:1071169679558:web:9329d6af5db9222cb1a7c7",
  measurementId: "G-ZEED64YTVE",
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export {
  addDoc,
  collection,
  doc,
  firestore,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
};
