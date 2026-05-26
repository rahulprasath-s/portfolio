"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { publications } from "@/lib/data";

export default function Publications() {
  if (publications.length === 0) {
    return null;
  }

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto max-w-4xl">
        {/* Publications Title */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 rounded-2xl border border-slate-900/10 bg-white/80 px-8 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/15 dark:bg-white/5">
            <FileText className="w-8 h-8 text-blue-600 dark:text-cyan-300" />
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white uppercase tracking-[0.18em]">
              Publications
            </h2>
          </div>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              className="rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition-all hover:border-blue-300/70 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-cyan-300/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-xl font-extrabold text-slate-950 dark:text-white mb-2">{pub.title}</h3>
              <div className="flex flex-wrap items-center gap-4 text-slate-700 dark:text-slate-300 mb-3">
                <span className="font-semibold">{pub.venue}</span>
                <span className="text-slate-400 dark:text-slate-500">•</span>
                <span>{pub.date}</span>
              </div>
              {pub.description && (
                <p className="text-slate-600 dark:text-slate-400 mt-4 mb-4 leading-relaxed">{pub.description}</p>
              )}
              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-700 hover:to-cyan-600"
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
