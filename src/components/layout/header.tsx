'use client';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { UserNav } from './user-nav';
import { usePathname } from 'next/navigation';
import { mockData } from '@/lib/mock-data';

export function Header() {
  const pathname = usePathname();
  const getTitle = () => {
    if (pathname.startsWith('/dashboard/challenge')) return 'Daily Challenge';
    if (pathname.startsWith('/dashboard/courses')) return 'Courses';
    if (pathname.startsWith('/dashboard/profile')) return 'Your Profile';
    if (pathname.startsWith('/dashboard/certificates')) return 'Your Certificates';
    return 'Dashboard';
  };
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>

      <h1 className="text-xl font-semibold">{getTitle()}</h1>

      <div className="ml-auto flex items-center gap-4">
        <UserNav user={mockData.userProfile} />
      </div>
    </header>
  );
}
