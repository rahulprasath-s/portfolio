"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(59,130,246,0.10),transparent_28%)] dark:bg-[radial-gradient(circle_at_15%_10%,rgba(34,211,238,0.10),transparent_30%)]" />
      <div className="container mx-auto max-w-4xl">
        {/* About Me Title */}
        <motion.div
          className="relative z-10 flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl border border-slate-900/10 bg-white/80 px-8 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/15 dark:bg-white/5">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white uppercase tracking-[0.18em]">
              About Me
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 mb-8 rounded-3xl border border-slate-200/80 bg-white/85 p-6 text-center shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/[0.06] sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            {personalInfo.bio}
          </p>
        </motion.div>

        {personalInfo.location && (
          <motion.div
            className="relative z-10 mt-12 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="rounded-2xl border border-blue-500/15 bg-blue-500/5 px-6 py-4 shadow-sm dark:border-cyan-300/15 dark:bg-cyan-300/5">
              <span className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 block mb-1">Location</span>
              <p className="text-slate-950 dark:text-white font-bold">{personalInfo.location}</p>
            </div>
            {personalInfo.email && (
              <div className="rounded-2xl border border-teal-500/15 bg-teal-500/5 px-6 py-4 shadow-sm dark:border-teal-300/15 dark:bg-teal-300/5">
                <span className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 block mb-1">Email</span>
                <p className="text-slate-950 dark:text-white font-bold break-all">{personalInfo.email}</p>
              </div>
            )}
            {personalInfo.phone && (
              <div className="rounded-2xl border border-amber-500/15 bg-amber-500/5 px-6 py-4 shadow-sm dark:border-amber-300/15 dark:bg-amber-300/5">
                <span className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 block mb-1">Phone</span>
                <p className="text-slate-950 dark:text-white font-bold">{personalInfo.phone}</p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
