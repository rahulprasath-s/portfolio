"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  if (skills.length === 0) {
    return null;
  }

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categories = Object.keys(skillsByCategory);

  return (
    <section id="skills" className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(20,184,166,0.10),transparent_30%)] dark:bg-[radial-gradient(circle_at_85%_10%,rgba(34,211,238,0.10),transparent_32%)]" />
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="relative z-10 flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl border border-slate-900/10 bg-white/80 px-8 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/15 dark:bg-white/5">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white uppercase tracking-[0.18em]">
              Skills
            </h2>
          </div>
        </motion.div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              className="rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition-all hover:border-blue-300/70 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-cyan-300/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <h3 className="mb-5 text-xl font-extrabold text-slate-950 dark:text-white">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillsByCategory[category].map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-700 ring-1 ring-blue-500/10 dark:bg-cyan-300/10 dark:text-cyan-300 dark:ring-cyan-300/10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
