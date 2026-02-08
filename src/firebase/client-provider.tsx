'use client';

import React, { useMemo, type ReactNode } from 'react';
import { FirebaseProvider } from '@/firebase/provider';
import { initializeFirebase } from '@/firebase';

interface FirebaseClientProviderProps {
  children: ReactNode;
}

export function FirebaseClientProvider({ children }: FirebaseClientProviderProps) {
  const firebaseServices = useMemo(() => {
    // Initialize Firebase on the client side.
    return initializeFirebase();
  }, []);

  // Only render the provider if Firebase initialized successfully.
  if (!firebaseServices.areServicesAvailable || !firebaseServices.firebaseApp || !firebaseServices.auth || !firebaseServices.firestore) {
    // You can render a loading state or a specific error component here if you want.
    // For now, we'll just render the children, and the app will show that Firebase isn't configured.
    return <>{children}</>;
  }

  return (
    <FirebaseProvider
      firebaseApp={firebaseServices.firebaseApp}
      auth={firebaseServices.auth}
      firestore={firebaseServices.firestore}
    >
      {children}
    </FirebaseProvider>
  );
}
