import React, { useState, useMemo } from 'react';
import { Slide } from '@revealjs/react';
import { useLinkedList } from '../../../hooks/useLinkedList';
import { LinkedListVisualizer } from '../../../components/Shared/LinkedListVisualizer';
import { ControlPanel } from '../../../components/Shared/ControlPanel';
import { generateDoublyLLSteps } from '../../../utils/algorithms/linkedList';

export const DoublyLLViz: React.FC = () => {
  const [values] = useState([10, 20, 30, 40]);
  const steps = useMemo(() => generateDoublyLLSteps(values), [values]);
  const algo = useLinkedList(steps);

  return (
    <Slide>
      <div ref={algo.containerRef} style={{ textAlign: 'left' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }}>↔️ Doubly Linked List Traversal</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <LinkedListVisualizer step={algo.currentStepData} doubly showNull />
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
{`# Doubly Linked List: bidirectional
class DNode:
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None

# NULL ← 10 ↔ 20 ↔ 30 ↔ 40 → NULL

# Forward traversal
def forward(head):
    current = head
    while current:
        print(current.data)
        current = current.next

# Backward traversal
def backward(tail):
    current = tail
    while current:
        print(current.data)
        current = current.prev

# Time: O(n) | Space: O(1)`}
              </code></pre>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
