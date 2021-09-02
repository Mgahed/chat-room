import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCgqNa9r_vFUxEYmPYtULIhNKtCfXr5L0w",
    authDomain: "live-chat-vue-5e3e1.firebaseapp.com",
    projectId: "live-chat-vue-5e3e1",
    storageBucket: "live-chat-vue-5e3e1.appspot.com",
    messagingSenderId: "366740549704",
    appId: "1:366740549704:web:cdfa391045cd7c8664e87d"
};

//init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export {projectFirestore, timestamp, projectAuth}