'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

export default function CardCarousel({ caption, projects }) {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative flex w-full border-t-2 border-dotted border-black">
      <div className="flex items-center justify-center px-8 py-16">
        <h2 
          className="text-4xl font-light text-black tracking-widest"
          style={{ writingMode: 'sideways-lr', textOrientation: 'mixed' }}
        >
          {caption}
        </h2>
      </div>

      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={`flex gap-8 overflow-x-auto scrollbar-hide py-12 pr-8 ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[400px] h-[250px] rounded-2xl overflow-hidden relative shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            style={{ userSelect: 'none' }}
          >
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              className="object-cover pointer-events-none"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
