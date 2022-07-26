import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Note: "etsuji-react-test" is a non-existent project.
const firebaseConfig = {
  apiKey: "AIzaSyDRzeNQHTP5KAxHHtlcPzHN2PD_ZLm4a5M",
  authDomain: "etsuji-react-test.firebaseapp.com",
  projectId: "etsuji-react-test",
  storageBucket: "etsuji-react-test.appspot.com",
  messagingSenderId: "816169103559",
  appId: "1:816169103559:web:41b4b597600bc9bea64ee2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .catch((error) => {console.log(error)})
};

export const projectId = firebaseConfig.projectId;

// If you want to add a handler.
//
//export const signInWithGoogle = (handler) => {
//  return () => {
//    signInWithPopup(auth, provider).then(handler)
//    .catch((error) => {console.log(error)})
//  };
//};
