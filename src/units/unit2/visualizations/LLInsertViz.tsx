import React, { useState, useMemo } from 'react';
import { Slide } from '@revealjs/react';
import { useLinkedList } from '../../../hooks/useLinkedList';
import { LinkedListVisualizer } from '../../../components/Shared/LinkedListVisualizer';
import { ControlPanel } from '../../../components/Shared/ControlPanel';
import { generateInsertSteps } from '../../../utils/algorithms/linkedList';

export const LLInsertViz: React.FC = () => {
  const [values] = useState([10, 20, 30, 40]);
  const [position, setPosition] = useState(2);
  const [value, setValue] = useState(25);
  const steps = useMemo(() => generateInsertSteps(values, position, value), [values, position, value]);
  const algo = useLinkedList(steps);

  return (
    <Slide>
      <div ref={algo.containerRef} style={{ textAlign: 'left' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }}>➕ Linked List Insertion</h2>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <label style={{ color: '#9ca3af', fontSize: '12px' }}>Position:</label>
              <input type="number" min={0} max={values.length} value={position}
                onChange={(e) => { setPosition(parseInt(e.target.value) || 0); algo.reset(); }}
                style={{ width: '50px', padding: '4px 8px', background: '#1f2937', border: '1px solid #374151', borderRadius: '6px', color: 'white', fontSize: '12px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <label style={{ color: '#9ca3af', fontSize: '12px' }}>Value:</label>
              <input type="number" value={value}
                onChange={(e) => { setValue(parseInt(e.target.value) || 0); algo.reset(); }}
                style={{ width: '50px', padding: '4px 8px', background: '#1f2937', border: '1px solid #374151', borderRadius: '6px', color: 'white', fontSize: '12px' }} />
            </div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <LinkedListVisualizer step={algo.currentStepData} />
            <div style={{ marginTop: '12px' }}>
              <ControlPanel
                isPlaying={algo.isPlaying} speed={algo.speed} currentStep={algo.currentStep}
                totalSteps={algo.totalSteps} onTogglePlay={algo.togglePlay} onStep={algo.step}
                onPrev={algo.prev} onReset={algo.reset} onSpeedChange={algo.setSpeed}
                isFirst={algo.isFirst} isLast={algo.isLast}
              />
            </div>
          </div>
          <div>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-block-dot red"></span>
                <span className="code-block-dot yellow"></span>
                <span className="code-block-dot green"></span>
              </div>
              <pre><code>
{`def insert_at_pos(head, pos, data):
    if pos == 0:
        return insert_at_head(head, data)
    current = head
    for i in range(pos - 1):
        current = current.next
    new_node = Node(data)
    new_node.next = current.next
    current.next = new_node
    return head

# Insert ${value} at position ${position}
# [10] → [20] → [30] → [40]
# → [10] → [20] → [${value}] → [30] → [40]

# Time: O(n) | Space: O(1)`}
              </code></pre>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
