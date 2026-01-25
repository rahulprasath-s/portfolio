"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
  if (certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Award className="w-10 h-10 text-primary" />
          Certifications & Workshops
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-lg p-6 border border-border shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <h3 className="text-lg font-bold text-primary mb-2">{cert.title}</h3>
              <p className="text-foreground/80">{cert.issuer}</p>
              {cert.date && (
                <p className="text-foreground/60 text-sm mt-2">{cert.date}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

