"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Manage Your Tasks <br />
            <span className="text-yellow-300">Smarter & Faster</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90">
            A modern, secure, full-stack Todo application built with
            Next.js, authentication, and a powerful dashboard.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow-lg"
              >
                Get Started 🚀
              </motion.button>
            </Link>

            <Link href="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-white text-white font-semibold rounded-xl"
              >
                Login
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE - CARD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
        >
          <h2 className="text-white text-2xl font-bold mb-4">
            Why this app?
          </h2>

          <ul className="space-y-3 text-white/90">
            <li>✅ Secure Authentication (JWT)</li>
            <li>✅ Protected Dashboard</li>
            <li>✅ Full CRUD Todo Management</li>
            <li>✅ Responsive & Animated UI</li>
            <li>✅ Production-Ready Architecture</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
}
