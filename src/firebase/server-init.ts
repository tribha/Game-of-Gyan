import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { firebaseConfig } from '@/firebase/config';

interface FirebaseServerServices {
  firebaseApp: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}

function getSdks(firebaseApp: FirebaseApp): FirebaseServerServices {
  return {
    firebaseApp,
    auth: getAuth(firebaseApp),
    firestore: getFirestore(firebaseApp),
  };
}

// This function is for server-side only.
export function initializeFirebaseServer(): FirebaseServerServices {
  if (getApps().length) {
    return getSdks(getApp());
  }
  
  // Prevent initialization if config is missing to avoid crashes during server-side rendering.
  if (!firebaseConfig.apiKey) {
    // This will throw an error on the server if config is missing.
    // It's better to fail loudly on the server than to have silent failures.
    throw new Error("Firebase apiKey is missing on the server. Please check your firebase/config.ts file.");
  }
  
  const firebaseApp = initializeApp(firebaseConfig);
  return getSdks(firebaseApp);
}
