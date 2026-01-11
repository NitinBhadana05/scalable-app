"use client";

import axios from "axios";

export default function LogoutButton() {
  const logout = async () => {
    await axios.post("/api/auth/logout");
    window.location.href = "/login";
  };

  return (
    <button
      onClick={logout}
      className="bg-red-600 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
  );
}
