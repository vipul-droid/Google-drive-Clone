import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBcnRUSEwZrAux8xYz6ETJhjH8WIZ0BdOc",
    authDomain: "drive-clone-45a81.firebaseapp.com",
    projectId: "drive-clone-45a81",
    storageBucket: "drive-clone-45a81.appspot.com",
    messagingSenderId: "765256887681",
    appId: "1:765256887681:web:b72998d6f32526ae490c80"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }

