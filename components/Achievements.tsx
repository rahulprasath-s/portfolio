"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "@/lib/data";

export default function Achievements() {
  if (achievements.length === 0) {
    return null;
  }

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="container mx-auto max-w-4xl">
        {/* Achievements Title */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 rounded-2xl border border-slate-900/10 bg-white/80 px-8 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/15 dark:bg-white/5">
            <Trophy className="w-8 h-8 text-amber-500 dark:text-amber-300" />
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white uppercase tracking-[0.18em]">
              Achievements
            </h2>
          </div>
        </motion.div>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition-all hover:border-amber-300/70 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-amber-300/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">{achievement.title}</h3>
                  {achievement.organization && (
                    <p className="text-slate-700 dark:text-slate-300 mt-1">{achievement.organization}</p>
                  )}
                </div>
                <div className="mt-2 md:mt-0">
                  {achievement.result && (
                    <span className="inline-block rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-sm font-bold text-white shadow-md shadow-amber-500/20">
                      {achievement.result}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-3">
                <span>{achievement.date}</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
