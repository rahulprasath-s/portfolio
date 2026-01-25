"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";

export default function Experience() {
  if (experiences.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

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
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 -translate-y-1 z-10" />

                <div className="md:flex md:items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                    <p className="text-foreground/80 font-semibold">{exp.company}</p>
                    <div className="flex items-center gap-2 text-sm text-foreground/60 mt-2 md:justify-end">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                  </div>

                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-secondary/50 rounded-lg p-6">
                      <ul className="space-y-2">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-foreground/80 flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
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

