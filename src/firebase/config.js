import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCzs8hXxzI2iOH2TEpAJz8M6cxCF8tRoCY",
  authDomain: "sumeet-photogram-de166.firebaseapp.com",
  databaseURL: "https://sumeet-photogram-de166.firebaseio.com",
  projectId: "sumeet-photogram-de166",
  storageBucket: "sumeet-photogram-de166.appspot.com",
  messagingSenderId: "160156765972",
  appId: "1:160156765972:web:293f0613ed35760ac3bc01"
};
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp};