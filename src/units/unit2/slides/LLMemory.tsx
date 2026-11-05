import React from 'react';
import { Slide } from '@revealjs/react';

const grid2 = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };
const card = (bg: string, bd: string) => ({ padding: '20px', background: bg, border: `1px solid ${bd}`, borderRadius: '12px' });
const h2s = { fontSize: '29px', fontWeight: 'bold' as const, color: 'white', marginBottom: '8px' };
const under = (c: string) => ({ height: '4px', width: '80px', background: c, borderRadius: '2px', marginBottom: '16px' });
const h3s = (c: string) => ({ fontSize: '17px', fontWeight: 'bold' as const, color: c, marginBottom: '8px' });
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

export const LLMemory: React.FC = () => (
  <Slide>
    <div style={{ textAlign: 'left' }}>
      <h2 style={h2s}>🧠 Memory Representation</h2>
      <div style={under('#a855f7')}></div>
      <div style={grid2}>
        <div>
          <div style={{ ...card('rgba(31,41,55,0.5)', '#374151'), marginBottom: '10px' }}>
            <h3 style={h3s('#a855f7')}>Array vs Linked List in Memory</h3>
            <div style={{ fontFamily: 'monospace', fontSize: '10px', color: '#d1d5db', padding: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px' }}>
              <div style={{ color: '#9ca3af', marginBottom: '4px' }}>Array (contiguous):</div>
              <div>[10][20][30][40][50] <span style={{ color: '#22c55e' }}>← consecutive addresses</span></div>
              <div style={{ color: '#9ca3af', marginTop: '8px', marginBottom: '4px' }}>Linked List (scattered):</div>
              <div>Addr 1000: [10|→2040]</div>
              <div>Addr 2040: [20|→1500]</div>
              <div>Addr 1500: [30|→3000]</div>
              <div>Addr 3000: [40|→NULL]</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div style={{ ...miniCard('rgba(34,197,94,0.1)', 'rgba(34,197,94,0.3)') }}>
              <h4 style={{ color: '#22c55e', fontSize: '11px', fontWeight: 'bold' }}>✅ Advantages</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Dynamic size', 'O(1) insert/delete at head', 'No memory waste'].map((x, i) => (
                  <li key={i} style={{ color: '#9ca3af', fontSize: '10px', marginBottom: '2px' }}>• {x}</li>
                ))}
              </ul>
            </div>
            <div style={{ ...miniCard('rgba(239,68,68,0.1)', 'rgba(239,68,68,0.3)') }}>
              <h4 style={{ color: '#f87171', fontSize: '11px', fontWeight: 'bold' }}>❌ Disadvantages</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['No random access', 'Extra memory for pointers', 'Poor cache locality'].map((x, i) => (
                  <li key={i} style={{ color: '#9ca3af', fontSize: '10px', marginBottom: '2px' }}>• {x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h3 style={h3s('white')}>Node Layout in Memory</h3>
          {codeBlock(`class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Each node: [data | next_ptr]
# Node 1 (addr 1000): [10 | 2040]
# Node 2 (addr 2040): [20 | 1500]
# Node 3 (addr 1500): [30 | NULL]

# Memory usage per node:
# - Data: depends on type (4-8 bytes)
# - Pointer: 8 bytes (64-bit system)
# - Overhead: ~16 bytes/node`)}
        </div>
      </div>
    </div>
  </Slide>
);

const miniCard = (bg: string, bd: string) => ({ ...card(bg, bd), padding: '16px' });
