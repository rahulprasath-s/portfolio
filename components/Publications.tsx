"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { publications } from "@/lib/data";

export default function Publications() {
  if (publications.length === 0) {
    return null;
  }

  return (
    <section id="publications" className="bg-[#0b0b0b] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Publications Title */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#151515] px-8 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
            <FileText className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-[0.18em] text-white">
              Publications
            </h2>
          </div>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              className="rounded-3xl border border-white/10 bg-[#151515] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition-all hover:border-orange-500/40 hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-xl font-extrabold text-white mb-2">{pub.title}</h3>
              <div className="flex flex-wrap items-center gap-4 text-white/58 mb-3">
                <span className="font-semibold">{pub.venue}</span>
                <span className="text-white/28">•</span>
                <span>{pub.date}</span>
              </div>
              {pub.description && (
                <p className="text-white/50 mt-4 mb-4 leading-relaxed">{pub.description}</p>
              )}
              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-400"
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
