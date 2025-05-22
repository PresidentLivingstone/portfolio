"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AceternityCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: 'spring',
        mass: 0.3
      }
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      mixBlendMode: 'difference',
      transition: {
        type: 'spring',
        mass: 0.3
      }
    }
  };

  useEffect(() => {
    const textElements = document.querySelectorAll('.cursor-highlight');
    
    const mouseEnterText = () => setCursorVariant('text');
    const mouseLeaveText = () => setCursorVariant('default');
    
    textElements.forEach(element => {
      element.addEventListener('mouseenter', mouseEnterText);
      element.addEventListener('mouseleave', mouseLeaveText);
    });
    
    return () => {
      textElements.forEach(element => {
        element.removeEventListener('mouseenter', mouseEnterText);
        element.removeEventListener('mouseleave', mouseLeaveText);
      });
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      variants={variants as any}
      animate={cursorVariant}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: 32,
        width: 32,
        borderRadius: '50%',
        backgroundColor: 'white',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  );
};

export default AceternityCursor;