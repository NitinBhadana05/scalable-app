"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });

      window.location.href = "/login";
    } catch (err: any) {
      setError(err.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 px-4">
      <motion.form
        onSubmit={handleRegister}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl space-y-5"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Create Account 🚀
        </h1>

        {error && (
          <p className="text-red-600 text-sm text-center">{error}</p>
        )}

        <input
  placeholder="Full Name"
  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
  value={name}
  onChange={(e) => setName(e.target.value)}
  required
/>

<input
  type="email"
  placeholder="Email"
  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>

<input
  type="password"
  placeholder="Password"
  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>


        <button
          disabled={loading}
          className="w-full bg-gray-900 hover:bg-gray-800 transition text-white py-3 rounded-lg font-semibold disabled:opacity-50"
        >
          {loading ? "Creating account..." : "Register"}
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-gray-900 font-semibold">
            Login
          </Link>
        </p>
      </motion.form>
    </div>
  );
}
