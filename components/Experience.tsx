"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";

export default function Experience() {
  if (experiences.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Experience Title */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="border-2 border-black dark:border-white px-8 py-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white uppercase tracking-wider">
              Experience
            </h2>
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2 rounded-full" />

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
                <div className="absolute left-2 md:left-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full transform md:-translate-x-1/2 -translate-y-1 z-10 border-4 border-white dark:border-gray-900 shadow-lg" />

                <div className="md:flex md:items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-black dark:text-white">{exp.role}</h3>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">{exp.company}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2 md:justify-end">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                  </div>

                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-black dark:border-white shadow-lg">
                      <ul className="space-y-2">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                            <span className="text-blue-600 dark:text-blue-400 mr-2 font-bold">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => {
                            const colors = [
                              "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
                              "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
                              "bg-pink-500/10 text-pink-700 dark:text-pink-400 border-pink-500/20",
                            ];
                            return (
                              <span
                                key={i}
                                className={`px-3 py-1 text-xs rounded-full border ${colors[i % colors.length]}`}
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
