import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAdkCiBHT2PLQCoSStgC-j8V3KsHkfMCMc",
    authDomain: "revents-258914.firebaseapp.com",
    databaseURL: "https://revents-258914.firebaseio.com",
    projectId: "revents-258914",
    storageBucket: "revents-258914.appspot.com",
    messagingSenderId: "14404590606",
    appId: "1:14404590606:web:851f378afa5e22eea4f05f",
    measurementId: "G-MW2YZB9NBS"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;