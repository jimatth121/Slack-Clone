import * as firebase from "firebase/app";

// import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2UkTkfDIcqQUA4aISbIQ4wv3MS7RuogE",
  authDomain: "slack-clone-ed02f.firebaseapp.com",
  projectId: "slack-clone-ed02f",
  storageBucket: "slack-clone-ed02f.appspot.com",
  messagingSenderId: "951864930500",
  appId: "1:951864930500:web:1f27dd927b9aae45ce5991",
  measurementId: "G-GXQZL0RZWZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
