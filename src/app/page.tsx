'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GameOfGyanLogo } from '@/components/icons';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useFirebase } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { auth } = useFirebase();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!auth) {
      setError('Firebase is not configured correctly. Please check your setup.');
      setLoading(false);
      return;
    }

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
      setError('Email and password are required.');
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (e: any) {
      let errorMessage = 'Login failed. Please check your credentials.';
      if (
        e.code === 'auth/user-not-found' ||
        e.code === 'auth/wrong-password' ||
        e.code === 'auth/invalid-credential'
      ) {
        errorMessage = 'Invalid email or password.';
      }
      setError(errorMessage);
      setLoading(false);
    }
  };

  const loginImageInitial = PlaceHolderImages.find(
    (p) => p.id === 'login-bg-initial'
  );
  const loginImageActive = PlaceHolderImages.find(
    (p) => p.id === 'login-bg-active'
  );

  const courseIcons = [
    'course-icon-js',
    'course-icon-python',
    'course-icon-sql',
    'course-icon-java',
    'course-icon-cpp',
    'course-icon-html',
    'course-icon-css',
  ]
    .map((id) => PlaceHolderImages.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        {loginImageInitial && (
          <Image
            src={loginImageInitial.imageUrl}
            alt={loginImageInitial.description}
            data-ai-hint={loginImageInitial.imageHint}
            fill
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out',
              hasInteracted ? 'opacity-0' : 'opacity-100'
            )}
          />
        )}
        {loginImageActive && (
          <Image
            src={loginImageActive.imageUrl}
            alt={loginImageActive.description}
            data-ai-hint={loginImageActive.imageHint}
            fill
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out',
              hasInteracted ? 'opacity-100' : 'opacity-0'
            )}
          />
        )}
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-20 flex items-center text-lg font-medium">
           <GameOfGyanLogo className="text-white" />
        </div>
        <div className="relative z-20 mt-auto">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            {courseIcons.map((icon) => (
              <Image
                key={icon!.id}
                src={icon!.imageUrl}
                alt={icon!.description}
                width={32}
                height={32}
                className="h-8 w-8 transition-transform hover:scale-110"
              />
            ))}
          </div>
          <blockquote className="space-y-2">
            <p className="text-4xl font-bold">
              "The best way to predict the future is to create it."
            </p>
            <footer className="text-base font-medium">
              Start your coding journey with us and build amazing things.
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="flex min-h-screen items-center justify-center bg-background p-4 lg:min-h-0 lg:p-0">
        <Card className="mx-auto w-full max-w-sm">
          <CardHeader className="text-center">
            <div className="mb-4 flex items-center justify-center gap-2 font-bold">
              <GameOfGyanLogo />
            </div>
            <CardTitle className="text-3xl font-bold">
              Welcome, Warrior!
            </CardTitle>
            <CardDescription>
              Your next conquest awaits. Login to continue your journey.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Login Failed</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <form onSubmit={handleLogin} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                  onChange={(e) => setHasInteracted(!!e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    required
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute inset-y-0 right-0 h-full w-10 text-muted-foreground"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Login
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
