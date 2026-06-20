"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const initialPrompts = [
  {
    id: 1,
    title: "Expert SEO Blog Post Writer",
    description:
      "Generates high-ranking SEO articles with perfect keyword density, semantic search optimization, and structured markdown headings.",
    tool: "ChatGPT",
    category: "Writing",
    isPremium: false,
    author: "Hridoy",
  },
  {
    id: 2,
    title: "Hyper-Realistic Cyberpunk Character",
    description:
      "V6 prompt for creating stunning, highly detailed cyberpunk aesthetics, neon lighting, and cinematic facial features.",
    tool: "Midjourney",
    category: "Design",
    isPremium: true,
    author: "Anik",
  },
  {
    id: 3,
    title: "Advanced TypeScript Boilerplate Generator",
    description:
      "Creates clean, modern Next.js server component architecture structures with Tailwind and Prisma configured instantly.",
    tool: "Claude",
    category: "Coding",
    isPremium: true,
    author: "Zayan",
  },
  {
    id: 4,
    title: "Social Media Content Calendar AI",
    description:
      "Generates 30 days of highly engaging captions, content hooks, and reel ideas for Instagram and LinkedIn targeting tech audiences.",
    tool: "Gemini",
    category: "Marketing",
    isPremium: false,
    author: "Rahat",
  },
  {
    id: 5,
    title: "Cinematic Sci-Fi Environment Design",
    description:
      "Perfect prompt for architecture and cinematic environmental concept art generation with dramatic scale and futuristic elements.",
    tool: "Midjourney",
    category: "Design",
    isPremium: false,
    author: "Siam",
  },
  {
    id: 6,
    title: "Python Data Analysis Script Creator",
    description:
      "Cleans raw CSV files, analyzes business data trends, handles missing values, and plots beautiful matplotlib graphs flawlessly.",
    tool: "ChatGPT",
    category: "Coding",
    isPremium: true,
    author: "Hridoy",
  },
  {
    id: 7,
    title: "Full SaaS Cold Email Sequence",
    description:
      "High-converting 4-step cold email funnel tailored for B2B startups to book sales meetings with enterprise clients.",
    tool: "Claude",
    category: "Marketing",
    isPremium: false,
    author: "Nodi",
  },
  {
    id: 8,
    title: "Minimalist Vector Logo Concept Creator",
    description:
      "Generates clean, modern, minimalist flat geometric logos suitable for tech startups and luxury branding.",
    tool: "Midjourney",
    category: "Design",
    isPremium: true,
    author: "Sajid",
  },
  {
    id: 9,
    title: "React Native Bug Debugger & Fixer",
    description:
      "Paste your broken mobile app code and error log to receive an optimized solution, explanation, and best-practice refactor.",
    tool: "ChatGPT",
    category: "Coding",
    isPremium: false,
    author: "Tanvir",
  },
  {
    id: 10,
    title: "YouTube Script Writer with High Hook Rate",
    description:
      "Creates viral-potential educational and tech YouTube scripts complete with visual cues, transitions, and pacing tips.",
    tool: "Gemini",
    category: "Writing",
    isPremium: true,
    author: "Fahim",
  },
  {
    id: 11,
    title: "UX/UI Landing Page Copywriter",
    description:
      "Generates psychological hook copy based on the AIDA framework for SaaS hero sections, feature grids, and pricing tables.",
    tool: "Claude",
    category: "Marketing",
    isPremium: false,
    author: "Ritu",
  },
  {
    id: 12,
    title: "Photorealistic Food & Product Photography",
    description:
      "Commercial-grade studio lightning prompt for advertising materials, close-up shots with macro details and soft bokeh background.",
    tool: "Midjourney",
    category: "Design",
    isPremium: false,
    author: "Anik",
  },
  {
    id: 13,
    title: "SQL Query Optimizer & Explainer",
    description:
      "Transforms slow, unoptimized multi-join SQL queries into lightning-fast queries with indexed execution path breakdowns.",
    tool: "ChatGPT",
    category: "Coding",
    isPremium: true,
    author: "Hridoy",
  },
  {
    id: 14,
    title: "Personal Gym & Diet Planner Coach",
    description:
      "Custom macro-nutrient calculation and progressive overload workout structures based on specific user weight and goals.",
    tool: "Gemini",
    category: "Other",
    isPremium: false,
    author: "Mahi",
  },
  {
    id: 15,
    title: "Creative Sci-Fi Novel World Builder",
    description:
      "Develops intricate fictional lore, government structures, magic/tech systems, and core conflicts for fantasy or sci-fi writing.",
    tool: "Claude",
    category: "Writing",
    isPremium: true,
    author: "Zayan",
  },
  {
    id: 16,
    title: "Regex Pattern Generator & Translator",
    description:
      "Describe what pattern you want to match in plain English and instantly get the exact regex string and full step-by-step logic.",
    tool: "ChatGPT",
    category: "Coding",
    isPremium: false,
    author: "Imran",
  },
  {
    id: 17,
    title: "Anime Style Character Keyart Generator",
    description:
      "Stunning modern anime illustration keyart prompts with vibrant color gradients, dynamic action poses, and clean linework.",
    tool: "Midjourney",
    category: "Design",
    isPremium: true,
    author: "Siam",
  },
  {
    id: 18,
    title: "E-commerce Product Description Generator",
    description:
      "Creates persuasive Amazon, Shopify, or Etsy product copy highlighting benefits, specs, and rich keywords for SEO rankings.",
    tool: "Gemini",
    category: "Writing",
    isPremium: false,
    author: "Nisha",
  },
  {
    id: 19,
    title: "Docker Container Setup Wizard",
    description:
      "Generates production-ready, security-hardened Dockerfiles and multi-container docker-compose.yml configurations for any tech stack.",
    tool: "ChatGPT",
    category: "Coding",
    isPremium: true,
    author: "Asif",
  },
  {
    id: 20,
    title: "Advanced Financial Market Report Analyzer",
    description:
      "Feed quarterly earning data or market reports to extract key performance metrics, risk factors, and summary talking points.",
    tool: "Claude",
    category: "Other",
    isPremium: true,
    author: "Sajid",
  },
];

