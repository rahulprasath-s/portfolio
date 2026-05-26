"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Light Gray Background */}
        <motion.div
          className="relative flex flex-col justify-center overflow-hidden bg-slate-50 px-8 py-24 sm:px-12 lg:px-16 dark:bg-slate-950"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(20,184,166,0.12),transparent_32%)]" />
          {/* Main Content */}
          <motion.div
            className="relative z-10 flex flex-1 flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.p
              className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-blue-700 dark:text-cyan-300 sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hi, I am
            </motion.p>
            
            <motion.h1
              className="mb-5 text-5xl font-black leading-[0.92] tracking-tight text-slate-950 dark:text-white sm:text-6xl xl:text-7xl 2xl:text-8xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {personalInfo.name.split(' ')[0]}
              <br />
              {personalInfo.name.split(' ').slice(1).join(' ')}
            </motion.h1>

            <motion.p
              className="mb-12 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {personalInfo.title}
            </motion.p>

            {/* Social Media Icons */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {personalInfo.email && (
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/85 shadow-lg shadow-slate-900/10 transition-all hover:border-blue-300 hover:shadow-xl dark:border-white/10 dark:bg-white/10 dark:hover:border-cyan-300/50"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-6 h-6 text-slate-950 dark:text-white" />
                </motion.a>
              )}
              {personalInfo.github && (
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/85 shadow-lg shadow-slate-900/10 transition-all hover:border-blue-300 hover:shadow-xl dark:border-white/10 dark:bg-white/10 dark:hover:border-cyan-300/50"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-6 h-6 text-slate-950 dark:text-white" />
                </motion.a>
              )}
              {personalInfo.linkedin && (
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/85 shadow-lg shadow-slate-900/10 transition-all hover:border-blue-300 hover:shadow-xl dark:border-white/10 dark:bg-white/10 dark:hover:border-cyan-300/50"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-6 h-6 text-slate-950 dark:text-white" />
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side - Dark Background with Profile Picture */}
        <motion.div
          className="relative flex items-center justify-center overflow-hidden bg-slate-950 px-8 py-24 sm:px-12 lg:px-16"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.28),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.22),transparent_36%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px]" />
          
          {/* Profile Picture */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 via-blue-500/25 to-teal-300/25 blur-3xl animate-pulse" />
              <div className="absolute -inset-5 rounded-full border border-white/10" />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.45)] ring-8 ring-white/5">
                <Image
                  src="/profile-picture.jpg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.a
              href="#about"
              className="flex flex-col items-center text-white/60 transition-colors hover:text-white"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm mb-2 uppercase tracking-wider">Scroll</span>
              <ArrowDown className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Diagonal divider on large screens */}
      <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-50" />
    </section>
  );
}
