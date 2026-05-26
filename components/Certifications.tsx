"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
  if (certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        {/* Certifications Title */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 rounded-2xl border border-slate-900/10 bg-white/80 px-8 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/15 dark:bg-white/5">
            <Award className="w-8 h-8 text-teal-600 dark:text-teal-300" />
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white uppercase tracking-[0.18em]">
              Certifications & Workshops
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const accents = [
              "before:bg-blue-500",
              "before:bg-teal-500",
              "before:bg-amber-500",
              "before:bg-cyan-500",
              "before:bg-orange-500",
            ];
            return (
              <motion.div
                key={index}
                className={`relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition-all before:absolute before:inset-x-0 before:top-0 before:h-1 hover:border-blue-300/70 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-cyan-300/40 ${accents[index % accents.length]}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-lg font-extrabold text-slate-950 dark:text-white mb-2">{cert.title}</h3>
                <p className="text-slate-700 dark:text-slate-300">{cert.issuer}</p>
                {cert.date && (
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">{cert.date}</p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
