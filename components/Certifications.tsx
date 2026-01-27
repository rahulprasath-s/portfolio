"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
  if (certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Certifications Title */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="border-2 border-black dark:border-white px-8 py-4 flex items-center gap-4">
            <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white uppercase tracking-wider">
              Certifications & Workshops
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const colors = [
              "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-500/30",
              "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-500/30",
              "from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 border-pink-200 dark:border-pink-500/30",
              "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-500/30",
              "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-500/30",
            ];
            return (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${colors[index % colors.length]} rounded-lg p-6 border-2 shadow-lg hover:shadow-xl transition-all`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">{cert.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{cert.issuer}</p>
                {cert.date && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{cert.date}</p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
