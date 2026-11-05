import React from 'react';
import { Slide } from '@revealjs/react';
import { ComplexityChart } from '../../../components/Shared/ComplexityChart';

export const Notations: React.FC = () => (
  <>
    {/* Slide 1: Three Notations Overview */}
    <Slide>
      <div className="text-left max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">
          📊 Asymptotic Notations
        </h2>
        <div className="h-1 w-24 bg-indigo-500 rounded mb-4"></div>
        <p className="text-gray-400 text-sm mb-6">
          Mathematical tools to describe algorithm growth rates — like a "speedometer" for code
        </p>

        <div className="grid grid-cols-3 gap-5">
          {/* Big O */}
          <div className="bg-gradient-to-b from-red-500/10 to-red-500/5 border-2 border-red-500/40 rounded-2xl p-5 text-center">
            <div className="text-6xl font-bold text-red-400 mb-2">O</div>
            <h3 className="text-xl font-bold text-white mb-1">Big O</h3>
            <div className="text-sm text-red-300 mb-3">Upper Bound</div>
            <div className="p-3 bg-red-500/10 rounded-lg">
              <p className="text-gray-300 text-xs italic">
                "The algorithm will never be <span className="text-red-400 font-bold">slower</span> than this"
              </p>
            </div>
            <div className="mt-3 text-xs text-gray-400">
              <span className="text-red-400">Use:</span> Worst-case analysis
            </div>
          </div>

          {/* Omega */}
          <div className="bg-gradient-to-b from-cyan-500/10 to-cyan-500/5 border-2 border-cyan-500/40 rounded-2xl p-5 text-center">
            <div className="text-6xl font-bold text-cyan-400 mb-2">Ω</div>
            <h3 className="text-xl font-bold text-white mb-1">Omega</h3>
            <div className="text-sm text-cyan-300 mb-3">Lower Bound</div>
            <div className="p-3 bg-cyan-500/10 rounded-lg">
              <p className="text-gray-300 text-xs italic">
                "The algorithm will never be <span className="text-cyan-400 font-bold">faster</span> than this"
              </p>
            </div>
            <div className="mt-3 text-xs text-gray-400">
              <span className="text-cyan-400">Use:</span> Best-case analysis
            </div>
          </div>

          {/* Theta */}
          <div className="bg-gradient-to-b from-green-500/10 to-green-500/5 border-2 border-green-500/40 rounded-2xl p-5 text-center">
            <div className="text-6xl font-bold text-green-400 mb-2">Θ</div>
            <h3 className="text-xl font-bold text-white mb-1">Theta</h3>
            <div className="text-sm text-green-300 mb-3">Tight Bound</div>
            <div className="p-3 bg-green-500/10 rounded-lg">
              <p className="text-gray-300 text-xs italic">
                "The algorithm runs at <span className="text-green-400 font-bold">exactly</span> this rate"
              </p>
            </div>
            <div className="mt-3 text-xs text-gray-400">
              <span className="text-green-400">Use:</span> Average-case analysis
            </div>
          </div>
        </div>
      </div>
    </Slide>

    {/* Slide 2: Big O Deep Dive */}
    <Slide>
      <div className="text-left max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">
          🔴 Big O — Deep Dive
        </h2>
        <div className="h-1 w-24 bg-red-500 rounded mb-6"></div>

        <div className="grid grid-cols-2 gap-6">
          {/* Left: Definition + Analogy */}
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/30 rounded-xl">
              <h3 className="text-lg font-bold text-red-400 mb-3">📐 Mathematical Definition</h3>
              <div className="p-3 bg-gray-900/50 rounded-lg font-mono text-sm text-gray-300">
                O(f(n)) = {'{'} g(n) : ∃ c, n₀ {'>'} 0 such that<br />
                <span className="text-red-400">0 ≤ g(n) ≤ c·f(n)</span> for all n ≥ n₀ {'}'}
              </div>
            </div>

            <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl">
              <h4 className="text-white font-semibold mb-2">🚗 Car Analogy</h4>
              <p className="text-gray-300 text-sm">
                If a car's top speed is <span className="text-red-400 font-bold">O(n²)</span>, it means the car's speed
                will <span className="text-red-400">never exceed</span> n² km/h — it could be slower, but not faster.
              </p>
            </div>
          </div>

          {/* Right: Examples */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white mb-3">Common Complexities</h3>
            {[
              { notation: 'O(1)', color: 'green', example: 'Array access, HashMap lookup', time: 'Constant' },
              { notation: 'O(log n)', color: 'cyan', example: 'Binary search', time: 'Logarithmic' },
              { notation: 'O(n)', color: 'indigo', example: 'Linear search, single loop', time: 'Linear' },
              { notation: 'O(n log n)', color: 'yellow', example: 'Merge sort, Quick sort (avg)', time: 'Linearithmic' },
              { notation: 'O(n²)', color: 'orange', example: 'Bubble sort, nested loops', time: 'Quadratic' },
              { notation: 'O(2ⁿ)', color: 'red', example: 'Recursive Fibonacci', time: 'Exponential' },
            ].map((item) => (
              <div key={item.notation} className={`flex items-center gap-3 p-3 bg-${item.color}-500/10 border border-${item.color}-500/20 rounded-lg`}>
                <span className={`font-mono font-bold text-${item.color}-400 w-24 text-sm`}>{item.notation}</span>
                <span className="text-gray-300 text-xs flex-1">{item.example}</span>
                <span className="text-gray-500 text-xs">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>

    {/* Slide 3: Complexity Chart */}
    <Slide>
      <div className="text-left max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">
          📈 Growth Rate Comparison
        </h2>
        <div className="h-1 w-24 bg-indigo-500 rounded mb-4"></div>
        <p className="text-gray-400 text-sm mb-4">
          Notice how dramatically different complexities diverge as n increases
        </p>

        <ComplexityChart />

        <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
          <p className="text-gray-300 text-sm text-center">
            <span className="text-yellow-400 font-bold">⚡ Key Takeaway:</span> At n=16, O(n²) = 256 operations while O(log n) = 4 operations.
            <span className="text-white font-semibold"> That's a 64x difference!</span>
          </p>
        </div>
      </div>
    </Slide>
  </>
);
