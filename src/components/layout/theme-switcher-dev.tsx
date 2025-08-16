"use client";
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const themes = [
  { id: 'default', label: 'Gold / Charcoal' },
  { id: 'theme-industrial', label: 'Industrial' },
  { id: 'theme-minimal', label: 'Minimal' },
  { id: 'theme-sustain', label: 'Sustain' },
  { id: 'theme-titan', label: 'Titan' },
  { id: 'theme-graphite', label: 'Graphite' },
  { id: 'theme-eco-moss', label: 'Eco Moss' },
  { id: 'theme-cyan-pulse', label: 'Cyan Pulse' },
  { id: 'theme-terra', label: 'Terra' },
  { id: 'theme-blueprint', label: 'Blueprint' },
];

export function ThemeSwitcherDev({ className }: { className?: string }) {
  const [theme, setTheme] = useState<string>('theme-industrial');

  useEffect(() => {
    const saved = window.localStorage.getItem('kv-theme');
    if (saved && themes.some(t => t.id === saved)) {
      setTheme(saved);
    } else {
      // persist industrial as default if nothing stored
      window.localStorage.setItem('kv-theme', 'theme-industrial');
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    // Remove previous theme classes
  themes.forEach(t => t.id !== 'default' && html.classList.remove(t.id));
  if (theme !== 'default') html.classList.add(theme); else html.classList.remove(theme);
  window.localStorage.setItem('kv-theme', theme);
  }, [theme]);

  return (
    <div className={cn('fixed hidden md:top-5 right-4 z-[60] rounded-md border bg-white/90 backdrop-blur px-3 py-2 shadow-md flex items-center gap-2 text-xs', className)}>
      <span className="font-semibold">Theme:</span>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="bg-transparent outline-none text-xs"
      >
        {themes.map(t => (
          <option key={t.id} value={t.id}>{t.label}</option>
        ))}
      </select>
    </div>
  );
}
