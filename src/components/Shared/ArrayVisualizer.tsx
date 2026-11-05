import React from 'react';
import type { AlgorithmStep } from '../../hooks/useAlgorithm';

interface ArrayVisualizerProps {
  step: AlgorithmStep;
  showIndex?: boolean;
  maxHeight?: number;
}

export const ArrayVisualizer: React.FC<ArrayVisualizerProps> = ({
  step,
  showIndex = true,
  maxHeight = 180,
}) => {
  const maxValue = Math.max(...step.array, 1);
  const barWidth = Math.min(55, (500 - step.array.length * 10) / step.array.length);

  const getBarStyle = (index: number, value: number): React.CSSProperties => {
    const height = Math.max((value / maxValue) * maxHeight, 30);
    let background = 'linear-gradient(180deg, #6366f1 0%, #4f46e5 100%)';
    let boxShadow = 'none';
    let transform = 'scale(1)';
    let zIndex = 1;

    if (step.found === index) {
      background = 'linear-gradient(180deg, #a78bfa 0%, #8b5cf6 100%)';
      boxShadow = '0 0 30px rgba(167, 139, 250, 0.7)';
      transform = 'scale(1.08)';
      zIndex = 10;
    } else if (step.swapping?.includes(index)) {
      background = 'linear-gradient(180deg, #f87171 0%, #ef4444 100%)';
      boxShadow = '0 0 25px rgba(248, 113, 113, 0.6)';
      transform = 'scale(1.05)';
      zIndex = 5;
    } else if (step.comparing?.includes(index)) {
      background = 'linear-gradient(180deg, #fbbf24 0%, #f59e0b 100%)';
      boxShadow = '0 0 20px rgba(251, 191, 36, 0.5)';
      zIndex = 4;
    } else if (step.current === index) {
      background = 'linear-gradient(180deg, #22d3ee 0%, #06b6d4 100%)';
      boxShadow = '0 0 25px rgba(34, 211, 238, 0.6)';
      transform = 'scale(1.05)';
      zIndex = 3;
    } else if (step.sorted?.includes(index)) {
      background = 'linear-gradient(180deg, #34d399 0%, #10b981 100%)';
    }

    return {
      width: `${barWidth}px`,
      height: `${height}px`,
      background,
      boxShadow,
      transform,
      zIndex,
    };
  };

  return (
    <div className="flex flex-col items-center">
      {/* Array bars */}
      <div className="relative flex items-end justify-center gap-2 pb-10 pt-4 px-4" style={{ minHeight: `${maxHeight + 60}px` }}>
        {step.array.map((value, index) => (
          <div key={index} className="flex flex-col items-center relative">
            {/* Value label on top */}
            <div
              className="text-sm font-bold mb-1 transition-all duration-300"
              style={{
                color: step.found === index ? '#a78bfa' :
                       step.swapping?.includes(index) ? '#f87171' :
                       step.comparing?.includes(index) ? '#fbbf24' :
                       step.current === index ? '#22d3ee' :
                       step.sorted?.includes(index) ? '#34d399' : '#e2e8f0'
              }}
            >
              {value}
            </div>

            {/* Bar */}
            <div
              className="rounded-t-lg transition-all duration-400 ease-out relative"
              style={getBarStyle(index, value)}
            >
              {/* Animated ring for current/swapping */}
              {(step.found === index || step.current === index) && (
                <div
                  className="absolute inset-0 rounded-lg animate-ping opacity-30"
                  style={{
                    background: step.found === index ? '#a78bfa' : '#22d3ee'
                  }}
                />
              )}
            </div>

            {/* Index label */}
            {showIndex && (
              <div className="absolute -bottom-6 text-xs text-gray-500 font-mono">
                [{index}]
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Description box */}
      <div className="mt-8 px-6 py-3 bg-gray-800/50 rounded-lg border border-gray-700 max-w-md">
        <div className="flex items-center gap-3">
          {step.swapping && step.swapping.length > 0 && (
            <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs rounded font-medium">SWAP</span>
          )}
          {step.comparing && step.comparing.length > 0 && !step.swapping && (
            <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded font-medium">COMPARE</span>
          )}
          {step.found !== undefined && (
            <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded font-medium">FOUND</span>
          )}
          {step.sorted && step.sorted.length > 0 && !step.swapping && !step.comparing && step.found === undefined && (
            <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded font-medium">SORTED</span>
          )}
          <span className="text-gray-300 text-sm">{step.description}</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-4 mt-4 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-gradient-to-b from-indigo-500 to-indigo-600"></div>
          <span className="text-gray-400">Default</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-gradient-to-b from-yellow-400 to-yellow-500"></div>
          <span className="text-gray-400">Comparing</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-gradient-to-b from-red-400 to-red-500"></div>
          <span className="text-gray-400">Swapping</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-gradient-to-b from-cyan-400 to-cyan-500"></div>
          <span className="text-gray-400">Current</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-gradient-to-b from-green-400 to-green-500"></div>
          <span className="text-gray-400">Sorted</span>
        </div>
      </div>
    </div>
  );
};
