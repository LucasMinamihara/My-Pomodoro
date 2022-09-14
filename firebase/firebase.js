import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  increment,
  doc,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIwY3u0lkEb8w_2VjdxLamAiPzyXn03WE",
  authDomain: "pomodorodatabase.firebaseapp.com",
  projectId: "pomodorodatabase",
  storageBucket: "pomodorodatabase.appspot.com",
  messagingSenderId: "468955537599",
  appId: "1:468955537599:web:1a4d2f461e12863bb3e60a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const POMODORODATABASE = "pomodorodatabase";
const idPomodoroDataBase = "vnhBaJjVbUud7B1cUNIt";
// async function addHoursOnDataBase() {
//   await addDoc(collection(db, POMODORODATABASE), {
//     hours: 10,
//     minutes: 33,

//   });
// }
// addHoursOnDataBase()
//   .then(() => {
//     console.log("item adicionado com sucesso!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function readDataBase() {
  const database_hourAndMinutes = await getDocs(
    collection(db, POMODORODATABASE)
  );
  database_hourAndMinutes.forEach((doc) => {
    console.log(doc.data(0));
  });
}

async function attDataBase() {
  const databaseInformation = doc(db, POMODORODATABASE, idPomodoroDataBase);
  await updateDoc(databaseInformation, {
    hours: increment(10),
    minutes: increment(20),
  });
}

readDataBase()
  .then(() => {
    console.log("Item adicionado com sucesso!");
  })
  .catch((err) => {
    console.log(err);
  });

attDataBase();
