
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, redirect } from 'next/navigation';
import {
  BookOpen,
  Code,
  LayoutDashboard,
  Trophy,
  User,
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
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/dashboard/courses', icon: BookOpen, label: 'Courses' },
  { href: '/dashboard/challenge', icon: Code, label: 'Daily Challenge' },
  { href: '/dashboard/profile', icon: User, label: 'Profile' },
  { href: '/dashboard/certificates', icon: Trophy, label: 'Certificates' },
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
           <GameOfGyanLogo className="size-12 animate-pulse" />
           <p className="text-lg font-semibold">Loading your realm...</p>
          <Skeleton className="h-4 w-64" />
        </div>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="p-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-sidebar-foreground"
          >
            <GameOfGyanLogo className="size-8" />
            <span className="text-lg font-semibold">Game of Gyan</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={item.label}
                >
                  <Link href={item.href}>
                    <item.icon />
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
        <div className="flex-1 p-4 sm:p-6 lg:p-8">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
