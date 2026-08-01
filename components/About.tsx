"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b0b0b] px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(249,115,22,0.10),transparent_30%)]" />
      <div className="container mx-auto max-w-6xl">
        {/* About Me Title */}
        <motion.div
          className="relative z-10 flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl border border-white/10 bg-[#151515] px-8 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-[0.18em] text-white">
              About Me
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 grid overflow-hidden rounded-3xl border border-white/10 bg-[#151515] shadow-[0_18px_60px_rgba(0,0,0,0.28)] lg:grid-cols-[0.9fr_1.1fr]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col justify-center border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r">
            <span className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Professional summary
            </span>
            <p className="text-base leading-relaxed text-white/68 sm:text-lg">
              {personalInfo.bio}
            </p>
          </div>

          <ul className="divide-y divide-white/10">
            {personalInfo.bioHighlights.map((highlight, index) => (
              <li
                key={highlight.label}
                className="grid gap-2 p-6 sm:grid-cols-[8rem_1fr] sm:gap-5 sm:px-8"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/[0.12] text-xs font-black text-orange-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-extrabold text-white">
                    {highlight.label}
                  </span>
                </div>
                <p className="pl-10 text-sm leading-relaxed text-white/55 sm:pl-0">
                  {highlight.text}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        {personalInfo.location && (
          <motion.div
            className="relative z-10 mt-12 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="rounded-2xl border border-white/8 bg-white/[0.035] px-6 py-4 shadow-sm">
              <span className="text-xs uppercase tracking-[0.18em] text-white/35 block mb-1">Location</span>
              <p className="font-bold text-white">{personalInfo.location}</p>
            </div>
            {personalInfo.email && (
              <div className="rounded-2xl border border-white/8 bg-white/[0.035] px-6 py-4 shadow-sm">
                <span className="text-xs uppercase tracking-[0.18em] text-white/35 block mb-1">Email</span>
                <p className="break-all font-bold text-white">{personalInfo.email}</p>
              </div>
            )}
            {personalInfo.phone && (
              <div className="rounded-2xl border border-white/8 bg-white/[0.035] px-6 py-4 shadow-sm">
                <span className="text-xs uppercase tracking-[0.18em] text-white/35 block mb-1">Phone</span>
                <p className="font-bold text-white">{personalInfo.phone}</p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
