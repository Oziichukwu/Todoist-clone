import firebase from 'firebase/compat/app';
import 'firebase/storage'
import 'firebase/firestore';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBgCimnx_s7SUT2XmNbeBAfEUl0KKODVU4",
    authDomain: "todoist-8733c.firebaseapp.com",
    databaseURL: "https://todoist-8733c-default-rtdb.firebaseio.com",
    projectId: "todoist-8733c",
    storageBucket: "todoist-8733c.appspot.com",
    messagingSenderId: "377886440063",
    appId: "1:377886440063:web:cc6e234508fd6774f01d4a",
    measurementId: "G-TCDSB71ZC3"
})


export {firebaseConfig as firebase};