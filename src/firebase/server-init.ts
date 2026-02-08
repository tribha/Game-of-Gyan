import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth }from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '@/firebase/config';

function getSdks(firebaseApp: FirebaseApp) {
  return {
    firebaseApp,
    auth: getAuth(firebaseApp),
    firestore: getFirestore(firebaseApp),
  };
}

// This function is for server-side only.
export function initializeFirebaseServer() {
  if (getApps().length) {
    return getSdks(getApp());
  }
  
  // Prevent initialization if config is missing to avoid crashes during server-side rendering.
  if (!firebaseConfig.apiKey) {
    if (process.env.NODE_ENV !== 'production') {
      console.error("Firebase apiKey is missing on the server. Please check your environment variables.");
    }
    // Return null services. The code using this must handle this case.
    return { firebaseApp: null, auth: null, firestore: null };
  }
  
  const firebaseApp = initializeApp(firebaseConfig);
  return getSdks(firebaseApp);
}
