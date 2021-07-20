import 'bootstrap/dist/css/bootstrap.min.css';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

import "firebase/firestore";

import {firebaseConfig} from '../config';

  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  db.collection("employees").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
});