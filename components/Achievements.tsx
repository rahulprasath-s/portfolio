"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "@/lib/data";

export default function Achievements() {
  if (achievements.length === 0) {
    return null;
  }

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        {/* Achievements Title */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="border-2 border-black dark:border-white px-8 py-4 flex items-center gap-4">
            <Trophy className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white uppercase tracking-wider">
              Achievements
            </h2>
          </div>
        </motion.div>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 border-2 border-yellow-200 dark:border-orange-500/30 shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white">{achievement.title}</h3>
                  {achievement.organization && (
                    <p className="text-gray-700 dark:text-gray-300 mt-1">{achievement.organization}</p>
                  )}
                </div>
                <div className="mt-2 md:mt-0">
                  {achievement.result && (
                    <span className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg font-semibold shadow-md inline-block">
                      {achievement.result}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                <span>{achievement.date}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
