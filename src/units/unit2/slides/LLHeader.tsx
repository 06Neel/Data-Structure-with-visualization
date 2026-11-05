import React from 'react';
import { Slide } from '@revealjs/react';

const grid2 = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };
const card = (bg: string, bd: string) => ({ padding: '20px', background: bg, border: `1px solid ${bd}`, borderRadius: '12px' });
const h2s = { fontSize: '29px', fontWeight: 'bold' as const, color: 'white', marginBottom: '8px' };
const under = (c: string) => ({ height: '4px', width: '80px', background: c, borderRadius: '2px', marginBottom: '16px' });
const p = { color: '#d1d5db', fontSize: '13px', lineHeight: '1.5' as const };
const h3s = (c: string) => ({ fontSize: '17px', fontWeight: 'bold' as const, color: c, marginBottom: '8px' });
const miniCard = (bg: string, bd: string) => ({ ...card(bg, bd), padding: '16px' });

export const LLHeader: React.FC = () => (
  <Slide>
    <div style={{ textAlign: 'left' }}>
      <h2 style={h2s}>🏷️ Header Linked Lists</h2>
      <div style={under('#fbbf24')}></div>
      <div style={grid2}>
        <div style={card('rgba(31,41,55,0.5)', '#374151')}>
          <h3 style={h3s('#fbbf24')}>What is a Header Node?</h3>
          <p style={{ ...p, fontSize: '13px', marginBottom: '10px' }}>A <strong style={{ color: '#fbbf24' }}>header node</strong> is a special node at the beginning of the list that doesn't store actual data. It simplifies edge cases.</p>
          <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#d1d5db', padding: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px' }}>
            <div style={{ color: '#fbbf24' }}>HEADER → [10] → [20] → [30] → NULL</div>
            <div style={{ color: '#9ca3af', marginTop: '6px' }}>// Header node: data is unused</div>
            <div style={{ color: '#9ca3af' }}>// Simplifies insert/delete logic</div>
          </div>
        </div>
        <div>
          <div style={{ ...miniCard('rgba(251,191,36,0.1)', 'rgba(251,191,36,0.3)'), marginBottom: '8px' }}>
            <h4 style={{ color: '#fbbf24', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Advantages</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['No special case for empty list', 'Insert/delete at position 0 is same as any other', 'Consistent pointer handling', 'Easier to implement algorithms'].map((x, i) => (
                <li key={i} style={{ ...p, fontSize: '10px', marginBottom: '3px' }}>✅ {x}</li>
              ))}
            </ul>
          </div>
          <div style={{ ...miniCard('rgba(107,114,128,0.1)', 'rgba(107,114,128,0.3)') }}>
            <h4 style={{ color: '#9ca3af', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Disadvantages</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Extra memory for header node (small)', 'Slight overhead in traversal'].map((x, i) => (
                <li key={i} style={{ ...p, fontSize: '10px', marginBottom: '3px' }}>⚠️ {x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Slide>
);
