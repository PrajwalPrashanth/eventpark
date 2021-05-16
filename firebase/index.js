import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyKLmNthx7tTpNO4qiaBNUdSoVpcnYKn4",
  authDomain: "event-park.firebaseapp.com",
  projectId: "event-park",
  storageBucket: "event-park.appspot.com",
  messagingSenderId: "809466049479",
  appId: "1:809466049479:web:56807aa850dfeb0d361fe2",
  measurementId: "G-XJQE6K3G3P",
};
!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const firebaseStorage = firebase.storage();

export default firebaseStorage;
