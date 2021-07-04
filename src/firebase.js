import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCztqDibbyO-GyLZmdIUkUlXFvLGKJc8z8",
    authDomain: "disney-plus-a8d25.firebaseapp.com",
    projectId: "disney-plus-a8d25",
    storageBucket: "disney-plus-a8d25.appspot.com",
    messagingSenderId: "910155362717",
    appId: "1:910155362717:web:d3465dacab0ec0fb137f74",
    measurementId: "G-RGLX80MRWG"
  };
  
  //here we are initating our firebaseApp which is disney_plus connection with firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //here we are using a db of that app 
  const db = firebaseApp.firestore();

  //here we are importing the connection for authentication. 
  const auth = firebase.auth();

  //here it will provide the all the excisting google account on your device to our site for signup
  const provider = new firebase.auth.GoogleAuthProvider();
  
  //here we are using this database storeage in which we are going to store our images and videos.
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;