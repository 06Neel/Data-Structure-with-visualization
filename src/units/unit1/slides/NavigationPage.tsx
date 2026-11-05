import React, { useCallback } from 'react';
import { Slide } from '@revealjs/react';

interface NavItem {
  icon: string;
  title: string;
  description: string;
  color: string;
  slide: number;
}

const sections: NavItem[] = [
  { icon: '⏱️', title: 'Complexity Analysis', description: 'Time, Space, Big O, Omega, Theta', color: '#6366f1', slide: 5 },
  { icon: '📦', title: 'Arrays', description: 'Memory, Operations, Manipulation', color: '#22d3ee', slide: 12 },
  { icon: '🔄', title: 'Sorting Algorithms', description: 'Bubble, Insertion, Selection, Merge, Quick', color: '#fbbf24', slide: 24 },
  { icon: '🔎', title: 'Searching Algorithms', description: 'Linear & Binary Search', color: '#34d399', slide: 42 },
  { icon: '🔗', title: 'Linked Lists', description: 'Singly, Doubly, Circular Lists', color: '#22d3ee', slide: 71 },
  { icon: '🧠', title: 'LL Memory & Allocation', description: 'Static vs Dynamic allocation', color: '#a855f7', slide: 72 },
  { icon: '➕', title: 'LL Operations', description: 'Traversal, Insertion, Deletion', color: '#22c55e', slide: 74 },
  { icon: '↔️', title: 'Doubly & Circular', description: 'Advanced linked list types', color: '#ec4899', slide: 81 },
];

const quickLinks: { label: string; slide: number; color: string }[] = [
  { label: '🫧 Bubble Sort', slide: 28, color: '#3b82f6' },
  { label: '🃏 Insertion Sort', slide: 31, color: '#22c55e' },
  { label: '🔍 Selection Sort', slide: 34, color: '#a855f7' },
  { label: '🔀 Merge Sort', slide: 37, color: '#ec4899' },
  { label: '🌪️ Quick Sort', slide: 40, color: '#f97316' },
  { label: '📏 Linear Search', slide: 45, color: '#22d3ee' },
  { label: '⚡ Binary Search', slide: 48, color: '#22c55e' },
  { label: '🔗 LL Traversal', slide: 75, color: '#22d3ee' },
  { label: '➕ LL Insertion', slide: 77, color: '#22c55e' },
  { label: '🗑️ LL Deletion', slide: 79, color: '#ef4444' },
  { label: '↔️ Doubly LL', slide: 83, color: '#a855f7' },
];

export const NavigationPage: React.FC = () => {
  const goTo = useCallback((slideIndex: number) => {
    const deck = document.querySelector('.reveal');
    if (deck) {
      const revealInstance = (deck as any).reveal;
      if (revealInstance && revealInstance.slide) {
        revealInstance.slide(slideIndex);
        return;
      }
    }
    window.location.hash = `#/${slideIndex}`;
  }, []);

  return (
    <Slide>
      <div style={{ textAlign: 'left', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ ...h2s, fontSize: '28px', marginBottom: '6px' }}>📋 Content Navigation</h2>
        <p style={{ color: '#9ca3af', fontSize: '12px', marginBottom: '12px' }}>Click any section to jump directly to it</p>

        {/* Main Sections */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '12px' }}>
          {sections.map((s) => (
            <div
              key={s.title}
              onClick={() => goTo(s.slide)}
              style={{
                ...card('rgba(31,41,55,0.5)', '#374151'),
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                borderLeft: `3px solid ${s.color}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = s.color;
                e.currentTarget.style.boxShadow = `0 4px 20px ${s.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#374151';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', background: `${s.color}20`, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>{s.icon}</div>
                <div>
                  <h3 style={{ color: 'white', fontSize: '13px', fontWeight: 'bold', marginBottom: '1px' }}>{s.title}</h3>
                  <p style={{ color: '#9ca3af', fontSize: '10px', margin: 0 }}>{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div style={{ ...card('rgba(99,102,241,0.05)', 'rgba(99,102,241,0.2)'), padding: '12px 16px' }}>
          <h4 style={{ color: 'white', fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>⚡ Quick Jump to Algorithm</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
            {quickLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => goTo(link.slide)}
                style={{
                  padding: '5px 12px',
                  background: `${link.color}15`,
                  border: `1px solid ${link.color}40`,
                  borderRadius: '6px',
                  color: link.color,
                  fontSize: '11px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${link.color}30`;
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${link.color}15`;
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
};

const h2s = { fontSize: '29px', fontWeight: 'bold' as const, color: 'white', marginBottom: '8px' };
const card = (bg: string, bd: string) => ({ padding: '20px', background: bg, border: `1px solid ${bd}`, borderRadius: '12px' });
