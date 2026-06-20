"use client";

import React, { useState } from "react";
import { Crown, TrendingUp, Zap, Plus, ArrowRight } from "lucide-react";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly"); // 'monthly' or 'yearly'

  const plans = [
    {
      name: "Starter",
      icon: Crown,
      priceMonthly: 0,
      priceYearly: 0,
      subtitle: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      highlighted: false,
    },
    {
      name: "Growth",
      icon: TrendingUp,
      priceMonthly: 17,
      priceYearly: 13, // ~25% off (12.75 rounded)
      subtitle: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      highlighted: true, // White CTA button
    },
    {
      name: "Premium",
      icon: Zap,
      priceMonthly: 99,
      priceYearly: 74, // ~25% off (74.25 rounded)
      subtitle: "Start building your insights hub:",
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 sm:px-12 lg:px-16 min-h-screen flex flex-col justify-center font-sans">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-indigo-500 uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-sm inline-block"></span>
            Pricing
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-sm inline-block"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100 max-w-2xl mx-auto leading-[1.15] mb-8">
            Pay for the leverage,
            <br />
            not the listings
          </h2>

          {/* Toggle Switch */}
          <div className="inline-flex items-center bg-zinc-900/80 border border-zinc-800 p-1.5 rounded-full backdrop-blur-sm">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                billingCycle === "monthly"
                  ? "bg-white text-black shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-1.5 text-sm font-medium rounded-full flex items-center gap-2 transition-all duration-200 ${
                billingCycle === "yearly"
                  ? "bg-white text-black shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span>Yearly</span>
              <span
                className={`px-1.5 py-0.5 text-[10px] font-bold rounded-full ${
                  billingCycle === "yearly"
                    ? "bg-fuchsia-600 text-white"
                    : "bg-fuchsia-600/20 text-fuchsia-400"
                }`}
              >
                25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const currentPrice =
              billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly;

            return (
              <div
                key={index}
                className={`rounded-3xl p-8 bg-[#0d0d0e]/60 border flex flex-col justify-between transition-all duration-300 relative ${
                  plan.highlighted
                    ? "border-zinc-700/60 shadow-xl shadow-zinc-950/50 ring-1 ring-zinc-800"
                    : "border-zinc-900"
                }`}
              >
                <div>
                  {/* Card Top Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-fuchsia-400">
                        <IconComponent className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <h3 className="text-xl font-medium text-zinc-200 tracking-wide">
                        {plan.name}
                      </h3>
                    </div>

                    {/* Price Display */}
                    <div className="flex items-baseline text-white">
                      <span className="text-3xl font-bold">
                        ${currentPrice}
                      </span>
                      <span className="text-xs text-zinc-500 ml-1">/month</span>
                    </div>
                  </div>

                  {/* Feature Subheading */}
                  <p className="text-sm font-medium text-zinc-400 mb-5">
                    {plan.subtitle}
                  </p>

                  {/* Feature List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-zinc-500"
                      >
                        <div className="flex-shrink-0 w-4 h-4 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center mt-0.5">
                          <Plus className="w-3 h-3 text-zinc-400 stroke-[2.5]" />
                        </div>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <button
                  className={`w-full py-3 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-white text-black hover:bg-zinc-200 shadow-md"
                      : "bg-zinc-900 text-zinc-300 border border-zinc-800/80 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  <span>Choose This Plan</span>
                  <ArrowRight className="w-4 h-4 stroke-[2]" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
