import React from 'react';
import { Slide } from '@revealjs/react';

export const ComplexityAnalysis: React.FC = () => (
  <>
    {/* Slide 1: What is Complexity Analysis */}
    <Slide>
      <div className="text-left max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">
          ⏱️ Why Complexity Analysis?
        </h2>
        <div className="h-1 w-24 bg-indigo-500 rounded mb-6"></div>

        <div className="grid grid-cols-2 gap-8 mb-6">
          {/* Left: Problem statement */}
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">🎯</span> The Problem
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Consider two algorithms that solve the same problem. <strong className="text-white">Algorithm A</strong> takes
                100ms for 100 items. <strong className="text-white">Algorithm B</strong> takes 50ms for 100 items.
              </p>
              <p className="text-gray-300 text-sm mt-3">
                Is Algorithm B always faster? <span className="text-indigo-400 font-semibold">Not necessarily!</span>
              </p>
            </div>

            <div className="p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-xl">
              <p className="text-gray-300 text-sm">
                <span className="text-indigo-400 font-bold">Key Insight:</span> We need to know how algorithms
                behave as input size <strong className="text-white">grows to millions or billions</strong>.
              </p>
            </div>
          </div>

          {/* Right: Visual comparison */}
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-4">Example: Two Sorting Approaches</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-900/50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-cyan-400 font-mono text-sm">Merge Sort</span>
                  <span className="text-green-400 text-xs font-mono">O(n log n)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
                <div className="text-gray-500 text-xs mt-1">1M items ≈ 20M operations</div>
              </div>
              <div className="p-3 bg-gray-900/50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-red-400 font-mono text-sm">Bubble Sort</span>
                  <span className="text-yellow-400 text-xs font-mono">O(n²)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <div className="text-gray-500 text-xs mt-1">1M items ≈ 1T operations 💀</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Two types of complexity */}
        <div className="grid grid-cols-2 gap-6">
          <div className="p-5 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">⏱️</span>
              <div>
                <h3 className="text-lg font-bold text-cyan-400">Time Complexity</h3>
                <p className="text-gray-400 text-xs">How fast does it run?</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Number of <strong className="text-cyan-400">basic operations</strong> performed as a function of input size n.
            </p>
            <div className="mt-3 p-2 bg-cyan-500/10 rounded-lg">
              <code className="text-cyan-300 text-xs font-mono">
                Example: for(i=0; i&lt;n; i++) → O(n) time
              </code>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/30 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">💾</span>
              <div>
                <h3 className="text-lg font-bold text-pink-400">Space Complexity</h3>
                <p className="text-gray-400 text-xs">How much memory does it use?</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Amount of <strong className="text-pink-400">extra memory</strong> allocated as a function of input size n.
            </p>
            <div className="mt-3 p-2 bg-pink-500/10 rounded-lg">
              <code className="text-pink-300 text-xs font-mono">
                Example: int arr[n] → O(n) space
              </code>
            </div>
          </div>
        </div>
      </div>
    </Slide>

    {/* Slide 2: Trade-off */}
    <Slide>
      <div className="text-left max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">
          ⚖️ Time-Space Trade-off
        </h2>
        <div className="h-1 w-24 bg-indigo-500 rounded mb-6"></div>

        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-6">
          <p className="text-gray-300 text-base leading-relaxed text-center mb-6">
            Often, you can <strong className="text-white">reduce time complexity</strong> by using more memory,
            or <strong className="text-white">reduce memory usage</strong> at the cost of more time.
          </p>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
              <div className="text-2xl mb-2">⏱️⚡</div>
              <h4 className="text-green-400 font-bold text-sm mb-1">Fast + More Memory</h4>
              <p className="text-gray-400 text-xs">Lookup tables, caching, hashing</p>
            </div>
            <div className="text-center p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
              <div className="text-2xl mb-2">⚖️</div>
              <h4 className="text-yellow-400 font-bold text-sm mb-1">Balanced</h4>
              <p className="text-gray-400 text-xs">Standard algorithms</p>
            </div>
            <div className="text-center p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
              <div className="text-2xl mb-2">💾🐢</div>
              <h4 className="text-blue-400 font-bold text-sm mb-1">Less Memory + Slower</h4>
              <p className="text-gray-400 text-xs">In-place algorithms, streaming</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-5">
          <h4 className="text-white font-bold mb-3 flex items-center gap-2">
            <span className="text-xl">💡</span> Real-World Example
          </h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-gray-900/50 rounded-lg">
              <span className="text-cyan-400 font-semibold">Memoization (DP):</span>
              <span className="text-gray-300 ml-2">Store computed results → O(n) time, O(n) space</span>
            </div>
            <div className="p-3 bg-gray-900/50 rounded-lg">
              <span className="text-pink-400 font-semibold">Recursion (naive):</span>
              <span className="text-gray-300 ml-2">No storage → O(2ⁿ) time, O(n) space</span>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  </>
);
