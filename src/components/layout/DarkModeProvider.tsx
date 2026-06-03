'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext<{ dark: boolean; toggle: () => void }>({
  dark: false,
  toggle: () => {},
});

export const useDarkMode = () => useContext(DarkModeContext);

export default function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('elseho-dark');
    if (stored === 'true') setDark(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('elseho-dark', String(dark));
  }, [dark]);

  return (
    <DarkModeContext.Provider value={{ dark, toggle: () => setDark(d => !d) }}>
      {children}
    </DarkModeContext.Provider>
  );
}
