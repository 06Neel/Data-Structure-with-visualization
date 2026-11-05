import React, { useState, useMemo } from 'react';
import { Slide } from '@revealjs/react';
import { useAlgorithm } from '../../../hooks/useAlgorithm';
import { ArrayVisualizer } from '../../../components/Shared/ArrayVisualizer';
import { ControlPanel } from '../../../components/Shared/ControlPanel';
import { generateLinearSearchSteps } from '../../../utils/algorithms/linearSearch';

export const LinearSearchViz: React.FC = () => {
  const [inputArray] = useState([10, 25, 30, 45, 50, 65, 70]);
  const [target, setTarget] = useState(45);
  const steps = useMemo(() => generateLinearSearchSteps(inputArray, target), [inputArray, target]);
  const algo = useAlgorithm(steps);

  return (
    <Slide>
      <div ref={algo.containerRef} style={{ textAlign: 'left' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }}>🔎 Linear Search</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ color: '#9ca3af', fontSize: '12px' }}>Target:</label>
            <input
              type="number" value={target}
              onChange={(e) => { setTarget(parseInt(e.target.value) || 0); algo.reset(); }}
              style={{ width: '60px', padding: '4px 8px', background: '#1f2937', border: '1px solid #374151', borderRadius: '6px', color: 'white', fontSize: '12px' }}
            />
          </div>
        </div>
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
{`def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i   # Found!
    return -1          # Not found

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
