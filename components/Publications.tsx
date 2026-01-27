"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { publications } from "@/lib/data";

export default function Publications() {
  if (publications.length === 0) {
    return null;
  }

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        {/* Publications Title */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="border-2 border-black dark:border-white px-8 py-4 flex items-center gap-4">
            <FileText className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white uppercase tracking-wider">
              Publications
            </h2>
          </div>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 border-2 border-purple-200 dark:border-pink-500/30 shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">{pub.title}</h3>
              <div className="flex flex-wrap items-center gap-4 text-gray-700 dark:text-gray-300 mb-3">
                <span className="font-semibold">{pub.venue}</span>
                <span className="text-gray-500 dark:text-gray-500">•</span>
                <span>{pub.date}</span>
              </div>
              {pub.description && (
                <p className="text-gray-600 dark:text-gray-400 mt-4 mb-4 leading-relaxed">{pub.description}</p>
              )}
              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-md"
                >
                  <span>View Research Paper</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
