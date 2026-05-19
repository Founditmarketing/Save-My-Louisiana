import React from 'react';
import { Perspective } from '../types';
import { Scale, Leaf } from 'lucide-react';

interface Props {
  perspective: Perspective;
  setPerspective: (p: Perspective) => void;
}

export const PerspectiveSwitch: React.FC<Props> = ({ perspective, setPerspective }) => {
  return (
    <div className="flex justify-center w-full">
      {/* Removed backdrop-blur and transparent bg, made it solid white with stronger shadow */}
      <div className="bg-white shadow-xl rounded-full p-1.5 flex gap-1 border border-gray-200">
        <button
          onClick={() => setPerspective('environmental')}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 ${
            perspective === 'environmental'
              ? 'bg-green-700 text-white shadow-md transform scale-105'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <Leaf size={16} />
          <span>Environment</span>
        </button>
        <button
          onClick={() => setPerspective('legal')}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 ${
            perspective === 'legal'
              ? 'bg-blue-800 text-white shadow-md transform scale-105'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <Scale size={16} />
          <span>Rights</span>
        </button>
      </div>
    </div>
  );
};