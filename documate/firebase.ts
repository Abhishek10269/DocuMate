import { initializeApp,getApps,getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDjV3iJuSmp2WdSGrrCenmlUNv6mGGG5kw",
    authDomain: "docu-mate.firebaseapp.com",
    projectId: "docu-mate",
    storageBucket: "docu-mate.firebasestorage.app",
    messagingSenderId: "131769535760",
    appId: "1:131769535760:web:e39427b85380f69878a995",
    measurementId: "G-GG4XW8KQN3"
  };

  const app  = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

  const storage = getStorage(app);
  const db = getFirestore(app);
  export{db,storage};