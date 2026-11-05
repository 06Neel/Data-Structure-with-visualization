import React from 'react';
import { Slide } from '@revealjs/react';

const grid2 = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };
const card = (bg: string, bd: string) => ({ padding: '20px', background: bg, border: `1px solid ${bd}`, borderRadius: '12px' });
const h2s = { fontSize: '29px', fontWeight: 'bold' as const, color: 'white', marginBottom: '8px' };
const under = (c: string) => ({ height: '4px', width: '80px', background: c, borderRadius: '2px', marginBottom: '16px' });
const p = { color: '#d1d5db', fontSize: '13px', lineHeight: '1.5' as const };
const h3s = (c: string) => ({ fontSize: '17px', fontWeight: 'bold' as const, color: c, marginBottom: '8px' });

export const LLAllocation: React.FC = () => (
  <Slide>
    <div style={{ textAlign: 'left' }}>
      <h2 style={h2s}>⚙️ Memory Allocation</h2>
      <div style={under('#22c55e')}></div>
      <div style={grid2}>
        <div style={card('rgba(31,41,55,0.5)', '#374151')}>
          <h3 style={h3s('#22c55e')}>Static Allocation</h3>
          <p style={{ ...p, fontSize: '11px', marginBottom: '8px' }}>Memory allocated at <strong style={{ color: '#22c55e' }}>compile time</strong>. Array of pointers with fixed size.</p>
          <div style={{ fontFamily: 'monospace', fontSize: '10px', color: '#d1d5db', padding: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', marginBottom: '8px' }}>
            <div style={{ color: '#22c55e' }}>Node* arr[100];</div>
            <div style={{ color: '#9ca3af', marginTop: '4px' }}>// Fixed 100 pointers at compile time</div>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Fixed size', 'Memory allocated on stack/global', 'Cannot grow beyond initial size', 'Wastes memory if underused'].map((x, i) => (
              <li key={i} style={{ ...p, fontSize: '10px', marginBottom: '3px' }}>• {x}</li>
            ))}
          </ul>
        </div>
        <div style={card('rgba(31,41,55,0.5)', '#374151')}>
          <h3 style={h3s('#ec4899')}>Dynamic Allocation</h3>
          <p style={{ ...p, fontSize: '11px', marginBottom: '8px' }}>Memory allocated at <strong style={{ color: '#ec4899' }}>runtime</strong>. Each node allocated individually using malloc/new.</p>
          <div style={{ fontFamily: 'monospace', fontSize: '10px', color: '#d1d5db', padding: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', marginBottom: '8px' }}>
            <div style={{ color: '#ec4899' }}>Node* newNode = malloc(sizeof(Node));</div>
            <div style={{ color: '#9ca3af', marginTop: '4px' }}>// Allocate exactly one node at runtime</div>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Flexible size', 'Memory allocated on heap', 'Grows/shrinks as needed', 'No wasted memory'].map((x, i) => (
              <li key={i} style={{ ...p, fontSize: '10px', marginBottom: '3px' }}>• {x}</li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ ...card('rgba(251,191,36,0.1)', 'rgba(251,191,36,0.3)'), marginTop: '12px' }}>
        <h4 style={{ color: '#fbbf24', fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>💡 When to Use Which?</h4>
        <p style={{ ...p, fontSize: '11px' }}>Static: when max size is known (e.g., adjacency list for fixed graph). Dynamic: when size is unknown or changes frequently (most real-world linked lists).</p>
      </div>
    </div>
  </Slide>
);
