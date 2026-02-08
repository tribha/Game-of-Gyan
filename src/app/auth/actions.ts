'use server';

import { redirect } from 'next/navigation';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { initializeFirebaseServer } from '@/firebase/server-init';
import { z } from 'zod';

const { firestore, auth: firebaseAuth } = initializeFirebaseServer();

const SignupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Password must be at least 6 characters long.'),
  username: z.string().min(3, 'Username must be at least 3 characters long.'),
});

function ensureFirebaseInitialized() {
  if (!firebaseAuth || !firestore) {
    throw new Error("Firebase has not been initialized. Please check your server configuration.");
  }
}

export async function signup(formData: FormData) {
  ensureFirebaseInitialized();
  const result = SignupSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    const errorMessages = result.error.flatten().fieldErrors;
    const firstError = Object.values(errorMessages).flat()[0] || 'Invalid input.';
    return redirect('/signup?error=' + encodeURIComponent(firstError));
  }
  
  const { email, password, username } = result.data;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const user = userCredential.user;

    const userRef = doc(firestore, 'users', user.uid);
    await setDoc(userRef, {
      id: user.uid,
      email: user.email,
      username: username,
    });

    const profileRef = doc(firestore, 'userProfiles', user.uid);
    await setDoc(profileRef, {
      id: user.uid,
      level: 1,
      xp: 0,
      badges: [],
      streak: 0,
      completedLevels: [],
      completedCourses: [],
      completedExpertChallenges: [],
    });

  } catch (e: any) {
    let errorMessage = 'Signup failed. Please try again.';
    if (e.code === 'auth/email-already-in-use') {
        errorMessage = 'This email is already in use. Please login or use a different email.';
    }
    return redirect('/signup?error=' + encodeURIComponent(errorMessage));
  }

  redirect('/dashboard');
}

export async function login(formData: FormData) {
  ensureFirebaseInitialized();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return redirect('/?error=' + encodeURIComponent('Email and password are required.'));
  }

  try {
    await signInWithEmailAndPassword(firebaseAuth, email, password);
  } catch (e: any) {
    let errorMessage = 'Login failed. Please check your credentials.';
    if (e.code === 'auth/user-not-found' || e.code === 'auth/wrong-password' || e.code === 'auth/invalid-credential') {
        errorMessage = 'Invalid email or password.';
    }
    return redirect('/?error=' + encodeURIComponent(errorMessage));
  }
  
  redirect('/dashboard');
}

export async function logout() {
  ensureFirebaseInitialized();
  await signOut(firebaseAuth);
  redirect('/');
}
