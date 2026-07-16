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
      className="relative isolate overflow-hidden bg-[#0b0b0b] px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_34%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container mx-auto max-w-7xl">
        {/* Projects Title */}
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
            Selected Work
          </p>
          <div className="inline-flex rounded-2xl border border-white/10 bg-[#151515] px-7 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-[0.18em] text-white">
              Projects
            </h2>
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-white/52">
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
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20 scale-105"
                  : "border border-white/10 bg-white/[0.035] text-white/48 shadow-sm hover:-translate-y-0.5 hover:border-orange-500/50 hover:text-orange-400 hover:shadow-md"
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
                className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-[#151515] shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition-all hover:border-orange-500/40 hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                  <span className="absolute left-4 top-4 max-w-[calc(100%-2rem)] truncate rounded-full border border-white/20 bg-black/55 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                    {project.category || "Project"}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-extrabold leading-tight text-white transition-colors group-hover:text-orange-500">{project.title}</h3>
                  <p className="mb-5 text-sm leading-6 text-white/50 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => {
                      const colors = [
                        "bg-orange-500/10 text-orange-400 ring-orange-500/10",
                        "bg-white/5 text-white/56 ring-white/10",
                        "bg-orange-500/10 text-orange-400 ring-orange-500/10",
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
                      <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/40 ring-1 ring-white/10">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/35 transition-colors group-hover:text-orange-500">
                      View details
                    </span>
                    <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-white/35 transition-colors hover:text-orange-500"
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
                        className="text-white/35 transition-colors hover:text-orange-500"
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
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#151515] shadow-2xl"
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
                      <h3 className="text-3xl font-extrabold text-white">{project.title}</h3>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="rounded-full p-2 text-white/45 transition-colors hover:bg-white/10 hover:text-orange-500"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                    <p className="mb-6 leading-relaxed text-white/58">{project.longDescription || project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => {
                        const colors = [
                          "bg-orange-500/10 text-orange-400 border-orange-500/20",
                          "bg-white/5 text-white/58 border-white/10",
                          "bg-orange-500/10 text-orange-400 border-orange-500/20",
                          "bg-white/5 text-white/58 border-white/10",
                          "bg-orange-500/10 text-orange-400 border-orange-500/20",
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
                          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:border-orange-500/40 hover:text-orange-400"
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
                          className="flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-400"
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
