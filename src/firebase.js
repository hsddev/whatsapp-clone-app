import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFalYFPNqPVCOBiqWIwnM8ZKvH5TYrV84",
  authDomain: "whatsapp-clone-app-631b2.firebaseapp.com",
  projectId: "whatsapp-clone-app-631b2",
  storageBucket: "whatsapp-clone-app-631b2.appspot.com",
  messagingSenderId: "774109597245",
  appId: "1:774109597245:web:1aaccc5582ee0e7d97a454",
  measurementId: "G-2E427WMMQ8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
