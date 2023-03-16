// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,

    // REACT_APP_apiKey=AIzaSyDd_z0caO75UqyyvVC8zgJeY764KjXYfmY
    // REACT_APP_authDomain=electro-depot-cc605.firebaseapp.com
    // REACT_APP_databaseURL=https://electro-depot-cc605-default-rtdb.asia-southeast1.firebasedatabase.app
    // REACT_APP_projectId=electro-depot-cc605
    // REACT_APP_storageBucket=electro-depot-cc605.appspot.com
    // REACT_APP_messagingSenderId=192494624870
    // REACT_APP_appId=1:192494624870:web:52dfd643cd56a67eab8da7
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;