import React from 'react';
import { Slide } from '@revealjs/react';

const grid2 = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };
const card = (bg: string, bd: string) => ({ padding: '20px', background: bg, border: `1px solid ${bd}`, borderRadius: '12px' });
const h2s = { fontSize: '29px', fontWeight: 'bold' as const, color: 'white', marginBottom: '8px' };
const under = (c: string) => ({ height: '4px', width: '80px', background: c, borderRadius: '2px', marginBottom: '16px' });
const p = { color: '#d1d5db', fontSize: '13px', lineHeight: '1.5' as const };
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
const miniCard = (bg: string, bd: string) => ({ ...card(bg, bd), padding: '16px' });

export const LLInsertion: React.FC = () => (
  <Slide>
    <div style={{ textAlign: 'left' }}>
      <h2 style={h2s}>➕ Insertion — Three Cases</h2>
      <div style={under('#22c55e')}></div>
      <div style={grid2}>
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
            <div style={{ ...miniCard('rgba(34,197,94,0.1)', 'rgba(34,197,94,0.3)') }}>
              <h4 style={{ color: '#22c55e', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Case 1: At Beginning (O(1))</h4>
              <p style={{ ...p, fontSize: '10px' }}>Create new node → point it to current HEAD → update HEAD pointer.</p>
            </div>
            <div style={{ ...miniCard('rgba(251,191,36,0.1)', 'rgba(251,191,36,0.3)') }}>
              <h4 style={{ color: '#fbbf24', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Case 2: At End (O(n))</h4>
              <p style={{ ...p, fontSize: '10px' }}>Traverse to last node → create new node → set last.next to new node.</p>
            </div>
            <div style={{ ...miniCard('rgba(168,85,247,0.1)', 'rgba(168,85,247,0.3)') }}>
              <h4 style={{ color: '#a855f7', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Case 3: At Position (O(n))</h4>
              <p style={{ ...p, fontSize: '10px' }}>Traverse to position-1 → create new node → update pointers to link it in.</p>
            </div>
          </div>
        </div>
        {codeBlock(`# Insert at beginning
def insert_at_head(head, data):
    new_node = Node(data)
    new_node.next = head
    return new_node  # new HEAD

# Insert at position
def insert_at_pos(head, pos, data):
    if pos == 0:
        return insert_at_head(head, data)
    current = head
    for i in range(pos - 1):
        current = current.next
    new_node = Node(data)
    new_node.next = current.next
    current.next = new_node
    return head

# Time: O(1) at head, O(n) elsewhere
# Space: O(1)`)}
      </div>
    </div>
  </Slide>
);
