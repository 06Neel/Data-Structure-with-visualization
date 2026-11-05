import React, { useState } from 'react';
import { Slide } from '@revealjs/react';
import { useAlgorithm } from '../../../hooks/useAlgorithm';
import { ArrayVisualizer } from '../../../components/Shared/ArrayVisualizer';
import { ControlPanel } from '../../../components/Shared/ControlPanel';
import { generateTraversalSteps } from '../../../utils/algorithms/traversal';

export const ArrayTraversal: React.FC = () => {
  const [inputArray] = useState([10, 25, 30, 45, 50]);
  const steps = generateTraversalSteps(inputArray);
  const algo = useAlgorithm(steps);

  return (
    <Slide>
      <div ref={algo.containerRef} style={{ textAlign: 'left' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>🔄 Array Traversal</h2>
        <div style={{ height: '4px', width: '80px', background: '#6366f1', borderRadius: '2px', marginBottom: '16px' }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <ArrayVisualizer step={algo.currentStepData} />
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
              <pre>
                <code>
{`def traverse(arr):
    for i in range(len(arr)):
        print(arr[i])

# Example
arr = [10, 25, 30, 45, 50]
traverse(arr)

# Time: O(n) | Space: O(1)`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
