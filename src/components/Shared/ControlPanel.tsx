import React from 'react';

interface ControlPanelProps {
  isPlaying: boolean;
  speed: number;
  currentStep: number;
  totalSteps: number;
  onTogglePlay: () => void;
  onStep: () => void;
  onPrev: () => void;
  onReset: () => void;
  onSpeedChange: (speed: number) => void;
  isFirst: boolean;
  isLast: boolean;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  isPlaying,
  speed,
  currentStep,
  totalSteps,
  onTogglePlay,
  onStep,
  onPrev,
  onReset,
  onSpeedChange,
  isFirst,
  isLast,
}) => {
  return (
    <div className="control-panel">
      <button
        className="control-btn secondary"
        onClick={onReset}
        title="Reset"
      >
        ⏮
      </button>

      <button
        className="control-btn secondary"
        onClick={onPrev}
        disabled={isFirst}
        title="Previous Step"
      >
        ◀
      </button>

      <button
        className="control-btn primary"
        onClick={onTogglePlay}
        title={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>

      <button
        className="control-btn secondary"
        onClick={onStep}
        disabled={isLast}
        title="Next Step"
      >
        ▶
      </button>

      <div className="speed-control">
        <span className="text-gray-400 text-sm">Speed:</span>
        <input
          type="range"
          min="0.5"
          max="3"
          step="0.5"
          value={speed}
          onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
        />
        <span className="text-white text-sm font-mono">{speed}x</span>
      </div>

      <div className="text-gray-400 text-sm font-mono ml-4">
        Step {currentStep + 1} / {totalSteps}
      </div>
    </div>
  );
};
