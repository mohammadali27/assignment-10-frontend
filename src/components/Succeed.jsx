import React from "react";
import {
  Search,
  TrendingUp,
  BarChart3,
  Bookmark,
  MousePointerClick,
  FileText,
  Hexagon,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
    icon: Search,
  },
  {
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
    icon: TrendingUp,
  },
  {
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
    icon: BarChart3,
  },
  {
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
    icon: Bookmark,
  },
  {
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
    icon: MousePointerClick,
  },
  {
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
    icon: FileText,
  },
  {
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
    icon: Hexagon,
  },
  {
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
    icon: ArrowUpRight,
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#0b0b0c] text-white py-20 px-6 sm:px-12 lg:px-16 min-h-screen flex flex-col justify-center font-sans">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-purple-500 uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-sm inline-block"></span>
            Features Job
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-sm inline-block"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-100 max-w-2xl mx-auto leading-[1.15]">
            Everything you need <br /> to succeed
          </h2>
        </div>

        {/* Features Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex items-start gap-4 group">
                {/* Icon Container with soft gradient & borders */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800/80 flex items-center justify-center text-purple-400 shadow-lg group-hover:border-purple-500/30 transition-all duration-300">
                  <IconComponent className="w-6 h-6 stroke-[1.5]" />
                </div>

                {/* Text Content */}
                <div className="space-y-1 pt-1">
                  <h3 className="text-base font-semibold text-zinc-100 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
