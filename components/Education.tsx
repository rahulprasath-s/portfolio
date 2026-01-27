"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  if (education.length === 0) {
    return null;
  }

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Education Title */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="border-2 border-black dark:border-white px-8 py-4 flex items-center gap-4">
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white uppercase tracking-wider">
              Education
            </h2>
          </div>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 border-2 border-blue-200 dark:border-purple-500/30 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">{edu.degree}</h3>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold mt-1">{edu.institution}</p>
                  {edu.field && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{edu.field}</p>
                  )}
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold shadow-md inline-block">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
              </div>
              {edu.description && (
                <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">{edu.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
