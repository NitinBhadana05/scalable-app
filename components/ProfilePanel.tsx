"use client";

import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";

type Profile = { name: string; email: string };

export default function ProfilePanel({ onClose }: { onClose: () => void }) {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    axios.get("/api/profile").then((res) => setProfile(res.data));
  }, []);

  return (
    <motion.aside
      initial={{ x: -320 }}
      animate={{ x: 0 }}
      exit={{ x: -320 }}
      className="fixed top-0 left-0 h-full w-80 bg-[#0f0f1a] border-r border-white/10 p-6 z-50"
    >
      <button
        onClick={onClose}
        className="mb-6 text-sm text-gray-400 hover:text-white"
      >
        ← Close
      </button>

      {profile && (
        <>
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-black text-2xl font-bold mb-4">
            {profile.name[0]}
          </div>

          <p className="text-lg font-semibold">{profile.name}</p>
          <p className="text-sm text-gray-400">{profile.email}</p>
        </>
      )}
    </motion.aside>
  );
}
