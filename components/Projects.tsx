"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/data";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("All");

  if (projects.length === 0) {
    return null;
  }

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category || "Other")))];

  // Filter projects
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => (p.category || "Other") === filter);

  const getFallbackAccent = (category?: string) => {
    switch (category) {
      case "Developer Tools":
        return "from-emerald-500/25 via-cyan-500/20 to-blue-500/25";
      case "3D Visualization":
        return "from-orange-500/25 via-rose-500/20 to-fuchsia-500/25";
      case "Workflow Automation":
        return "from-violet-500/25 via-indigo-500/20 to-sky-500/25";
      case "Computer Vision":
        return "from-amber-500/25 via-orange-500/20 to-red-500/25";
      default:
        return "from-blue-500/20 via-purple-500/20 to-pink-500/20";
    }
  };

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.12),transparent_34%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent" />
      <div className="container mx-auto max-w-7xl">
        {/* Projects Title */}
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-blue-700 dark:text-cyan-300">
            Selected Work
          </p>
          <div className="inline-flex rounded-2xl border border-slate-900/10 bg-white/80 px-7 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.10)] backdrop-blur dark:border-white/15 dark:bg-white/5 dark:shadow-[0_18px_70px_rgba(0,0,0,0.28)]">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white uppercase tracking-[0.18em]">
              Projects
            </h2>
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
            A focused set of AI, automation, and visualization builds with real-world constraints, practical tooling, and clean execution.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
                filter === category
                  ? "bg-slate-950 text-white shadow-lg shadow-slate-900/20 scale-105 dark:bg-white dark:text-slate-950 dark:shadow-cyan-500/10"
                  : "border border-slate-300/80 bg-white/75 text-slate-700 shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-blue-400 hover:text-slate-950 hover:shadow-md dark:border-white/15 dark:bg-white/5 dark:text-slate-300 dark:hover:border-cyan-300/60 dark:hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition-all hover:border-blue-300/70 hover:shadow-[0_24px_70px_rgba(15,23,42,0.16)] dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_18px_60px_rgba(0,0,0,0.24)] dark:hover:border-cyan-300/40"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                onClick={() => setSelectedProject(project.id)}
                layout
              >
                <div className={`relative w-full h-52 bg-gradient-to-br ${getFallbackAccent(project.category)} overflow-hidden`}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col justify-between p-5">
                      <span className="self-start rounded-full border border-white/30 bg-black/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                        {project.category || "Project"}
                      </span>
                      <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-white/70">Featured Build</p>
                        <h3 className="mt-2 max-w-[14rem] text-2xl font-bold leading-tight text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                  <span className="absolute left-4 top-4 max-w-[calc(100%-2rem)] truncate rounded-full border border-white/25 bg-slate-950/55 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
                    {project.category || "Project"}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-extrabold leading-tight text-slate-950 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-cyan-300">{project.title}</h3>
                  <p className="mb-5 text-sm leading-6 text-slate-600 line-clamp-2 dark:text-slate-400">
                    {project.description}
                  </p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => {
                      const colors = [
                        "bg-blue-500/10 text-blue-700 ring-blue-500/10 dark:text-cyan-300 dark:ring-cyan-300/10",
                        "bg-teal-500/10 text-teal-700 ring-teal-500/10 dark:text-teal-300 dark:ring-teal-300/10",
                        "bg-amber-500/10 text-amber-700 ring-amber-500/10 dark:text-amber-300 dark:ring-amber-300/10",
                      ];
                      return (
                        <span
                          key={i}
                          className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${colors[i % colors.length]}`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                    {project.technologies.length > 3 && (
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500 ring-1 ring-slate-200 dark:bg-white/10 dark:text-slate-400 dark:ring-white/10">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between gap-3 border-t border-slate-200 pt-4 dark:border-white/10">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 transition-colors group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white">
                      View details
                    </span>
                    <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-500 transition-colors hover:text-blue-700 dark:text-slate-400 dark:hover:text-cyan-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-500 transition-colors hover:text-blue-700 dark:text-slate-400 dark:hover:text-cyan-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-900"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find((p) => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div className="p-6 sm:p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-3xl font-extrabold text-slate-950 dark:text-white">{project.title}</h3>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                    <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">{project.longDescription || project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => {
                        const colors = [
                          "bg-blue-500/10 text-blue-700 dark:text-cyan-300 border-blue-500/20 dark:border-cyan-300/20",
                          "bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-500/20 dark:border-teal-300/20",
                          "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20 dark:border-amber-300/20",
                          "bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20 dark:border-orange-300/20",
                          "bg-green-500/10 text-green-700 dark:text-green-300 border-green-500/20 dark:border-green-300/20",
                        ];
                        return (
                          <span
                            key={i}
                            className={`px-3 py-1 text-sm rounded-full border font-medium ${colors[i % colors.length]}`}
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-6 py-3 font-semibold text-slate-900 transition-colors hover:bg-slate-200 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                        >
                          <Github className="w-5 h-5" />
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-700 hover:to-cyan-600"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
