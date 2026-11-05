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
    <span style={{ width: '22px', height: '22px', background: '#a855f7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '11px', fontWeight: 'bold', flexShrink: 0 }}>{n}</span>
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
const miniCard = (bg: string, bd: string) => ({ ...card(bg, bd), padding: '16px' });

export const DoublyLinkedList: React.FC = () => (
  <Slide>
    <div style={{ textAlign: 'left' }}>
      <h2 style={h2s}>↔️ Doubly Linked List — Concept</h2>
      <div style={under('#a855f7')}></div>
      <div style={grid2}>
        <div style={card('rgba(31,41,55,0.5)', '#374151')}>
          <h3 style={h3s('#a855f7')}>Node Structure</h3>
          <div style={{ fontFamily: 'monospace', fontSize: '10px', color: '#d1d5db', padding: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', marginBottom: '8px' }}>
            <div style={{ color: '#a855f7' }}>┌───────┬───────┬───────┐</div>
            <div style={{ color: '#a855f7' }}>│  PREV │  DATA │  NEXT │</div>
            <div style={{ color: '#a855f7' }}>└───────┴───────┴───────┘</div>
          </div>
          <h3 style={h3s('#a855f7')}>Operations</h3>
          {step(1, 'Traverse forward: follow next pointers from HEAD.')}
          {step(2, 'Traverse backward: follow prev pointers from TAIL.')}
          {step(3, 'Insert: update 4 pointers (prev + next of both neighbors).')}
          {step(4, 'Delete: bypass by linking prev and next neighbors.')}
        </div>
        <div>
          <div style={{ ...miniCard('rgba(168,85,247,0.1)', 'rgba(168,85,247,0.3)'), marginBottom: '8px' }}>
            <h4 style={{ color: '#a855f7', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Advantages over Singly</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Bidirectional traversal', 'O(1) deletion with node reference', 'Easier to reverse', 'Can insert before a node efficiently'].map((x, i) => (
                <li key={i} style={{ ...p, fontSize: '10px', marginBottom: '3px' }}>✅ {x}</li>
              ))}
            </ul>
          </div>
          {codeBlock(`class DNode:
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None

# NULL ← [10] ↔ [20] ↔ [30] → NULL
# Each node has TWO pointers

# Insert at head (O(1)):
def insert_head(head, data):
    new = DNode(data)
    new.next = head
    if head: head.prev = new
    return new  # new HEAD

# Delete given node (O(1)):
def delete_node(node):
    node.prev.next = node.next
    node.next.prev = node.prev`)}
        </div>
      </div>
    </div>
  </Slide>
);
