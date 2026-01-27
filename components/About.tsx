"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-4xl">
        {/* About Me Title */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="border-2 border-black dark:border-white px-8 py-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white uppercase tracking-wider">
              About Me
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            {personalInfo.bio}
          </p>
        </motion.div>

        {personalInfo.location && (
          <motion.div
            className="mt-12 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="px-6 py-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20 dark:border-purple-500/20">
              <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1">Location</span>
              <p className="text-black dark:text-white font-semibold">{personalInfo.location}</p>
            </div>
            {personalInfo.email && (
              <div className="px-6 py-4 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-lg border border-pink-500/20 dark:border-orange-500/20">
                <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1">Email</span>
                <p className="text-black dark:text-white font-semibold break-all">{personalInfo.email}</p>
              </div>
            )}
            {personalInfo.phone && (
              <div className="px-6 py-4 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-lg border border-green-500/20 dark:border-blue-500/20">
                <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1">Phone</span>
                <p className="text-black dark:text-white font-semibold">{personalInfo.phone}</p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
