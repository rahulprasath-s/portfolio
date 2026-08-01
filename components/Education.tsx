"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  if (education.length === 0) {
    return null;
  }

  return (
    <section id="education" className="relative overflow-hidden bg-[#0b0b0b] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(249,115,22,0.10),transparent_30%)]" />
      <div className="container mx-auto max-w-6xl">
        {/* Education Title */}
        <motion.div
          className="relative z-10 flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl border border-white/10 bg-[#151515] px-8 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-[0.18em] text-white">
              Education
            </h2>
          </div>
        </motion.div>

        <div className="relative z-10">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-500/60 to-white/10 transform md:-translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={`${edu.institution}-${edu.degree}`}
                className="relative pl-12 md:pl-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 w-6 h-6 bg-orange-500 rounded-full transform md:-translate-x-1/2 -translate-y-1 z-10 border-4 border-[#0b0b0b] shadow-lg shadow-orange-500/20" />

                <div className="md:flex md:items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <h3 className="text-2xl font-extrabold text-white">{edu.degree}</h3>
                    <p className="mt-1 font-semibold text-white/62">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-sm text-white/42 mt-3 md:justify-end">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                  </div>

                  <div className="md:w-1/2 md:pl-8">
                    <div className="rounded-3xl border border-white/10 bg-[#151515] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition-all hover:border-orange-500/40 hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
                      {edu.description && (
                        <div className="flex items-start text-white/58">
                          <span className="text-orange-500 mr-2 font-bold">•</span>
                          <p className="leading-relaxed">{edu.description}</p>
                        </div>
                      )}
                      {edu.field && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="px-3 py-1 text-xs rounded-full border border-orange-500/20 bg-orange-500/10 font-medium text-orange-400">
                            {edu.field}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
