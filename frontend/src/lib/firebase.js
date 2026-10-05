/* The same Source account as the app: one Firebase project, so a sign-in
   here is a sign-in there. Public web config (it is public by design;
   the backend verifies every ID token server-side). */
import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as fbSignOut,
  updateProfile,
} from "firebase/auth";

const config = {
  apiKey: "AIzaSyBtfKjzsgmhXyGT2fn-u_6njjAP4TevjMY",
  authDomain: "source-30b62.firebaseapp.com",
  projectId: "source-30b62",
  appId: "1:806605815698:web:c79486928251de7b0f8b4b",
};

const app = getApps().length ? getApps()[0] : initializeApp(config);
export const auth = getAuth(app);

export const watchAuth = (cb) => onAuthStateChanged(auth, cb);
export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const signUp = async (name, email, password) => {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  if (name) await updateProfile(cred.user, { displayName: name });
  try { await sendEmailVerification(cred.user); } catch (e) { /* non-fatal */ }
  return cred;
};
export const resetPassword = (email) => sendPasswordResetEmail(auth, email);
export const signInWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());
export const signOut = () => fbSignOut(auth);
export const idToken = async () => (auth.currentUser ? auth.currentUser.getIdToken() : null);
