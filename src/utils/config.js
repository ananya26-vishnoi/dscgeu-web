import firebase from "firebase/app";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: "dscgeu-web.firebaseapp.com",
	projectId: "dscgeu-web",
	storageBucket: "dscgeu-web.appspot.com",
	messagingSenderId: "829909868917",
	appId: "1:829909868917:web:74d4c44cc3ba28620cb33c",
	measurementId: "G-82E27ZHTD3",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
