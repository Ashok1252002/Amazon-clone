import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDiAqxHeLjrEk0sdiQ4p5i_tYBBfexm-ao",
	authDomain: "clone-590.firebaseapp.com",
	projectId: "clone-590",
	storageBucket: "clone-590.appspot.com",
	messagingSenderId: "951182421961",
	appId: "1:951182421961:web:75ff8c2e60815c54d5c218",
	measurementId: "G-T07CW37EZ8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
