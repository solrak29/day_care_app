import {firebaseConfig} from './firebase_cfg.js';
import firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth";
function init() {
    if ( firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}

export function firebaseDB() {
    init();
    return firebase.firestore();
}

export function firebaseSignOn(email, pass) {
    init();
    return firebase.auth().signInWithEmailAndPassword(email, pass)
    /*
    .then((userCredential) => {
        console.log('User was logged in');
        var user = userCredential.user;
        console.log(user.email);
        return user.email;
    });
    */
}

