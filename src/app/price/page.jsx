"use client"; // নেক্সট জেএস-এ ক্লায়েন্ট কম্পোনেন্টের জন্য এটি অবশ্যই লাগবে

import React from "react";
import { useRouter } from "next/navigation"; // react-router-dom এর বদলে এটি হবে
import { motion } from "framer-motion";

const PricePage = () => {
  const router = useRouter(); // useNavigate() এর বদলে useRouter()

  // ৩টি কার্ডের ডাটা অবজেক্ট এর অ্যারে
  const pricingPlans = [
    {
      title: "Free Starter",
      badge: "Basic",
      price: "$0",
      period: " /forever",
      features: [
        "✅ Access to all Public Prompts",
        "✅ Limit: Maximum 3 Prompt Creations",
        "❌ No Access to Private (Premium) Prompts",
        "❌ Cannot view or copy premium content",
      ],
      buttonText: "Current Plan",
      action: () => router.push("/"),
      isPremium: false,
    },
    {
      title: "Creator Pro",
      badge: "Popular",
      price: "$2",
      period: " /month",
      features: [
        "✅ Access to all Public Prompts",
        "✅ Add up to 20 Prompts on Marketplace",
        "✅ Advanced Analytics Dashboard",
        "❌ Limited Premium Prompts access",
      ],
      buttonText: "Upgrade Creator",
      action: () => router.push("/payment"),
      isPremium: true,
    },
    {
      title: "Lifetime Pro",
      badge: "Best Value",
      price: "$5",
      period: " /one-time",
      features: [
        "✅ Access to all Private (Premium) Prompts",
        "✅ Unlimited Prompt Creation (No limit)",
        "✅ Copy, Bookmark & Review premium content",
        "✅ 24/7 Priority Support & Analytics",
      ],
      buttonText: "Subscribe Now",
      action: () => router.push("/payment"),
      isPremium: true,
      highlight: true, // এই কার্ডটিকে একটু আলাদা বা হাইলাইটেড দেখানোর জন্য
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center py-24 px-4">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Choose Your Perfect Plan
        </h1>
        <p className="text-gray-400 max-w-md mx-auto">
          Unlock high-quality private prompts, increase creation limits, and
          supercharge your AI productivity.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-4">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }} // কার্ডগুলো একটির পর একটি সুন্দর অ্যানিমেশন হবে
            className={`rounded-2xl p-8 text-center shadow-xl flex flex-col justify-between border ${
              plan.highlight
                ? "bg-slate-900 border-purple-500 relative ring-2 ring-purple-500/20"
                : "bg-slate-900/60 border-slate-800"
            }`}
          >
            {/* যদি হাইলাইটেড কার্ড হয় তবে উপরে একটা ছোট রিবন থাকবে */}
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Recommended
              </span>
            )}

            <div>
              {/* Badge */}
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
                  plan.highlight
                    ? "bg-purple-500/10 text-purple-400"
                    : "bg-slate-800 text-gray-400"
                }`}
              >
                {plan.badge}
              </span>

              {/* Title */}
              <h2 className="text-2xl font-bold mt-4 mb-2">{plan.title}</h2>

              {/* Price */}
              <div className="my-6">
                <span className="text-5xl font-extrabold">{plan.price}</span>
                <span className="text-gray-400 font-medium">{plan.period}</span>
              </div>

              {/* Features List */}
              <ul className="text-left space-y-4 mb-8 text-sm text-gray-300 border-t border-slate-800/60 pt-6">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <button
              onClick={plan.action}
              className={`w-full font-bold py-3 px-6 rounded-xl transition duration-200 shadow-lg ${
                plan.highlight
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white shadow-purple-500/10"
                  : plan.price === "$0"
                    ? "bg-slate-800 hover:bg-slate-700 text-gray-300"
                    : "bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-emerald-500/10"
              }`}
            >
              {plan.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricePage;
