import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEUIRPeazl_17n444QYW7V4RgAwoRjrbc",
  authDomain: "registration-final-project.firebaseapp.com",
  databaseURL: "https://registration-final-project-default-rtdb.firebaseio.com",
  projectId: "registration-final-project",
  storageBucket: "registration-final-project.appspot.com",
  messagingSenderId: "977511188965",
  appId: "1:977511188965:web:0170dc0470ab82ddfbc70c",
  measurementId: "G-9QEGLTLVCP",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(
      collection(firestore, "users"),
      where("uid", "==", user.uid)
    );
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(firestore, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (
  firstName,
  lastName,
  email,
  password
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(firestore, "users"), {
      uid: user.uid,
      firstName,
      lastName,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};

export {
  auth,
  firestore,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
