"use client";

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function ContactSection() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/940892c9293a370782e88104cc7c9eca", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New contact from ${name}`,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      setTimeout(() => {
        setError("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium tracking-widest text-blue-500 uppercase mb-1">Contact Me</h2>
          <h3 className="text-4xl font-bold text-white mb-8 cursor-highlight">Get In Touch</h3>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <motion.div variants={itemVariants} className="bg-gray-800 p-8 rounded-xl h-full">
                <h4 className="text-xl font-bold text-white mb-6">Contact Information</h4>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1 text-blue-500">
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
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-white font-medium mb-1">Location</h5>
                      <p className="text-gray-400">8668 Kuwadzana Phase 3 ,Dzivarasekwa, Harare, Zimbabwe</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1 text-blue-500">
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
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-white font-medium mb-1">Phone</h5>
                      <p className="text-gray-400">+91 9650812527</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1 text-blue-500">
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
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-white font-medium mb-1">Email</h5>
                      <a href="mailto:mazvoverelivingstone@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">mazvoverelivingstone@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h5 className="text-white font-medium mb-4">Follow Me</h5>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/PresidentLivingstone" 
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 text-white hover:bg-blue-600 transition-colors"
                    >
                      <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        alt="GitHub"
                        className="w-6 h-6"
                      />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/livingstone-mazvovere" 
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 text-white hover:bg-blue-600 transition-colors"
                    >
                      <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                        alt="LinkedIn"
                        className="w-6 h-6"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="md:col-span-3">
              <div className="bg-gray-800 p-8 rounded-xl">
                <h4 className="text-xl font-bold text-white mb-6">Send Message</h4>
                
                {error && (
                  <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-300 p-4 rounded-lg mb-6">
                    <div className="flex items-center">
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
                        className="mr-2"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      <span>{error}</span>
                    </div>
                  </div>
                )}
                
                {isSubmitted ? (
                  <div className="bg-green-500 bg-opacity-20 border border-green-500 text-green-300 p-4 rounded-lg">
                    <div className="flex items-center">
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
                        className="mr-2"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span>Your message has been sent successfully!</span>
                    </div>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-3 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-3 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                          placeholder="Your email"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                        <textarea 
                          id="message"
                          name="message" 
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                          rows={5}
                          className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-3 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                      
                      <div>
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </div>
                          ) : 'Send Message'}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
