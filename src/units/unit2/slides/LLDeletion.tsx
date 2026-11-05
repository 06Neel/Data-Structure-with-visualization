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

export const LLDeletion: React.FC = () => (
  <Slide>
    <div style={{ textAlign: 'left' }}>
      <h2 style={h2s}>🗑️ Deletion — Three Cases</h2>
      <div style={under('#ef4444')}></div>
      <div style={grid2}>
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
            <div style={{ ...miniCard('rgba(239,68,68,0.1)', 'rgba(239,68,68,0.3)') }}>
              <h4 style={{ color: '#ef4444', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Case 1: Delete HEAD (O(1))</h4>
              <p style={{ ...p, fontSize: '10px' }}>Save HEAD data → move HEAD to HEAD.next → return saved data.</p>
            </div>
            <div style={{ ...miniCard('rgba(251,191,36,0.1)', 'rgba(251,191,36,0.3)') }}>
              <h4 style={{ color: '#fbbf24', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Case 2: Delete Last (O(n))</h4>
              <p style={{ ...p, fontSize: '10px' }}>Traverse to second-last node → set its next to NULL → free old last node.</p>
            </div>
            <div style={{ ...miniCard('rgba(168,85,247,0.1)', 'rgba(168,85,247,0.3)') }}>
              <h4 style={{ color: '#a855f7', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Case 3: Delete at Position (O(n))</h4>
              <p style={{ ...p, fontSize: '10px' }}>Traverse to position-1 → skip the node by updating next pointer → free deleted node.</p>
            </div>
          </div>
        </div>
        {codeBlock(`# Delete from beginning
def delete_head(head):
    if head is None: return None
    data = head.data
    head = head.next
    return data, head

# Delete at position
def delete_at_pos(head, pos):
    if pos == 0:
        return delete_head(head)
    current = head
    for i in range(pos - 1):
        current = current.next
    deleted = current.next
    current.next = deleted.next
    return deleted.data, head

# Time: O(1) at head, O(n) elsewhere
# Space: O(1)`)}
      </div>
    </div>
  </Slide>
);
