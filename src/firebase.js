import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBF3uE6qlcaUXNPSgyaS9wxzEn4IjmL7Ks",
    authDomain: "instagram-clone-c96bb.firebaseapp.com",
    databaseURL: "https://instagram-clone-c96bb-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-c96bb",
    storageBucket: "instagram-clone-c96bb.appspot.com",
    messagingSenderId: "226637879385",
    appId: "1:226637879385:web:a4b066bb446d0b6f9a7948",
    measurementId: "G-1CQG77C6D2"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
