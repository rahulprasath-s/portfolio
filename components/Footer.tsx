"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto text-center">
        <motion.p
          className="text-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          © {currentYear} {personalInfo.name}. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}

