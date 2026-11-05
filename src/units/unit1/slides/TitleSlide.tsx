import React from 'react';
import { Slide } from '@revealjs/react';

export const TitleSlide: React.FC = () => (
  <Slide>
    <div
      className="flex flex-col items-center justify-center h-full"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)' }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center">
        <div className="text-7xl mb-6">🧮</div>
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
          Data Structures &<br />Algorithms
        </h1>
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-1 w-12 bg-indigo-500 rounded"></div>
          <h2 className="text-2xl text-indigo-400 font-semibold">CSE205 - Unit 1</h2>
          <div className="h-1 w-12 bg-indigo-500 rounded"></div>
        </div>
        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
          Interactive presentation with step-by-step algorithm visualizations
        </p>

        {/* Navigation hints */}
        <div className="flex flex-wrap justify-center gap-3">
          <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 backdrop-blur">
            <span className="text-indigo-400 font-mono font-bold">←→</span>
            <span className="text-gray-400 ml-2 text-sm">Navigate</span>
          </div>
          <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 backdrop-blur">
            <span className="text-indigo-400 font-mono font-bold">↑↓</span>
            <span className="text-gray-400 ml-2 text-sm">Vertical</span>
          </div>
          <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 backdrop-blur">
            <span className="text-indigo-400 font-mono font-bold">O</span>
            <span className="text-gray-400 ml-2 text-sm">Overview</span>
          </div>
          <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 backdrop-blur">
            <span className="text-indigo-400 font-mono font-bold">F</span>
            <span className="text-gray-400 ml-2 text-sm">Fullscreen</span>
          </div>
        </div>
      </div>
    </div>
  </Slide>
);
