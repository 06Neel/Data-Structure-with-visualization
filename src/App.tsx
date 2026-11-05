import { Deck, Slide, Stack } from '@revealjs/react';
import { revealConfig, revealPlugins } from './config/revealConfig';
import { ThemeToggle } from './components/Theme/ThemeToggle';
import {
  TitleSlide, NavigationPage, ArraysOverview, ArrayTraversal,
  BubbleSortViz, InsertionSortViz, SelectionSortViz, MergeSortViz,
  LinearSearchViz, BinarySearchViz,
  ArrayInsertViz, ArrayDeleteViz, ArrayMergeViz,
} from './units/unit1';
import {
  LLIntro, LLMemory, LLAllocation, LLTraversal, LLInsertion, LLDeletion,
  LLHeader, LLGroundedCircular, DoublyLinkedList,
  LLTraversalViz, LLInsertViz, LLDeleteViz, DoublyLLViz,
} from './units/unit2';
import './index.css';

const grid2 = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };
const card = (bg: string, bd: string) => ({ padding: '20px', background: bg, border: `1px solid ${bd}`, borderRadius: '12px' });
const h2s = { fontSize: '29px', fontWeight: 'bold' as const, color: 'white', marginBottom: '8px' };
const under = (c: string) => ({ height: '4px', width: '80px', background: c, borderRadius: '2px', marginBottom: '16px' });
const p = { color: '#d1d5db', fontSize: '13px', lineHeight: '1.5' as const };
const h3s = (c: string) => ({ fontSize: '17px', fontWeight: 'bold' as const, color: c, marginBottom: '8px' });
const codeBlock = (code: string) => (
  <div className="code-block">
    <div className="code-block-header">
      <span className="code-block-dot red"></span>
      <span className="code-block-dot yellow"></span>
      <span className="code-block-dot green"></span>
    </div>
    <pre>
      <code>{code}</code>
    </pre>
  </div>
);
const step = (n: number, t: string) => (
  <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', alignItems: 'flex-start' }}>
    <span style={{ width: '22px', height: '22px', background: '#6366f1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '11px', fontWeight: 'bold', flexShrink: 0 }}>{n}</span>
    <span style={{ color: '#d1d5db', fontSize: '12px' }}>{t}</span>
  </div>
);
const badge = (bg: string, c: string) => ({ padding: '3px 10px', background: bg, borderRadius: '6px', color: c, fontSize: '12px' });
const miniCard = (bg: string, bd: string) => ({ ...card(bg, bd), padding: '16px' });

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: 'var(--bg-base)' }}>
      <ThemeToggle />
      <Deck config={revealConfig} plugins={revealPlugins}>

        {/* ===== 1. TITLE ===== */}
        <TitleSlide />

        {/* ===== 2. CONTENT NAVIGATION ===== */}
        <NavigationPage />

        {/* ===== 3. TABLE OF CONTENTS ===== */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ ...h2s, fontSize: '30px', marginBottom: '14px' }}>📋 Unit 1 — What We'll Cover</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              {[
                { icon: '⏱️', t: 'Complexity Analysis', d: 'Time, Space, Big O, Omega, Theta', c: '#6366f1', n: '13 slides' },
                { icon: '📦', t: 'Arrays', d: 'Memory, Operations, Manipulation', c: '#22d3ee', n: '12 slides' },
                { icon: '🔄', t: 'Sorting Algorithms', d: 'Bubble, Insertion, Selection', c: '#fbbf24', n: '20 slides' },
                { icon: '🔎', t: 'Searching Algorithms', d: 'Linear & Binary Search', c: '#34d399', n: '14 slides' },
              ].map((x) => (
                <div key={x.t} style={{ ...card('rgba(31,41,55,0.5)', '#374151'), display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <div style={{ width: '50px', height: '50px', background: `${x.c}20`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', flexShrink: 0 }}>{x.icon}</div>
                  <div>
                    <h3 style={{ color: 'white', fontSize: '15px', fontWeight: 'bold', marginBottom: '2px' }}>{x.t}</h3>
                    <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0 }}>{x.d}</p>
                    <span style={{ ...badge(`${x.c}20`, x.c), marginTop: '4px', display: 'inline-block' }}>{x.n}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Slide>

        {/* ===== 3-4. WHAT IS DS & ALGORITHM ===== */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>📚 What is a Data Structure?</h2>
            <div style={under('#6366f1')}></div>
            <div style={card('rgba(31,41,55,0.5)', '#374151')}>
              <p style={{ ...p, fontSize: '14px', marginBottom: '12px' }}>A <strong style={{ color: 'white' }}>data structure</strong> is a way of organizing and storing data so that it can be accessed and modified <strong style={{ color: '#818cf8' }}>efficiently</strong>.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                {[
                  { icon: '📋', t: 'Linear', ex: 'Array, Linked List, Stack, Queue', c: '#6366f1' },
                  { icon: '🌳', t: 'Non-Linear', ex: 'Tree, Graph, Heap', c: '#22d3ee' },
                  { icon: '🔑', t: 'Hashing', ex: 'Hash Table, Hash Map', c: '#fbbf24' },
                ].map((x) => (
                  <div key={x.t} style={{ ...miniCard(`${x.c}10`, `${x.c}30`) }}>
                    <div style={{ fontSize: '24px', marginBottom: '6px' }}>{x.icon}</div>
                    <h4 style={{ color: x.c, fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>{x.t}</h4>
                    <p style={{ ...p, fontSize: '10px' }}>{x.ex}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Slide>

        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>⚡ What is an Algorithm?</h2>
            <div style={under('#22d3ee')}></div>
            <div style={card('rgba(31,41,55,0.5)', '#374151')}>
              <p style={{ ...p, fontSize: '14px', marginBottom: '12px' }}>An <strong style={{ color: 'white' }}>algorithm</strong> is a step-by-step procedure to solve a problem or perform a computation.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {[
                  { t: 'Properties of a Good Algorithm', items: ['✅ Finite — must terminate', '✅ Definite — clear steps', '✅ Input — zero or more inputs', '✅ Output — one or more outputs', '✅ Effective — each step is feasible'] },
                  { t: 'Algorithm vs Program', items: ['📝 Algorithm = Pseudocode (language-independent)', '💻 Program = Code (language-specific)', '📝 Algorithm = Blueprint', '💻 Program = Built house', '📝 Algorithm analysis ≠ Program testing'] },
                ].map((x) => (
                  <div key={x.t} style={miniCard('rgba(34,211,238,0.05)', 'rgba(34,211,238,0.3)')}>
                    <h4 style={h3s('#22d3ee')}>{x.t}</h4>
                    {x.items.map((item, i) => <div key={i} style={{ ...p, fontSize: '11px', marginBottom: '4px' }}>{item}</div>)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Slide>

        {/* ===== 5-6. COMPLEXITY ANALYSIS ===== */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>⏱️ Why Complexity Analysis?</h2>
            <div style={under('#6366f1')}></div>
            <div style={grid2}>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#818cf8')}>🎯 The Problem</h3>
                <p style={p}>Two algorithms solve the same problem. <strong style={{ color: 'white' }}>Algorithm A</strong> takes 100ms for 100 items. <strong style={{ color: 'white' }}>Algorithm B</strong> takes 50ms.</p>
                <p style={{ ...p, marginTop: '6px' }}>Is B always faster? <strong style={{ color: '#818cf8' }}>Not necessarily!</strong> At n=1M, A could be faster.</p>
              </div>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#818cf8')}>📈 Example</h3>
                <div style={{ ...miniCard('rgba(34,211,238,0.1)', 'rgba(34,211,238,0.2)'), marginBottom: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#22d3ee', fontFamily: 'monospace', fontSize: '11px' }}>Merge Sort</span><span style={{ color: '#22c55e', fontSize: '10px' }}>O(n log n)</span></div>
                  <div style={{ width: '100%', background: '#374151', borderRadius: '4px', height: '6px', marginTop: '4px' }}><div style={{ width: '35%', background: '#22d3ee', height: '6px', borderRadius: '4px' }}></div></div>
                  <div style={{ color: '#6b7280', fontSize: '10px', marginTop: '2px' }}>1M items ≈ 20M ops</div>
                </div>
                <div style={miniCard('rgba(239,68,68,0.1)', 'rgba(239,68,68,0.2)')}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#f87171', fontFamily: 'monospace', fontSize: '11px' }}>Bubble Sort</span><span style={{ color: '#fbbf24', fontSize: '10px' }}>O(n²)</span></div>
                  <div style={{ width: '100%', background: '#374151', borderRadius: '4px', height: '6px', marginTop: '4px' }}><div style={{ width: '100%', background: '#f87171', height: '6px', borderRadius: '4px' }}></div></div>
                  <div style={{ color: '#6b7280', fontSize: '10px', marginTop: '2px' }}>1M items ≈ 1T ops 💀</div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>⏱️ Time vs 💾 Space Complexity</h2>
            <div style={under('#6366f1')}></div>
            <div style={grid2}>
              <div style={{ ...card('rgba(34,211,238,0.05)', 'rgba(34,211,238,0.3)'), display: 'flex', gap: '12px' }}>
                <span style={{ fontSize: '28px' }}>⏱️</span>
                <div>
                  <h3 style={h3s('#22d3ee')}>Time Complexity</h3>
                  <p style={{ ...p, fontSize: '11px' }}>Number of <strong style={{ color: '#22d3ee' }}>basic operations</strong> as input size grows.</p>
                  <div style={{ padding: '6px', background: 'rgba(0,0,0,0.3)', borderRadius: '4px', color: '#67e8f9', fontSize: '10px', fontFamily: 'monospace', marginTop: '6px' }}>for(i=0; i&lt;n; i++) → O(n)</div>
                </div>
              </div>
              <div style={{ ...card('rgba(236,72,153,0.05)', 'rgba(236,72,153,0.3)'), display: 'flex', gap: '12px' }}>
                <span style={{ fontSize: '28px' }}>💾</span>
                <div>
                  <h3 style={h3s('#ec4899')}>Space Complexity</h3>
                  <p style={{ ...p, fontSize: '11px' }}>Amount of <strong style={{ color: '#ec4899' }}>extra memory</strong> used as input grows.</p>
                  <div style={{ padding: '6px', background: 'rgba(0,0,0,0.3)', borderRadius: '4px', color: '#f472b6', fontSize: '10px', fontFamily: 'monospace', marginTop: '6px' }}>int arr[n] → O(n) space</div>
                </div>
              </div>
            </div>
            <div style={{ ...card('rgba(99,102,241,0.1)', 'rgba(99,102,241,0.3)'), marginTop: '12px' }}>
              <h4 style={{ color: 'white', fontSize: '13px', fontWeight: 'bold', marginBottom: '6px' }}>⚖️ Time-Space Trade-off</h4>
              <p style={{ ...p, fontSize: '12px' }}>Often you can <strong style={{ color: 'white' }}>reduce time</strong> by using more memory, or <strong style={{ color: 'white' }}>reduce memory</strong> at the cost of time.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginTop: '8px' }}>
                {[
                  { t: '⚡ Fast+Memory', d: 'Lookup tables', c: '#22c55e' },
                  { t: '⚖️ Balanced', d: 'Standard algos', c: '#fbbf24' },
                  { t: '🐢 Slow+Less', d: 'Streaming', c: '#3b82f6' },
                ].map((x) => <div key={x.t} style={{ ...miniCard(`${x.c}10`, `${x.c}30`), textAlign: 'center' }}><div style={{ fontSize: '11px', color: x.c, fontWeight: 'bold' }}>{x.t}</div><div style={{ fontSize: '10px', color: '#9ca3af' }}>{x.d}</div></div>)}
              </div>
            </div>
          </div>
        </Slide>

        {/* ===== 7-12. NOTATIONS ===== */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>📊 Asymptotic Notations</h2>
            <div style={under('#6366f1')}></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px' }}>
              {[
                { sym: 'O', name: 'Big O', bound: 'Upper Bound', meaning: 'Never slower than this', color: '#ef4444', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.4)' },
                { sym: 'Ω', name: 'Omega', bound: 'Lower Bound', meaning: 'Never faster than this', color: '#22d3ee', bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.4)' },
                { sym: 'Θ', name: 'Theta', bound: 'Tight Bound', meaning: 'Exactly this rate', color: '#22c55e', bg: 'rgba(34,197,94,0.1)', border: 'rgba(34,197,94,0.4)' },
              ].map((n) => (
                <div key={n.name} style={{ ...card(n.bg, n.border), textAlign: 'center' }}>
                  <div style={{ fontSize: '44px', fontWeight: 'bold', color: n.color, marginBottom: '4px' }}>{n.sym}</div>
                  <h3 style={{ fontSize: '17px', fontWeight: 'bold', color: 'white', marginBottom: '2px' }}>{n.name}</h3>
                  <div style={{ fontSize: '12px', color: n.color, marginBottom: '8px' }}>{n.bound}</div>
                  <div style={{ padding: '8px', background: `${n.color}15`, borderRadius: '6px' }}><p style={{ ...p, fontSize: '11px', fontStyle: 'italic' }}>"{n.meaning}"</p></div>
                </div>
              ))}
            </div>
          </div>
        </Slide>

        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🔴 Big O — Upper Bound</h2>
            <div style={under('#ef4444')}></div>
            <div style={grid2}>
              <div style={card('rgba(239,68,68,0.05)', 'rgba(239,68,68,0.3)')}>
                <h3 style={h3s('#ef4444')}>📐 Definition</h3>
                <div style={{ padding: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', fontFamily: 'monospace', fontSize: '11px', color: '#d1d5db', marginBottom: '10px' }}>O(f(n)) = {'{'} g(n) : ∃ c, n₀ {'>'} 0 s.t. 0 ≤ g(n) ≤ c·f(n) {'}'}</div>
                <div style={{ padding: '10px', background: 'rgba(239,68,68,0.1)', borderRadius: '6px' }}>
                  <h4 style={{ color: 'white', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>🚗 Analogy</h4>
                  <p style={{ ...p, fontSize: '11px' }}>A car's top speed is <strong style={{ color: '#ef4444' }}>O(n²)</strong> — it will <span style={{ color: '#ef4444' }}>never exceed</span> n² km/h.</p>
                </div>
              </div>
              <div>
                <h3 style={h3s('white')}>Common Complexities</h3>
                {[
                  { n: 'O(1)', ex: 'Array access', c: '#22c55e' },
                  { n: 'O(log n)', ex: 'Binary search', c: '#22d3ee' },
                  { n: 'O(n)', ex: 'Linear search', c: '#6366f1' },
                  { n: 'O(n log n)', ex: 'Merge sort', c: '#fbbf24' },
                  { n: 'O(n²)', ex: 'Bubble sort', c: '#f97316' },
                  { n: 'O(2ⁿ)', ex: 'Recursive fib', c: '#ef4444' },
                ].map((x) => (
                  <div key={x.n} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 10px', background: `${x.c}10`, border: `1px solid ${x.c}30`, borderRadius: '6px', marginBottom: '4px' }}>
                    <span style={{ fontFamily: 'monospace', fontWeight: 'bold', color: x.c, fontSize: '11px', width: '70px' }}>{x.n}</span>
                    <span style={{ color: '#d1d5db', fontSize: '11px' }}>{x.ex}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Slide>

        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>📈 Growth Rate Comparison</h2>
            <div style={under('#6366f1')}></div>
            <div style={card('rgba(31,41,55,0.5)', '#374151')}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '10px', color: '#9ca3af', marginBottom: '6px' }}>n = 16</div>
                  {[
                    { n: 'O(1)', val: '1', w: '1%', c: '#22c55e' },
                    { n: 'O(log n)', val: '4', w: '2%', c: '#22d3ee' },
                    { n: 'O(n)', val: '16', w: '5%', c: '#6366f1' },
                    { n: 'O(n log n)', val: '64', w: '15%', c: '#fbbf24' },
                    { n: 'O(n²)', val: '256', w: '60%', c: '#f97316' },
                    { n: 'O(2ⁿ)', val: '65536', w: '100%', c: '#ef4444' },
                  ].map((x) => (
                    <div key={x.n} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '5px' }}>
                      <span style={{ fontFamily: 'monospace', fontSize: '9px', color: x.c, width: '60px' }}>{x.n}</span>
                      <div style={{ flex: 1, background: '#1f2937', borderRadius: '3px', height: '14px' }}><div style={{ width: x.w, background: x.c, height: '14px', borderRadius: '3px', minWidth: '2px' }}></div></div>
                      <span style={{ fontSize: '9px', color: '#9ca3af', width: '40px', textAlign: 'right' }}>{x.val}</span>
                    </div>
                  ))}
                </div>
                <div style={card('rgba(251,191,36,0.1)', 'rgba(251,191,36,0.3)')}>
                  <h4 style={{ color: '#fbbf24', fontSize: '13px', fontWeight: 'bold', marginBottom: '6px' }}>⚡ Key Insight</h4>
                  <p style={{ ...p, fontSize: '12px' }}>At n=16:</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '6px 0' }}>
                    <li style={{ ...p, fontSize: '11px', marginBottom: '3px' }}>• O(n²) = <strong style={{ color: '#f97316' }}>256</strong></li>
                    <li style={{ ...p, fontSize: '11px', marginBottom: '3px' }}>• O(log n) = <strong style={{ color: '#22d3ee' }}>4</strong></li>
                  </ul>
                  <p style={{ ...p, fontSize: '12px' }}>= <strong style={{ color: 'white' }}>64x difference!</strong></p>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🔵 Omega (Ω) — Lower Bound</h2>
            <div style={under('#22d3ee')}></div>
            <div style={grid2}>
              <div style={card('rgba(34,211,238,0.05)', 'rgba(34,211,238,0.3)')}>
                <h3 style={h3s('#22d3ee')}>📐 Definition</h3>
                <div style={{ padding: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', fontFamily: 'monospace', fontSize: '11px', color: '#d1d5db', marginBottom: '10px' }}>Ω(f(n)) = {'{'} g(n) : ∃ c, n₀ {'>'} 0 s.t. g(n) ≥ c·f(n) {'}'}</div>
                <p style={p}>Describes the <strong style={{ color: '#22d3ee' }}>best case</strong> — minimum time an algorithm will take.</p>
              </div>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('white')}>Examples</h3>
                {[
                  { n: 'Ω(1)', ex: 'Array access (always constant)', c: '#22c55e' },
                  { n: 'Ω(n)', ex: 'Linear search (best: first element)', c: '#6366f1' },
                  { n: 'Ω(n log n)', ex: 'Merge sort (always)', c: '#fbbf24' },
                ].map((x) => (
                  <div key={x.n} style={{ display: 'flex', gap: '8px', padding: '6px 10px', background: `${x.c}10`, borderRadius: '6px', marginBottom: '5px' }}>
                    <span style={{ fontFamily: 'monospace', fontWeight: 'bold', color: x.c, fontSize: '11px', width: '70px' }}>{x.n}</span>
                    <span style={{ ...p, fontSize: '11px' }}>{x.ex}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Slide>

        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🟢 Theta (Θ) — Tight Bound</h2>
            <div style={under('#22c55e')}></div>
            <div style={grid2}>
              <div style={card('rgba(34,197,94,0.05)', 'rgba(34,197,94,0.3)')}>
                <h3 style={h3s('#22c55e')}>📐 Definition</h3>
                <div style={{ padding: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', fontFamily: 'monospace', fontSize: '11px', color: '#d1d5db', marginBottom: '10px' }}>Θ(f(n)) = O(f(n)) ∩ Ω(f(n))</div>
                <p style={p}>When <strong style={{ color: '#22c55e' }}>both upper and lower bounds</strong> are the same — a tight bound.</p>
              </div>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('white')}>When Can We Use Θ?</h3>
                {['Algorithm always takes same time', 'Merge sort: always Θ(n log n)', 'Array access: always Θ(1)', 'Bubble sort: not Θ(n²) — depends'].map((x, i) => (
                  <div key={i} style={{ ...p, fontSize: '11px', marginBottom: '6px', paddingLeft: '14px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#22c55e' }}>•</span> {x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Slide>

        {/* ===== 13-22. ARRAYS ===== */}
        <Stack>
          <ArraysOverview />
        </Stack>

        {/* 15. Array Properties */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>📋 Array Properties</h2>
            <div style={under('#22d3ee')}></div>
            <div style={grid2}>
              {[
                { t: '✅ Advantages', items: ['O(1) random access by index', 'Cache-friendly (contiguous memory)', 'Simple to implement', 'Memory efficient (no pointers)'], c: '#22c55e' },
                { t: '❌ Disadvantages', items: ['Fixed size (static arrays)', 'O(n) insertion/deletion', 'Wasted space if underutilized', 'No dynamic resizing'], c: '#ef4444' },
              ].map((x) => (
                <div key={x.t} style={card(`${x.c}10`, `${x.c}30`)}>
                  <h3 style={h3s(x.c)}>{x.t}</h3>
                  {x.items.map((item, i) => (
                    <div key={i} style={{ ...p, fontSize: '12px', marginBottom: '6px', paddingLeft: '12px' }}>{item}</div>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ ...card('rgba(251,191,36,0.1)', 'rgba(251,191,36,0.3)'), marginTop: '12px' }}>
              <h4 style={{ color: '#fbbf24', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>💡 Static vs Dynamic Arrays</h4>
              <p style={{ ...p, fontSize: '11px' }}><strong style={{ color: 'white' }}>Static:</strong> int arr[10] — fixed size at compile time. <strong style={{ color: 'white' }}>Dynamic:</strong> Python list, Java ArrayList — can grow/shrink.</p>
            </div>
          </div>
        </Slide>

        {/* 16. Row vs Column Major */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>📐 Row-Major vs Column-Major</h2>
            <div style={under('#a855f7')}></div>
            <div style={grid2}>
              <div style={card('rgba(168,85,247,0.05)', 'rgba(168,85,247,0.3)')}>
                <h3 style={h3s('#a855f7')}>Row-Major (C/C++)</h3>
                <p style={{ ...p, marginBottom: '8px' }}>Rows stored sequentially in memory.</p>
                {codeBlock(`A[2][3] = {{1,2,3},{4,5,6}}
Memory: 1 2 3 4 5 6
ADDR(A[i][j]) = BASE + (i*3 + j)*4`)}
              </div>
              <div style={card('rgba(236,72,153,0.05)', 'rgba(236,72,153,0.3)')}>
                <h3 style={h3s('#ec4899')}>Column-Major (Fortran)</h3>
                <p style={{ ...p, marginBottom: '8px' }}>Columns stored sequentially in memory.</p>
                {codeBlock(`A[2][3] = {{1,2,3},{4,5,6}}
Memory: 1 4 2 5 3 6
ADDR(A[i][j]) = BASE + (j*2 + i)*4`)}
              </div>
            </div>
          </div>
        </Slide>

        {/* 17. Array Operations Overview */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🔄 Array Operations</h2>
            <div style={under('#6366f1')}></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '10px' }}>
              {[
                { icon: '🔍', name: 'Traversal', desc: 'Visit every element', time: 'O(n)', c: '#22d3ee' },
                { icon: '➕', name: 'Insertion', desc: 'Add an element', time: 'O(n)', c: '#22c55e' },
                { icon: '🗑️', name: 'Deletion', desc: 'Remove an element', time: 'O(n)', c: '#ef4444' },
                { icon: '🔀', name: 'Merging', desc: 'Combine two arrays', time: 'O(n)', c: '#a855f7' },
              ].map((op) => (
                <div key={op.name} style={{ ...miniCard(`${op.c}10`, `${op.c}30`), textAlign: 'center' }}>
                  <div style={{ fontSize: '26px', marginBottom: '6px' }}>{op.icon}</div>
                  <h4 style={{ color: 'white', fontSize: '13px', fontWeight: 'bold', marginBottom: '3px' }}>{op.name}</h4>
                  <p style={{ color: '#9ca3af', fontSize: '10px', marginBottom: '3px' }}>{op.desc}</p>
                  <div style={{ fontFamily: 'monospace', color: op.c, fontSize: '10px' }}>{op.time}</div>
                </div>
              ))}
            </div>
          </div>
        </Slide>

        {/* 18. Traversal Concept */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🔍 Traversal — How It Works</h2>
            <div style={under('#22d3ee')}></div>
            <div style={grid2}>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#22d3ee')}>Steps</h3>
                {step(1, 'Start from the first element (index 0).')}
                {step(2, 'Access/process the current element.')}
                {step(3, 'Move to the next element (index+1).')}
                {step(4, 'Repeat until the last element.')}
                {step(5, 'All elements visited — traversal complete.')}
              </div>
              {codeBlock(`def traverse(arr):
    for i in range(len(arr)):
        print(arr[i])

# [10, 25, 30, 45, 50]
# Visit: 10→25→30→45→50

# Time: O(n) | Space: O(1)`)}
            </div>
          </div>
        </Slide>

        {/* 19. Traversal Viz */}
        <ArrayTraversal />

        {/* 20. Insertion Concept */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>➕ Insertion — How It Works</h2>
            <div style={under('#22c55e')}></div>
            <div style={grid2}>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#22c55e')}>Steps</h3>
                {step(1, 'Determine the position to insert.')}
                {step(2, 'Shift elements to the right from that position.')}
                {step(3, 'Place the new element at the position.')}
                {step(4, 'Increment array size.')}
                <div style={{ ...miniCard('rgba(251,191,36,0.1)', 'rgba(251,191,36,0.3)'), marginTop: '8px' }}>
                  <p style={{ color: '#fbbf24', fontSize: '10px' }}>⚠️ Inserting at end = O(1). Inserting at beginning = O(n).</p>
                </div>
              </div>
              {codeBlock(`def insert(arr, pos, val):
    arr.append(0)  # Increase size
    for i in range(len(arr)-1, pos, -1):
        arr[i] = arr[i-1]  # Shift right
    arr[pos] = val

# Insert 25 at pos 2:
# [10,20,30,40,50]
# → [10,20,25,30,40,50]

# Time: O(n) | Space: O(1)`)}
            </div>
          </div>
        </Slide>

        {/* 21. Insertion Viz */}
        <ArrayInsertViz />

        {/* 22. Deletion Concept */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🗑️ Deletion — How It Works</h2>
            <div style={under('#ef4444')}></div>
            <div style={grid2}>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#ef4444')}>Steps</h3>
                {step(1, 'Determine the position to delete.')}
                {step(2, 'Store the value to return (optional).')}
                {step(3, 'Shift elements to the left from that position.')}
                {step(4, 'Decrement array size.')}
                <div style={{ ...miniCard('rgba(251,191,36,0.1)', 'rgba(251,191,36,0.3)'), marginTop: '8px' }}>
                  <p style={{ color: '#fbbf24', fontSize: '10px' }}>⚠️ Deleting from end = O(1). Deleting from beginning = O(n).</p>
                </div>
              </div>
              {codeBlock(`def delete(arr, pos):
    val = arr[pos]
    for i in range(pos, len(arr)-1):
        arr[i] = arr[i+1]  # Shift left
    arr.pop()  # Reduce size
    return val

# Delete pos 2:
# [10,20,30,40,50]
# → [10,20,40,50]

# Time: O(n) | Space: O(1)`)}
            </div>
          </div>
        </Slide>

        {/* 23. Deletion Viz */}
        <ArrayDeleteViz />

        {/* 24. Merge Concept */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🔀 Merging — How It Works</h2>
            <div style={under('#a855f7')}></div>
            <div style={grid2}>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#a855f7')}>Steps</h3>
                {step(1, 'Create empty result array.')}
                {step(2, 'Compare first elements of both arrays.')}
                {step(3, 'Append the smaller element to result.')}
                {step(4, 'Advance the pointer of the array we took from.')}
                {step(5, 'Repeat until one array is exhausted.')}
                {step(6, 'Append remaining elements from the other array.')}
              </div>
              {codeBlock(`def merge(arr1, arr2):
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
# → [10,20,30,40,50,60]`)}
            </div>
          </div>
        </Slide>

        {/* 25. Merge Viz */}
        <ArrayMergeViz />

        {/* ===== 26-45. SORTING ===== */}
        {/* 26. Sorting Overview */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🔄 Sorting Algorithms</h2>
            <div style={under('#fbbf24')}></div>
            <div style={{ ...card('rgba(251,191,36,0.1)', 'rgba(251,191,36,0.3)'), marginBottom: '12px' }}>
              <p style={{ ...p, fontSize: '12px' }}>Sorting is a <strong style={{ color: '#fbbf24' }}>prerequisite</strong> for many algorithms (like binary search) and teaches: <strong style={{ color: 'white' }}>divide-and-conquer</strong>, <strong style={{ color: 'white' }}>recursion</strong>, and <strong style={{ color: 'white' }}>algorithm analysis</strong>.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
              {[
                { icon: '🫧', name: 'Bubble Sort', desc: 'Swap adjacent elements', best: 'O(n)', worst: 'O(n²)', c: '#3b82f6' },
                { icon: '🃏', name: 'Insertion Sort', desc: 'Build sorted one by one', best: 'O(n)', worst: 'O(n²)', c: '#22c55e' },
                { icon: '🔍', name: 'Selection Sort', desc: 'Find min, place at start', best: 'O(n²)', worst: 'O(n²)', c: '#a855f7' },
              ].map((x) => (
                <div key={x.name} style={{ ...card(`${x.c}10`, `${x.c}30`) }}>
                  <div style={{ fontSize: '30px', marginBottom: '6px' }}>{x.icon}</div>
                  <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: 'white', marginBottom: '4px' }}>{x.name}</h3>
                  <p style={{ ...p, fontSize: '10px', marginBottom: '6px' }}>{x.desc}</p>
                  <div style={{ fontSize: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#9ca3af' }}>Best:</span><span style={{ color: '#22c55e', fontFamily: 'monospace' }}>{x.best}</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#9ca3af' }}>Worst:</span><span style={{ color: '#f87171', fontFamily: 'monospace' }}>{x.worst}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Slide>

        {/* 27. Sorting Classification */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>📊 Sorting Classification</h2>
            <div style={under('#fbbf24')}></div>
            <div style={grid2}>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#fbbf24')}>By Method</h3>
                {[
                  { t: 'Exchange', ex: 'Bubble Sort, Quick Sort', c: '#3b82f6' },
                  { t: 'Insertion', ex: 'Insertion Sort, Shell Sort', c: '#22c55e' },
                  { t: 'Selection', ex: 'Selection Sort, Heap Sort', c: '#a855f7' },
                  { t: 'Merge', ex: 'Merge Sort', c: '#ec4899' },
                ].map((x) => (
                  <div key={x.t} style={{ display: 'flex', gap: '8px', padding: '6px 10px', background: `${x.c}10`, borderRadius: '6px', marginBottom: '5px' }}>
                    <span style={{ color: x.c, fontWeight: 'bold', fontSize: '11px', width: '70px' }}>{x.t}</span>
                    <span style={{ ...p, fontSize: '11px' }}>{x.ex}</span>
                  </div>
                ))}
              </div>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#fbbf24')}>By Stability</h3>
                <div style={miniCard('rgba(34,197,94,0.1)', 'rgba(34,197,94,0.3)')}>✅ Stable: Bubble, Insertion, Merge</div>
                <div style={{ ...miniCard('rgba(239,68,68,0.1)', 'rgba(239,68,68,0.3)'), marginTop: '6px' }}>❌ Unstable: Selection, Quick</div>
                <p style={{ ...p, fontSize: '10px', marginTop: '8px' }}><strong style={{ color: 'white' }}>Stable</strong> = equal elements maintain their relative order.</p>
              </div>
            </div>
          </div>
        </Slide>

        {/* 28. Bubble Sort Concept */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🫧 Bubble Sort — How It Works</h2>
            <div style={under('#3b82f6')}></div>
            <div style={grid2}>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#3b82f6')}>Steps</h3>
                {step(1, 'Compare adjacent elements from the start.')}
                {step(2, 'If left > right, swap them.')}
                {step(3, 'Move to next pair, repeat until end.')}
                {step(4, 'After pass 1, largest is at the end.')}
                {step(5, 'Repeat n-1 times until sorted.')}
                <div style={{ ...miniCard('rgba(59,130,246,0.1)', 'rgba(59,130,246,0.3)'), marginTop: '8px' }}>
                  <p style={{ ...p, fontSize: '10px' }}>🫧 Like bubbles rising — largest elements "bubble up" to the end.</p>
                </div>
              </div>
              {codeBlock(`def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr`)}
            </div>
          </div>
        </Slide>

        {/* 29. Bubble Sort Dry Run */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🫧 Bubble Sort — Dry Run</h2>
            <div style={under('#3b82f6')}></div>
            <div style={grid2}>
              <div>
                <div style={{ ...miniCard('rgba(59,130,246,0.1)', 'rgba(59,130,246,0.3)'), marginBottom: '8px' }}>
                  <h4 style={{ color: '#3b82f6', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Input: [5, 3, 8, 1]</h4>
                </div>
                {[
                  { pass: 'Pass 1', steps: ['5>3? Yes → swap', '5>8? No', '8>1? Yes → swap'], result: '[3, 5, 1, 8]' },
                  { pass: 'Pass 2', steps: ['3>5? No', '5>1? Yes → swap'], result: '[3, 1, 5, 8]' },
                  { pass: 'Pass 3', steps: ['3>1? Yes → swap'], result: '[1, 3, 5, 8] ✓' },
                ].map((passData) => (
                  <div key={passData.pass} style={{ ...card('rgba(31,41,55,0.5)', '#374151'), marginBottom: '6px', padding: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '11px' }}>{passData.pass}</span>
                      <span style={{ color: '#22c55e', fontFamily: 'monospace', fontSize: '11px' }}>{passData.result}</span>
                    </div>
                    {passData.steps.map((s, i) => <div key={i} style={{ ...p, fontSize: '10px', color: '#9ca3af', paddingLeft: '12px' }}>→ {s}</div>)}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ ...card('rgba(251,191,36,0.1)', 'rgba(251,191,36,0.3)') }}>
                  <h4 style={{ color: '#fbbf24', fontSize: '12px', fontWeight: 'bold', marginBottom: '6px' }}>Complexity</h4>
                  <div style={{ fontSize: '11px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #374151' }}><span style={{ color: '#9ca3af' }}>Best:</span><span style={{ color: '#22c55e', fontFamily: 'monospace' }}>O(n) — already sorted</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #374151' }}><span style={{ color: '#9ca3af' }}>Average:</span><span style={{ color: '#fbbf24', fontFamily: 'monospace' }}>O(n²)</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #374151' }}><span style={{ color: '#9ca3af' }}>Worst:</span><span style={{ color: '#f87171', fontFamily: 'monospace' }}>O(n²)</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}><span style={{ color: '#9ca3af' }}>Space:</span><span style={{ color: '#22c55e', fontFamily: 'monospace' }}>O(1)</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* 30. Bubble Sort Viz */}
        <BubbleSortViz />

        {/* 31. Insertion Sort Concept */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🃏 Insertion Sort — How It Works</h2>
            <div style={under('#22c55e')}></div>
            <div style={grid2}>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#22c55e')}>🃏 Card Analogy</h3>
                <p style={{ ...p, fontSize: '11px', marginBottom: '8px' }}>Like sorting cards in your hand: pick up a card, insert it into the correct position.</p>
                <h3 style={h3s('#22c55e')}>Steps</h3>
                {step(1, 'Start from index 1 as "key".')}
                {step(2, 'Compare key with elements to the left.')}
                {step(3, 'Shift larger elements right.')}
                {step(4, 'Insert key into correct position.')}
              </div>
              {codeBlock(`def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr`)}
            </div>
          </div>
        </Slide>

        {/* 32. Insertion Sort Dry Run */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🃏 Insertion Sort — Dry Run</h2>
            <div style={under('#22c55e')}></div>
            <div style={grid2}>
              <div>
                <div style={{ ...miniCard('rgba(34,197,94,0.1)', 'rgba(34,197,94,0.3)'), marginBottom: '8px' }}>
                  <h4 style={{ color: '#22c55e', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Input: [5, 3, 8, 1]</h4>
                </div>
                {[
                  { step: 'i=1, key=3', desc: 'Compare 3<5, shift 5 right', result: '[3, 5, 8, 1]' },
                  { step: 'i=2, key=8', desc: '8>5, no shift needed', result: '[3, 5, 8, 1]' },
                  { step: 'i=3, key=1', desc: 'Shift 8,5,3 right, insert 1', result: '[1, 3, 5, 8] ✓' },
                ].map((s) => (
                  <div key={s.step} style={{ ...card('rgba(31,41,55,0.5)', '#374151'), marginBottom: '6px', padding: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ color: '#22c55e', fontWeight: 'bold', fontSize: '11px' }}>{s.step}</span>
                      <span style={{ color: '#fbbf24', fontSize: '10px' }}>{s.desc}</span>
                    </div>
                    <div style={{ color: '#22c55e', fontFamily: 'monospace', fontSize: '11px' }}>{s.result}</div>
                  </div>
                ))}
              </div>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h4 style={{ color: '#fbbf24', fontSize: '12px', fontWeight: 'bold', marginBottom: '6px' }}>Complexity</h4>
                <div style={{ fontSize: '11px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #374151' }}><span style={{ color: '#9ca3af' }}>Best:</span><span style={{ color: '#22c55e', fontFamily: 'monospace' }}>O(n) — sorted</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #374151' }}><span style={{ color: '#9ca3af' }}>Average:</span><span style={{ color: '#fbbf24', fontFamily: 'monospace' }}>O(n²)</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #374151' }}><span style={{ color: '#9ca3af' }}>Worst:</span><span style={{ color: '#f87171', fontFamily: 'monospace' }}>O(n²)</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}><span style={{ color: '#9ca3af' }}>Space:</span><span style={{ color: '#22c55e', fontFamily: 'monospace' }}>O(1)</span></div>
                </div>
                <div style={{ ...miniCard('rgba(34,197,94,0.1)', 'rgba(34,197,94,0.3)'), marginTop: '8px' }}>
                  <p style={{ ...p, fontSize: '10px' }}>💡 Best for small or nearly sorted arrays. Used in Python's TimSort.</p>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* 33. Insertion Sort Viz */}
        <InsertionSortViz />

        {/* 34. Selection Sort Concept */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🔍 Selection Sort — How It Works</h2>
            <div style={under('#a855f7')}></div>
            <div style={grid2}>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#a855f7')}>Steps</h3>
                {step(1, 'Divide into sorted (left) and unsorted (right).')}
                {step(2, 'Find the minimum in the unsorted part.')}
                {step(3, 'Swap it with the first unsorted element.')}
                {step(4, 'Move boundary one step right.')}
                {step(5, 'Repeat until fully sorted.')}
                <div style={{ ...miniCard('rgba(251,191,36,0.1)', 'rgba(251,191,36,0.3)'), marginTop: '8px' }}>
                  <p style={{ color: '#fbbf24', fontSize: '10px' }}>⚠️ Always O(n²) comparisons. Not adaptive.</p>
                </div>
              </div>
              {codeBlock(`def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr`)}
            </div>
          </div>
        </Slide>

        {/* 35. Selection Sort Dry Run */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🔍 Selection Sort — Dry Run</h2>
            <div style={under('#a855f7')}></div>
            <div style={grid2}>
              <div>
                <div style={{ ...miniCard('rgba(168,85,247,0.1)', 'rgba(168,85,247,0.3)'), marginBottom: '8px' }}>
                  <h4 style={{ color: '#a855f7', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Input: [5, 3, 8, 1]</h4>
                </div>
                {[
                  { step: 'i=0', desc: 'Find min in [5,3,8,1] → 1', swap: 'Swap 5↔1', result: '[1, 3, 8, 5]' },
                  { step: 'i=1', desc: 'Find min in [3,8,5] → 3', swap: 'Already min', result: '[1, 3, 8, 5]' },
                  { step: 'i=2', desc: 'Find min in [8,5] → 5', swap: 'Swap 8↔5', result: '[1, 3, 5, 8] ✓' },
                ].map((s) => (
                  <div key={s.step} style={{ ...card('rgba(31,41,55,0.5)', '#374151'), marginBottom: '6px', padding: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                      <span style={{ color: '#a855f7', fontWeight: 'bold', fontSize: '11px' }}>{s.step}</span>
                      <span style={{ color: '#9ca3af', fontSize: '10px' }}>{s.desc}</span>
                    </div>
                    <div style={{ fontSize: '10px', color: '#fbbf24' }}>{s.swap}</div>
                    <div style={{ color: '#a855f7', fontFamily: 'monospace', fontSize: '11px' }}>{s.result}</div>
                  </div>
                ))}
              </div>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h4 style={{ color: '#fbbf24', fontSize: '12px', fontWeight: 'bold', marginBottom: '6px' }}>Complexity</h4>
                <div style={{ fontSize: '11px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #374151' }}><span style={{ color: '#9ca3af' }}>Best:</span><span style={{ color: '#fbbf24', fontFamily: 'monospace' }}>O(n²)</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #374151' }}><span style={{ color: '#9ca3af' }}>Average:</span><span style={{ color: '#fbbf24', fontFamily: 'monospace' }}>O(n²)</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #374151' }}><span style={{ color: '#9ca3af' }}>Worst:</span><span style={{ color: '#f87171', fontFamily: 'monospace' }}>O(n²)</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}><span style={{ color: '#9ca3af' }}>Space:</span><span style={{ color: '#22c55e', fontFamily: 'monospace' }}>O(1)</span></div>
                </div>
                <div style={{ ...miniCard('rgba(168,85,247,0.1)', 'rgba(168,85,247,0.3)'), marginTop: '8px' }}>
                  <p style={{ ...p, fontSize: '10px' }}>💡 Minimizes swaps — good when writes are expensive (e.g., flash memory).</p>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* 36. Selection Sort Viz */}
        <SelectionSortViz />

        {/* 37. Merge Sort Concept */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🔀 Merge Sort — How It Works</h2>
            <div style={under('#ec4899')}></div>
            <div style={grid2}>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#ec4899')}>Steps</h3>
                {step(1, 'Divide array into two halves.')}
                {step(2, 'Recursively sort each half.')}
                {step(3, 'Merge the two sorted halves.')}
                {step(4, 'Compare elements from both halves.')}
                {step(5, 'Place smaller element first.')}
                {step(6, 'Repeat until both halves are merged.')}
                <div style={{ ...miniCard('rgba(236,72,153,0.1)', 'rgba(236,72,153,0.3)'), marginTop: '8px' }}>
                  <p style={{ ...p, fontSize: '10px' }}>🔀 Divide-and-conquer: split, sort, merge. Always O(n log n)!</p>
                </div>
              </div>
              {codeBlock(`def merge_sort(arr):
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

# Time: O(n log n) | Space: O(n)`)}
            </div>
          </div>
        </Slide>

        {/* 38. Merge Sort Dry Run */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🔀 Merge Sort — Dry Run</h2>
            <div style={under('#ec4899')}></div>
            <div style={grid2}>
              <div>
                <div style={{ ...miniCard('rgba(236,72,153,0.1)', 'rgba(236,72,153,0.3)'), marginBottom: '8px' }}>
                  <h4 style={{ color: '#ec4899', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Input: [38, 27, 43, 3, 9, 82, 10]</h4>
                </div>
                {[
                  { step: 'Split', desc: '[38,27,43,3] + [9,82,10]', result: 'Divide into halves' },
                  { step: 'Split L', desc: '[38,27] + [43,3]', result: 'Left half split' },
                  { step: 'Split L²', desc: '[38] [27]', result: 'Single elements' },
                  { step: 'Merge L²', desc: '27 < 38 → [27, 38]', result: 'Left sorted' },
                  { step: 'Split R²', desc: '[43] [3]', result: 'Single elements' },
                  { step: 'Merge R²', desc: '3 < 43 → [3, 43]', result: 'Right sorted' },
                  { step: 'Merge L', desc: '[27,38] + [3,43]', result: '[3, 27, 38, 43]' },
                  { step: 'Merge R', desc: '[9] + [82,10]', result: '[9, 10, 82]' },
                  { step: 'Final', desc: '[3,27,38,43] + [9,10,82]', result: '[3, 9, 10, 27, 38, 43, 82] ✓' },
                ].map((s) => (
                  <div key={s.step} style={{ ...card('rgba(31,41,55,0.5)', '#374151'), marginBottom: '4px', padding: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                      <span style={{ color: '#ec4899', fontWeight: 'bold', fontSize: '11px' }}>{s.step}</span>
                      <span style={{ color: '#9ca3af', fontSize: '10px' }}>{s.desc}</span>
                    </div>
                    <div style={{ color: '#22c55e', fontFamily: 'monospace', fontSize: '10px' }}>{s.result}</div>
                  </div>
                ))}
              </div>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h4 style={{ color: '#fbbf24', fontSize: '12px', fontWeight: 'bold', marginBottom: '6px' }}>Complexity</h4>
                <div style={{ fontSize: '11px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #374151' }}><span style={{ color: '#9ca3af' }}>Best:</span><span style={{ color: '#22c55e', fontFamily: 'monospace' }}>O(n log n)</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #374151' }}><span style={{ color: '#9ca3af' }}>Average:</span><span style={{ color: '#22c55e', fontFamily: 'monospace' }}>O(n log n)</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #374151' }}><span style={{ color: '#9ca3af' }}>Worst:</span><span style={{ color: '#22c55e', fontFamily: 'monospace' }}>O(n log n)</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}><span style={{ color: '#9ca3af' }}>Space:</span><span style={{ color: '#fbbf24', fontFamily: 'monospace' }}>O(n)</span></div>
                </div>
                <div style={{ ...miniCard('rgba(236,72,153,0.1)', 'rgba(236,72,153,0.3)'), marginTop: '8px' }}>
                  <p style={{ ...p, fontSize: '10px' }}>💡 Stable sort. Used in Java's Arrays.sort() for objects and Python's TimSort for merging runs.</p>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* 39. Merge Sort Viz */}
        <MergeSortViz />

        {/* 40. Sorting Comparison */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>📊 Sorting Comparison</h2>
            <div style={under('#fbbf24')}></div>
            <div style={{ ...card('rgba(251,191,36,0.05)', 'rgba(251,191,36,0.3)'), marginBottom: '12px', padding: '0', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead><tr style={{ background: 'linear-gradient(90deg, #1f2937, #374151)' }}>
                  {['Algorithm', 'Best', 'Average', 'Worst', 'Space', 'Stable', 'Adaptive'].map((h) => <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#fbbf24', borderBottom: '2px solid #fbbf24', fontWeight: 'bold', fontSize: '12px' }}>{h}</th>)}
                </tr></thead>
                <tbody>
                  {[
                    { name: 'Bubble Sort', best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: 'Yes', adaptive: 'Yes', bc: '#22c55e', ac: '#fbbf24', wc: '#f87171', bg: 'rgba(59,130,246,0.05)' },
                    { name: 'Insertion Sort', best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: 'Yes', adaptive: 'Yes', bc: '#22c55e', ac: '#fbbf24', wc: '#f87171', bg: 'rgba(34,197,94,0.05)' },
                    { name: 'Selection Sort', best: 'O(n²)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: 'No', adaptive: 'No', bc: '#fbbf24', ac: '#fbbf24', wc: '#f87171', bg: 'rgba(168,85,247,0.05)' },
                    { name: 'Merge Sort', best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n log n)', space: 'O(n)', stable: 'Yes', adaptive: 'No', bc: '#22c55e', ac: '#22c55e', wc: '#22c55e', bg: 'rgba(236,72,153,0.05)' },
                  ].map((r) => (
                    <tr key={r.name} style={{ borderBottom: '1px solid #374151', background: r.bg }}>
                      <td style={{ padding: '10px 12px', color: 'white', fontWeight: 'bold', fontSize: '12px' }}>{r.name}</td>
                      <td style={{ padding: '10px 12px', fontFamily: 'monospace', color: r.bc, fontSize: '12px', fontWeight: 'bold' }}>{r.best}</td>
                      <td style={{ padding: '10px 12px', fontFamily: 'monospace', color: r.ac, fontSize: '12px' }}>{r.avg}</td>
                      <td style={{ padding: '10px 12px', fontFamily: 'monospace', color: r.wc, fontSize: '12px' }}>{r.worst}</td>
                      <td style={{ padding: '10px 12px', fontFamily: 'monospace', color: '#22c55e', fontSize: '12px' }}>{r.space}</td>
                      <td style={{ padding: '10px 12px', color: r.stable === 'Yes' ? '#22c55e' : '#f87171', fontWeight: 'bold', fontSize: '12px' }}>{r.stable}</td>
                      <td style={{ padding: '10px 12px', color: r.adaptive === 'Yes' ? '#22c55e' : '#f87171', fontWeight: 'bold', fontSize: '12px' }}>{r.adaptive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '8px' }}>
              {[
                { t: '🫧 Bubble?', d: 'Nearly sorted data, minimal code.', c: '#3b82f6' },
                { t: '🃏 Insertion?', d: 'Small arrays (n<50), nearly sorted.', c: '#22c55e' },
                { t: '🔍 Selection?', d: 'Minimize swaps (write-heavy).', c: '#a855f7' },
                { t: '🔀 Merge?', d: 'Guaranteed O(n log n), stable sort.', c: '#ec4899' },
              ].map((x) => <div key={x.t} style={{ ...miniCard(`${x.c}10`, `${x.c}30`) }}><h4 style={{ color: x.c, fontSize: '11px', fontWeight: 'bold', marginBottom: '2px' }}>{x.t}</h4><p style={{ color: '#9ca3af', fontSize: '10px' }}>{x.d}</p></div>)}
            </div>
          </div>
        </Slide>

        {/* 41-55. SEARCHING ===== */}
        {/* 41. Searching Overview */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🔎 Searching Algorithms</h2>
            <div style={under('#22d3ee')}></div>
            <div style={{ ...card('rgba(34,211,238,0.1)', 'rgba(34,211,238,0.3)'), marginBottom: '14px' }}>
              <p style={{ ...p, fontSize: '12px' }}>Finding a specific element in a collection — from contacts to files to databases.</p>
            </div>
            <div style={grid2}>
              {[
                { icon: '🔎', name: 'Linear Search', desc: 'Check each element one by one', works: 'Works on unsorted', time: 'O(n)', c: '#22d3ee' },
                { icon: '⚡', name: 'Binary Search', desc: 'Eliminate half each step', works: 'Requires sorted array', time: 'O(log n)', c: '#22c55e' },
              ].map((x) => (
                <div key={x.name} style={{ ...card(`${x.c}10`, `${x.c}30`) }}>
                  <div style={{ fontSize: '28px', marginBottom: '6px' }}>{x.icon}</div>
                  <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: 'white', marginBottom: '6px' }}>{x.name}</h3>
                  <p style={{ ...p, fontSize: '11px', marginBottom: '6px' }}>{x.desc}</p>
                  <div style={{ padding: '6px', background: 'rgba(0,0,0,0.3)', borderRadius: '4px', fontFamily: 'monospace', color: x.c, fontSize: '11px' }}>{x.works} | {x.time}</div>
                </div>
              ))}
            </div>
          </div>
        </Slide>

        {/* 42. Linear Search Concept */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🔎 Linear Search — How It Works</h2>
            <div style={under('#22d3ee')}></div>
            <div style={grid2}>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#22d3ee')}>Steps</h3>
                {step(1, 'Start from the first element (index 0).')}
                {step(2, 'Compare current element with target.')}
                {step(3, 'If match → return index (found!).')}
                {step(4, 'If not → move to next element.')}
                {step(5, 'If end reached → return -1 (not found).')}
              </div>
              {codeBlock(`def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i   # Found!
    return -1          # Not found

# Find 45 in [10,25,30,45,50]
# 10==45? No → 25==45? No
# 30==45? No → 45==45? Yes! → 3

# Time: O(n) | Space: O(1)`)}
            </div>
          </div>
        </Slide>

        {/* 43. Linear Search Dry Run */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🔎 Linear Search — Dry Run</h2>
            <div style={under('#22d3ee')}></div>
            <div style={grid2}>
              <div>
                <div style={{ ...miniCard('rgba(34,211,238,0.1)', 'rgba(34,211,238,0.3)'), marginBottom: '8px' }}>
                  <h4 style={{ color: '#22d3ee', fontSize: '12px', fontWeight: 'bold' }}>Find 45 in [10, 25, 30, 45, 50]</h4>
                </div>
                {[
                  { i: 0, val: 10, found: false },
                  { i: 1, val: 25, found: false },
                  { i: 2, val: 30, found: false },
                  { i: 3, val: 45, found: true },
                ].map((s) => (
                  <div key={s.i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 10px', background: s.found ? 'rgba(34,197,94,0.15)' : 'rgba(31,41,55,0.5)', border: `1px solid ${s.found ? '#22c55e' : '#374151'}`, borderRadius: '6px', marginBottom: '4px' }}>
                    <span style={{ color: '#9ca3af', fontSize: '10px', width: '50px' }}>i={s.i}</span>
                    <span style={{ color: 'white', fontFamily: 'monospace', fontSize: '11px' }}>{s.val}</span>
                    <span style={{ fontSize: '10px' }}>{s.found ? '✅ Match!' : '❌ ≠ 45'}</span>
                  </div>
                ))}
              </div>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h4 style={{ color: '#fbbf24', fontSize: '12px', fontWeight: 'bold', marginBottom: '6px' }}>Analysis</h4>
                <div style={{ fontSize: '11px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #374151' }}><span style={{ color: '#9ca3af' }}>Best:</span><span style={{ color: '#22c55e', fontFamily: 'monospace' }}>O(1) — first element</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #374151' }}><span style={{ color: '#9ca3af' }}>Average:</span><span style={{ color: '#fbbf24', fontFamily: 'monospace' }}>O(n/2) = O(n)</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}><span style={{ color: '#9ca3af' }}>Worst:</span><span style={{ color: '#f87171', fontFamily: 'monospace' }}>O(n) — last or not found</span></div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* 44. Linear Search Viz */}
        <LinearSearchViz />

        {/* 45. Binary Search Concept */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>⚡ Binary Search — How It Works</h2>
            <div style={under('#22c55e')}></div>
            <div style={grid2}>
              <div>
                <div style={{ ...card('rgba(34,197,94,0.05)', 'rgba(34,197,94,0.3)'), marginBottom: '10px' }}>
                  <h3 style={h3s('#22c55e')}>The Power of Halving</h3>
                  <div style={{ ...miniCard('rgba(0,0,0,0.3)', 'transparent'), fontSize: '11px', color: '#d1d5db' }}>n=1,000,000 → Linear: <span style={{ color: '#f87171' }}>1,000,000</span> | Binary: <span style={{ color: '#22c55e' }}>20</span></div>
                </div>
                <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                  <h3 style={h3s('#22c55e')}>Steps</h3>
                  {step(1, 'Set left=0, right=n-1.')}
                  {step(2, 'Calculate mid = (left+right)/2.')}
                  {step(3, 'If arr[mid]==target → Found!')}
                  {step(4, 'If arr[mid]<target → search right half.')}
                  {step(5, 'If arr[mid]>target → search left half.')}
                </div>
              </div>
              {codeBlock(`def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`)}
            </div>
          </div>
        </Slide>

        {/* 46. Binary Search Dry Run */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>⚡ Binary Search — Dry Run</h2>
            <div style={under('#22c55e')}></div>
            <div style={grid2}>
              <div>
                <div style={{ ...miniCard('rgba(34,197,94,0.1)', 'rgba(34,197,94,0.3)'), marginBottom: '8px' }}>
                  <h4 style={{ color: '#22c55e', fontSize: '12px', fontWeight: 'bold' }}>Find 45 in [10,25,30,45,50,65,70]</h4>
                </div>
                {[
                  { step: 'Step 1', left: 0, right: 6, mid: 3, val: 45, action: 'arr[3]=45 == 45 → Found!' },
                ].map((s) => (
                  <div key={s.step} style={{ ...card('rgba(34,197,94,0.1)', 'rgba(34,197,94,0.3)'), marginBottom: '6px', padding: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ color: '#22c55e', fontWeight: 'bold', fontSize: '11px' }}>{s.step}</span>
                      <span style={{ color: '#9ca3af', fontSize: '10px' }}>left={s.left}, right={s.right}, mid={s.mid}</span>
                    </div>
                    <div style={{ color: '#22c55e', fontFamily: 'monospace', fontSize: '11px' }}>{s.action}</div>
                  </div>
                ))}
                <div style={{ ...card('rgba(31,41,55,0.5)', '#374151'), marginTop: '4px' }}>
                  <p style={{ ...p, fontSize: '10px' }}>Found in <strong style={{ color: '#22c55e' }}>1 comparison</strong> vs <strong style={{ color: '#f87171' }}>4 for linear search</strong>!</p>
                </div>
              </div>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h4 style={{ color: '#fbbf24', fontSize: '12px', fontWeight: 'bold', marginBottom: '6px' }}>Complexity</h4>
                <div style={{ fontSize: '11px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #374151' }}><span style={{ color: '#9ca3af' }}>Best:</span><span style={{ color: '#22c55e', fontFamily: 'monospace' }}>O(1) — mid element</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #374151' }}><span style={{ color: '#9ca3af' }}>Average:</span><span style={{ color: '#22c55e', fontFamily: 'monospace' }}>O(log n)</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}><span style={{ color: '#9ca3af' }}>Worst:</span><span style={{ color: '#22c55e', fontFamily: 'monospace' }}>O(log n)</span></div>
                </div>
                <div style={{ ...miniCard('rgba(34,197,94,0.1)', 'rgba(34,197,94,0.3)'), marginTop: '8px' }}>
                  <p style={{ ...p, fontSize: '10px' }}>💡 Each step halves the search space. 1M items → only 20 steps!</p>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* 47. Binary Search Viz */}
        <BinarySearchViz />

        {/* 48. Searching Comparison */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>📊 Searching Comparison</h2>
            <div style={under('#22d3ee')}></div>
            <div style={{ ...card('rgba(34,211,238,0.05)', 'rgba(34,211,238,0.3)'), marginBottom: '12px', padding: '0', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead><tr style={{ background: 'linear-gradient(90deg, #1f2937, #374151)' }}>
                  {['Algorithm', 'Best', 'Average', 'Worst', 'Space', 'Requires Sorted?', 'Use Case'].map((h) => <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#22d3ee', borderBottom: '2px solid #22d3ee', fontWeight: 'bold', fontSize: '12px' }}>{h}</th>)}
                </tr></thead>
                <tbody>
                  {[
                    { name: 'Linear Search', best: 'O(1)', avg: 'O(n)', worst: 'O(n)', space: 'O(1)', sorted: 'No', use: 'Unsorted data', bc: '#22c55e', ac: '#fbbf24', wc: '#f87171', bg: 'rgba(34,211,238,0.05)' },
                    { name: 'Binary Search', best: 'O(1)', avg: 'O(log n)', worst: 'O(log n)', space: 'O(1)', sorted: 'Yes', use: 'Sorted data', bc: '#22c55e', ac: '#22c55e', wc: '#22c55e', bg: 'rgba(34,197,94,0.05)' },
                  ].map((r) => (
                    <tr key={r.name} style={{ borderBottom: '1px solid #374151', background: r.bg }}>
                      <td style={{ padding: '10px 12px', color: 'white', fontWeight: 'bold', fontSize: '12px' }}>{r.name}</td>
                      <td style={{ padding: '10px 12px', fontFamily: 'monospace', color: r.bc, fontSize: '12px', fontWeight: 'bold' }}>{r.best}</td>
                      <td style={{ padding: '10px 12px', fontFamily: 'monospace', color: r.ac, fontSize: '12px' }}>{r.avg}</td>
                      <td style={{ padding: '10px 12px', fontFamily: 'monospace', color: r.wc, fontSize: '12px' }}>{r.worst}</td>
                      <td style={{ padding: '10px 12px', fontFamily: 'monospace', color: '#22c55e', fontSize: '12px' }}>{r.space}</td>
                      <td style={{ padding: '10px 12px', color: r.sorted === 'Yes' ? '#22c55e' : '#f87171', fontWeight: 'bold', fontSize: '12px' }}>{r.sorted}</td>
                      <td style={{ padding: '10px 12px', color: '#9ca3af', fontSize: '12px' }}>{r.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={card('rgba(251,191,36,0.1)', 'rgba(251,191,36,0.3)')}>
              <h4 style={{ color: '#fbbf24', fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>💡 Decision Guide</h4>
              <p style={{ ...p, fontSize: '12px' }}>Data is <strong style={{ color: '#22d3ee' }}>unsorted</strong> → Linear Search. Data is <strong style={{ color: '#22c55e' }}>sorted</strong> → Binary Search. Binary is exponentially faster for large datasets.</p>
            </div>
          </div>
        </Slide>

        {/* ===== 49-68. SUMMARY & EXTRA ===== */}
        {/* 49. Key Concepts */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>📊 Key Concepts Recap</h2>
            <div style={under('#6366f1')}></div>
            <div style={grid2}>
              <div>
                {[
                  { icon: '⏱️', t: 'Complexity Analysis', d: 'Big O (upper), Omega (lower), Theta (tight)', c: '#6366f1' },
                  { icon: '📦', t: 'Arrays', d: 'Contiguous memory, O(1) access, O(n) insert/delete', c: '#22d3ee' },
                  { icon: '🔄', t: 'Sorting', d: 'Bubble, Insertion, Selection — all O(n²)', c: '#fbbf24' },
                  { icon: '🔎', t: 'Searching', d: 'Linear O(n) vs Binary O(log n)', c: '#22c55e' },
                ].map((x) => (
                  <div key={x.t} style={{ ...card(`${x.c}10`, `${x.c}30`), marginBottom: '8px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ fontSize: '22px' }}>{x.icon}</span>
                    <div>
                      <h4 style={{ color: 'white', fontSize: '13px', fontWeight: 'bold' }}>{x.t}</h4>
                      <p style={{ color: '#9ca3af', fontSize: '10px', margin: 0 }}>{x.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ ...card('rgba(99,102,241,0.1)', 'rgba(99,102,241,0.3)'), marginBottom: '10px' }}>
                  <h4 style={{ color: 'white', fontSize: '12px', fontWeight: 'bold', marginBottom: '6px' }}>🚀 Coming Next</h4>
                  <p style={{ color: '#9ca3af', fontSize: '11px' }}>Linked Lists — A more flexible data structure!</p>
                </div>
                <div style={{ ...card('rgba(31,41,55,0.5)', '#374151') }}>
                  <h4 style={{ color: 'white', fontSize: '12px', fontWeight: 'bold', marginBottom: '6px' }}>🎯 Practice</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '10px' }}>
                    {['Bubble sort with early exit', 'Compare on nearly sorted data', 'Search in rotated sorted array', 'Find first/last with binary search'].map((p, i) => (
                      <li key={i} style={{ color: '#d1d5db', marginBottom: '4px', paddingLeft: '12px', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: '#6366f1' }}>→</span> {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* 50. Cheat Sheet */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>📋 Complexity Cheat Sheet</h2>
            <div style={under('#fbbf24')}></div>
            <div style={{ ...card('rgba(251,191,36,0.05)', 'rgba(251,191,36,0.3)', ), padding: '0', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead><tr style={{ background: 'linear-gradient(90deg, #1f2937, #374151)' }}>
                  {['Operation', 'Array', 'Bubble', 'Insertion', 'Selection', 'Linear', 'Binary'].map((h) => <th key={h} style={{ padding: '10px 10px', textAlign: 'center', color: '#fbbf24', borderBottom: '2px solid #fbbf24', fontWeight: 'bold', fontSize: '12px' }}>{h}</th>)}
                </tr></thead>
                <tbody>
                  {[
                    { op: 'Access', arr: { v: 'O(1)', c: '#22c55e' }, bub: '-', ins: '-', sel: '-', lin: '-', bin: '-' },
                    { op: 'Search', arr: { v: 'O(n)', c: '#f87171' }, bub: '-', ins: '-', sel: '-', lin: { v: 'O(n)', c: '#fbbf24' }, bin: { v: 'O(log n)', c: '#22c55e' } },
                    { op: 'Insert', arr: { v: 'O(n)', c: '#f87171' }, bub: '-', ins: '-', sel: '-', lin: '-', bin: '-' },
                    { op: 'Delete', arr: { v: 'O(n)', c: '#f87171' }, bub: '-', ins: '-', sel: '-', lin: '-', bin: '-' },
                    { op: 'Sort (best)', arr: '-', bub: { v: 'O(n)', c: '#22c55e' }, ins: { v: 'O(n)', c: '#22c55e' }, sel: { v: 'O(n�)', c: '#fbbf24' }, lin: '-', bin: '-' },
                    { op: 'Sort (worst)', arr: '-', bub: { v: 'O(n�)', c: '#f87171' }, ins: { v: 'O(n�)', c: '#f87171' }, sel: { v: 'O(n�)', c: '#f87171' }, lin: '-', bin: '-' },
                  ].map((r, i) => (
                    <tr key={r.op} style={{ borderBottom: '1px solid #374151', background: i % 2 === 0 ? 'rgba(31,41,55,0.3)' : 'transparent' }}>
                      <td style={{ padding: '10px 10px', color: 'white', fontWeight: 'bold', fontSize: '12px', textAlign: 'center' }}>{r.op}</td>
                      {[r.arr, r.bub, r.ins, r.sel, r.lin, r.bin].map((cell, j) => (
                        <td key={j} style={{ padding: '10px 10px', fontFamily: 'monospace', fontSize: '12px', textAlign: 'center', color: typeof cell === 'string' ? '#4b5563' : cell.c, fontWeight: typeof cell === 'string' ? 'normal' : 'bold' }}>{typeof cell === 'string' ? cell : cell.v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Slide>

        {/* 51. Practice Problems */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🎯 Practice Problems</h2>
            <div style={under('#22c55e')}></div>
            <div style={grid2}>
              {[
                { t: 'Easy', items: ['Find the largest element in array', 'Reverse an array in-place', 'Check if array is sorted', 'Remove duplicates from sorted array'], c: '#22c55e' },
                { t: 'Medium', items: ['Merge two sorted arrays', 'Search in rotated sorted array', 'Find first and last position (binary search)', 'Sort array of 0s, 1s, and 2s'], c: '#fbbf24' },
              ].map((x) => (
                <div key={x.t} style={card(`${x.c}10`, `${x.c}30`)}>
                  <h3 style={h3s(x.c)}>{x.t}</h3>
                  {x.items.map((item, i) => (
                    <div key={i} style={{ ...p, fontSize: '11px', marginBottom: '6px', paddingLeft: '12px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: x.c }}>→</span> {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Slide>

        {/* 52. Big O Cheat Sheet Visual */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>📊 Big O Cheat Sheet</h2>
            <div style={under('#6366f1')}></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
              {[
                { t: 'O(1) — Constant', ex: 'Array access, HashMap get', c: '#22c55e' },
                { t: 'O(log n) — Logarithmic', ex: 'Binary search', c: '#22d3ee' },
                { t: 'O(n) — Linear', ex: 'Linear search, single loop', c: '#6366f1' },
                { t: 'O(n log n) — Linearithmic', ex: 'Merge sort, Quick sort avg', c: '#fbbf24' },
                { t: 'O(n²) — Quadratic', ex: 'Bubble/Insertion/Selection', c: '#f97316' },
                { t: 'O(2ⁿ) — Exponential', ex: 'Recursive Fibonacci', c: '#ef4444' },
              ].map((x) => (
                <div key={x.t} style={{ ...miniCard(`${x.c}10`, `${x.c}30`) }}>
                  <h4 style={{ color: x.c, fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>{x.t}</h4>
                  <p style={{ ...p, fontSize: '10px' }}>{x.ex}</p>
                </div>
              ))}
            </div>
          </div>
        </Slide>

        {/* 53. Space Complexity Deep Dive */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>💾 Space Complexity Deep Dive</h2>
            <div style={under('#ec4899')}></div>
            <div style={grid2}>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#ec4899')}>What Counts?</h3>
                {[
                  '✅ Input storage (if not counted separately)',
                  '✅ Auxiliary/extra space used by algorithm',
                  '❌ Space for the output',
                  '❌ Space for the code itself',
                ].map((x, i) => <div key={i} style={{ ...p, fontSize: '11px', marginBottom: '4px' }}>{x}</div>)}
              </div>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#ec4899')}>Examples</h3>
                {[
                  { algo: 'Bubble Sort', space: 'O(1)', reason: 'Only temp variable for swap' },
                  { algo: 'Merge Sort', space: 'O(n)', reason: 'Needs temp array for merging' },
                  { algo: 'Binary Search', space: 'O(1)', reason: 'Only left, right, mid vars' },
                  { algo: 'Linear Search', space: 'O(1)', reason: 'Only index variable' },
                ].map((x) => (
                  <div key={x.algo} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #374151', fontSize: '10px' }}>
                    <span style={{ color: 'white', width: '80px' }}>{x.algo}</span>
                    <span style={{ fontFamily: 'monospace', color: '#ec4899', width: '40px' }}>{x.space}</span>
                    <span style={{ color: '#9ca3af', flex: 1, textAlign: 'right' }}>{x.reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Slide>

        {/* 54. Algorithm Analysis Tips */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>💡 Algorithm Analysis Tips</h2>
            <div style={under('#fbbf24')}></div>
            <div style={grid2}>
              {[
                { t: 'How to Find Big O', items: ['Identify the input size (n)', 'Count the dominant operations', 'Drop constants and lower-order terms', 'Consider best, average, worst cases'], c: '#fbbf24' },
                { t: 'Common Mistakes', items: ['Confusing O(n) with O(2n)', 'Ignoring constant factors', 'Not considering input distribution', 'Forgetting space complexity'], c: '#ef4444' },
              ].map((x) => (
                <div key={x.t} style={card(`${x.c}10`, `${x.c}30`)}>
                  <h3 style={h3s(x.c)}>{x.t}</h3>
                  {x.items.map((item, i) => (
                    <div key={i} style={{ ...p, fontSize: '11px', marginBottom: '6px', paddingLeft: '12px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: x.c }}>•</span> {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Slide>

        {/* 55. Real World Applications */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🌍 Real World Applications</h2>
            <div style={under('#22d3ee')}></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
              {[
                { icon: '📦', t: 'Arrays', apps: ['Image processing', 'Database records', 'Sensor data', 'CSV/spreadsheets'], c: '#22d3ee' },
                { icon: '🔄', t: 'Sorting', apps: ['Leaderboard display', 'Contact list order', 'File directory', 'E-commerce filters'], c: '#fbbf24' },
                { icon: '🔎', t: 'Searching', apps: ['Autocomplete', 'Database queries', 'Spell checkers', 'GPS navigation'], c: '#22c55e' },
              ].map((x) => (
                <div key={x.t} style={{ ...card(`${x.c}10`, `${x.c}30`) }}>
                  <div style={{ fontSize: '28px', marginBottom: '6px' }}>{x.icon}</div>
                  <h4 style={{ color: x.c, fontSize: '14px', fontWeight: 'bold', marginBottom: '6px' }}>{x.t}</h4>
                  {x.apps.map((a, i) => <div key={i} style={{ ...p, fontSize: '11px', marginBottom: '3px' }}>• {a}</div>)}
                </div>
              ))}
            </div>
          </div>
        </Slide>

        {/* 56. Array Traversal Types */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🔍 Traversal Types</h2>
            <div style={under('#22d3ee')}></div>
            <div style={grid2}>
              {[
                { t: 'Linear Traversal', items: ['Visit each element sequentially', 'O(n) time complexity', 'Works on any data structure', 'Example: for loop through array'], c: '#22d3ee' },
                { t: 'Non-Linear Traversal', items: ['Visit nodes in specific order', 'BFS (Breadth-first)', 'DFS (Depth-first)', 'Used in Trees and Graphs'], c: '#a855f7' },
              ].map((x) => (
                <div key={x.t} style={card(`${x.c}10`, `${x.c}30`)}>
                  <h3 style={h3s(x.c)}>{x.t}</h3>
                  {x.items.map((item, i) => (
                    <div key={i} style={{ ...p, fontSize: '11px', marginBottom: '4px' }}>• {item}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Slide>

        {/* 57. Insertion Sort Variants */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🃏 Insertion Sort Variants</h2>
            <div style={under('#22c55e')}></div>
            <div style={grid2}>
              {[
                { t: 'Binary Insertion Sort', desc: 'Use binary search to find insertion point. Reduces comparisons to O(log n) but shifts still O(n). Total: O(n²).', c: '#22c55e' },
                { t: 'Shell Sort', desc: 'Gap-based insertion sort. Sort elements far apart first, then reduce gap. Time: O(n^1.25) to O(n²).', c: '#a855f7' },
              ].map((x) => (
                <div key={x.t} style={card(`${x.c}10`, `${x.c}30`)}>
                  <h3 style={h3s(x.c)}>{x.t}</h3>
                  <p style={{ ...p, fontSize: '11px' }}>{x.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ ...card('rgba(31,41,55,0.5)', '#374151'), marginTop: '12px' }}>
              <h4 style={{ color: 'white', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>💡 When to Use Insertion Sort?</h4>
              <p style={{ ...p, fontSize: '11px' }}>Small datasets (n &lt; 50), nearly sorted data, online algorithms (data arrives one at a time), or as part of hybrid algorithms (Python's TimSort uses it for small partitions).</p>
            </div>
          </div>
        </Slide>

        {/* 58. Selection Sort Properties */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🔍 Selection Sort Properties</h2>
            <div style={under('#a855f7')}></div>
            <div style={grid2}>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#a855f7')}>Key Properties</h3>
                {[
                  { t: 'Time', v: 'O(n²) always', c: '#fbbf24' },
                  { t: 'Space', v: 'O(1) — in-place', c: '#22c55e' },
                  { t: 'Stable', v: 'No (can be made stable)', c: '#f87171' },
                  { t: 'Adaptive', v: 'No (always same comparisons)', c: '#f87171' },
                  { t: 'Swaps', v: 'O(n) — minimum possible', c: '#22c55e' },
                ].map((x) => (
                  <div key={x.t} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #374151', fontSize: '11px' }}>
                    <span style={{ color: '#9ca3af' }}>{x.t}</span>
                    <span style={{ fontFamily: 'monospace', color: x.c }}>{x.v}</span>
                  </div>
                ))}
              </div>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#a855f7')}>Why Use It?</h3>
                <p style={{ ...p, fontSize: '11px', marginBottom: '8px' }}>Selection sort minimizes the number of <strong style={{ color: 'white' }}>swaps</strong> — only n-1 swaps total. This is valuable when:</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '10px' }}>
                  <li style={{ color: '#d1d5db', marginBottom: '4px' }}>• Write operations are expensive (flash memory)</li>
                  <li style={{ color: '#d1d5db', marginBottom: '4px' }}>• You need to minimize data movement</li>
                  <li style={{ color: '#d1d5db', marginBottom: '4px' }}>• Memory writes cause wear (embedded systems)</li>
                </ul>
              </div>
            </div>
          </div>
        </Slide>

        {/* 59. Binary Search Iterative vs Recursive */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>⚡ Binary Search: Iterative vs Recursive</h2>
            <div style={under('#22c55e')}></div>
            <div style={grid2}>
              <div>
                <h4 style={{ color: '#22c55e', fontSize: '12px', fontWeight: 'bold', marginBottom: '6px' }}>Iterative (Recommended)</h4>
                {codeBlock(`def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
# Space: O(1) ✓`)}
              </div>
              <div>
                <h4 style={{ color: '#fbbf24', fontSize: '12px', fontWeight: 'bold', marginBottom: '6px' }}>Recursive</h4>
                {codeBlock(`def binary_search(arr, target, left, right):
    if left > right:
        return -1
    mid = (left + right) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search(arr, target, mid+1, right)
    else:
        return binary_search(arr, target, left, mid-1)
# Space: O(log n) — call stack`)}
              </div>
            </div>
          </div>
        </Slide>

        {/* 60. Binary Search Variations */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>⚡ Binary Search Variations</h2>
            <div style={under('#22c55e')}></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
              {[
                { t: 'First Occurrence', desc: 'Find the first position of target in duplicates.', c: '#22c55e' },
                { t: 'Last Occurrence', desc: 'Find the last position of target in duplicates.', c: '#22d3ee' },
                { t: 'Lower Bound', desc: 'Find first element ≥ target.', c: '#6366f1' },
                { t: 'Upper Bound', desc: 'Find first element > target.', c: '#fbbf24' },
                { t: 'Ceiling', desc: 'Smallest element ≥ target.', c: '#a855f7' },
                { t: 'Floor', desc: 'Largest element ≤ target.', c: '#ec4899' },
              ].map((x) => (
                <div key={x.t} style={{ ...miniCard(`${x.c}10`, `${x.c}30`) }}>
                  <h4 style={{ color: x.c, fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>{x.t}</h4>
                  <p style={{ ...p, fontSize: '10px' }}>{x.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Slide>

        {/* 61. Comparison Operators */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>⚖️ Comparison Operators in Complexity</h2>
            <div style={under('#6366f1')}></div>
            <div style={grid2}>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#6366f1')}>Asymptotic Relations</h3>
                {[
                  { sym: 'f(n) = O(g(n))', meaning: 'f grows no faster than g', example: 'n = O(n²)' },
                  { sym: 'f(n) = Ω(g(n))', meaning: 'f grows no slower than g', example: 'n² = Ω(n)' },
                  { sym: 'f(n) = Θ(g(n))', meaning: 'f grows at same rate as g', example: '3n = Θ(n)' },
                  { sym: 'f(n) = o(g(n))', meaning: 'f grows strictly slower', example: 'n = o(n²)' },
                ].map((x) => (
                  <div key={x.sym} style={{ padding: '6px 0', borderBottom: '1px solid #374151' }}>
                    <div style={{ fontFamily: 'monospace', color: '#818cf8', fontSize: '11px' }}>{x.sym}</div>
                    <div style={{ color: '#9ca3af', fontSize: '10px' }}>{x.meaning} e.g., {x.example}</div>
                  </div>
                ))}
              </div>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#6366f1')}>Rules</h3>
                {[
                  'Reflexive: f(n) = O(f(n))',
                  'Transitive: O(f) ⊆ O(g) ∧ O(g) ⊆ O(h) → O(f) ⊆ O(h)',
                  'Sum: O(f) + O(g) = O(max(f,g))',
                  'Product: O(f) × O(g) = O(f × g)',
                  'Constant: O(c·f) = O(f)',
                ].map((x, i) => (
                  <div key={i} style={{ ...p, fontSize: '10px', marginBottom: '6px', paddingLeft: '12px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#6366f1' }}>•</span> {x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Slide>

        {/* 62. Time Complexity of Common Operations */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>⏱️ Time Complexity of Common Operations</h2>
            <div style={under('#fbbf24')}></div>
            <div style={grid2}>
              {[
                { t: 'Array Operations', ops: [
                  { op: 'Access by index', t: 'O(1)', c: '#22c55e' },
                  { op: 'Search (unsorted)', t: 'O(n)', c: '#f87171' },
                  { op: 'Search (sorted)', t: 'O(log n)', c: '#22d3ee' },
                  { op: 'Insert at end', t: 'O(1)', c: '#22c55e' },
                  { op: 'Insert at position', t: 'O(n)', c: '#f87171' },
                  { op: 'Delete at position', t: 'O(n)', c: '#f87171' },
                ]},
                { t: 'Sorting Operations', ops: [
                  { op: 'Bubble Sort', t: 'O(n²)', c: '#fbbf24' },
                  { op: 'Insertion Sort', t: 'O(n²)', c: '#fbbf24' },
                  { op: 'Selection Sort', t: 'O(n²)', c: '#fbbf24' },
                  { op: 'Merge Sort', t: 'O(n log n)', c: '#22c55e' },
                  { op: 'Quick Sort (avg)', t: 'O(n log n)', c: '#22c55e' },
                  { op: 'Heap Sort', t: 'O(n log n)', c: '#22c55e' },
                ]},
              ].map((x) => (
                <div key={x.t} style={card('rgba(31,41,55,0.5)', '#374151')}>
                  <h3 style={h3s('white')}>{x.t}</h3>
                  {x.ops.map((op) => (
                    <div key={op.op} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #374151', fontSize: '11px' }}>
                      <span style={{ color: '#d1d5db' }}>{op.op}</span>
                      <span style={{ fontFamily: 'monospace', color: op.c }}>{op.t}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Slide>

        {/* 63. Stability in Sorting */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🔒 Stability in Sorting</h2>
            <div style={under('#ec4899')}></div>
            <div style={grid2}>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#ec4899')}>What is Stability?</h3>
                <p style={{ ...p, fontSize: '11px', marginBottom: '8px' }}>A sorting algorithm is <strong style={{ color: '#ec4899' }}>stable</strong> if elements with equal keys maintain their <strong style={{ color: 'white' }}>relative order</strong> from the input.</p>
                <div style={{ ...miniCard('rgba(0,0,0,0.3)', 'transparent'), fontSize: '11px', fontFamily: 'monospace' }}>
                  <div style={{ color: '#9ca3af' }}>Input: [(A,1), (B,2), (C,1)]</div>
                  <div style={{ color: '#22c55e', marginTop: '4px' }}>Stable: [(A,1), (C,1), (B,2)] ✓</div>
                  <div style={{ color: '#f87171', marginTop: '4px' }}>Unstable: [(C,1), (A,1), (B,2)] ✗</div>
                </div>
              </div>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('white')}>Stability of Algorithms</h3>
                {[
                  { algo: 'Bubble Sort', stable: 'Yes', reason: 'Only swaps adjacent unequal elements', c: '#22c55e' },
                  { algo: 'Insertion Sort', stable: 'Yes', reason: 'Inserts equal elements after existing', c: '#22c55e' },
                  { algo: 'Selection Sort', stable: 'No', reason: 'Long-distance swaps can change order', c: '#f87171' },
                  { algo: 'Merge Sort', stable: 'Yes', reason: 'Left half prioritized in merge', c: '#22c55e' },
                ].map((x) => (
                  <div key={x.algo} style={{ padding: '4px 0', borderBottom: '1px solid #374151', fontSize: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'white' }}>{x.algo}</span>
                      <span style={{ color: x.c }}>{x.stable}</span>
                    </div>
                    <div style={{ color: '#9ca3af' }}>{x.reason}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Slide>

        {/* 64. Adaptive vs Non-Adaptive */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🔄 Adaptive vs Non-Adaptive</h2>
            <div style={under('#fbbf24')}></div>
            <div style={grid2}>
              {[
                { t: 'Adaptive Algorithms', desc: 'Perform better when input is partially sorted.', items: ['Bubble Sort (with flag): O(n) for sorted', 'Insertion Sort: O(n) for sorted', 'Merge Sort (natural): can detect runs'], c: '#22c55e' },
                { t: 'Non-Adaptive Algorithms', desc: 'Always perform the same number of operations regardless of input order.', items: ['Selection Sort: always O(n²)', 'Heap Sort: always O(n log n)', 'Shell Sort: depends on gap sequence'], c: '#f87171' },
              ].map((x) => (
                <div key={x.t} style={card(`${x.c}10`, `${x.c}30`)}>
                  <h3 style={h3s(x.c)}>{x.t}</h3>
                  <p style={{ ...p, fontSize: '11px', marginBottom: '8px' }}>{x.desc}</p>
                  {x.items.map((item, i) => (
                    <div key={i} style={{ ...p, fontSize: '10px', marginBottom: '4px', paddingLeft: '12px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: x.c }}>•</span> {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Slide>

        {/* 65. Best Average Worst Cases */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>📊 Best / Average / Worst Cases</h2>
            <div style={under('#6366f1')}></div>
            <div style={grid2}>
              {[
                { t: 'Best Case', desc: 'Minimum possible time for any input of size n.', items: ['Linear Search: O(1) — found at first', 'Binary Search: O(1) — found at mid', 'Bubble Sort: O(n) — already sorted', 'Insertion Sort: O(n) — already sorted'], c: '#22c55e' },
                { t: 'Worst Case', desc: 'Maximum possible time for any input of size n.', items: ['Linear Search: O(n) — not found', 'Binary Search: O(log n) — not found', 'Bubble Sort: O(n²) — reverse sorted', 'Selection Sort: O(n²) — always'], c: '#f87171' },
              ].map((x) => (
                <div key={x.t} style={card(`${x.c}10`, `${x.c}30`)}>
                  <h3 style={h3s(x.c)}>{x.t}</h3>
                  <p style={{ ...p, fontSize: '11px', marginBottom: '8px' }}>{x.desc}</p>
                  {x.items.map((item, i) => (
                    <div key={i} style={{ ...p, fontSize: '10px', marginBottom: '4px', paddingLeft: '12px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: x.c }}>•</span> {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Slide>

        {/* 66. Recursion Basics */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>🔄 Recursion Basics</h2>
            <div style={under('#a855f7')}></div>
            <div style={grid2}>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#a855f7')}>What is Recursion?</h3>
                <p style={{ ...p, fontSize: '11px', marginBottom: '8px' }}>A function that <strong style={{ color: '#a855f7' }}>calls itself</strong> with a smaller input until it reaches a base case.</p>
                <div style={{ ...miniCard('rgba(168,85,247,0.1)', 'rgba(168,85,247,0.3)') }}>
                  <p style={{ ...p, fontSize: '10px' }}>Every recursion needs: <strong style={{ color: 'white' }}>Base case</strong> + <strong style={{ color: 'white' }}>Recursive case</strong></p>
                </div>
              </div>
              {codeBlock(`# Factorial
def factorial(n):
    if n <= 1:        # Base case
        return 1
    return n * factorial(n-1)  # Recursive

# Fibonacci
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

# Time: O(2ⁿ) without memoization!`)}
            </div>
          </div>
        </Slide>

        {/* 67. Memoization */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>💾 Memoization — Optimizing Recursion</h2>
            <div style={under('#ec4899')}></div>
            <div style={grid2}>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#ec4899')}>The Problem</h3>
                <p style={{ ...p, fontSize: '11px', marginBottom: '8px' }}>Recursive Fibonacci recomputes the same subproblems many times:</p>
                <div style={{ fontFamily: 'monospace', fontSize: '10px', color: '#d1d5db', padding: '8px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px' }}>
                  <div>fib(5) calls fib(4), fib(3)</div>
                  <div>fib(4) calls fib(3), fib(2)</div>
                  <div style={{ color: '#f87171' }}>fib(3) computed twice!</div>
                </div>
                <h3 style={{ ...h3s('#22c55e'), marginTop: '12px' }}>The Solution</h3>
                <p style={{ ...p, fontSize: '11px' }}>Store computed results in a cache. Time: <strong style={{ color: '#22c55e' }}>O(n)</strong> instead of O(2ⁿ).</p>
              </div>
              {codeBlock(`# With Memoization
def fib_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]

# Time: O(n) ✓
# Space: O(n) ✓

# This is the essence of
# Dynamic Programming!`)}
            </div>
          </div>
        </Slide>

        {/* 68. Thank You */}
        <Slide>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', background: 'linear-gradient(135deg, #0f172a, #1e1b4b, #0f172a)' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>🎓</div>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>Unit 1 Complete!</h1>
            <p style={{ color: '#9ca3af', fontSize: '16px', marginBottom: '8px' }}>You've mastered the fundamentals of DSA</p>
            <p style={{ color: '#6b7280', fontSize: '12px', marginBottom: '20px' }}>65 slides covering Complexity, Arrays, Sorting & Searching</p>
            <div style={{ padding: '12px 24px', background: 'rgba(34,197,94,0.2)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '12px' }}>
              <span style={{ color: '#22c55e', fontWeight: '600' }}>Next: Unit 2 — Linked Lists →</span>
            </div>
          </div>
        </Slide>

        {/* ===== UNIT 2: LINKED LISTS ===== */}

        {/* 69. Unit 2 Intro */}
        <Slide>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', background: 'linear-gradient(135deg, #0f172a, #1e3a5f, #0f172a)' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>🔗</div>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>Unit 2: Linked Lists</h1>
            <p style={{ color: '#9ca3af', fontSize: '16px', marginBottom: '20px' }}>Dynamic data structures with pointer-based linking</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
              {[
                { icon: '🧠', t: 'Memory & Allocation', c: '#22d3ee' },
                { icon: '🔗', t: 'Traversal & Insertion', c: '#22c55e' },
                { icon: '↔️', t: 'Doubly & Circular', c: '#a855f7' },
              ].map((x) => (
                <div key={x.t} style={{ padding: '14px 20px', background: `${x.c}15`, border: `1px solid ${x.c}30`, borderRadius: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', marginBottom: '4px' }}>{x.icon}</div>
                  <span style={{ color: x.c, fontSize: '12px', fontWeight: '600' }}>{x.t}</span>
                </div>
              ))}
            </div>
          </div>
        </Slide>

        {/* 70. LL: What is a Linked List? */}
        <LLIntro />

        {/* 71. LL: Memory Representation */}
        <LLMemory />

        {/* 72. LL: Memory Allocation */}
        <LLAllocation />

        {/* 73. LL: Traversal Concept */}
        <LLTraversal />

        {/* 74. LL: Traversal Visualization */}
        <LLTraversalViz />

        {/* 75. LL: Insertion Concept */}
        <LLInsertion />

        {/* 76. LL: Insertion Visualization */}
        <LLInsertViz />

        {/* 77. LL: Deletion Concept */}
        <LLDeletion />

        {/* 78. LL: Deletion Visualization */}
        <LLDeleteViz />

        {/* 79. LL: Header Linked Lists */}
        <LLHeader />

        {/* 80. LL: Grounded vs Circular */}
        <LLGroundedCircular />

        {/* 81. LL: Doubly Linked List Concept */}
        <DoublyLinkedList />

        {/* 82. LL: Doubly Linked List Visualization */}
        <DoublyLLViz />

        {/* 83. Unit 2 Summary */}
        <Slide>
          <div style={{ textAlign: 'left' }}>
            <h2 style={h2s}>📝 Unit 2 Summary — Linked Lists</h2>
            <div style={under('#22d3ee')}></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#22d3ee')}>Key Concepts</h3>
                {[
                  { t: 'Node = Data + Pointer', c: '#22d3ee' },
                  { t: 'Dynamic size (no fixed capacity)', c: '#22c55e' },
                  { t: 'Non-contiguous memory allocation', c: '#fbbf24' },
                  { t: 'Traversal is O(n) — no random access', c: '#a855f7' },
                  { t: 'Insertion/Deletion at head is O(1)', c: '#ec4899' },
                ].map((x, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ width: '8px', height: '8px', background: x.c, borderRadius: '50%', flexShrink: 0 }}></span>
                    <span style={{ color: '#d1d5db', fontSize: '12px' }}>{x.t}</span>
                  </div>
                ))}
              </div>
              <div style={card('rgba(31,41,55,0.5)', '#374151')}>
                <h3 style={h3s('#22c55e')}>Complexity Comparison</h3>
                <div style={{ fontFamily: 'monospace', fontSize: '10px', color: '#d1d5db', padding: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px' }}>
                  <div style={{ color: '#9ca3af', marginBottom: '4px' }}>Operation        Singly    Doubly</div>
                  <div>Insert at head   O(1)      O(1)</div>
                  <div>Insert at tail   O(n)      O(1)*</div>
                  <div>Delete at head   O(1)      O(1)</div>
                  <div>Delete at tail   O(n)      O(1)*</div>
                  <div>Search           O(n)      O(n)</div>
                  <div style={{ color: '#9ca3af', marginTop: '4px' }}>* with tail pointer</div>
                </div>
              </div>
            </div>
            <div style={{ ...card('rgba(34,211,238,0.1)', 'rgba(34,211,238,0.3)'), marginTop: '12px', textAlign: 'center' }}>
              <span style={{ color: '#22d3ee', fontWeight: '600', fontSize: '14px' }}>🔗 Linked Lists are the foundation for Stacks, Queues, and Trees!</span>
            </div>
          </div>
        </Slide>

        {/* 84. Thank You — Unit 2 */}
        <Slide>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', background: 'linear-gradient(135deg, #0f172a, #1e3a5f, #0f172a)' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>🎓</div>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>Unit 2 Complete!</h1>
            <p style={{ color: '#9ca3af', fontSize: '16px', marginBottom: '8px' }}>You've mastered Linked Lists</p>
            <p style={{ color: '#6b7280', fontSize: '12px', marginBottom: '20px' }}>16 slides covering singly, doubly, and circular linked lists</p>
            <div style={{ padding: '12px 24px', background: 'rgba(34,211,238,0.2)', border: '1px solid rgba(34,211,238,0.3)', borderRadius: '12px' }}>
              <span style={{ color: '#22d3ee', fontWeight: '600' }}>Next: Unit 3 — Stacks & Queues →</span>
            </div>
          </div>
        </Slide>

      </Deck>
    </div>
  );
}

export default App;
