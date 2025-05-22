"use client";

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects: Project[] = [
    {
      id: 1,
      title: "Brain Tumor Vision",
      description: "An AI-powered system for detecting brain tumors from MRI scans using deep learning. Features include MRI image upload, YOLO-based tumor detection, confidence score display, PDF report generation, and Streamlit UI.",
      image: "/images/3.png",
      tags: ["Streamlit", "OpenCV", "NumPy", "YOLO", "PIL", "FPDF"],
      liveUrl: "https://brain-tumor-vision.streamlit.app/",
      githubUrl: "https://github.com/PresidentLivingstone"
    },
    {
      id: 2,
      title: "Crop Recommendation System",
      description: "ML application suggesting optimal crops based on environmental and soil data. Features include input for soil, climate, location; Decision Tree, Random Forest, SVM, Gradient Boosting models; crop prediction; Flask web app.",
      image: "/images/2.png",
      tags: ["Python", "Scikit-learn", "Flask", "Machine Learning"],
      liveUrl: "https://flask-web-app-ahsu.onrender.com/",
      githubUrl: "https://github.com/PresidentLivingstone"
    },
    {
      id: 3,
      title: "Horizon Tech Website",
      description: "Responsive website for Horizon Tech, showcasing services and projects.Features include a modern design, smooth animations, and a user-friendly interface.",
      image: "/images/1.png",
      tags: ["Vite", "TypeScript", "React", "Tailwind CSS"],
      liveUrl: "https://horizontech112.netlify.app/",
      githubUrl: "https://github.com/PresidentLivingstone"
    },
    {
      id: 4,
      title: "React Movie App",
      description: "Web app for searching and displaying movie information using public APIs.",
      image: "https://images.pexels.com/photos/7991318/pexels-photo-7991318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "JavaScript", "TMDB API"],
      liveUrl: "https://movie-favorite.netlify.app/",
      githubUrl: "https://github.com/PresidentLivingstone"
    },
    {
      id: 5,
      title: "Car Sales Web App",
      description: "Full-stack web application for managing and viewing car listings.",
      image: "https://images.pexels.com/photos/575386/pexels-photo-575386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Django", "Python", "SQLite"],
      liveUrl: "https://github.com/PresidentLivingstone/CarZone_Django",
      githubUrl: "https://github.com/PresidentLivingstone/CarZone_Django"
    },
    {
      id: 6,
      title: "Sentiment Analysis App",
      description: "Web app for analyzing sentiment in user input using advanced NLP models.",
      image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Gradio", "HuggingFace", "Transformers"],
      liveUrl: "https://github.com/PresidentLivingstone/Sentiment_Analysis_HuggingFace_Gradio_Transformers",
      githubUrl: "https://github.com/PresidentLivingstone/Sentiment_Analysis_HuggingFace_Gradio_Transformers"
    },
    {
      id: 7,
      title: "Celebrity Image Classifier",
      description: "Image classification project for recognizing celebrities using deep learning.",
      image: "https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["TensorFlow", "Keras", "OpenCV"],
      liveUrl: "https://cnn-flower-classification.onrender.com/",
      githubUrl: "https://github.com/PresidentLivingstone"
    },
    {
      id: 8,
      title: "Bangalore Housing Price Estimator",
      description: "ML regression project for estimating housing prices using the Bangalore Housing Dataset.",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "Scikit-learn", "Pandas"],
      liveUrl: "https://github.com/PresidentLivingstone/Bangalore-House-Pricing",
      githubUrl: "https://github.com/PresidentLivingstone/Bangalore-House-Pricing"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      id="projects" 
      className="py-24 bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium tracking-widest text-blue-500 uppercase mb-1">My Work</h2>
          <h3 className="text-4xl font-bold text-white mb-8 cursor-highlight">Featured Projects</h3>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard 
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <a 
            href="https://github.com/PresidentLivingstone" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 border border-gray-700 px-6 py-3 rounded-lg transition-colors duration-300"
          >
            <span>View All Projects</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}