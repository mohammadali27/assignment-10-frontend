"use client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@heroui/react";
import { useState } from "react";
import { signOut, useSession } from "@/lib/auth-client";
import { motion } from "motion/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending } = useSession();
  const HandelSignOut = async () => {
    await signOut();
  };
  console.log(session, isPending);
  const user = session?.user;
  const box = {
    width: 100,
    height: 100,
    backgroundColor: "var(--hue-3)",
    borderRadius: 5,
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50  mx-auto">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4 bg-gradient-to-r from-indigo-950/80 via-purple-950/90 to-slate-950/80 backdrop-blur-xl border border-purple-500/20 shadow-xl shadow-purple-500/10 ">
        {/* Logo */}
        <Button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </Button>
        <Link href="/" className="text-3xl font-bold">
          <span className="">
            <motion.div className="flex" whileTap={{ scale: 0.8 }}>
              {/* <Image
              className="h-10 w-auto object-contain"
              src="/images/logosite.png"
              alt="logo"
              height={200}
              width={200}
            /> */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="pqGradient" x1="0" y1="0" x2="32" y2="32">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#EF4444" />
                  </linearGradient>
                </defs>

                <path
                  d="M8 22L4 28"
                  stroke="url(#pqGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                <path
                  d="M6 10C11 10 15 12 18 16C14 16 10 14 6 10Z"
                  fill="url(#pqGradient)"
                />

                <rect
                  x="16"
                  y="14"
                  width="6"
                  height="6"
                  rx="1"
                  fill="url(#pqGradient)"
                />
                <rect
                  x="10"
                  y="20"
                  width="6"
                  height="6"
                  rx="1"
                  fill="url(#pqGradient)"
                />
                <rect
                  x="18"
                  y="22"
                  width="6"
                  height="6"
                  rx="1"
                  fill="url(#pqGradient)"
                />
              </svg>
              <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent font-bold">
                PromptQuarry
              </span>
            </motion.div>
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10 text-sm text-gray-300">
          <motion.div className="" whileTap={{ scale: 0.8 }}>
            <Link href="/jobs">All Prompts</Link>
          </motion.div>

          <Link href="/das" className="hover:text-white transition">
            <motion.div className="" whileTap={{ scale: 0.8 }}>
              Dashboard
            </motion.div>
          </Link>

          <Link href="/price" className="hover:text-white transition">
            <motion.div className="" whileTap={{ scale: 0.8 }}>
              <span className="">Pricing</span>
            </motion.div>
          </Link>
          <Link href="/create-prompt" className="hover:text-white transition">
            <motion.div className="" whileTap={{ scale: 0.8 }}>
              <span className="">+ Create Prompt</span>
            </motion.div>
          </Link>

          <div className="h-5 w-px bg-gray-600" />

          {user ? (
            <>
              Hi {user.name} !
              <motion.div className="flex" whileTap={{ scale: 0.8 }}>
                <Button onClick={HandelSignOut} variant="danger-soft">
                  LogOut
                </Button>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                className="flex"
                whileTap={{ scale: 0.8 }}
              ></motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="">
                <Link
                  href="/signUp"
                  className="text-indigo-400 hover:text-indigo-300 transition"
                >
                  Sign In
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="">
                <Link
                  href="/signUp"
                  className="rounded-xl bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-500 transition"
                >
                  Get Started
                </Link>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