export default function AllPromptsPage() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTool, setSelectedTool] = useState("All");

  // হোম পেজের ব্যানার সার্চ ফিল্ড থেকে কি-ওয়ার্ড নিয়ে আসার জন্য useEffect
  useEffect(() => {
    const query = searchParams.get("search");
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  // ফিল্টার করার প্রধান লজিক (Title, Description, Category এবং Tool সার্চ ট্র্যাক করবে)
  const filteredPrompts = initialPrompts.filter((prompt) => {
    const matchesSearch =
      prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTool = selectedTool === "All" || prompt.tool === selectedTool;

    return matchesSearch && matchesTool;
  });

  const aiTools = ["All", "ChatGPT", "Midjourney", "Claude", "Gemini"];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-28 pb-16 px-4">
      {/* গ্লোবাল ডার্ক পার্পল ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* পেজ হেডার ও সার্চ বার সেকশন */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-slate-900 pb-6">
          <div>
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Explore AI Prompts
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Discover {initialPrompts.length} premium & free engineered prompts
              to supercharge your workflow.
            </p>
          </div>

          {/* ইনস্ট্যান্ট সার্চ ইনপুট ফিল্ড */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search prompts or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-indigo-950/20 border border-purple-500/10 focus:border-purple-500 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none transition text-white placeholder-gray-500"
            />
            <svg
              className="h-4 w-4 text-gray-500 absolute left-3.5 top-3.5"
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
          </div>
        </div>

        {/* ফিল্টার ট্যাব বাটনসমূহ */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {aiTools.map((tool, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTool(tool)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide border transition cursor-pointer ${
                selectedTool === tool
                  ? "bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-600/20"
                  : "bg-indigo-950/20 border-purple-500/10 text-gray-400 hover:text-white hover:border-purple-500/30"
              }`}
            >
              {tool}
            </button>
          ))}
        </div>

        {/* কন্টেন্ট গ্রিড */}
        {filteredPrompts.length === 0 ? (
          <div className="text-center py-24 bg-slate-900/10 rounded-3xl border border-slate-900">
            <p className="text-gray-500 text-lg">
              No prompts found matching "{searchQuery}"
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrompts.map((prompt, index) => (
              <motion.div
                key={prompt.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                className="bg-gradient-to-b from-indigo-950/20 to-slate-900/40 border border-purple-500/10 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition shadow-xl hover:shadow-purple-500/5 group"
              >
                <div>
                  {/* কার্ড টপ বার */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold bg-purple-950/60 text-purple-400 border border-purple-500/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {prompt.tool}
                    </span>

                    {prompt.isPremium ? (
                      <span className="text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2.5 py-1 rounded-md uppercase tracking-wider flex items-center gap-1">
                        🔒 Premium
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
                        🌍 Free
                      </span>
                    )}
                  </div>

                  {/* টাইটেল */}
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-purple-400 transition">
                    {prompt.title}
                  </h3>

                  {/* ডেসক্রিপশন */}
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {prompt.description}
                  </p>
                </div>

                {/* কার্ড বটম বার */}
                <div className="border-t border-slate-900/60 pt-4 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase tracking-wide">
                      Contributor
                    </span>
                    <span className="text-xs text-gray-300 font-medium">
                      {prompt.author}
                    </span>
                  </div>

                  {/* ডাইনামিক বাটন লজিক */}
                  <button
                    className={`text-xs font-bold px-4 py-2 rounded-xl transition cursor-pointer ${
                      prompt.isPremium
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-90 text-slate-950 shadow-md shadow-orange-500/10"
                        : "bg-purple-600 hover:bg-purple-500 text-white shadow-md shadow-purple-600/10"
                    }`}
                    onClick={() => {
                      if (prompt.isPremium) {
                        alert(
                          "🔒 This is a premium prompt! Upgrade your plan to unlock full access.",
                        );
                      } else {
                        alert("📋 Prompt template copied to clipboard!");
                      }
                    }}
                  >
                    {prompt.isPremium ? "🔑 Unlock" : "📋 Get Prompt"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
