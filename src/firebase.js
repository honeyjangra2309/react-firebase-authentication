import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyD_FjmGKCxxmnjlFVnb4DjUttIGFfQ47dk",
    authDomain: "catalytic-corps.firebaseapp.com",
    projectId: "catalytic-corps",
    storageBucket: "catalytic-corps.appspot.com",
    messagingSenderId: "597026649148",
    appId: "1:597026649148:web:9e4b4badef7973326e7f39",
    measurementId: "G-81TDKV1B83"
})

export const auth = app.auth()
export default app
