import firebase from 'firebase'

 var firebaseConfig = {
    apiKey: "AIzaSyCGNs-t5xVS96Fn12qJXz3JoPNduwgysMc",
    authDomain: "mytodos-e5fbc.firebaseapp.com",
    projectId: "mytodos-e5fbc",
    storageBucket: "mytodos-e5fbc.appspot.com",
    messagingSenderId: "135565889149",
    appId: "1:135565889149:web:078e49960d0d6330642b14"
  };

  firebase.initializeApp(firebaseConfig);

  const db= firebase.firestore()

  export {db}