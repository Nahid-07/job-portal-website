import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCB_ZKpvoP-nC39OuNHOAAiF8e9wvg1XcY",
  authDomain: "job-portal-auth.firebaseapp.com",
  projectId: "job-portal-auth",
  storageBucket: "job-portal-auth.appspot.com",
  messagingSenderId: "495371924309",
  appId: "1:495371924309:web:f0dfae9f227c20e2cbb5dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app