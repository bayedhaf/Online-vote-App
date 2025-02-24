
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCI1Id9hmkMfTEQwsB7EVN-ZlaFpBWcuRI",
  authDomain: "online-voteloginpassword.firebaseapp.com",
  projectId: "online-voteloginpassword",
  storageBucket: "online-voteloginpassword.firebasestorage.app",
  messagingSenderId: "262352850571",
  appId: "1:262352850571:web:b4131433522e1c376fce8e"
};


const app = initializeApp(firebaseConfig);
export const database=getAuth(app);