'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore'

type FirebaseServices = {
  firebaseApp: FirebaseApp | null;
  auth: Auth | null;
  firestore: Firestore | null;
}

// IMPORTANT: DO NOT MODIFY THIS FUNCTION
export function initializeFirebase(): FirebaseServices {
  if (getApps().length) {
    return getSdks(getApp());
  }

  // The complex initialization logic is for Firebase App Hosting.
  // It tries to auto-initialize, and falls back to the firebaseConfig object.
  // If the apiKey is missing, we should not attempt to initialize.
  if (!firebaseConfig.apiKey) {
    if (process.env.NODE_ENV !== 'production') {
      console.error("Firebase apiKey is missing. Please add it to your environment variables. Firebase features will be disabled.");
    }
    return { firebaseApp: null, auth: null, firestore: null };
  }
  
  let firebaseApp;
  try {
    // This will work in a deployed App Hosting environment.
    firebaseApp = initializeApp();
  } catch (e) {
    // This will work for local development if .env.local is set up.
    firebaseApp = initializeApp(firebaseConfig);
  }

  return getSdks(firebaseApp);
}

export function getSdks(firebaseApp: FirebaseApp | null): FirebaseServices {
  if (!firebaseApp) {
    return { firebaseApp: null, auth: null, firestore: null };
  }
  return {
    firebaseApp,
    auth: getAuth(firebaseApp),
    firestore: getFirestore(firebaseApp)
  };
}

export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';
