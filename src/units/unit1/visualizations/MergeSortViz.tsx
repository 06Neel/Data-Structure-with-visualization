import React, { useState, useMemo } from 'react';
import { Slide } from '@revealjs/react';
import { useAlgorithm } from '../../../hooks/useAlgorithm';
import { ArrayVisualizer } from '../../../components/Shared/ArrayVisualizer';
import { ControlPanel } from '../../../components/Shared/ControlPanel';
import { generateMergeSortSteps } from '../../../utils/algorithms/mergeSort';

export const MergeSortViz: React.FC = () => {
  const [inputArray, setInputArray] = useState([64, 34, 25, 12, 22, 11, 90]);
  const steps = useMemo(() => generateMergeSortSteps(inputArray), [inputArray]);
  const algo = useAlgorithm(steps);

  const randomize = () => {
    setInputArray(Array.from({ length: 7 }, () => Math.floor(Math.random() * 90) + 10));
    algo.reset();
  };

  return (
    <Slide>
      <div ref={algo.containerRef} style={{ textAlign: 'left' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }}>🔀 Merge Sort</h2>
          <button onClick={randomize} style={{ padding: '8px 16px', background: '#6366f1', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '13px' }}>🎲 Randomize</button>
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
{`def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result += left[i:]
    result += right[j:]
    return result

# Time: O(n log n) | Space: O(n)`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
