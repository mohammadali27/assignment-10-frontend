"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  // অ্যাসাইনমেন্টের রিকোয়ারমেন্ট অনুযায়ী র‍্যান্ডম বা পপুলার ট্রেন্ডিং ট্যাগস
  const trendingTags = [
    {
      name: "ChatGPT",
      color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    },
    {
      name: "Midjourney v6",
      color: "border-sky-500/30 bg-sky-500/10 text-sky-400",
    },
    {
      name: "Claude 3.5",
      color: "border-orange-500/30 bg-orange-500/10 text-orange-400",
    },
    {
      name: "Copywriting",
      color: "border-purple-500/30 bg-purple-500/10 text-purple-400",
    },
    {
      name: "Python Coding",
      color: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // সার্চ কোয়েরি সহ অল প্রম্পটস পেজে পাঠাবে (ব্যাকএন্ড কুয়েরির জন্য)
      router.push(`/jobs?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center bg-slate-950 overflow-hidden pt-16">
      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট (Modern SaaS Look) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        {/* টপ ছোট ব্যাজ অ্যানিমেশন */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 text-xs text-gray-300 mb-6 shadow-xl"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          🚀 Explore over 10,000+ Premium AI Prompts
        </motion.div>

        {/* মেইন হেডিং অ্যানিমেশন */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]"
        >
          Unlock the Power of AI with <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Perfect Engineering Prompts
          </span>
        </motion.h1>

        {/* সাবটাইটেল বর্ণনা */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Discover, copy, and benchmark top-tier prompts for ChatGPT,
          Midjourney, Claude, and Gemini. Boost your automation and workflow
          instantly.
        </motion.p>

        {/* সার্চ বার (অ্যাসাইনমেন্টের প্রধান রিকোয়ারমেন্ট) */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSearch}
          className="max-w-2xl mx-auto mb-8 relative bg-slate-900/80 border border-slate-800 p-2 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-2"
        >
          <div className="flex items-center flex-1 pl-3 text-gray-400">
            <svg
              className="h-5 w-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search prompts by title, tags, or AI tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent w-full text-white placeholder-gray-500 focus:outline-none text-sm md:text-base"
            />
          </div>

          {/* CTA Button (Call-To-Action) */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium py-2.5 px-6 rounded-xl transition shadow-lg shadow-purple-500/20 text-sm whitespace-nowrap"
          >
            Find Prompts
          </motion.button>
        </motion.form>

        {/* ট্রেন্ডিং ট্যাগস সেকশন */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 text-sm"
        >
          <span className="text-gray-500 font-medium">Trending Tags:</span>
          {trendingTags.map((tag, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push(`/jobs?search=${tag.name}`)}
              className={`px-3.5 py-1 rounded-lg border text-xs font-medium transition cursor-pointer ${tag.color}`}
            >
              #{tag.name}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* নিচের বর্ডার গ্রাডিয়েন্ট লাইন (UI সৌন্দর্য বাড়ানোর জন্য) */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
    </div>
  );
};

export default Banner;
