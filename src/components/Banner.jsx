import { Search, MapPin } from "lucide-react";

export default function BannerPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-700 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-md">
          <span>💼</span>
          <span className="font-semibold text-white">50,000+</span>
          NEW JOBS THIS MONTH
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
          Find Your Dream Job Today
        </h1>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search Box */}
        <div className="mx-auto flex max-w-4xl flex-col overflow-hidden rounded-2xl border border-gray-800 bg-[#0f0f12] md:flex-row">
          <div className="flex flex-1 items-center gap-3 px-5 py-4">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
            />
          </div>

          <div className="hidden w-px bg-gray-800 md:block" />

          <div className="flex flex-1 items-center gap-3 px-5 py-4">
            <MapPin size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
            />
          </div>

          <button className="m-2 flex items-center justify-center rounded-xl bg-indigo-600 px-6 text-white transition hover:bg-indigo-500">
            <Search size={20} />
          </button>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
          <span className="text-gray-500">Trending Position</span>

          {["Product Designer", "AI Engineering", "DevOps Engineer"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full border border-gray-700 bg-white/5 px-4 py-2 text-gray-300"
              >
                {tag}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
