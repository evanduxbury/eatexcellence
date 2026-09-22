import Image from "next/image";

type Review = {
  quote: string;
  name: string;
};

const backgroundStories = [
  {
    text: "I'm fat.",
    className:
      "left-[6%] top-[17%] -rotate-8 text-xl opacity-[0.14] sm:left-[8%] sm:text-3xl md:text-4xl",
  },
  {
    text: "I don't cook.",
    className:
      "right-[6%] top-[18%] rotate-7 text-lg opacity-[0.13] sm:right-[9%] sm:text-3xl",
  },
  {
    text: "She's out of my league.",
    className:
      "hidden left-[7%] bottom-[16%] rotate-5 text-lg opacity-[0.11] sm:block sm:text-2xl md:text-3xl",
  },
  {
    text: "I have no willpower.",
    className:
      "right-[5%] bottom-[15%] -rotate-6 text-base opacity-[0.12] sm:right-[7%] sm:text-2xl md:text-3xl",
  },
  {
    text: "I always quit.",
    className:
      "left-[8%] top-[53%] -rotate-12 text-base opacity-[0.09] sm:left-[14%] sm:text-2xl",
  },
  {
    text: "I'm bad at routines.",
    className:
      "hidden right-[13%] top-[50%] rotate-10 text-lg opacity-[0.09] sm:block sm:text-2xl",
  },
];

const steps = [
  {
    number: "1",
    icon: "story",
    title: "Identify the story.",
    description: null,
    coach: "I help you separate stories from truths",
    outcome: null,

    stuckTitle: "Stuck in the story",
    stuckQuote: ["“I can't lose weight.”"],
    stuckText: null,

    progressTitle: "Notice the story",
    progressQuote: ["“I can't lose weight.”"],
    progressText: null,
  },

  {
    number: "2",
    icon: "search",
    title: "Review the evidence.",
    description: null,

    coach:
      "We'll take a closer look at the experiences you're using to support your stories.",

    outcome: null,

    stuckTitle: "Build the case",
    stuckQuote: [
      "“Trying to lose weight",
      "never works for me.",
      "I can't change like",
      "other people.”",
    ],
    stuckText: null,

    progressTitle: "Understand where the story comes from",
    progressQuote: [
      "“I've tried dieting",
      "twice. Neither attempt",
      "gave me the result",
      "I want.”",
    ],
    progressText: null,
  },

  {
    number: "3",
    icon: "experiment",
    title: "Experiment to create new evidence.",
    description: null,

    coach:
      "I help you design small nutrition and behaviour experiments that fit YOUR lifestyle.",

    outcome: null,

    stuckTitle: "Stay aligned with your story",
    stuckQuote: [
      "“I had a hard day.",
      "I'll go for a walk tomorrow.",
      "I'll eat better tomorrow.",
      "I'm just not disciplined enough today.”",
    ],
    stuckText: null,

    progressTitle: "Create new evidence",
    progressQuote: null,
    progressText: null,

    experiment: true,
  },

  {
    number: "4",
    icon: "trend",
    title: "Notice the story shifting.",
    description: null,
    coach: null,

    outcome:
      "NOW you're ready to make and maintain behavioural changes.",

    stuckTitle: "Same story. Same result.",
    stuckQuote: [
      "“See? I can't lose weight.",
      "I'm wasting my time.”",
    ],
    stuckText: null,

    progressTitle: "Different story. Different result.",
    progressQuote: [
      "“I can lose weight",
      "when my system fits my life.”",
    ],
    progressText: null,
  },
];

const programSteps = [
  {
    title: "Meet weekly",
    text: "12 × 60-minute one-on-one coaching sessions.",
  },
  {
    title: "Build your nutrition strategy",
    text: "Nutrition recommendations designed around your goals, preferences and actual life.",
  },
  {
    title: "Run experiments",
    text: "Test changes to meals, routines and behaviours. Track what happens and adjust based on the evidence.",
  },
  {
    title: "Build a system that lasts",
    text: "Finish with a clearer understanding of what works for you and how to keep adapting after coaching ends.",
  },
];

