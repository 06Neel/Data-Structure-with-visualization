import React from 'react';

interface Complexity {
  name: string;
  color: string;
  fn: (n: number) => number;
}

interface ComplexityChartProps {
  complexities?: Complexity[];
  maxN?: number;
}

const defaultComplexities: Complexity[] = [
  { name: 'O(1)', color: '#34d399', fn: () => 1 },
  { name: 'O(log n)', color: '#22d3ee', fn: (n) => Math.log2(n) },
  { name: 'O(n)', color: '#6366f1', fn: (n) => n },
  { name: 'O(n log n)', color: '#fbbf24', fn: (n) => n * Math.log2(n) },
  { name: 'O(n²)', color: '#f87171', fn: (n) => n * n },
  { name: 'O(2ⁿ)', color: '#ec4899', fn: (n) => Math.pow(2, Math.min(n, 20)) },
];

export const ComplexityChart: React.FC<ComplexityChartProps> = ({
  complexities = defaultComplexities,
  maxN = 16,
}) => {
  const width = 500;
  const height = 300;
  const padding = 50;

  const plotWidth = width - padding * 2;
  const plotHeight = height - padding * 2;

  const maxValue = Math.min(
    maxN * maxN,
    Math.max(...complexities.map((c) => c.fn(maxN)))
  );

  const getX = (n: number) => padding + (n / maxN) * plotWidth;
  const getY = (val: number) => padding + plotHeight - (val / maxValue) * plotHeight;

  const generatePath = (complexity: Complexity): string => {
    const points: string[] = [];
    for (let n = 1; n <= maxN; n++) {
      const x = getX(n);
      const y = getY(complexity.fn(n));
      points.push(`${x},${y}`);
    }
    return `M ${points.join(' L ')}`;
  };

  return (
    <div className="complexity-chart">
      <svg width={width} height={height}>
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
          <line
            key={`h-${ratio}`}
            x1={padding}
            y1={padding + plotHeight * (1 - ratio)}
            x2={width - padding}
            y2={padding + plotHeight * (1 - ratio)}
            stroke="#334155"
            strokeWidth="1"
            strokeDasharray="4"
          />
        ))}

        {/* Axes */}
        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          stroke="#475569"
          strokeWidth="2"
        />
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          stroke="#475569"
          strokeWidth="2"
        />

        {/* Axis labels */}
        <text x={width / 2} y={height - 10} fill="#94a3b8" textAnchor="middle" fontSize="12">
          Input Size (n)
        </text>
        <text
          x={15}
          y={height / 2}
          fill="#94a3b8"
          textAnchor="middle"
          fontSize="12"
          transform={`rotate(-90, 15, ${height / 2})`}
        >
          Operations
        </text>

        {/* Complexity curves */}
        {complexities.map((complexity) => (
          <g key={complexity.name}>
            <path
              d={generatePath(complexity)}
              fill="none"
              stroke={complexity.color}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        ))}

        {/* Legend */}
        {complexities.map((complexity, index) => (
          <g key={`legend-${complexity.name}`} transform={`translate(${width - 120}, ${20 + index * 24})`}>
            <rect width="16" height="3" fill={complexity.color} rx="1" />
            <text x="22" y="5" fill="#e2e8f0" fontSize="11" fontFamily="monospace">
              {complexity.name}
            </text>
          </g>
        ))}

        {/* Tick marks */}
        {[1, 4, 8, 12, 16].map((n) => (
          <g key={`tick-${n}`}>
            <line
              x1={getX(n)}
              y1={height - padding}
              x2={getX(n)}
              y2={height - padding + 5}
              stroke="#475569"
              strokeWidth="2"
            />
            <text
              x={getX(n)}
              y={height - padding + 18}
              fill="#94a3b8"
              textAnchor="middle"
              fontSize="11"
            >
              {n}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};
