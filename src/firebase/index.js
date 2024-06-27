import { initializeApp } from "firebase/app";
import {getFirestore, doc, setDoc, getDoc} from "firebase/firestore"
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCSWacGIKkfBpiR-fag_BhqkHGXDjsh0w8",
  authDomain: "uzmovi-6c2f5.firebaseapp.com",
  projectId: "uzmovi-6c2f5",
  storageBucket: "uzmovi-6c2f5.appspot.com",
  messagingSenderId: "493317605038",
  appId: "1:493317605038:web:6a780fc973d896c9d54f3f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const getData = uid => {
  getDoc(doc(db, "users", uid))
}

export const addData = (uid, data) => {
  return getDoc(doc(db, "users", uid))
    .then(async res => {
      let d =res.data()
      if(!d.favorites){
        d = {
          ...d,
          favorites: [
            data
          ]
        }  
      }
      d = {
        ...d,
        favorites: [
          ...d.favorites,
          data
        ]
      }
      const result = await setDoc(doc(db, "users", uid), d)
    })
    .catch(err => console.log(err))
    .finally(() => console.log("working"))
}

const auth = getAuth()
export const getUser = (props) =>{ 
  return createUserWithEmailAndPassword(auth, props.emailValue, props.PassValue)
  .then(async res => {
    let resu = JSON.stringify(res.user)
    localStorage.setItem("user", resu)  
    // const result = await setDoc(doc(db, "users", res.user.uid), {email:res.props.emailValue})
    const result = await setDoc(doc(db, "users", res.user.uid), {email:res.user.email})
    return res.user 
  })
  .catch(err => console.log(err))}


  export const loginUser = (email, password) =>{ 
    return signInWithEmailAndPassword(auth, email, password)
    .then(res => {
      let resu = JSON.stringify(res.user)
      localStorage.setItem("user", resu)  
      // const result = await setDoc(doc(db, "users", res.user))
      console.log(res.user);
      return res.user
    })
    .catch(err => {
      console.log(err)
      throw err
    })
    .finally(() => console.log("It should be working"))
  }


export const SignOut = ()=>{
  localStorage.setItem("user", null)
  signOut(auth)
  .then(res => console.log(res))
  .catch(err => console.error(err))
}