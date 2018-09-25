import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDTRIIsaUU9nqCdXXqnLgdr2wb38KQ5VL4",
  authDomain: "react-todo-list-38fd1.firebaseapp.com",
  databaseURL: "https://react-todo-list-38fd1.firebaseio.com",
  projectId: "react-todo-list-38fd1",
  storageBucket: "react-todo-list-38fd1.appspot.com",
  messagingSenderId: "667715307593"
};
firebase.initializeApp(config);

export default firebase;
