"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ChevronUp, Mail, Linkedin, Github } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden bg-[#0b0b0b] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.12),transparent_34%)]" />
        <div className="container mx-auto max-w-4xl">
          {/* Contact Title */}
          <motion.div
            className="relative z-10 flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl border border-white/10 bg-[#151515] px-8 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-[0.18em] text-white">
                Contact
              </h2>
            </div>
          </motion.div>

          {/* Intro Text */}
          <motion.p
            className="relative z-10 text-center text-white/50 mb-8 text-sm sm:text-base max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I&apos;m always open to discussing new opportunities and interesting projects. Feel free to reach out!
          </motion.p>

          {/* Decorative Separator */}
          <motion.div
            className="relative z-10 flex items-center justify-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="h-px w-16 bg-white/10" />
            <div className="mx-4 w-2 h-2 rounded-full bg-orange-500" />
            <div className="h-px flex-1 max-w-xs bg-white/10" />
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="relative z-10 mx-auto max-w-2xl space-y-6 rounded-3xl border border-white/10 bg-[#151515] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold mb-2 text-white uppercase tracking-[0.14em]"
              >
                Enter Your Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition-colors focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold mb-2 text-white uppercase tracking-[0.14em]"
              >
                Enter Your Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition-colors focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-bold mb-2 text-white uppercase tracking-[0.14em]"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition-colors focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold mb-2 text-white uppercase tracking-[0.14em]"
              >
                Your Message *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition-colors focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="rounded-lg bg-orange-500 px-10 py-3 font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-400 disabled:opacity-50"
                whileHover={{ scale: status === "loading" ? 1 : 1.05 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.95 }}
              >
                <span className="flex items-center gap-2">
                  {status === "loading" ? (
                    "Sending..."
                  ) : status === "success" ? (
                    "Sent!"
                  ) : status === "error" ? (
                    "Error - Try Again"
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit
                    </>
                  )}
                </span>
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#0b0b0b] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Back to Top */}
          <motion.div
            className="flex flex-col items-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              onClick={scrollToTop}
              className="flex flex-col items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm uppercase tracking-[0.16em] text-white/55 transition-colors hover:border-orange-500/40 hover:text-orange-500"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronUp className="w-6 h-6" />
              <span>Back to Top</span>
            </motion.button>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            className="flex justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {personalInfo.email && (
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="rounded-full border border-white/10 bg-white/5 p-3 text-white/55 transition-colors hover:border-orange-500/40 hover:text-orange-500"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            )}
            {personalInfo.linkedin && (
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-white/55 transition-colors hover:border-orange-500/40 hover:text-orange-500"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            )}
            {personalInfo.github && (
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-white/55 transition-colors hover:border-orange-500/40 hover:text-orange-500"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
            )}
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-center text-white/38 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            © {new Date().getFullYear()} {personalInfo.name} All Rights Reserved.
          </motion.p>
        </div>
      </footer>
    </>
  );
}
