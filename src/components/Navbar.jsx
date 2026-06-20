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
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-blue-500 to-white dark:from-gray-900 dark:to-black text-black dark:text-white max-w-7xl mx-auto">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4">
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
          <span className="flex">
            
            <Image src="/images/logo.png" alt="logo" height={100} width={100} />
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10 text-sm text-gray-300">
          <Link href="/jobs">Browse Jobs</Link>

          <Link href="/company" className="hover:text-white transition">
            Company
          </Link>

          <Link href="/pricing" className="hover:text-white transition">
            Pricing
          </Link>

          <div className="h-5 w-px bg-gray-600" />

          {user ? (
            <>
              Hi {user.name} !
              <Button onClick={HandelSignOut} variant="danger">
                LogOut
              </Button>
            </>
          ) : (
            <>
              <Link
                href="/signUp"
                className="text-indigo-400 hover:text-indigo-300 transition"
              >
                Sign In
              </Link>
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
