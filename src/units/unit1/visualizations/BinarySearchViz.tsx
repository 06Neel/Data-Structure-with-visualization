import React, { useState, useMemo } from 'react';
import { Slide } from '@revealjs/react';
import { useAlgorithm } from '../../../hooks/useAlgorithm';
import { ArrayVisualizer } from '../../../components/Shared/ArrayVisualizer';
import { ControlPanel } from '../../../components/Shared/ControlPanel';
import { generateBinarySearchSteps } from '../../../utils/algorithms/binarySearch';

export const BinarySearchViz: React.FC = () => {
  const [inputArray] = useState([10, 25, 30, 45, 50, 65, 70]);
  const [target, setTarget] = useState(45);
  const steps = useMemo(() => generateBinarySearchSteps(inputArray, target), [inputArray, target]);
  const algo = useAlgorithm(steps);

  return (
    <Slide>
      <div ref={algo.containerRef} style={{ textAlign: 'left' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }}>⚡ Binary Search</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ color: '#9ca3af', fontSize: '12px' }}>Target:</label>
            <input
              type="number" value={target}
              onChange={(e) => { setTarget(parseInt(e.target.value) || 0); algo.reset(); }}
              style={{ width: '60px', padding: '4px 8px', background: '#1f2937', border: '1px solid #374151', borderRadius: '6px', color: 'white', fontSize: '12px' }}
            />
          </div>
        </div>
        <div style={{ padding: '8px 12px', background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: '8px', marginBottom: '12px' }}>
          <span style={{ color: '#fbbf24', fontSize: '12px' }}>⚠️ Binary search requires a sorted array!</span>
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
{`def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid       # Found!
        elif arr[mid] < target:
            left = mid + 1   # Right half
        else:
            right = mid - 1  # Left half
    return -1  # Not found

# Time: O(log n) | Space: O(1)`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
