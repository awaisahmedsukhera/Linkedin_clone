import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyADAZpxuygooJwRdp0AP9ygzVekxcptq4g",
    authDomain: "linkedin-clone-67e99.firebaseapp.com",
    projectId: "linkedin-clone-67e99",
    storageBucket: "linkedin-clone-67e99.appspot.com",
    messagingSenderId: "1023230347704",
    appId: "1:1023230347704:web:4bc80b10a9e1b0d9b3674d"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig)
  const db= firebaseApp.firestore();
  const auth =firebaseApp.auth();

  export {db, auth};