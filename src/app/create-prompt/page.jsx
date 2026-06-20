"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const CreatePrompt = () => {
  const router = useRouter();

  // ফর্ম স্টেট ম্যানেজমেন্ট
  const [formData, setFormData] = useState({
    title: "",
    aiTool: "ChatGPT", // Default select
    visibility: "public", // Default visibility
    description: "",
    promptText: "",
  });

  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState(["AI", "Productivity"]); // ইনিশিয়াল কিছু ট্যাগ

  // ইনপুট চেঞ্জ হ্যান্ডলার
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ট্যাগ যোগ করার লজিক (Enter চাপলে বা কমা দিলে ট্যাগ অ্যাড হবে)
  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const trimmedInput = tagInput.trim().replace(",", "");
      if (trimmedInput && !tags.includes(trimmedInput)) {
        setTags([...tags, trimmedInput]);
        setTagInput("");
      }
    }
  };

  // ট্যাগ রিমুভ করার লজিক
  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  // ফর্ম সাবমিট হ্যান্ডলার (অ্যাসাইনমেন্টের ব্যাকএন্ড API এর সাথে কানেক্ট করার জন্য)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullPromptData = {
      ...formData,
      tags,
      createdAt: new Date().toISOString(),
    };

    console.log("Submitting Prompt Data:", fullPromptData);

    // এখানে আপনার fetch/axios POST রিকোয়েস্ট হবে (যেমন: fetch('/api/prompts', ...))
    // সাবমিট সফল হওয়ার পর অল প্রম্পটস পেজে রিডাইরেক্ট করবে:
    // router.push('/jobs');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-28 pb-16 px-4 flex justify-center items-center">
      {/* ব্যাকগ্রাউন্ড গ্লো */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-900/60 border border-purple-500/10 rounded-3xl p-6 md:p-10 max-w-2xl w-full backdrop-blur-xl shadow-2xl shadow-purple-950/20"
      >
        {/* হেডার */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
            Share Your Engineering Prompt
          </h1>
          <p className="text-sm text-gray-400">
            Contribute to the community or save it privately to your dashboard.
          </p>
        </div>

        {/* ফর্ম শুরু */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ১. প্রম্পট টাইটেল */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              Prompt Title
            </label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Ultimate SEO Blog Post Writer"
              className="w-full bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-xl px-4 py-3 text-sm focus:outline-none transition"
            />
          </div>

          {/* ২. এআই টুল এবং ভিজিবিলিটি (Grid Layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                Select AI Tool
              </label>
              <select
                name="aiTool"
                value={formData.aiTool}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-xl px-4 py-3 text-sm focus:outline-none transition cursor-pointer text-gray-300"
              >
                <option value="ChatGPT">ChatGPT</option>
                <option value="Midjourney">Midjourney</option>
                <option value="Claude">Claude</option>
                <option value="Gemini">Gemini</option>
                <option value="Stable Diffusion">Stable Diffusion</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                Visibility
              </label>
              <select
                name="visibility"
                value={formData.visibility}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-xl px-4 py-3 text-sm focus:outline-none transition cursor-pointer text-gray-300"
              >
                <option value="public">
                  🌍 Public (Everyone can see & copy)
                </option>
                <option value="private">🔒 Private (Premium Users Only)</option>
              </select>
            </div>
          </div>

          {/* ৩. ছোট বর্ণনা */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              Short Description
            </label>
            <input
              type="text"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              placeholder="Briefly explain what this prompt does..."
              className="w-full bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-xl px-4 py-3 text-sm focus:outline-none transition"
            />
          </div>

          {/* ৪. মেইন প্রম্পট টেক্সট এরিয়া */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              The Prompt Instruction
            </label>
            <textarea
              name="promptText"
              required
              rows={5}
              value={formData.promptText}
              onChange={handleChange}
              placeholder="Act as an expert... [Paste your high-quality prompt here]"
              className="w-full bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-xl px-4 py-3 text-sm focus:outline-none transition font-mono"
            />
          </div>

          {/* ৫. ডাইনামিক ট্যাগ ইনপুট */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              Tags (Press Enter or Comma to add)
            </label>
            <div className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2 flex flex-wrap gap-2 items-center focus-within:border-purple-500 transition">
              {/* রেন্ডার হওয়া ট্যাগসমূহ */}
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-medium px-2.5 py-1 rounded-lg flex items-center gap-1.5"
                >
                  #{tag}
                  <button
                    type="button"
                    onClick={() => removeTag(index)}
                    className="hover:text-red-400 text-gray-500 font-bold focus:outline-none"
                  >
                    ×
                  </button>
                </span>
              ))}
              {/* ট্যাগ লেখার ইনপুট ফিল্ড */}
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
                placeholder={tags.length === 0 ? "e.g., Coding, Writing" : ""}
                className="bg-transparent flex-1 min-w-[120px] text-sm text-white focus:outline-none py-1 px-2"
              />
            </div>
          </div>

          {/* সাবমিট বাটন */}
          <div className="pt-4 flex justify-end gap-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-3 rounded-xl border border-slate-800 hover:bg-slate-950 text-gray-400 hover:text-white transition text-sm font-medium"
            >
              Cancel
            </button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-95 text-white font-bold py-3 px-8 rounded-xl transition shadow-lg shadow-purple-600/20 text-sm"
            >
              Publish Prompt
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default CreatePrompt;
