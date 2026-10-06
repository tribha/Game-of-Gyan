'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

// IMPORTANT: DO NOT MODIFY THIS FUNCTION
export function initializeFirebase() {
  let firebaseApp: FirebaseApp;

  if (!getApps().length) {
    try {
      // Attempt to initialize via Firebase App Hosting environment variables
      // This is the preferred method for production deployment.
      firebaseApp = initializeApp();
    } catch (e) {
      // Fallback to the hardcoded config if automatic initialization fails.
      // This is common in development or local preview environments.
      firebaseApp = initializeApp(firebaseConfig);
    }
  } else {
    // If already initialized, retrieve the existing App instance.
    firebaseApp = getApp();
  }

  return getSdks(firebaseApp);
}

export function getSdks(firebaseApp: FirebaseApp) {
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
