import React from 'react';
import type { LLStep } from '../../utils/algorithms/linkedList';

interface LinkedListVisualizerProps {
  step: LLStep;
  showNull?: boolean;
  circular?: boolean;
  doubly?: boolean;
}

export const LinkedListVisualizer: React.FC<LinkedListVisualizerProps> = ({
  step,
  showNull = true,
  circular = false,
  doubly = false,
}) => {
  const { nodes, highlights, activeIndex } = step;
  const maxX = nodes.length > 0 ? Math.max(...nodes.map(n => n.x)) + 80 : 200;

  return (
    <div className="flex flex-col items-center">
      <svg width={maxX + 60} height="100" style={{ overflow: 'visible' }}>
        {/* NULL at end */}
        {showNull && !circular && nodes.length > 0 && (
          <g>
            <line x1={nodes[nodes.length - 1].x + 40} y1={60} x2={nodes[nodes.length - 1].x + 90} y2={60} stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowGray)" />
            <text x={nodes[nodes.length - 1].x + 105} y={64} fill="#6b7280" fontSize="11" fontFamily="monospace">NULL</text>
          </g>
        )}

        {/* Circular link */}
        {circular && nodes.length > 1 && (
          <path
            d={`M ${nodes[0].x + 20} 40 Q ${nodes[0].x + 20} -10, ${nodes[nodes.length - 1].x + 40} 40`}
            fill="none" stroke="#ec4899" strokeWidth="2" strokeDasharray="6,3"
            markerEnd="url(#arrowPink)"
          />
        )}

        {/* Forward links */}
        {step.links.map((link, i) => {
          const fromNode = nodes[link.from];
          const toNode = nodes[link.to];
          return (
            <g key={i}>
              <line
                x1={fromNode.x + 40} y1={60}
                x2={toNode.x - 5} y2={60}
                stroke={highlights.includes(i) || highlights.includes(link.from) ? '#22d3ee' : '#4b5563'}
                strokeWidth="2"
                markerEnd={highlights.includes(i) || highlights.includes(link.from) ? 'url(#arrowCyan)' : 'url(#arrowGray)'}
              />
              {/* Double arrow for doubly linked */}
              {doubly && (
                <line
                  x1={toNode.x - 5} y1={72}
                  x2={fromNode.x + 40} y2={72}
                  stroke={highlights.includes(i) || highlights.includes(link.to) ? '#a855f7' : '#4b5563'}
                  strokeWidth="1.5"
                  strokeDasharray="4,3"
                  markerEnd={highlights.includes(i) || highlights.includes(link.to) ? 'url(#arrowPurple)' : 'url(#arrowGraySmall)'}
                />
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const isActive = activeIndex === i;
          const isHighlighted = highlights.includes(i);
          const fill = isActive ? '#06b6d4' : isHighlighted ? '#8b5cf6' : '#1f2937';
          const stroke = isActive ? '#22d3ee' : isHighlighted ? '#a78bfa' : '#4b5563';
          const glow = isActive ? 'drop-shadow(0 0 8px rgba(34,211,238,0.5))' : isHighlighted ? 'drop-shadow(0 0 6px rgba(167,139,250,0.4))' : 'none';

          return (
            <g key={i} style={{ filter: glow }}>
              <rect x={node.x - 5} y={35} width="50" height="50" rx="8" fill={fill} stroke={stroke} strokeWidth={isActive || isHighlighted ? 2.5 : 1.5} />
              <text x={node.x + 20} y={65} textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="monospace">{node.value}</text>
              <text x={node.x + 20} y={30} textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="monospace">[{i}]</text>
            </g>
          );
        })}

        {/* Arrow markers */}
        <defs>
          <marker id="arrowGray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280" />
          </marker>
          <marker id="arrowCyan" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#22d3ee" />
          </marker>
          <marker id="arrowPink" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ec4899" />
          </marker>
          <marker id="arrowPurple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#a855f7" />
          </marker>
          <marker id="arrowGraySmall" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280" />
          </marker>
        </defs>
      </svg>

      {/* Description */}
      <div className="mt-4 px-5 py-3 bg-gray-800/50 rounded-lg border border-gray-700 max-w-md">
        <span className="text-gray-300 text-sm">{step.description}</span>
      </div>
    </div>
  );
};
