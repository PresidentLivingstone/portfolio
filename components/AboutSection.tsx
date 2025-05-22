"use client";

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-sm font-medium tracking-widest text-blue-500 uppercase mb-1">About Me</h2>
            <h3 className="text-4xl font-bold text-white mb-8 cursor-highlight">Who I Am</h3>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <motion.div 
              variants={itemVariants} 
              className="md:w-2/5"
            >
             <div className="relative w-full max-w-md mx-auto">
                {/* Glow Effect */}
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-80 blur-xl z-0 animate-pulse shadow-lg"></div>

                {/* Image */}
                <img 
                  src="/images/profile 2.png" 
                  alt="Professional portrait" 
                  className="rounded-2xl w-full relative z-10 shadow-xl transition-transform duration-300 hover:scale-105"
                />
              </div>


              <motion.div 
                variants={itemVariants}
                className="mt-8 bg-gray-900 p-6 rounded-lg"
              >
                <h4 className="text-xl font-bold text-white mb-4 border-l-4 border-purple-500 pl-4">Education</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-white font-medium">University of Delhi</h5>
                    <p className="text-gray-400">Bvoc (H) Software Engineering</p>
                    <p className="text-gray-500 text-sm">2022 - 2025</p>
                  </div>
                  <div>
                    <h5 className="text-white font-medium">Pregrad India</h5>
                    <p className="text-gray-400">Data Science and Machine Learning</p>
                    <p className="text-gray-500 text-sm">2024</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="md:w-3/5">
              <h4 className="text-2xl font-bold text-white mb-4">Full Stack Developer & AI Enthusiast</h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate full-stack developer with expertise in AI/ML, focusing on creating innovative solutions 
                that merge software development with artificial intelligence. My background in both traditional development 
                and machine learning allows me to build comprehensive, intelligent applications.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                When I'm not coding, I'm actively involved in community initiatives, teaching programming to students, 
                and contributing to environmental conservation efforts. I believe in using technology not just to solve 
                problems, but to create positive social impact.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="text-white font-medium mb-2">Name:</h5>
                  <p className="text-gray-400">Livingstone Mazvovere</p>
                </div>
                <div>
                  <h5 className="text-white font-medium mb-2">Email:</h5>
                  <p className="text-gray-400">mazvoverelivingstone@gmail.com</p>
                </div>
                <div>
                  <h5 className="text-white font-medium mb-2">Location:</h5>
                  <p className="text-gray-400">New Delhi, India</p>
                </div>
                <div>
                  <h5 className="text-white font-medium mb-2">Phone:</h5>
                  <p className="text-gray-400">+91 9650812527</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}