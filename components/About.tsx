"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="prose prose-lg dark:prose-invert max-w-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-foreground/80 text-lg leading-relaxed">
            {personalInfo.bio}
          </p>
        </motion.div>

        {personalInfo.location && (
          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="px-4 py-2 bg-primary/10 rounded-lg">
              <span className="text-sm text-foreground/60">Location</span>
              <p className="text-foreground font-semibold">{personalInfo.location}</p>
            </div>
            {personalInfo.email && (
              <div className="px-4 py-2 bg-primary/10 rounded-lg">
                <span className="text-sm text-foreground/60">Email</span>
                <p className="text-foreground font-semibold">{personalInfo.email}</p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

