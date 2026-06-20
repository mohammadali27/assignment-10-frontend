// src/pages/Pricing.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PricePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center py-12 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">Upgrade to Premium</h1>
        <p className="text-gray-400">
          Unlock high-quality private prompts and supercharge your AI
          productivity.
        </p>
      </div>

      {/* Pricing Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-sm w-full text-center shadow-xl"
      >
        <span className="bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          Lifetime Pro
        </span>
        <div className="my-6">
          <span className="text-5xl font-extrabold">$5</span>
          <span className="text-gray-400 font-medium"> /one-time</span>
        </div>

        {/* Features List */}
        <ul className="text-left space-y-4 mb-8 text-gray-300">
          <li className="flex items-center gap-2">
            ✅ Access to all Private (Premium) Prompts
          </li>
          <li className="flex items-center gap-2">
            ✅ Unlimited Prompt Creation (No 3-prompt limit)
          </li>
          <li className="flex items-center gap-2">
            ✅ Copy, Bookmark & Review premium content
          </li>
          <li className="flex items-center gap-2">✅ 24/7 Priority Support</li>
        </ul>

        {/* Action Button */}
        <button
          onClick={() => navigate("/payment")} // পেমেন্ট পেজে রিডাইরেক্ট করবে
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 px-6 rounded-xl transition duration-200 shadow-lg shadow-emerald-500/20"
        >
          Subscribe Now
        </button>
      </motion.div>
    </div>
  );
};

export default Pricing;
