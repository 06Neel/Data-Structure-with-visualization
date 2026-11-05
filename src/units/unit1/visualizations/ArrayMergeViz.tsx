import React, { useState, useMemo } from 'react';
import { Slide } from '@revealjs/react';
import { useAlgorithm } from '../../../hooks/useAlgorithm';
import { ArrayVisualizer } from '../../../components/Shared/ArrayVisualizer';
import { ControlPanel } from '../../../components/Shared/ControlPanel';
import { generateMergeSteps } from '../../../utils/algorithms/arrayMerge';

export const ArrayMergeViz: React.FC = () => {
  const [arr1] = useState([10, 30, 50]);
  const [arr2] = useState([20, 40, 60]);
  const steps = useMemo(() => generateMergeSteps(arr1, arr2), [arr1, arr2]);
  const algo = useAlgorithm(steps);

  return (
    <Slide>
      <div ref={algo.containerRef} style={{ textAlign: 'left' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>
          🔀 Array Merging
        </h2>
        <div style={{ height: '4px', width: '80px', background: '#a855f7', borderRadius: '2px', marginBottom: '16px' }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <div style={{ marginBottom: '8px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
              <span style={{ padding: '4px 12px', background: 'rgba(99,102,241,0.2)', borderRadius: '6px', color: '#818cf8', fontSize: '12px' }}>
                Arr1: [{arr1.join(', ')}]
              </span>
              <span style={{ padding: '4px 12px', background: 'rgba(168,85,247,0.2)', borderRadius: '6px', color: '#c084fc', fontSize: '12px' }}>
                Arr2: [{arr2.join(', ')}]
              </span>
            </div>
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
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-block-dot red"></span>
                <span className="code-block-dot yellow"></span>
                <span className="code-block-dot green"></span>
              </div>
              <pre>
                <code>
{`def merge(arr1, arr2):
    result = []
    i = j = 0
    while i < len(arr1) and j < len(arr2):
        if arr1[i] <= arr2[j]:
            result.append(arr1[i])
            i += 1
        else:
            result.append(arr2[j])
            j += 1
    result += arr1[i:]
    result += arr2[j:]
    return result

# [10,30,50] + [20,40,60]
# → [10, 20, 30, 40, 50, 60]`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
