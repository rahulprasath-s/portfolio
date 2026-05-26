"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  if (education.length === 0) {
    return null;
  }

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        {/* Education Title */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 rounded-2xl border border-slate-900/10 bg-white/80 px-8 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/15 dark:bg-white/5">
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-cyan-300" />
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white uppercase tracking-[0.18em]">
              Education
            </h2>
          </div>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition-all hover:border-blue-300/70 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-cyan-300/40"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white">{edu.degree}</h3>
                  <p className="text-slate-700 dark:text-slate-300 font-semibold mt-1">{edu.institution}</p>
                  {edu.field && (
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{edu.field}</p>
                  )}
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-md shadow-slate-900/20 dark:bg-white dark:text-slate-950">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
              </div>
              {edu.description && (
                <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">{edu.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
