export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Left Side */}
          <section>
            <h2 className="mb-6 text-2xl font-bold text-white">HireLoop</h2>

            <p className="max-w-xs text-sm leading-7">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>

            <div className="mt-10 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-zinc-900 hover:bg-indigo-600 transition"
              >
                <span>f</span>
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-indigo-600 transition"
              >
                <span>◎</span>
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-zinc-900 hover:bg-indigo-600 transition"
              >
                <span>in</span>
              </a>
            </div>
          </section>

          {/* Product */}
          <nav>
            <h3 className="mb-6 font-semibold text-indigo-400">Product</h3>

            <ul className="space-y-4 text-sm">
              <li>
                <a href="#">Job discovery</a>
              </li>
              <li>
                <a href="#">Worker AI</a>
              </li>
              <li>
                <a href="#">Companies</a>
              </li>
              <li>
                <a href="#">Salary data</a>
              </li>
            </ul>
          </nav>

          {/* Navigation */}
          <nav>
            <h3 className="mb-6 font-semibold text-indigo-400">Navigations</h3>

            <ul className="space-y-4 text-sm">
              <li>
                <a href="#">Help center</a>
              </li>
              <li>
                <a href="#">Career library</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Resources */}
          <nav>
            <h3 className="mb-6 font-semibold text-indigo-400">Resources</h3>

            <ul className="space-y-4 text-sm">
              <li>
                <a href="#">Brand Guideline</a>
              </li>
              <li>
                <a href="#">Newsroom</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 text-sm md:flex-row">
          <p>Copyright 2024 — Programming Hero</p>

          <div className="flex gap-6">
            <a href="#">Terms & Policy</a>
            <a href="#">Privacy Guideline</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
