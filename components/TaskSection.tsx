"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Task = {
  _id: string;
  title: string;
  completed: boolean;
};

export default function TaskSection() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");

  // ---------------- FETCH TASKS ----------------
  const fetchTasks = async () => {
    const res = await axios.get("/api/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // ---------------- ADD TASK ----------------
  const addTask = async () => {
    if (!title.trim()) return;
    await axios.post("/api/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  // ---------------- DELETE TASK ----------------
  const deleteTask = async (id: string) => {
    await axios.delete(`/api/tasks/${id}`);
    fetchTasks();
  };

  // ---------------- TOGGLE COMPLETE ----------------
  const toggleTask = async (task: Task) => {
    await axios.put(`/api/tasks/${task._id}`, {
      completed: !task.completed,
    });
    fetchTasks();
  };

  // ---------------- UPDATE TASK ----------------
  const updateTask = async (id: string) => {
    if (!editTitle.trim()) return;

    await axios.put(`/api/tasks/${id}`, {
      title: editTitle,
    });

    setEditingId(null);
    setEditTitle("");
    fetchTasks();
  };

  // ---------------- UI ----------------
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="  max-w-[450px] min-h-[480px] bg-white/5 backdrop-blur-xl border border-white/10  rounded-2xl p-8 shadow-2xl center mx-auto"
    >
      {/* HEADING */}
      <div className="mb-8   text-center">
        <h2 className="text-2xl font-bold text-white">Your Tasks</h2>
        <p className="text-gray-400 mt-1">
          Organize your work in one place
        </p>
      </div>

      {/* ADD TASK */}
      <div className="flex gap-3 mb-8">
        <input
          className="flex-1 px-4 py-3 rounded-xl bg-[#0f1117] border border-cyan-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          placeholder="Create a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={addTask}
          className="px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:opacity-90 transition"
        >
          Add
        </button>
      </div>

      {/* TASK CARDS */}
      <div className=" grid  gap-6">
        {tasks.map((task) => (
          <motion.div
            key={task._id}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative rounded-xl p-5 bg-[#151823] border border-cyan-400/25 shadow-[0_0_25px_rgba(34,211,238,0.15)]"
          >
            {/* NEON TOP LINE */}
            <div className="absolute top-0 left-0  w-full h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-t-xl" />

            {/* TITLE / EDIT INPUT */}
            {editingId === task._id ? (
              <input
                className="mt-3 w-full px-3 py-2 rounded-lg bg-[#0f1117] border border-cyan-400/30 text-white"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                autoFocus
              />
            ) : (
              <p
                onClick={() => toggleTask(task)}
                className={`mt-3 text-lg font-medium cursor-pointer break-words overflow-hidden ${ task.completed ? "line-through text-gray-400" : "text-white" }`}
              >
                {task.title}
              </p>  
            )}

            {/* FOOTER */}
            <div className="mt-6 flex justify-between items-center">
              <span
                className={`text-xs px-3 py-1 rounded-full ${ task.completed ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400" }`}
              >
                {task.completed ? "Completed" : "Pending"}
              </span>

              <div className="flex gap-3">
                {editingId === task._id ? (
                  <button
                    onClick={() => updateTask(task._id)}
                    className="text-cyan-400 hover:text-cyan-300 text-sm"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditingId(task._id);
                      setEditTitle(task.title);
                    }}
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    Edit
                  </button>
                )}

                <button
                  onClick={() => deleteTask(task._id)}
                  className="text-red-400 hover:text-red-500 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {tasks.length === 0 && (
        <p className="text-gray-400 text-center mt-10">
          No tasks yet. Add one above ✨
        </p>
      )}
    </motion.div>
  );
}
