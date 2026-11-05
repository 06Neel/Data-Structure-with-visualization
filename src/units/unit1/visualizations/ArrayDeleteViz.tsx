import React, { useState, useMemo } from 'react';
import { Slide } from '@revealjs/react';
import { useAlgorithm } from '../../../hooks/useAlgorithm';
import { ArrayVisualizer } from '../../../components/Shared/ArrayVisualizer';
import { ControlPanel } from '../../../components/Shared/ControlPanel';
import { generateDeleteSteps } from '../../../utils/algorithms/arrayDelete';

export const ArrayDeleteViz: React.FC = () => {
  const [inputArray] = useState([10, 20, 30, 40, 50]);
  const [position, setPosition] = useState(2);
  const steps = useMemo(() => generateDeleteSteps(inputArray, position), [inputArray, position]);
  const algo = useAlgorithm(steps);

  return (
    <Slide>
      <div ref={algo.containerRef} style={{ textAlign: 'left' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>
          🗑️ Array Deletion
        </h2>
        <div style={{ height: '4px', width: '80px', background: '#ef4444', borderRadius: '2px', marginBottom: '16px' }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <ArrayVisualizer step={algo.currentStepData} />
            <div style={{ marginTop: '12px' }}>
              <ControlPanel
                isPlaying={algo.isPlaying}
                speed={algo.speed}
                currentStep={algo.currentStep}
                totalSteps={algo.totalSteps}
                onTogglePlay={algo.togglePlay}
                onStep={algo.step}
                onPrev={algo.prev}
                onReset={algo.reset}
                onSpeedChange={algo.setSpeed}
                isFirst={algo.isFirst}
                isLast={algo.isLast}
              />
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <label style={{ color: '#9ca3af', fontSize: '12px' }}>Delete at position:</label>
              <input
                type="number"
                min={0}
                max={inputArray.length - 1}
                value={position}
                onChange={(e) => { setPosition(parseInt(e.target.value) || 0); algo.reset(); }}
                style={{ width: '50px', padding: '4px 8px', background: '#1f2937', border: '1px solid #374151', borderRadius: '6px', color: 'white', fontSize: '12px' }}
              />
            </div>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-block-dot red"></span>
                <span className="code-block-dot yellow"></span>
                <span className="code-block-dot green"></span>
              </div>
              <pre>
                <code>
{`def delete(arr, pos):
    val = arr[pos]
    for i in range(pos, len(arr)-1):
        arr[i] = arr[i+1]  # Shift left
    arr.pop()  # Reduce size
    return val

# Delete element at position 2
# [10, 20, 30, 40, 50]
# → [10, 20, 40, 50]`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
