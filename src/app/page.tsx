const principles = [
  {
    number: "01",
    title: "Make eating well easier.",
    description:
      "Shape your routines and environment so better choices require less effort.",
  },
  {
    number: "02",
    title: "Find the change with leverage.",
    description:
      "Focus on the decision that makes several other decisions easier.",
  },
  {
    number: "03",
    title: "Build trust through repetition.",
    description:
      "Create consistent evidence that you can rely on yourself—not another rigid plan.",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#f7f5ef] text-[#171714]">
      {/* Navigation */}
      <header className="absolute inset-x-0 top-0 z-20">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-6 md:px-10 md:py-8"
        >
          <a
            href="#top"
            className="text-base font-semibold tracking-[-0.02em] sm:text-lg"
          >
            Eat Excellence
          </a>

          <a
            href="#contact"
            className="rounded-full border border-black/15 px-4 py-2 text-sm font-medium transition hover:border-black hover:bg-black hover:text-white"
          >
            Work with me
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="mx-auto flex min-h-screen max-w-7xl items-center px-5 py-32 sm:px-6 md:px-10"
      >
        <div className="max-w-5xl">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.24em] text-[#966c18] sm:text-sm">
            Nutrition coaching for real life
          </p>

          <h1 className="max-w-5xl text-[3.4rem] font-semibold leading-[0.96] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            Small changes.
            <span className="block text-[#9b721e]">Bigger results.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#57574f] md:mt-10 md:text-xl">
            Find the few changes that make eating well feel simpler, more
            natural, and easier to sustain.
          </p>

          <a
            href="#leverage"
            className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#171714] px-7 py-3.5 font-medium text-white transition hover:gap-5 hover:bg-[#33332e] md:mt-10"
          >
            See how it works
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* Leverage exhibit */}
      <section
        id="leverage"
        className="border-y border-black/10 bg-white px-5 py-24 sm:px-6 md:px-10 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#966c18] sm:text-sm">
                Leverage
              </p>

              <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.03] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Eating well may be closer than it feels.
              </h2>

              <p className="mt-7 max-w-lg text-lg leading-8 text-[#57574f] md:text-xl">
                The right small change can make the next ten choices easier.
              </p>
            </div>

            {/* Lever illustration */}
            <div
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-[#f7f5ef]"
              aria-label="A lever showing one small nutrition change creating several larger benefits"
              role="img"
            >
              {/* Background guide */}
              <div className="absolute inset-x-[10%] top-1/2 border-t border-dashed border-black/15" />

              {/* Fulcrum */}
              <div className="absolute left-1/2 top-[57%] h-24 w-24 -translate-x-1/2 rotate-45 border-2 border-[#171714] bg-[#f7f5ef]" />

              {/* Lever beam */}
              <div className="absolute left-1/2 top-1/2 h-3 w-[72%] -translate-x-1/2 -rotate-6 rounded-full bg-[#171714] transition-transform duration-700 ease-out motion-reduce:transition-none lg:group-hover:rotate-0" />

              {/* Small input: plate */}
              <div className="absolute left-[9%] top-[27%] flex h-16 w-16 items-center justify-center rounded-full bg-[#c99a35] shadow-sm transition-transform duration-700 ease-out motion-reduce:transition-none sm:h-20 sm:w-20 lg:group-hover:translate-y-7">
                <div className="relative h-11 w-11 rounded-full border-2 border-[#171714] bg-[#f7f5ef] sm:h-14 sm:w-14">
                  <div className="absolute left-[27%] top-[28%] h-2.5 w-2.5 rounded-full bg-[#789058] sm:h-3 sm:w-3" />
                  <div className="absolute right-[22%] top-[38%] h-3 w-3 rounded-full bg-[#c99a35] sm:h-4 sm:w-4" />
                  <div className="absolute bottom-[20%] left-[38%] h-2.5 w-4 rounded-full bg-[#bb6f43] sm:h-3 sm:w-5" />
                </div>
              </div>

              {/* Large outcome */}
              <div className="absolute right-[7%] top-[22%] flex h-32 w-32 items-center justify-center rounded-3xl border-2 border-[#171714] bg-white p-4 text-center transition-transform duration-700 ease-out motion-reduce:transition-none sm:h-40 sm:w-40 sm:p-6 lg:group-hover:-translate-y-7">
                <div className="space-y-1.5 text-xs font-semibold leading-tight sm:text-sm">
                  <p>More energy</p>
                  <div className="mx-auto h-px w-8 bg-black/20" />
                  <p>More confidence</p>
                  <div className="mx-auto h-px w-8 bg-black/20" />
                  <p>More consistency</p>
                </div>
              </div>

              <p className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium tracking-wide text-[#57574f] sm:bottom-8 sm:text-sm">
                One change can affect many others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="px-5 py-24 sm:px-6 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#966c18] sm:text-sm">
              A simpler approach
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl md:text-6xl">
              Better results don&apos;t always require a bigger plan.
            </h2>
          </div>

          <div className="mt-14 divide-y divide-black/15 border-y border-black/15 md:mt-20">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="grid gap-5 py-11 md:grid-cols-[1fr_2.4fr] md:py-16"
              >
                <p className="text-sm font-semibold text-[#966c18]">
                  {principle.number}
                </p>

                <div>
                  <h3 className="max-w-3xl text-3xl font-semibold tracking-[-0.025em] sm:text-4xl md:text-5xl">
                    {principle.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-lg leading-8 text-[#57574f]">
                    {principle.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hope */}
      <section className="bg-[#e9debe] px-5 py-28 sm:px-6 md:px-10 md:py-44">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#735415] sm:text-sm">
            Possibility
          </p>

          <h2 className="mt-7 max-w-5xl text-5xl font-semibold leading-[1] tracking-[-0.045em] sm:text-6xl md:text-8xl">
            You don&apos;t need to change everything.
          </h2>

          <p className="mt-8 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.025em] text-[#735415] sm:text-4xl md:mt-10 md:text-6xl">
            You need to find what makes everything else easier.
          </p>
        </div>
      </section>

      {/* Coaching distinction */}
      <section className="bg-[#171714] px-5 py-28 text-white sm:px-6 md:px-10 md:py-44">
        <div className="mx-auto max-w-7xl">
          <p className="max-w-5xl text-4xl font-medium leading-[1.08] tracking-[-0.035em] sm:text-5xl md:text-7xl">
            Nutrition advice tells you what to do.
            <span className="mt-5 block text-[#d6aa4e] md:mt-7">
              Coaching helps you make it work.
            </span>
          </p>

          <p className="mt-10 max-w-xl text-lg leading-8 text-white/65">
            Together, we find practical strategies that fit your goals,
            routines, preferences, and real life.
          </p>
        </div>
      </section>

      {/* Invitation */}
      <section
        id="contact"
        className="bg-[#c99a35] px-5 py-28 sm:px-6 md:px-10 md:py-44"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] sm:text-sm">
            Eat Excellence
          </p>

          <h2 className="mt-7 max-w-5xl text-5xl font-semibold leading-[1] tracking-[-0.045em] sm:text-6xl md:text-8xl">
            Discover what might change when nutrition finally fits your life.
          </h2>

          <a
            href="mailto:hello@eatexcellence.ca"
            className="mt-11 inline-flex min-h-12 items-center rounded-full bg-[#171714] px-8 py-4 font-medium text-white transition hover:scale-[1.02] hover:bg-[#33332e] motion-reduce:hover:scale-100 md:mt-14"
          >
            Start a conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#171714] px-5 py-8 text-sm text-white/50 sm:px-6 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Eat Excellence</p>
          <p>Evidence-based nutrition. Thoughtfully applied.</p>
        </div>
      </footer>
    </main>
  );
}