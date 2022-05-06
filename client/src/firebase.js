import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const messagesRef = collection(db, "messages");
export const order = query(messagesRef, orderBy('createdOn', 'desc'))
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const googleLogin = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const picture = result.user.photoURL;
            const uid = result.user.uid;
            localStorage.setItem("picture", picture);
            localStorage.setItem("UID", uid);
        })
}