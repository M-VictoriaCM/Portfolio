import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAt8Zlkc1q69iAfeE5CrEoYeeclxB11odY",
    authDomain: "vue-contact-form-7b6ff.firebaseapp.com",
    projectId: "vue-contact-form-7b6ff",
    storageBucket: "vue-contact-form-7b6ff.appspot.com",
    messagingSenderId: "474687651782",
    appId: "1:474687651782:web:36b1813bed93a6a14bbcc7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  
  export{ db };
