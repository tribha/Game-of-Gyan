'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

// Helper to get all SDKs
function getSdks(firebaseApp: FirebaseApp): { firebaseApp: FirebaseApp; auth: Auth; firestore: Firestore; areServicesAvailable: boolean } {
  try {
    const auth = getAuth(firebaseApp);
    const firestore = getFirestore(firebaseApp);
    return { firebaseApp, auth, firestore, areServicesAvailable: true };
  } catch (error) {
    console.error("Firebase service initialization failed:", error);
    // In a hardcoded config scenario, this is unlikely but good practice.
    return { firebaseApp, auth: null as any, firestore: null as any, areServicesAvailable: false };
  }
}

export function initializeFirebase(): { firebaseApp: FirebaseApp; auth: Auth; firestore: Firestore; areServicesAvailable: boolean } {
  // If the app is already initialized, return the existing services
  if (getApps().length) {
    const app = getApp();
    return getSdks(app);
  }

  // Ensure config is present before initializing
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    console.error("Firebase apiKey is missing. Please check your firebase/config.ts file.");
    return { firebaseApp: null as any, auth: null as any, firestore: null as any, areServicesAvailable: false };
  }

  try {
    const firebaseApp = initializeApp(firebaseConfig);
    return getSdks(firebaseApp);
  } catch (error) {
    console.error("Firebase initialization failed:", error);
    return { firebaseApp: null as any, auth: null as any, firestore: null as any, areServicesAvailable: false };
  }
}


export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';
