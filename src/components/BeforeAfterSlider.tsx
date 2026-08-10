"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Pause } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string | null;
  afterImage: string | null;
}

export default function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
    e.preventDefault(); // Prevent accidental image dragging or selection
  };

  useEffect(() => {
    const handleGlobalPointerUp = () => setIsDragging(false);
    const handleGlobalPointerMove = (e: PointerEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    if (isDragging) {
      window.addEventListener('pointerup', handleGlobalPointerUp);
      window.addEventListener('pointermove', handleGlobalPointerMove);
    }
    
    return () => {
      window.removeEventListener('pointerup', handleGlobalPointerUp);
      window.removeEventListener('pointermove', handleGlobalPointerMove);
    };
  }, [isDragging]);

  return (
    <div 
      className="relative w-full h-full cursor-ew-resize select-none touch-none group"
      ref={containerRef}
      onPointerDown={onPointerDown}
    >
      {/* Base Image (Before) */}
      <div className="absolute inset-0 pointer-events-none">
        {beforeImage ? (
          <Image src={beforeImage} alt="Before" fill className="object-cover" draggable={false} />
        ) : (
          <div className="w-full h-full bg-gray-300"></div>
        )}
      </div>
      
      {/* Overlay Image (After) */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        {afterImage ? (
          <Image src={afterImage} alt="After" fill className="object-cover" draggable={false} />
        ) : (
          <div className="w-full h-full bg-gray-200"></div>
        )}
      </div>
      
      {/* UI Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {/* Badges */}
        <div className="absolute bottom-4 left-4 bg-[#55575a] text-white text-[11px] uppercase font-bold px-3 py-1.5 rounded-[4px] tracking-wide shadow-sm transition-opacity duration-300">
          Before
        </div>
        <div className="absolute bottom-4 right-4 bg-brand-red text-white text-[11px] uppercase font-bold px-3 py-1.5 rounded-[4px] tracking-wide shadow-sm transition-opacity duration-300">
          After
        </div>
        
        {/* Slider Divider & Handle */}
        <div 
          className="absolute inset-y-0 w-[2px] bg-white -translate-x-1/2 shadow-[0_0_4px_rgba(0,0,0,0.15)] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.2)] flex items-center justify-center group-hover:scale-110 transition-transform pointer-events-none">
            <Pause className="w-3.5 h-3.5 text-gray-500 rotate-90" fill="currentColor" strokeWidth={0} />
          </div>
        </div>
      </div>
    </div>
  );
}
