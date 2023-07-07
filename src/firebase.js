import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDLwpoaFTHr0JFPMprShizxNSLbAVmOfjg",
  authDomain: "animessage-e9e2e.firebaseapp.com",
  databaseURL: "https://animessage-e9e2e-default-rtdb.firebaseio.com",
  projectId: "animessage-e9e2e",
  storageBucket: "animessage-e9e2e.appspot.com",
  messagingSenderId:"989151841631" ,
  appId: "1:989151841631:web:2280c2bc104197e2717aea"
})

export const auth = app.auth()
export default app