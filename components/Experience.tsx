"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";

export default function Experience() {
  if (experiences.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="relative overflow-hidden bg-[#0b0b0b] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(249,115,22,0.10),transparent_30%)]" />
      <div className="container mx-auto max-w-6xl">
        {/* Experience Title */}
        <motion.div
          className="relative z-10 flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl border border-white/10 bg-[#151515] px-8 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-[0.18em] text-white">
              Experience
            </h2>
          </div>
        </motion.div>

        <div className="relative z-10">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-500/60 to-white/10 transform md:-translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
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
                    <h3 className="text-2xl font-extrabold text-white">{exp.role}</h3>
                    <p className="mt-1 font-semibold text-white/62">
                      {exp.company}
                      {exp.employmentType && (
                        <span className="text-white/42"> · {exp.employmentType}</span>
                      )}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-white/42 mt-3 md:justify-end">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-2 text-sm text-white/42 mt-2 md:justify-end">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="md:w-1/2 md:pl-8">
                    <div className="rounded-3xl border border-white/10 bg-[#151515] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition-all hover:border-orange-500/40 hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
                      <ul className="space-y-2">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start text-white/58">
                            <span className="text-orange-500 mr-2 font-bold">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => {
                            const colors = [
                              "bg-orange-500/10 text-orange-400 border-orange-500/20",
                              "bg-white/5 text-white/58 border-white/10",
                              "bg-orange-500/10 text-orange-400 border-orange-500/20",
                            ];
                            return (
                              <span
                                key={i}
                                className={`px-3 py-1 text-xs rounded-full border font-medium ${colors[i % colors.length]}`}
                              >
                                {tech}
                              </span>
                            );
                          })}
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