const credentials = [
  {
    title: "Registered Dietitian (UBC)",
    text: "A scientific approach to nutrition",
  },
  {
    title: "ICF Certified Coach (ACC)",
    text: "Behaviour change explored through questions, experiments and reflection.",
  },
  {
    title: "Health-care leader\n(Vancouver General Hospital)",
    text: "Experience helping people make change work in the complexity of real life.",
  },
];

const organizations = [
  {
    name: "Rugby",
    src: "/Rugby.png",
    large: false,
  },
  {
    name: "UBC",
    src: "/Ubc.png",
    large: false,
  },
  {
    name: "Richmond Olympic Oval",
    src: "/Oval.png",
    large: true,
  },
  {
    name: "DC",
    src: "/DC.png",
    large: true,
  },
];

const featuredReview: Review = {
  name: "Justin Chipperfield",
  quote:
    "I had a great experience working with Evan Duxbury. We did a 12 week program together focussing on nutrition and mindset. Evan has a keen ability to ask the right questions, unlocking a shift in the way I have previously approached eating habits, weight loss, exercise, and self image. I would highly recommend working with Evan, he is amazing, and I am grateful for the lessons he taught me.",
};

const supportingReviews: Review[] = [
  {
    name: "Gilbert Lam",
    quote:
      "I had a very positive experience with Evan. He is definitely one of the better coaches I've had... I got a lot of value from working with Evan and highly recommend him.",
  },
  {
    name: "Felim Donnelly",
    quote:
      "My sessions with Evan were extremely helpful and productive... But he also brings ideas and suggestions at the right time to help move you through whatever roadblocks might be in the way.",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#f7f5ef] text-[#171714]">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.05] bg-[#f7f5ef]/90 backdrop-blur-md md:absolute md:border-transparent md:bg-transparent md:backdrop-blur-none">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 md:px-10 md:py-8">
          <a
            href="#top"
            className="font-semibold tracking-[-0.02em]"
          >
            Eat Excellence
          </a>

          <a
            href="#contact"
            className="rounded-full bg-[#0F6B63] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0B554F]"
          >
            Book a Call
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="mx-auto flex min-h-[72vh] max-w-7xl items-center justify-center px-5 pb-10 pt-24 text-center sm:px-6 md:min-h-[76vh] md:px-10 md:pb-14 md:pt-28"
      >
        <div className="max-w-6xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#966c18] sm:text-sm">
            Nutrition + behaviour change coaching for men
          </p>

          <h1 className="text-[3.15rem] font-semibold leading-[0.96] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[7rem]">
            Better results require
            <span className="block text-[#9b721e]">
              a better system.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#57574f] md:text-xl">
            Learn how the stories you tell about yourself keep you stuck
            <span className="block">
              and how to change them.
            </span>
          </p>

          <a
            href="#problem"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0F6B63] px-7 py-4 font-bold text-white transition hover:gap-5 hover:bg-[#0B554F]"
          >
            See the process
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* Organizations */}
      <section className="border-y border-black/[0.07] bg-white px-5 py-7 sm:px-6 sm:py-8 md:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#77776f] sm:text-sm">
            Organizations I&apos;ve worked with
          </p>

          <div className="mx-auto mt-5 grid max-w-5xl grid-cols-2 items-center gap-x-10 gap-y-4 sm:grid-cols-4 sm:gap-x-12">
            {organizations.map((organization) => (
              <div
                key={organization.name}
                className="flex h-[90px] items-center justify-center sm:h-[105px]"
              >
                <div className="relative h-[70px] w-full sm:h-[82px]">
                  <Image
                    src={organization.src}
                    alt={organization.name}
                    fill
                    sizes="(max-width: 640px) 40vw, 20vw"
                    className={`object-contain grayscale opacity-70 transition duration-300 hover:grayscale-0 hover:opacity-100 ${
                      organization.large ? "scale-[1.4]" : ""
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section
        id="problem"
        className="scroll-mt-16 bg-white px-5 pb-14 pt-14 text-center sm:px-6 md:px-10 md:pb-20 md:pt-20"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#966c18] sm:text-sm">
            The problem
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl md:text-6xl">
            The story you tell yourself feels true.
          </h2>

          {/* Story cloud */}
          <div className="relative mx-auto -mt-7 flex min-h-[260px] max-w-5xl items-center justify-center overflow-hidden sm:min-h-[340px] md:-mt-6 md:min-h-[380px]">
            <div
              aria-hidden="true"
              className="absolute inset-[10%] rounded-[50%] bg-[#f7f5ef]/70 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute h-[65%] w-[72%] rounded-[50%] border border-black/[0.04]"
            />

            {backgroundStories.map((story) => (
              <p
                key={story.text}
                aria-hidden="true"
                className={`absolute z-0 whitespace-nowrap font-semibold ${story.className}`}
              >
                {story.text}
              </p>
            ))}

            <p className="relative z-10 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[7.25rem]">
              “This is just
              <span className="block">
                who I am.”
              </span>
            </p>
          </div>

          <p className="mx-auto mt-0 max-w-3xl text-xl font-semibold leading-8 text-[#57574f] md:text-2xl md:leading-9">
            Your mind works to keep your behaviour consistent with the story
            you tell about yourself.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex rounded-full bg-[#0F6B63] px-7 py-3.5 text-sm font-bold text-white transition hover:scale-[1.02] hover:bg-[#0B554F]"
          >
            Book a Call
          </a>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f7f5ef] px-5 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center md:mb-16">
            <h2 className="mx-auto max-w-4xl text-5xl font-semibold leading-[1] tracking-[-0.045em] sm:text-6xl md:text-7xl">
              New evidence.
              <span className="block text-[#9b721e]">
                New story. New results.
              </span>
            </h2>
          </div>

          {/* Mobile process */}
          <div className="md:hidden">
            <MobileProcess />
          </div>

          {/* Desktop process */}
          <div className="hidden md:block">
            {steps.map((step, index) => (
              <Step
                key={step.number}
                {...step}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 12-week program */}
      <section className="border-y border-black/10 bg-white px-5 pb-8 pt-16 sm:px-6 md:px-10 md:pb-10 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#966c18] sm:text-sm">
              The program
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-semibold leading-[1] tracking-[-0.045em] sm:text-6xl md:text-7xl">
              What 12 weeks looks like.
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#57574f] md:text-xl">
              By the end of our work together, we&apos;ll have built your
              &apos;user manual&apos; that you can use to sustain the changes
              we&apos;ve put in place.
            </p>
          </div>

          {/* Program list */}
          <div className="mx-auto mt-10 max-w-5xl border-y border-black/10">
            {programSteps.map((item, index) => (
              <div
                key={item.title}
                className={`grid gap-3 py-6 text-center md:grid-cols-[32px_0.8fr_1.2fr] md:items-center md:gap-8 md:py-7 md:text-left ${
                  index !== programSteps.length - 1
                    ? "border-b border-black/10"
                    : ""
                }`}
              >
                <div className="flex justify-center md:justify-start">
                  <span className="h-3 w-3 rounded-full bg-[#c99a35]" />
                </div>

                <h3 className="text-2xl font-semibold tracking-[-0.025em]">
                  {item.title}
                </h3>

                <p className="leading-7 text-[#66665f] md:text-lg">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-[#0F6B63] px-7 py-4 font-bold text-white transition hover:scale-[1.02] hover:bg-[#0B554F]"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* About / credibility */}
      <section className="bg-white px-5 pb-16 pt-6 text-center sm:px-6 md:px-10 md:pb-24 md:pt-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#966c18] sm:text-sm">
            Evan Duxbury, RD
          </p>

          <Image
            src="/evan.jpg"
            alt="Evan Duxbury"
            width={1365}
            height={2048}
            className="mx-auto mt-6 h-[360px] w-[270px] rounded-[2rem] object-cover object-center shadow-[0_20px_60px_rgba(0,0,0,0.10)] sm:h-[420px] sm:w-[315px] md:h-[460px] md:w-[345px]"
          />

          <h2 className="mx-auto mt-9 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl md:text-7xl">
            You run the experiments.
            <span className="block text-[#9b721e]">
              I help you design them.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#57574f]">
            <span className="block font-semibold text-[#171714]">
              Work with me for 12 weeks.
            </span>

            <span className="mt-2 block">
              Watch as the patterns shift, the stories change and you move
              closer to your goals.
            </span>
          </p>

          {/* Credentials */}
          <div className="mx-auto mt-10 max-w-5xl border-y border-black/10">
            {credentials.map((credential, index) => (
              <div
                key={credential.title}
                className={`grid gap-3 py-6 text-center md:grid-cols-[32px_0.8fr_1.2fr] md:items-center md:gap-8 md:py-7 md:text-left ${
                  index !== credentials.length - 1
                    ? "border-b border-black/10"
                    : ""
                }`}
              >
                <div className="flex justify-center md:justify-start">
                  <span className="h-3 w-3 rounded-full bg-[#c99a35]" />
                </div>

                <h3 className="whitespace-pre-line text-2xl font-semibold tracking-[-0.025em]">
                  {credential.title}
                </h3>

                <p className="leading-7 text-[#66665f] md:text-lg">
                  {credential.text}
                </p>
              </div>
            ))}
          </div>

          {/* Google Reviews */}
          <div className="mx-auto mt-20 max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#966c18] sm:text-sm">
              Google reviews
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              What clients say.
            </h2>

            {/* Featured review */}
            <article className="relative mt-9 overflow-hidden rounded-[2rem] border border-[#d8c58f] bg-[#eee4c9] p-7 text-left sm:p-10 md:p-12">
              <div className="absolute inset-y-0 left-0 w-1.5 bg-[#0F6B63]" />

              <div className="md:grid md:grid-cols-[180px_1fr] md:gap-10">
                <div>
                  <p className="text-sm font-semibold tracking-[0.1em] text-[#8c6c25]">
                    ★★★★★
                  </p>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#735415]">
                    Google Review
                  </p>

                  <p className="mt-4 font-semibold text-[#171714]">
                    {featuredReview.name}
                  </p>
                </div>

                <blockquote className="mt-6 text-lg font-medium leading-8 tracking-[-0.015em] text-[#353530] md:mt-0 md:text-2xl md:leading-10">
                  “{featuredReview.quote}”
                </blockquote>
              </div>
            </article>

            {/* Supporting reviews */}
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {supportingReviews.map((review) => (
                <article
                  key={review.name}
                  className="flex flex-col justify-between rounded-[2rem] border border-black/10 bg-[#f7f5ef] p-7 text-left md:p-10"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <p className="text-sm font-semibold tracking-[0.1em] text-[#9b721e]">
                        ★★★★★
                      </p>

                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#88887f]">
                        Google Review
                      </p>
                    </div>

                    <blockquote className="mt-5 text-lg leading-8 text-[#353530]">
                      “{review.quote}”
                    </blockquote>
                  </div>

                  <p className="mt-6 border-t border-black/10 pt-4 font-semibold text-[#171714]">
                    {review.name}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Did you know */}
      <section className="bg-[#f7f5ef] px-5 py-16 text-center sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#966c18] sm:text-sm">
            Did you know?
          </p>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {/* Dietitian card */}
            <article className="rounded-[2rem] bg-[#171714] p-8 text-left text-white sm:p-10">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <MedicalCrossIcon />
                </div>

                <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
                  Dietitians are different from nutritionists.
                </h2>
              </div>

              <p className="mt-6 max-w-lg text-lg leading-8 text-white/65">
                Dietitian is a regulated health profession. Registered
                Dietitians meet defined education, training and professional
                standards.
              </p>
            </article>

            {/* Benefits card */}
            <article className="rounded-[2rem] border border-[#d8c58f] bg-[#eee4c9] p-8 text-left sm:p-10">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#735415]/10 text-[#735415]">
                  <CoverageIcon />
                </div>

                <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
                  Your benefits may cover Dietitian services.
                </h2>
              </div>

              <p className="mt-6 max-w-lg text-lg leading-8 text-[#665627]">
                Many extended health plans include coverage for Registered
                Dietitian services. Check your individual plan for details.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="contact"
        className="scroll-mt-16 bg-[#c99a35] px-5 py-20 text-center sm:px-6 md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em]">
            Eat Excellence
          </p>

          <h2 className="mx-auto mt-6 max-w-6xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-6xl md:text-8xl">
            What would you like to prove to yourself?
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-lg leading-8">
            Let&apos;s design an experiment.
          </p>

          <a
            href="mailto:hello@eatexcellence.ca"
            className="mt-9 inline-flex rounded-full bg-[#0F6B63] px-8 py-4 font-bold text-white transition hover:scale-[1.02] hover:bg-[#0B554F]"
          >
            Book a Call
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#171714] px-5 py-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Eat Excellence
      </footer>
    </main>
  );
}

function MobileProcess() {
  return (
    <div className="mx-auto max-w-xl">
      <div className="border-y border-black/10">
        {/* Step 1 */}
        <div className="border-b border-black/10 py-6 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#966c18]">
            Step 1
          </p>

          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
            Identify the story.
          </h3>

          <p className="mt-3 text-xl font-semibold text-[#4f4f49]">
            “I can&apos;t lose weight.”
          </p>
        </div>

        {/* Step 2 */}
        <div className="border-b border-black/10 py-6 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#966c18]">
            Step 2
          </p>

          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
            Review the evidence.
          </h3>

          <p className="mt-3 text-lg leading-7 text-[#57574f]">
            “I&apos;ve tried dieting twice. Neither attempt gave me the result
            I want.”
          </p>
        </div>

        {/* Step 3 */}
        <div className="border-b border-black/10 py-6 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#966c18]">
            Step 3
          </p>

          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
            Run an experiment.
          </h3>

          <p className="mt-3 text-lg text-[#57574f]">
            Prepare breakfast the night before.
          </p>

          <div className="mt-4 flex items-end gap-3">
            <p className="text-5xl font-semibold leading-none tracking-[-0.06em] text-[#9b721e]">
              4/5
            </p>

            <p className="pb-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#735415]">
              days succeeded
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="py-6 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#966c18]">
            Step 4
          </p>

          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
            Notice the story shift.
          </h3>

          <p className="mt-3 text-xl font-semibold leading-7 text-[#735415]">
            “I can lose weight when my system fits my life.”
          </p>
        </div>
      </div>

      <p className="mx-auto mt-7 max-w-lg text-center text-xl font-semibold leading-8">
        <span className="text-[#0F6B63]">
          NOW
        </span>{" "}
        you&apos;re ready to make and maintain behavioural changes.
      </p>

      <div className="mx-auto mt-7 rounded-[1.5rem] bg-white/60 p-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#966c18]">
          How I help
        </p>

        <p className="mt-3 leading-7 text-[#57574f]">
          I help you separate stories from truths, understand the evidence
          behind them, and design nutrition and behaviour experiments that fit
          your life.
        </p>

        <a
          href="#contact"
          className="mt-5 inline-flex rounded-full bg-[#0F6B63] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#0B554F]"
        >
          Book a Call
        </a>
      </div>
    </div>
  );
}

function Step({
  number,
  icon,
  title,
  description,
  coach,
  outcome,
  stuckTitle,
  stuckQuote,
  stuckText,
  progressTitle,
  progressQuote,
  progressText,
  experiment,
  isLast,
}: {
  number: string;
  icon: string;
  title: string;
  description: string | null;
  coach: string | null;
  outcome: string | null;
  stuckTitle: string;
  stuckQuote: string[];
  stuckText: string | null;
  progressTitle: string;
  progressQuote: string[] | null;
  progressText: string | null;
  experiment?: boolean;
  isLast: boolean;
}) {
  const compact =
    number === "1" ||
    number === "2" ||
    number === "4";

  const quoteClass = `mt-7 font-semibold leading-tight tracking-[-0.03em] ${
    number === "2"
      ? "text-3xl sm:text-4xl md:text-4xl"
      : "text-3xl sm:text-4xl md:text-5xl"
  }`;

  return (
    <article className="relative text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#171714] text-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
        <StepIcon type={icon} />
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#966c18]">
        Step {number}
      </p>

      <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#62625c]">
          {description}
        </p>
      )}

      <div className="mx-auto mt-8 grid max-w-6xl gap-5 md:grid-cols-2 md:gap-6">
        {/* Existing story */}
        <div
          className={`relative flex flex-col overflow-hidden rounded-[2rem] bg-[#171714] p-8 text-white sm:p-10 ${
            compact
              ? "min-h-[220px] justify-center md:min-h-[245px]"
              : "min-h-[390px] justify-center md:min-h-[430px]"
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-white/[0.05]"
          />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              {stuckTitle}
            </p>

            <QuoteLines
              lines={stuckQuote}
              className={quoteClass}
            />
          </div>

          {stuckText && (
            <p className="relative mx-auto mt-9 max-w-md text-base leading-7 text-white/60 md:text-lg">
              {stuckText}
            </p>
          )}
        </div>

        {/* New path */}
        <div
          className={`relative flex flex-col overflow-hidden rounded-[2rem] border border-[#d8c58f] bg-[#eee4c9] p-8 sm:p-10 ${
            compact
              ? "min-h-[220px] justify-center md:min-h-[245px]"
              : "min-h-[390px] justify-center md:min-h-[430px]"
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-[#735415]/10"
          />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#735415]">
              {progressTitle}
            </p>

            {experiment ? (
              <ExperimentSequence />
            ) : (
              progressQuote && (
                <QuoteLines
                  lines={progressQuote}
                  className={quoteClass}
                />
              )
            )}
          </div>

          {progressText && (
            <p className="relative mx-auto mt-9 max-w-md text-base leading-7 text-[#665627] md:text-lg">
              {progressText}
            </p>
          )}
        </div>
      </div>

      {coach && (
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#66665f] md:text-base">
          <span className="font-semibold text-[#171714]">
            How I help:{" "}
          </span>
          {coach}
        </p>
      )}

      {outcome && (
        <div className="mx-auto mt-8 max-w-3xl">
          <p className="text-xl font-semibold leading-8 tracking-[-0.02em] text-[#171714] sm:text-2xl">
            <span className="text-[#0F6B63]">
              NOW
            </span>{" "}
            you&apos;re ready to make and maintain behavioural changes.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex rounded-full bg-[#0F6B63] px-7 py-3.5 text-sm font-bold text-white transition hover:scale-[1.02] hover:bg-[#0B554F]"
          >
            Book a Call
          </a>
        </div>
      )}

      {!isLast && (
        <div className="flex justify-center py-5 md:py-7">
          <div className="relative h-10 w-px bg-[#c99a35]">
            <div className="absolute -bottom-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#c99a35]" />
          </div>
        </div>
      )}
    </article>
  );
}

function QuoteLines({
  lines,
  className,
}: {
  lines: string[];
  className: string;
}) {
  return (
    <p className={className}>
      {lines.map((line, index) => (
        <span
          key={`${line}-${index}`}
          className="block"
        >
          {line}
        </span>
      ))}
    </p>
  );
}

function ExperimentSequence() {
  return (
    <div className="mx-auto mt-7 max-w-lg">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#846a2f]">
          Experiment:
        </p>

        <p className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl">
          Prepare breakfast the night before.
        </p>
      </div>

      <div className="my-5 flex justify-center text-2xl text-[#9b721e]">
        ↓
      </div>

      <div>
        <p className="text-[4.75rem] font-semibold leading-none tracking-[-0.07em] text-[#9b721e] sm:text-[6rem]">
          4/5
        </p>

        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#735415]">
          days succeeded
        </p>
      </div>

      <div className="my-5 flex justify-center text-2xl text-[#9b721e]">
        ↓
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#846a2f]">
          New evidence:
        </p>

        <p className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#735415] sm:text-3xl">
          “This is different. I&apos;ve implemented a change.”
        </p>
      </div>
    </div>
  );
}

function MedicalCrossIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-white"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z"
      />
    </svg>
  );
}

function CoverageIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 3 5 6v5c0 4.5 2.8 8.1 7 10 4.2-1.9 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function StepIcon({ type }: { type: string }) {
  if (type === "story") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M5 5h14v10H9l-4 4V5Z" />
        <path d="M8 9h8M8 12h5" />
      </svg>
    );
  }

  if (type === "search") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m15 15 5 5" />
      </svg>
    );
  }

  if (type === "experiment") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3" />
        <path d="M8 15h8" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 18 9 13l4 3 7-9" />
      <path d="M15 7h5v5" />
    </svg>
  );
}