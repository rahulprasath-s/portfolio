"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { publications } from "@/lib/data";

export default function Publications() {
  if (publications.length === 0) {
    return null;
  }

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FileText className="w-10 h-10 text-primary" />
          Publications
        </motion.h2>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-lg p-6 border border-border shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
                    <h3 className="text-xl font-bold text-primary mb-2">{pub.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-foreground/80 mb-3">
                      <span className="font-semibold">{pub.venue}</span>
                      <span className="text-foreground/60">•</span>
                      <span>{pub.date}</span>
                    </div>
                    {pub.description && (
                      <p className="text-foreground/80 mt-4 mb-4">{pub.description}</p>
                    )}
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary bg-transparent dark:bg-primary dark:text-white rounded-lg font-semibold hover:bg-primary hover:text-white dark:hover:bg-primary/90 transition-colors"
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

