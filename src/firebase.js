import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyBhfVZbd84DsBfuadkvm4yZvhzJ60cT5oc",
        authDomain: "todo-app-2134e.firebaseapp.com",
        databaseURL: "https://todo-app-2134e.firebaseio.com",
        projectId: "todo-app-2134e",
        storageBucket: "todo-app-2134e.appspot.com",
        messagingSenderId: "1082900252949",
        appId: "1:1082900252949:web:49dea92a217800ea00811c",
        measurementId: "G-TLL1G3KSMR"
      }
);

const db = firebaseApp.firestore();

export default db;