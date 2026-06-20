"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  // সামাজিক যোগাযোগ মাধ্যমের আইকন ও লিংক (Latest X logo রিকোয়ারমেন্টসহ)
  const socialLinks = [
    {
      name: "X (Twitter)",
      href: "https://x.com",
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com",
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.48 static 0-.197-.007-.72-.011-1.413-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-gray-400 py-12 px-6  mx-auto rounded-t-3xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* ব্র্যান্ড সেকশন */}
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <defs>
                <linearGradient
                  id="footerGradient"
                  x1="0"
                  y1="0"
                  x2="32"
                  y2="32"
                >
                  <stop offset="0%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#EF4444" />
                </linearGradient>
              </defs>
              <path
                d="M8 22L4 28"
                stroke="url(#footerGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M6 10C11 10 15 12 18 16C14 16 10 14 6 10Z"
                fill="url(#footerGradient)"
              />
              <rect
                x="16"
                y="14"
                width="6"
                height="6"
                rx="1"
                fill="url(#footerGradient)"
              />
              <rect
                x="10"
                y="20"
                width="6"
                height="6"
                rx="1"
                fill="url(#footerGradient)"
              />
            </svg>
            <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent font-bold text-xl">
              PromptQuarry
            </span>
          </Link>
          <p className="text-sm text-gray-500 leading-relaxed">
            The ultimate ecosystem for AI engineering prompts. Discover,
            benchmark, and scale your automated workflows.
          </p>
        </div>

        {/* এক্সপ্লোর লিংক (Explore AI Tools) */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Marketplace
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/jobs?search=ChatGPT"
                className="hover:text-white transition"
              >
                ChatGPT Prompts
              </Link>
            </li>
            <li>
              <Link
                href="/jobs?search=Midjourney"
                className="hover:text-white transition"
              >
                Midjourney Prompts
              </Link>
            </li>
            <li>
              <Link
                href="/jobs?search=Claude"
                className="hover:text-white transition"
              >
                Claude Prompts
              </Link>
            </li>
            <li>
              <Link href="/jobs" className="hover:text-white transition">
                All Prompts
              </Link>
            </li>
          </ul>
        </div>

        {/* কোম্পানি লিংক */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Platform
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/price" className="hover:text-white transition">
                Pricing Plans
              </Link>
            </li>
            <li>
              <Link href="/company" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* নিউজলেটার / সাবস্ক্রিপশন পার্ট */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Stay Updated
          </h3>
          <p className="text-xs text-gray-500 mb-4">
            Subscribe to receive trending weekly prompts.
          </p>
          <form className="flex gap-2 bg-slate-900 border border-slate-800 p-1.5 rounded-xl">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-xs text-white px-2 focus:outline-none w-full"
              required
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium py-1.5 px-3 rounded-lg transition"
            >
              Join
            </motion.button>
          </form>
        </div>
      </div>

      {/* নিচের ফুটার কপিরাইট এবং সোশ্যাল মিডিয়া বার */}
      <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} PromptQuarry. All rights reserved. Built
          for AI Community.
        </p>

        {/* সোশ্যাল আইকন অ্যানিমেশন সহ */}
        <div className="flex items-center gap-4 text-gray-500">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              whileHover={{ scale: 1.2, color: "#ffffff" }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-white transition cursor-pointer"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
