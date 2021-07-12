import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
apiKey: "AIzaSyDVtDgQhYCg4zaN2lGV81hEfCrL_6392c0",
authDomain: "crwn-db-2311b.firebaseapp.com",
projectId: "crwn-db-2311b",
storageBucket: "crwn-db-2311b.appspot.com",
messagingSenderId: "514883502864",
appId: "1:514883502864:web:62959a2d22b3528fbd5b95"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
