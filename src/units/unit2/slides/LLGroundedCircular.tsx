import React from 'react';
import { Slide } from '@revealjs/react';

const grid2 = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };
const card = (bg: string, bd: string) => ({ padding: '20px', background: bg, border: `1px solid ${bd}`, borderRadius: '12px' });
const h2s = { fontSize: '29px', fontWeight: 'bold' as const, color: 'white', marginBottom: '8px' };
const under = (c: string) => ({ height: '4px', width: '80px', background: c, borderRadius: '2px', marginBottom: '16px' });
const p = { color: '#d1d5db', fontSize: '13px', lineHeight: '1.5' as const };
const h3s = (c: string) => ({ fontSize: '17px', fontWeight: 'bold' as const, color: c, marginBottom: '8px' });

export const LLGroundedCircular: React.FC = () => (
  <Slide>
    <div style={{ textAlign: 'left' }}>
      <h2 style={h2s}>🔄 Grounded vs Circular Linked Lists</h2>
      <div style={under('#ec4899')}></div>
      <div style={grid2}>
        <div style={card('rgba(31,41,55,0.5)', '#374151')}>
          <h3 style={h3s('#22d3ee')}>Grounded (Singly) Linked List</h3>
          <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#d1d5db', padding: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', marginBottom: '8px' }}>
            <div>HEAD → [10] → [20] → [30] → NULL</div>
          </div>
          <p style={{ ...p, fontSize: '11px', marginBottom: '8px' }}>Last node's next pointer is <strong style={{ color: '#22d3ee' }}>NULL</strong>. This is the standard linked list.</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Traversal ends at NULL', 'Natural endpoint for algorithms', 'Most common type', 'Easy to detect end'].map((x, i) => (
              <li key={i} style={{ ...p, fontSize: '10px', marginBottom: '3px' }}>• {x}</li>
            ))}
          </ul>
        </div>
        <div style={card('rgba(31,41,55,0.5)', '#374151')}>
          <h3 style={h3s('#ec4899')}>Circular Linked List</h3>
          <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#d1d5db', padding: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', marginBottom: '8px' }}>
            <div>HEAD → [10] → [20] → [30] → HEAD</div>
            <div style={{ color: '#ec4899' }}>// Last node points back to HEAD</div>
          </div>
          <p style={{ ...p, fontSize: '11px', marginBottom: '8px' }}>Last node's next pointer points to <strong style={{ color: '#ec4899' }}>HEAD</strong>. Forms a circle.</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['No natural endpoint', 'Must use visited flag or count', 'Used in round-robin scheduling', 'Josephus problem, playlist loops'].map((x, i) => (
              <li key={i} style={{ ...p, fontSize: '10px', marginBottom: '3px' }}>• {x}</li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ ...card('rgba(236,72,153,0.1)', 'rgba(236,72,153,0.3)'), marginTop: '12px' }}>
        <h4 style={{ color: '#ec4899', fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>🔑 Key Difference</h4>
        <p style={{ ...p, fontSize: '11px' }}>Grounded = linear with end. Circular = loop with no end. In circular, every node is reachable from any node by following next pointers.</p>
      </div>
    </div>
  </Slide>
);
