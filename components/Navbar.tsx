"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import ProfilePanel from "./ProfilePanel";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const logout = async () => {
    await axios.post("/api/auth/logout");
    window.location.href = "/login";
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex justify-between items-center px-6 py-4 backdrop-blur-xl bg-white/5 border-b border-white/10"
      >
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          TodoNeon ⚡
        </h1>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen(true)}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 text-black font-bold"
          >
            U
          </button>

          <button
            onClick={logout}
            className="text-sm px-4 py-2 rounded-lg bg-red-500/80 hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && <ProfilePanel onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
