"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "@/lib/data";

export default function Achievements() {
  if (achievements.length === 0) {
    return null;
  }

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Trophy className="w-10 h-10 text-primary" />
          Achievements
        </motion.h2>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-secondary/50 rounded-lg p-6 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">{achievement.title}</h3>
                  {achievement.organization && (
                    <p className="text-foreground/80 mt-1">{achievement.organization}</p>
                  )}
                </div>
                <div className="mt-2 md:mt-0">
                  {achievement.result && (
                    <span className="px-4 py-2 bg-primary text-background rounded-lg font-semibold">
                      {achievement.result}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
                <span>{achievement.date}</span>
              </div>
              <p className="text-foreground/80">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

