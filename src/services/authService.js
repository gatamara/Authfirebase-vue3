import { auth } from "@/firebase/firebaseConfig";
import { useAuthStore } from "@/stores/authStore";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


onAuthStateChanged(auth, (user) => {
  const store = useAuthStore()
  if (user) {
    store.setUser(user, true)
  } else {
    store.setUser(null, false)
  }
});


export const registerFirebase = async (credentials) => {
  const userCredential = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
  return userCredential.user;
}

export const loginFirebase = async (credentials) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
    return userCredential.user;
  } catch (error) {
    console.error("Error en el login:", error);
    throw error;
  }
};

export const logoutFirebase = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error en el logout:", error);
  }
};


