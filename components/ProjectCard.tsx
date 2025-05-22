"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export default function ProjectCard({ title, description, image, tags, liveUrl, githubUrl }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative group rounded-xl overflow-hidden bg-gray-900 h-full"
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-70 transition-opacity duration-300 z-10"
        style={{ opacity: isHovered ? 0.85 : 0.6 }}
      ></div>
      
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          style={{ 
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />
      </div>
      
      <div className="p-6 relative z-20">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs font-medium py-1 px-2 rounded-full bg-blue-600/30 text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
        
        <div className="flex gap-4">
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noreferrer"
            className="text-blue-400 font-medium hover:text-blue-300 transition-colors flex items-center"
          >
            <span>View Live</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-1"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-400 font-medium hover:text-gray-300 transition-colors flex items-center"
          >
            <span>GitHub</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-1"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}