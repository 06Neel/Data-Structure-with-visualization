import React from 'react';
import { Slide } from '@revealjs/react';

const grid2 = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };
const card = (bg: string, bd: string) => ({ padding: '20px', background: bg, border: `1px solid ${bd}`, borderRadius: '12px' });
const h2s = { fontSize: '29px', fontWeight: 'bold' as const, color: 'white', marginBottom: '8px' };
const under = (c: string) => ({ height: '4px', width: '80px', background: c, borderRadius: '2px', marginBottom: '16px' });
const p = { color: '#d1d5db', fontSize: '13px', lineHeight: '1.5' as const };
const h3s = (c: string) => ({ fontSize: '17px', fontWeight: 'bold' as const, color: c, marginBottom: '8px' });
const miniCard = (bg: string, bd: string) => ({ ...card(bg, bd), padding: '16px' });

export const LLIntro: React.FC = () => (
  <Slide>
    <div style={{ textAlign: 'left' }}>
      <h2 style={h2s}>🔗 What is a Linked List?</h2>
      <div style={under('#22d3ee')}></div>
      <div style={grid2}>
        <div style={card('rgba(31,41,55,0.5)', '#374151')}>
          <p style={{ ...p, fontSize: '14px', marginBottom: '12px' }}>A <strong style={{ color: 'white' }}>linked list</strong> is a linear data structure where elements are stored in <strong style={{ color: '#22d3ee' }}>nodes</strong>. Each node contains data and a pointer to the next node.</p>
          <div style={{ ...miniCard('rgba(34,211,238,0.1)', 'rgba(34,211,238,0.3)') }}>
            <p style={{ ...p, fontSize: '11px' }}>Unlike arrays, linked lists allow <strong style={{ color: 'white' }}>efficient insertion/deletion</strong> without shifting elements, but lose <strong style={{ color: '#f87171' }}>random access</strong>.</p>
          </div>
        </div>
        <div>
          <div style={{ ...card('rgba(34,211,238,0.05)', 'rgba(34,211,238,0.3)'), marginBottom: '10px' }}>
            <h3 style={h3s('#22d3ee')}>Node Structure</h3>
            <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#d1d5db', padding: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px' }}>
              <div style={{ color: '#22d3ee' }}>┌──────────┬──────────┐</div>
              <div style={{ color: '#22d3ee' }}>│   DATA   │   NEXT   │</div>
              <div style={{ color: '#22d3ee' }}>└──────────┴──────────┘</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[
              { t: 'Linear', ex: 'Sequential access', c: '#22d3ee' },
              { t: 'Dynamic', ex: 'Grows/shrinks at runtime', c: '#22c55e' },
              { t: 'Non-contiguous', ex: 'Scattered in memory', c: '#fbbf24' },
              { t: 'Pointer-based', ex: 'Nodes linked by refs', c: '#a855f7' },
            ].map((x) => (
              <div key={x.t} style={{ ...miniCard(`${x.c}10`, `${x.c}30`) }}>
                <h4 style={{ color: x.c, fontSize: '12px', fontWeight: 'bold', marginBottom: '2px' }}>{x.t}</h4>
                <p style={{ color: '#9ca3af', fontSize: '10px', margin: 0 }}>{x.ex}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Slide>
);
