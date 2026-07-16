"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0b0b0b] px-4 py-28 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(249,115,22,0.14),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08)_0,transparent_22%,transparent_70%,rgba(255,255,255,0.06)_100%)]" />
      <div className="absolute -left-40 top-0 h-[36rem] w-[36rem] rotate-45 bg-white/[0.03]" />
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-[2rem] border border-white/14 bg-[#121212] shadow-[0_30px_110px_rgba(0,0,0,0.55)] lg:min-h-[680px] lg:grid-cols-[1fr_0.95fr]">
        <motion.div
          className="relative z-20 flex flex-col justify-center px-8 py-14 sm:px-12 lg:px-14 lg:py-16"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.p
              className="mb-3 text-base font-bold text-white/48"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hi, I am
            </motion.p>
            
            <motion.h1
              className="mb-5 text-2xl font-black leading-tight text-white/70 sm:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {personalInfo.name.split(' ')[0]}
              <br />
              {personalInfo.name.split(' ').slice(1).join(' ')}
            </motion.h1>

            <motion.p
              className="mb-8 max-w-xl text-4xl font-black leading-none tracking-tight text-orange-500 sm:text-5xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              AI & Automation Engineer
            </motion.p>

            {/* Social Media Icons */}
            <motion.div
              className="mb-10 flex gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {personalInfo.email && (
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] text-white/48 transition-all hover:border-orange-500/60 hover:text-orange-500"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-4 w-4" />
                </motion.a>
              )}
              {personalInfo.github && (
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] text-white/48 transition-all hover:border-orange-500/60 hover:text-orange-500"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-4 w-4" />
                </motion.a>
              )}
              {personalInfo.linkedin && (
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] text-white/48 transition-all hover:border-orange-500/60 hover:text-orange-500"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-4 w-4" />
                </motion.a>
              )}
            </motion.div>

            <motion.p
              className="max-w-md text-2xl font-black leading-tight text-white sm:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Building AI that drives human efficiency
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex min-h-[360px] items-center justify-center overflow-hidden px-8 pb-16 pt-4 sm:min-h-[440px] sm:px-12 lg:min-h-[500px] lg:px-16 lg:py-16"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute h-[28rem] w-[28rem] rounded-full bg-white/[0.045]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_48%,rgba(249,115,22,0.10),transparent_32%)]" />
          
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative h-72 w-72 sm:h-[24rem] sm:w-[24rem] lg:h-[30rem] lg:w-[30rem]">
              <div className="absolute inset-6 rounded-full bg-[#202020]" />
              <div className="absolute inset-0 rounded-full border border-white/8" />
              <div className="relative h-full w-full overflow-hidden rounded-full grayscale">
                <Image
                  src="/profile-picture.jpg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-center"
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
              className="flex flex-col items-center text-white/35 transition-colors hover:text-orange-500"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm mb-2 uppercase tracking-wider">Scroll</span>
              <ArrowDown className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
