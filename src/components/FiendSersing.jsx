import { MapPin, Clock } from "lucide-react";

const jobs = Array(6).fill({
  title: "Frontend Developer",
  description:
    "Showcase your commitment to diversity and inclusion by highlighting initiatives",
  location: "New York, USA",
  type: "Hybrid",
  salary: "€25-€40/hour",
});

export default function JobSection() {
  return (
    <section className="bg-black py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs uppercase tracking-[4px] text-indigo-500">
            Smart Job Discovery
          </p>

          <h2 className="mx-auto max-w-2xl text-4xl font-bold text-white md:text-5xl">
            The roles you'd never
            <br />
            find by searching
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]"
            >
              <h3 className="mb-3 text-2xl font-semibold text-white">
                {job.title}
              </h3>

              <p className="mb-6 text-sm leading-6 text-zinc-400">
                {job.description}
              </p>

              <div className="mb-3 flex flex-wrap gap-2">
                <span className="flex items-center gap-1 rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-300">
                  <MapPin size={12} />
                  {job.location}
                </span>

                <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-300">
                  {job.type}
                </span>
              </div>

              <div className="mb-8">
                <span className="flex w-fit items-center gap-1 rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-300">
                  <Clock size={12} />
                  {job.salary}
                </span>
              </div>

              <button className="group flex items-center gap-2 text-sm font-medium text-white">
                Apply Now
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-14 text-center">
          <button className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200">
            View all job open
          </button>
        </div>
      </div>
    </section>
  );
}
