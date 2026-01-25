"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  if (education.length === 0) {
    return null;
  }

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GraduationCap className="w-10 h-10 text-primary" />
          Education
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-secondary/50 rounded-lg p-6 border border-border"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">{edu.degree}</h3>
                  <p className="text-foreground/80 font-semibold mt-1">{edu.institution}</p>
                  {edu.field && (
                    <p className="text-foreground/60 text-sm mt-1">{edu.field}</p>
                  )}
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-semibold">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
              </div>
              {edu.description && (
                <p className="text-foreground/80 mt-4">{edu.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

