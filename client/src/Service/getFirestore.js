import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import { getAnalytics } from 'firebase/compat/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyDF4xCf058Lu7Bq4g8-IfuYzxXGr3Nmwm4",
    authDomain: "eolia-nexus-project.firebaseapp.com",
    projectId: "eolia-nexus-project",
    storageBucket: "eolia-nexus-project.appspot.com",
    messagingSenderId: "836923971148",
    appId: "1:836923971148:web:c83d82baf75bc090c206e9",
    measurementId: "G-CMCYBVD7JC"
}

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = async () => {
    return await firebase.firestore(app)
}

// const analytics = getAnalytics(app)
