// src/lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAigEQ9TFK8r-YzGxFQgKWGyZKBu_UAktA",
  authDomain: "onemississipi-e407e.firebaseapp.com",
  projectId: "onemississipi-e407e",
  storageBucket: "onemississipi-e407e.appspot.com",
  messagingSenderId: "963811647452",
  appId: "1:963811647452:web:e0862cd989c3364b0eb919",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
