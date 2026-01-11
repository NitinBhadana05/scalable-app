"use client";

import { motion } from "framer-motion";

export default function NeonBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-[180px] -top-40 -left-40"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[180px] bottom-0 right-0"
      />
    </div>
  );
}
