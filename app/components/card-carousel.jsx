'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function CardCarousel({ projects }) {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Triple the projects array for infinite scrolling
  const infiniteProjects = [...projects, ...projects, ...projects];

  useEffect(() => {
    // Set initial scroll position to the middle set of projects
    if (scrollContainerRef.current) {
      const cardWidth = 400; // Match the card width
      const gap = 32; // Match the gap-8 (8 * 4px = 32px)
      const itemWidth = cardWidth + gap;
      scrollContainerRef.current.scrollLeft = itemWidth * projects.length;
    }
  }, [projects.length]);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = 400;
    const gap = 32;
    const itemWidth = cardWidth + gap;
    const maxScroll = itemWidth * projects.length * 2;

    // If scrolled past the end, jump back to the middle set
    if (container.scrollLeft >= maxScroll) {
      container.scrollLeft = container.scrollLeft - itemWidth * projects.length;
    }
    // If scrolled before the beginning, jump forward to the middle set
    else if (container.scrollLeft <= 0) {
      container.scrollLeft = container.scrollLeft + itemWidth * projects.length;
    }
  };

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
    const newScrollLeft = scrollLeft - walk;
    scrollContainerRef.current.scrollLeft = newScrollLeft;
    
    // Check for infinite scroll during drag
    handleScroll();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative flex w-full border-t-2 border-b-2 border-dotted border-black">
      <div className="flex items-center justify-center px-8 py-16">
        <h2 
          className="text-4xl font-light text-black tracking-widest"
          style={{ writingMode: 'sideways-lr', textOrientation: 'mixed' }}
        >
          Projects
        </h2>
      </div>

      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onScroll={handleScroll}
        className={`flex gap-8 overflow-x-auto scrollbar-hide py-12 pr-8 ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {infiniteProjects.map((project, index) => (
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
