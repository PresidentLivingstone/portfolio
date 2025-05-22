"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const prefersReducedMotion = useReducedMotion();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/PresidentLivingstone",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/livingstone-mazvovere",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    },
  ];

  return (
    <footer className="bg-gray-950 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Livingstone Mazvovere
          </p>
          <p className="text-gray-500 text-sm">All rights reserved</p>
        </div>
      </div>
    </footer>

  );
}
