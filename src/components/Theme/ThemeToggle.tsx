import React, { useState, useEffect } from 'react';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const viewport = document.querySelector('.reveal-viewport');
    if (isDark) {
      root.classList.remove('light');
      root.classList.add('dark');
      if (viewport) {
        viewport.classList.remove('light');
        viewport.classList.add('dark');
      }
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      if (viewport) {
        viewport.classList.remove('dark');
        viewport.classList.add('light');
      }
    }
  }, [isDark]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setIsDark(!isDark)}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <span className="text-lg">{isDark ? '☀️' : '🌙'}</span>
      <span className="text-sm" style={{ color: 'var(--text-muted, #94a3b8)' }}>
        {isDark ? 'Light' : 'Dark'}
      </span>
    </button>
  );
};
