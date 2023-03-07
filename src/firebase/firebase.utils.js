// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, getDoc, setDoc, getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBs0x6V9Z1bCkaojn3taej89uyoPkdxxKM",
  authDomain: "e-clothingstore-1-db.firebaseapp.com",
  projectId: "e-clothingstore-1-db",
  storageBucket: "e-clothingstore-1-db.appspot.com",
  messagingSenderId: "1055871133515",
  appId: "1:1055871133515:web:5ba5f38380e7578337aace",
  measurementId: "G-MMDE2DV325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // debugger
  if (!userAuth) return;

  const usersCollection = collection(firestore, 'users');
  // const docSnapshotUsers = await getDocs(usersCollection);
  // console.log(docSnapshotUsers);

  const userReference = doc(usersCollection, userAuth.uid);
  const docSnapshotUser = await getDoc(userReference);

  if (!docSnapshotUser.exists()) {
    // debugger
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userReference, {
        displayName,
        email,
        createdAt,
        ...additionalData
      });

    } catch (error) {
      console.log('error creating user', error.message);
    }
  } else {
    // console.log("Such User exists!");
    // console.table(docSnapshotUser.data())
  }

  return userReference
}

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export default app;