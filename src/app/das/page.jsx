"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// ইউজারের আপলোড করা ডামি প্রম্পট ডেটা
const myPrompts = [
  {
    id: 1,
    title: "Expert SEO Blog Post Writer",
    tool: "ChatGPT",
    status: "Public",
    copies: 142,
  },
  {
    id: 6,
    title: "Python Data Analysis Script Creator",
    tool: "ChatGPT",
    status: "Private",
    copies: 89,
  },
  {
    id: 13,
    title: "SQL Query Optimizer & Explainer",
    tool: "ChatGPT",
    status: "Private",
    copies: 230,
  },
];

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("my-prompts");

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-28 pb-16 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
      {/* ব্যাকগ্রাউন্ড পার্পল গ্লো */}
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      {/* ১. লেফট সাইডবার (Sidebar Navigation) */}
      <div className="w-full md:w-64 shrink-0">
        <div className="bg-slate-900/40 border border-purple-500/10 rounded-2xl p-4 sticky top-28 backdrop-blur-xl">
          <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800/60">
            <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-lg text-white">
              H
            </div>
            <div>
              <h2 className="text-sm font-bold">Hridoy</h2>
              <span className="text-[10px] text-purple-400 font-semibold bg-purple-500/10 px-2 py-0.5 rounded-md uppercase">
                Pro Member
              </span>
            </div>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab("my-prompts")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition ${
                activeTab === "my-prompts"
                  ? "bg-purple-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-slate-800/40"
              }`}
            >
              📋 My Prompts
            </button>
            <button
              onClick={() => setActiveTab("favorites")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition ${
                activeTab === "favorites"
                  ? "bg-purple-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-slate-800/40"
              }`}
            >
              ⭐ Bookmarks
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition ${
                activeTab === "analytics"
                  ? "bg-purple-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-slate-800/40"
              }`}
            >
              ⚡ Analytics
            </button>
          </nav>
        </div>
      </div>

      {/* ২. রাইট মেইন কন্টেন্ট এরিয়া */}
      <div className="flex-1">
        {activeTab === "my-prompts" && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* স্ট্যাটস কার্ড সেকশন */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-900/30 border border-slate-800/80 p-5 rounded-2xl">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                  Total Prompts
                </p>
                <h3 className="text-2xl font-extrabold mt-1 text-purple-400">
                  {myPrompts.length}
                </h3>
              </div>
              <div className="bg-slate-900/30 border border-slate-800/80 p-5 rounded-2xl">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                  Total Copies
                </p>
                <h3 className="text-2xl font-extrabold mt-1 text-emerald-400">
                  461
                </h3>
              </div>
              <div className="bg-slate-900/30 border border-slate-800/80 p-5 rounded-2xl">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                  Monthly Views
                </p>
                <h3 className="text-2xl font-extrabold mt-1 text-amber-400">
                  1.2k
                </h3>
              </div>
            </div>

            {/* হেডার ও ক্রিয়েট বাটন */}
            <div className="flex items-center justify-between pt-4">
              <div>
                <h1 className="text-xl font-bold">My Engineered Prompts</h1>
                <p className="text-xs text-gray-400 mt-0.5">
                  Manage and edit your published prompt templates.
                </p>
              </div>
              <Link
                href="/create-prompt"
                className="rounded-xl bg-purple-600 px-4 py-2 text-white font-medium hover:bg-purple-500 transition text-xs"
              >
                + Create New
              </Link>
            </div>

            {/* প্রম্পট লিস্ট টেবিল/কার্ড */}
            <div className="bg-slate-900/20 border border-purple-500/10 rounded-2xl overflow-hidden">
              <div className="p-4 bg-slate-900/40 border-b border-slate-800/60 grid grid-cols-12 text-xs font-bold uppercase tracking-wider text-gray-400">
                <div className="col-span-6">Prompt Name</div>
                <div className="col-span-2 text-center">AI Tool</div>
                <div className="col-span-2 text-center">Visibility</div>
                <div className="col-span-2 text-right">Copies</div>
              </div>

              <div className="divide-y divide-slate-900">
                {myPrompts.map((prompt) => (
                  <div
                    key={prompt.id}
                    className="p-4 grid grid-cols-12 items-center text-sm hover:bg-slate-900/20 transition"
                  >
                    <div className="col-span-6 font-semibold text-gray-200 truncate pr-4">
                      {prompt.title}
                    </div>
                    <div className="col-span-2 text-center">
                      <span className="text-[10px] font-bold bg-slate-800 text-purple-400 px-2 py-0.5 rounded-md">
                        {prompt.tool}
                      </span>
                    </div>
                    <div className="col-span-2 text-center">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          prompt.status === "Public"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-amber-500/10 text-amber-400"
                        }`}
                      >
                        {prompt.status}
                      </span>
                    </div>
                    <div className="col-span-2 text-right text-gray-400 font-mono">
                      {prompt.copies}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "favorites" && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center py-16 bg-slate-900/20 border border-slate-900 rounded-2xl"
          >
            <p className="text-gray-500 text-sm">
              You haven't bookmarked any prompts yet.
            </p>
          </motion.div>
        )}

        {activeTab === "analytics" && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center py-16 bg-slate-900/20 border border-slate-900 rounded-2xl"
          >
            <p className="text-gray-500 text-sm">
              Analytics graphs will be unlocked in production build.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
