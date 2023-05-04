import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const db = firebase.initializeApp(
  {
    apiKey: "AIzaSyCcQnSjmSyxssBixTMALMrW2FCtSdYopGY",
    authDomain: "wakkelni.firebaseapp.com",
    databaseURL: "https://wakkelni-default-rtdb.firebaseio.com",
    projectId: "wakkelni",
    storageBucket: "wakkelni.appspot.com",
    messagingSenderId: "64401736694",
    appId: "1:64401736694:web:bb6ab9108811757afabdd7"
  }
).firestore()
export default db;
