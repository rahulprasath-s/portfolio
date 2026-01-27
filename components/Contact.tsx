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
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          {/* Contact Title */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-2 border-black dark:border-white px-8 py-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white uppercase tracking-wider">
                Contact
              </h2>
            </div>
          </motion.div>

          {/* Intro Text */}
          <motion.p
            className="text-center text-gray-600 dark:text-gray-400 mb-8 text-sm sm:text-base max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I&apos;m always open to discussing new opportunities and interesting projects. Feel free to reach out!
          </motion.p>

          {/* Decorative Separator */}
          <motion.div
            className="flex items-center justify-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="h-px w-16 bg-gray-400 dark:bg-gray-600" />
            <div className="mx-4 w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full" />
            <div className="h-px flex-1 max-w-xs bg-gray-400 dark:bg-gray-600" />
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 text-black dark:text-white uppercase tracking-wide"
              >
                Enter Your Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-black dark:border-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-black dark:text-white transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2 text-black dark:text-white uppercase tracking-wide"
              >
                Enter Your Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-black dark:border-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-black dark:text-white transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold mb-2 text-black dark:text-white uppercase tracking-wide"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-black dark:border-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-black dark:text-white transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2 text-black dark:text-white uppercase tracking-wide"
              >
                Your Message *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border-2 border-black dark:border-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-black dark:text-white transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="relative px-12 py-3 text-black dark:text-white font-semibold uppercase tracking-wider disabled:opacity-50 transition-opacity"
                whileHover={{ scale: status === "loading" ? 1 : 1.05 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
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
                <div className="absolute left-0 top-0 bottom-0 w-px bg-black dark:bg-white" />
                <div className="absolute right-0 top-0 bottom-0 w-px bg-black dark:bg-white" />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black dark:bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
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
              className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors uppercase tracking-wider text-sm"
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
                className="text-white/80 hover:text-white transition-colors"
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
                className="text-white/80 hover:text-white transition-colors"
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
                className="text-white/80 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
            )}
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-center text-white/60 text-sm"
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
