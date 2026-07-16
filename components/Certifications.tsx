"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
  if (certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="bg-[#0b0b0b] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Certifications Title */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#151515] px-8 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
            <Award className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-[0.18em] text-white">
              Certifications & Workshops
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const accents = [
              "before:bg-orange-500",
              "before:bg-white/20",
              "before:bg-orange-500",
              "before:bg-white/20",
              "before:bg-orange-500",
            ];
            return (
              <motion.div
                key={index}
                className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[#151515] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition-all before:absolute before:inset-x-0 before:top-0 before:h-1 hover:border-orange-500/40 hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)] ${accents[index % accents.length]}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-lg font-extrabold text-white mb-2">{cert.title}</h3>
                <p className="text-white/58">{cert.issuer}</p>
                {cert.date && (
                  <p className="text-white/42 text-sm mt-2">{cert.date}</p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
