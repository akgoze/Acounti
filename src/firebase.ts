import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyCgAwngznbS_D8_NyPZXOckLIHiiGLteP8",
  authDomain: "acountiapp.firebaseapp.com",
  projectId: "acountiapp",
  storageBucket: "acountiapp.appspot.com",
  messagingSenderId: "649172511356",
  appId: "1:649172511356:web:393dc8612a6233effb77f9",
  measurementId: "G-REL7V4ZNKF"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'accounts')