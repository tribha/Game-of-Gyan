'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

export function ThemeToggle() {
  // Start with no theme preference, will be determined on client mount
  const [theme, setThemeState] = React.useState<'dark' | 'light' | null>(null);

  React.useEffect(() => {
    // When component mounts, check for user's preference in localStorage or system settings
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      setThemeState(storedTheme);
    } else {
      // If no preference, use system setting
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeState(isSystemDark ? 'dark' : 'light');
    }
  }, []);

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      return newTheme;
    });
  };

  // Render a placeholder on the server and initial client render to avoid hydration mismatch
  if (theme === null) {
     return (
        <div className="flex items-center space-x-2">
          <Sun className="h-[1.2rem] w-[1.2rem]" />
          <Switch
            disabled={true}
            aria-label="Toggle theme"
          />
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </div>
  );
}
