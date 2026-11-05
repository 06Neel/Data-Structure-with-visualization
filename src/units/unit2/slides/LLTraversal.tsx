import React from 'react';
import { Slide } from '@revealjs/react';

const grid2 = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };
const card = (bg: string, bd: string) => ({ padding: '20px', background: bg, border: `1px solid ${bd}`, borderRadius: '12px' });
const h2s = { fontSize: '29px', fontWeight: 'bold' as const, color: 'white', marginBottom: '8px' };
const under = (c: string) => ({ height: '4px', width: '80px', background: c, borderRadius: '2px', marginBottom: '16px' });
const p = { color: '#d1d5db', fontSize: '13px', lineHeight: '1.5' as const };
const h3s = (c: string) => ({ fontSize: '17px', fontWeight: 'bold' as const, color: c, marginBottom: '8px' });
const step = (n: number, t: string) => (
  <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', alignItems: 'flex-start' }}>
    <span style={{ width: '22px', height: '22px', background: '#22d3ee', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '11px', fontWeight: 'bold', flexShrink: 0 }}>{n}</span>
    <span style={{ color: '#d1d5db', fontSize: '12px' }}>{t}</span>
  </div>
);
const codeBlock = (code: string) => (
  <div className="code-block">
    <div className="code-block-header">
      <span className="code-block-dot red"></span>
      <span className="code-block-dot yellow"></span>
      <span className="code-block-dot green"></span>
    </div>
    <pre><code>{code}</code></pre>
  </div>
);

export const LLTraversal: React.FC = () => (
  <Slide>
    <div style={{ textAlign: 'left' }}>
      <h2 style={h2s}>🔗 Traversal — How It Works</h2>
      <div style={under('#22d3ee')}></div>
      <div style={grid2}>
        <div style={card('rgba(31,41,55,0.5)', '#374151')}>
          <h3 style={h3s('#22d3ee')}>Steps</h3>
          {step(1, 'Start from HEAD node.')}
          {step(2, 'Process/visit the current node.')}
          {step(3, 'Follow the next pointer.')}
          {step(4, 'Repeat until next is NULL.')}
          <div style={{ ...miniCard('rgba(34,211,238,0.1)', 'rgba(34,211,238,0.3)'), marginTop: '8px' }}>
            <p style={{ ...p, fontSize: '10px' }}>🔗 Must traverse sequentially — no random access like arrays!</p>
          </div>
        </div>
        {codeBlock(`def traverse(head):
    current = head
    while current is not None:
        print(current.data)
        current = current.next

# HEAD → [10] → [20] → [30] → NULL
# Visit: 10 → 20 → 30

# Time: O(n) | Space: O(1)`)}
      </div>
    </div>
  </Slide>
);

const miniCard = (bg: string, bd: string) => ({ ...card(bg, bd), padding: '16px' });
