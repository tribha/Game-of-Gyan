'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, redirect } from 'next/navigation';
import {
  Award,
  Gamepad2,
  Rocket,
  Swords,
  Target,
  UserCog,
} from 'lucide-react';
import { useUser } from '@/firebase';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from '@/components/ui/sidebar';
import { Header } from '@/components/layout/header';
import { GameOfGyanLogo } from '@/components/icons';
import { Skeleton } from '@/components/ui/skeleton';

const navItems = [
  { href: '/dashboard', icon: Gamepad2, label: 'Dashboard' },
  { href: '/dashboard/courses', icon: Swords, label: 'Courses' },
  { href: '/dashboard/challenge', icon: Target, label: 'Daily Challenge' },
  { href: '/dashboard/expert-level', icon: Rocket, label: 'Expert Level' },
  { href: '/dashboard/profile', icon: UserCog, label: 'Profile' },
  { href: '/dashboard/certificates', icon: Award, label: 'Certificates' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user, isUserLoading } = useUser();

  React.useEffect(() => {
    if (!isUserLoading && !user) {
      redirect('/');
    }
  }, [user, isUserLoading]);

  if (isUserLoading || !user) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex flex-col items-center gap-4">
           <GameOfGyanLogo className="relative h-24 w-72 animate-pulse" />
           <p className="text-lg font-semibold">Loading your realm...</p>
          <Skeleton className="h-4 w-64" />
        </div>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <Sidebar variant="inset">
        <SidebarHeader className="p-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-2"
          >
            <GameOfGyanLogo className="text-sidebar-foreground" />
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  size="lg"
                  isActive={item.href === '/dashboard' ? pathname === '/dashboard' : pathname.startsWith(item.href)}
                  tooltip={item.label}
                >
                  <Link href={item.href}>
                    <item.icon className="size-6" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <Header />
        <div className="flex-1 animate-content-show p-4 sm:p-6 lg:p-8">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
