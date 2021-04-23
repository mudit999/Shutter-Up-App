import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC2q8TNRxRzIW7JhV70eBuhGPTIJ_4v4So",
    authDomain: "photo-gallery-28c50.firebaseapp.com",
    projectId: "photo-gallery-28c50",
    storageBucket: "photo-gallery-28c50.appspot.com",
    messagingSenderId: "944014599896",
    appId: "1:944014599896:web:c9d56a0713562faa48d9ad"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // initializing services
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  const projectAuth = firebase.auth();

  const providerGoogle = new firebase.auth.GoogleAuthProvider();


  export { projectStorage,projectFirestore, timestamp, projectAuth,providerGoogle  };