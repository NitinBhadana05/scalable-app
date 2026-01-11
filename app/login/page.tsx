"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await axios.post("/api/auth/login", { email, password });
      window.location.href = "/dashboard";
    } catch (err: any) {
      setError(err.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 px-4">
      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl space-y-5"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back 👋
        </h1>

        {error && (
          <p className="text-red-600 text-sm text-center">{error}</p>
        )}

      <input
  type="email"
  placeholder="Email"
  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>

<input
  type="password"
  placeholder="Password"
  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>


        <button
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-600 font-semibold">
            Register
          </Link>
        </p>
      </motion.form>
    </div>
  );
}
