"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "@/lib/data";

export default function Achievements() {
  if (achievements.length === 0) {
    return null;
  }

  return (
    <section id="achievements" className="bg-[#0b0b0b] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Achievements Title */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#151515] px-8 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
            <Trophy className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-[0.18em] text-white">
              Achievements
            </h2>
          </div>
        </motion.div>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="rounded-3xl border border-white/10 bg-[#151515] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition-all hover:border-orange-500/40 hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-extrabold text-white">{achievement.title}</h3>
                  {achievement.organization && (
                    <p className="text-white/58 mt-1">{achievement.organization}</p>
                  )}
                </div>
                <div className="mt-2 md:mt-0">
                  {achievement.result && (
                    <span className="inline-block rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow-md shadow-orange-500/20">
                      {achievement.result}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/42 mb-3">
                <span>{achievement.date}</span>
              </div>
              <p className="text-white/58 leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
