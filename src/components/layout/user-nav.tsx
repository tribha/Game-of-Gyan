'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ThemeToggle } from '../theme-toggle';
import Link from 'next/link';
import { useUser, useDoc, useFirestore, useMemoFirebase, useAuth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { doc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { Skeleton } from '../ui/skeleton';


export function UserNav() {
  const { user } = useUser();
  const firestore = useFirestore();
  const auth = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    if (!auth) return;
    await signOut(auth);
    router.push('/');
  };

  const userRef = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return doc(firestore, 'users', user.uid);
  }, [firestore, user]);

  const profileRef = useMemoFirebase(() => {
    if(!user || !firestore) return null;
    return doc(firestore, 'userProfiles', user.uid);
  }, [firestore, user]);

  const { data: userData } = useDoc(userRef);
  const { data: userProfile, isLoading: isProfileLoading } = useDoc(profileRef);
  
  const avatarImage = PlaceHolderImages.find(p => p.id === 'user-avatar-1');
  const userInitials = userProfile?.name?.charAt(0).toUpperCase() || userData?.username?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase() || 'U';

  if (!user) {
    return null;
  }
  
  if (isProfileLoading) {
    return <Skeleton className="h-9 w-9 rounded-full" />;
  }


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-9 w-9">
             <AvatarImage src={userProfile?.avatarUrl || avatarImage?.imageUrl} alt={userProfile?.name || userData?.username || user.email!} />
            <AvatarFallback>{userInitials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userProfile?.name || userData?.username || 'User'}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/certificates">Certificates</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex justify-between">
          Theme
          <ThemeToggle />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
