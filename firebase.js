import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import {
  getFirestore,
  collection,
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

async function readDataBase() {
  const database_hourAndMinutes = await getDocs(
    collection(db, POMODORODATABASE)
  );
  database_hourAndMinutes.forEach((doc) => {
    console.log(doc.data());
  });
}

 function attDataBase(minute) {
  const databaseInformation = doc(db, POMODORODATABASE, idPomodoroDataBase);
  isHour(databaseInformation, minute);
}
async function isHour(databaseInformation, minute) {
  if (minute) {
    if (minute / 60 == 1) {
      await updateDoc(databaseInformation, {
        hours: increment(1),
      });
      if (minute / 90 == 1) {
        await updateDoc(databaseInformation, {
          hours: increment(1),
          minutes: increment(30),
        });
      }
      if (minute / 120 == 1) {
        await updateDoc(databaseInformation, {
          hours: increment(2),
        });
      }
    } else {
      await updateDoc(databaseInformation, {
        minutes: increment(minute),
      });
    }
  }
  readDataBase();
}
