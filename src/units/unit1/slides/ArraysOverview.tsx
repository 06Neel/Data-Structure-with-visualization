import React from 'react';
import { Slide } from '@revealjs/react';

export const ArraysOverview: React.FC = () => (
  <>
    {/* Slide 1: What is Array */}
    <Slide>
      <div style={{ textAlign: 'left' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>📦 Arrays — Introduction</h2>
        <div style={{ height: '4px', width: '80px', background: '#6366f1', borderRadius: '2px', marginBottom: '16px' }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <div style={{ padding: '20px', background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(99,102,241,0.05))', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '12px', marginBottom: '12px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#818cf8', marginBottom: '8px' }}>📋 Definition</h3>
              <p style={{ color: '#d1d5db', fontSize: '13px', lineHeight: '1.6' }}>
                An <strong style={{ color: 'white' }}>array</strong> is a collection of elements stored at <strong style={{ color: '#818cf8' }}>contiguous memory locations</strong>.
                Each element is accessed using its <strong style={{ color: 'white' }}>index</strong> (position number).
              </p>
            </div>
            <div style={{ padding: '16px', background: 'rgba(31,41,55,0.5)', border: '1px solid #374151', borderRadius: '12px' }}>
              <h4 style={{ color: 'white', fontWeight: '600', marginBottom: '8px', fontSize: '14px' }}>🎯 Key Properties</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '12px' }}>
                {['📍 Contiguous memory — elements sit side by side', '🔢 Zero-indexed — first element at index 0', '⚡ Random access — O(1) time to access any element', '📏 Fixed size — declared at compile time', '🏷️ Homogeneous — all elements same data type'].map((item, i) => (
                  <li key={i} style={{ color: '#d1d5db', marginBottom: '6px' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div style={{ padding: '20px', background: 'rgba(31,41,55,0.5)', border: '1px solid #374151', borderRadius: '12px', marginBottom: '12px' }}>
              <h4 style={{ color: 'white', fontWeight: '600', marginBottom: '12px', fontSize: '14px' }}>Visual Representation</h4>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '8px', paddingBottom: '24px' }}>
                {[10, 25, 30, 45, 50].map((val, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '4px' }}>{val}</div>
                    <div style={{ width: '56px', height: '48px', background: 'linear-gradient(180deg, #6366f1, #4f46e5)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '14px' }}>{val}</div>
                    <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '4px' }}>[{i}]</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-block-dot red"></span>
                <span className="code-block-dot yellow"></span>
                <span className="code-block-dot green"></span>
              </div>
              <pre>
                <code>
{`# Creating an array
arr = [10, 25, 30, 45, 50]

# Access by index
print(arr[0])    # 10
print(arr[2])    # 30

# Length
print(len(arr))  # 5`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Slide>

    {/* Slide 2: Memory Representation */}
    <Slide>
      <div style={{ textAlign: 'left' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>💾 Memory Representation</h2>
        <div style={{ height: '4px', width: '80px', background: '#22d3ee', borderRadius: '2px', marginBottom: '16px' }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>How Array Lives in Memory</h3>
            <div style={{ padding: '16px', background: 'rgba(31,41,55,0.5)', border: '1px solid #374151', borderRadius: '12px' }}>
              {[{ addr: '0x1000', val: '10', idx: 0, bg: '#6366f1' }, { addr: '0x1004', val: '25', idx: 1, bg: '#22d3ee' }, { addr: '0x1008', val: '30', idx: 2, bg: '#a855f7' }, { addr: '0x100C', val: '45', idx: 3, bg: '#ec4899' }, { addr: '0x1010', val: '50', idx: 4, bg: '#22c55e' }].map((cell) => (
                <div key={cell.idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <span style={{ color: '#6b7280', fontFamily: 'monospace', fontSize: '11px', width: '70px' }}>{cell.addr}</span>
                  <div style={{ width: '64px', height: '40px', background: cell.bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '14px' }}>{cell.val}</div>
                  <span style={{ color: '#9ca3af', fontSize: '11px' }}>← arr[{cell.idx}]</span>
                </div>
              ))}
              <div style={{ marginTop: '8px', padding: '8px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', fontSize: '11px', color: '#9ca3af' }}>
                Each integer = 4 bytes. arr[2] = 0x1000 + (2 × 4) = 0x1008
              </div>
            </div>
          </div>
          <div>
            <div style={{ padding: '20px', background: 'linear-gradient(135deg, rgba(34,211,238,0.1), rgba(34,211,238,0.05))', border: '1px solid rgba(34,211,238,0.3)', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#22d3ee', marginBottom: '12px' }}>🧮 Address Calculation</h3>
              <div style={{ padding: '12px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', marginBottom: '8px' }}>
                <h4 style={{ color: 'white', fontFamily: 'monospace', fontSize: '12px', marginBottom: '4px' }}>1D Array:</h4>
                <code style={{ color: '#67e8f9', fontSize: '12px', fontFamily: 'monospace' }}>ADDR(A[i]) = BASE + i × SIZE</code>
              </div>
              <div style={{ padding: '12px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px' }}>
                <h4 style={{ color: 'white', fontFamily: 'monospace', fontSize: '12px', marginBottom: '4px' }}>2D Array (Row-major):</h4>
                <code style={{ color: '#67e8f9', fontSize: '12px', fontFamily: 'monospace' }}>ADDR(A[i][j]) = BASE + (i×COLS + j) × SIZE</code>
              </div>
            </div>
            <div style={{ marginTop: '12px', padding: '16px', background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: '12px' }}>
              <h4 style={{ color: '#fbbf24', fontWeight: '600', marginBottom: '6px', fontSize: '13px' }}>⚡ Why This Matters</h4>
              <p style={{ color: '#d1d5db', fontSize: '12px' }}>
                Contiguous memory = <strong style={{ color: 'white' }}>direct address calculation</strong> = O(1) access time!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  </>
);
