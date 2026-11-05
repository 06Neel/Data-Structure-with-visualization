import React, { useState, useMemo } from 'react';
import { Slide } from '@revealjs/react';
import { useLinkedList } from '../../../hooks/useLinkedList';
import { LinkedListVisualizer } from '../../../components/Shared/LinkedListVisualizer';
import { ControlPanel } from '../../../components/Shared/ControlPanel';
import { generateTraversalSteps } from '../../../utils/algorithms/linkedList';

export const LLTraversalViz: React.FC = () => {
  const [values] = useState([10, 25, 30, 45, 60]);
  const steps = useMemo(() => generateTraversalSteps(values), [values]);
  const algo = useLinkedList(steps);

  return (
    <Slide>
      <div ref={algo.containerRef} style={{ textAlign: 'left' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }}>🔗 Linked List Traversal</h2>
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
{`def traverse(head):
    current = head
    while current is not None:
        print(current.data)
        current = current.next

# HEAD → 10 → 25 → 30 → 45 → 60 → NULL
# Visit: 10, 25, 30, 45, 60

# Time: O(n) | Space: O(1)`}
              </code></pre>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
