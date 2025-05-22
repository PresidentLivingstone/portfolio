"use client";

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer & AI Enthusiast";
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(circle at center, #1a1a2e 0%, #16213e 50%, #0f172a 100%)"
      }}
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`,
            transform: 'translateZ(0)'
          }}
        />
      </div>

      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" className="opacity-30">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-lg md:text-xl font-light mb-2 text-gray-400 tracking-wider">
            HELLO, I'M
          </h2>
          <h1 className="text-4xl md:text-7xl font-bold mb-4 text-white tracking-tight cursor-highlight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Livingstone Mazvovere
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <div className="relative h-[32px] md:h-[36px]">
            <h3 className="text-xl md:text-2xl font-medium text-gray-300">
              {text}
            </h3>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <a 
              href="#projects" 
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="px-6 py-3 border border-gray-500 text-white font-medium rounded-lg transition-all duration-300 hover:bg-white hover:bg-opacity-10"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.2
          }}
        >
          <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}