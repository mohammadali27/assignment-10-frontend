import Image from "next/image";
import React from "react";
import { RegisterCompanyModal } from "./RegisterCompainyCard";

/**
 * Standalone, highly reusable card component.
 * You can copy/paste this block to any other page in your project!
 */
export function CompanyCard({ company }) {
  const isApproved = company.status === "APPROVED";

  return (
    <div className="bg-[#161616] border border-[#242424] rounded-2xl p-6 flex flex-col justify-between min-h-[340px] text-zinc-100 hover:border-[#38383a] transition-all">
      <div>
        {/* Header Section */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            {/* Logo container using standard img tag */}
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 overflow-hidden border border-[#2d2d2f] ${company.logoBg || "bg-[#222]"}`}
            >
              {company.logo ? (
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  height={100}
                  width={100}
                  className="w-full h-full object-contain p-2"
                  onError={(e) => {
                    // Fallback to text initials if the image path is broken/missing
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
              ) : null}
              {/* Fallback character */}
              <span className="hidden text-sm font-bold text-zinc-400 uppercase">
                {company.name ? company.name[0] : "C"}
              </span>
            </div>

            {/* Title and category */}
            <div>
              <h3 className="text-lg font-bold tracking-tight text-zinc-100">
                {company.name}
              </h3>
              <p className="text-xs text-zinc-500 font-medium mt-0.5">
                {company.category}
              </p>
            </div>
          </div>

          {/* Status Badge */}
          <span
            className={`text-[10px] font-bold tracking-widest px-2.5 py-0.5 rounded-full border ${
              isApproved
                ? "text-[#22c55e] bg-[#22c55e]/5 border-[#22c55e]/10"
                : "text-[#eab308] bg-[#eab308]/5 border-[#eab308]/10"
            }`}
          >
            {company.status}
          </span>
        </div>

        {/* Description Text */}
        <p className="text-sm text-zinc-400 leading-relaxed font-normal line-clamp-3 mb-6">
          {company.description}
        </p>
      </div>

      {/* Footer metadata & Action link */}
      <div className="pt-5 border-t border-[#222] flex flex-col gap-4">
        <div className="flex items-center justify-between text-xs text-zinc-400">
          {/* Location field */}
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-zinc-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="truncate max-w-[130px]">{company.location}</span>
          </div>

          {/* Range size field */}
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-zinc-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>{company.size}</span>
          </div>
        </div>

        {/* Visit website link */}
        <a
          href={company.website}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white transition-colors w-fit"
        >
          <svg
            className="w-4 h-4 text-zinc-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
          <span>Visit Website</span>
        </a>
      </div>
    </div>
  );
}

// Mock data referencing image paths in your public folder (e.g. public/logos/vercel.png)
const companiesData = [
  {
    id: 1,
    name: "Vercel",
    category: "Technology",
    status: "PENDING",
    description:
      "Vercel is the platform for frontend developers, providing speed and reliability. Experience the best... workflow for React, Next.js, and more.",
    location: "San Francisco",
    size: "201-500 range",
    website: "https://vercel.com",
    logo: "/logos/vercel.png",
    logoBg: "bg-black",
  },
  {
    id: 2,
    name: "Figma",
    category: "Technology",
    status: "APPROVED",
    description:
      "Figma is the collaborative interface design tool — design, prototype, and gather feedback all in one... place. Empowering teams to build better products",
    location: "San Francisco",
    size: "501-1000 range",
    website: "https://figma.com",
    logo: "/logos/figma.png",
    logoBg: "bg-[#1e1e1e]",
  },
  {
    id: 3,
    name: "Enosis Solutions",
    category: "Technology",
    status: "PENDING",
    description:
      "ENOSIS - Your trusted Software Development Partner. A top tier software development team assisting owners and decision makers to implement",
    location: "Dhaka, Bangladesh",
    size: "51-200 range",
    website: "https://enosis.com",
    logo: "/logos/enosis.png",
    logoBg: "bg-white",
  },
];

export default function CompanyCards() {
  return (
    <div className="bg-[#0b0b0c] min-h-screen py-16 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        {/* Recreated Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-zinc-900 pb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              My Companies
            </h1>
            <p className="text-sm text-zinc-500 mt-1">
              Manage your registered companies and their verification states.
            </p>
          </div>

          {/* Register a Company Button */}
          <div>
            <RegisterCompanyModal />
          </div>
        </div>

        {/* Company Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {companiesData.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
}
