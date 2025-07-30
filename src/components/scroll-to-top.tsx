"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setshow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setshow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTOp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="scroll-to-top"
          onClick={scrollToTOp}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0, y: 40 }}
          className="fixed bottom-6 right-6 z-50 rounded-full p-3 bg-blue-600 text-white shadow-lg hover:bg-blue-900/80"
        >
          <ChevronUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
