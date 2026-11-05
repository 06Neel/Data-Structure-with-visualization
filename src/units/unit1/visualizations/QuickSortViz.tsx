import React, { useState, useMemo } from 'react';
import { Slide } from '@revealjs/react';
import { useAlgorithm } from '../../../hooks/useAlgorithm';
import { ArrayVisualizer } from '../../../components/Shared/ArrayVisualizer';
import { ControlPanel } from '../../../components/Shared/ControlPanel';
import { generateQuickSortSteps } from '../../../utils/algorithms/quickSort';

export const QuickSortViz: React.FC = () => {
  const [inputArray, setInputArray] = useState([70, 25, 12, 90, 45, 30, 60]);
  const steps = useMemo(() => generateQuickSortSteps(inputArray), [inputArray]);
  const algo = useAlgorithm(steps);

  const randomize = () => {
    setInputArray(Array.from({ length: 7 }, () => Math.floor(Math.random() * 90) + 10));
    algo.reset();
  };

  return (
    <Slide>
      <div ref={algo.containerRef} style={{ textAlign: 'left' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }}>🌪️ Quick Sort</h2>
          <button onClick={randomize} style={{ padding: '8px 16px', background: '#f97316', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '13px' }}>🎲 Randomize</button>
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
{`def quick_sort(arr, low, high):
    if low >= high:
        return
    p = partition(arr, low, high)  # pivot in final spot
    quick_sort(arr, low, p - 1)    # sort left  (<= pivot)
    quick_sort(arr, p + 1, high)   # sort right (>  pivot)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

# Avg: O(n log n) | Worst: O(n²) | Space: O(log n)`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
