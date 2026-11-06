import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Call | Eat Excellence",
  description:
    "Book a short call with Evan Duxbury, RD to talk about your goals, what's getting in the way, and whether working together makes sense.",
};

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;

export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#171714]">
      {/* Navigation */}
      <header className="border-b border-black/[0.06] bg-[#f7f5ef]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 md:px-10 md:py-7">
          <Link
            href="/"
            className="font-semibold tracking-[-0.02em]"
          >
            Eat Excellence
          </Link>

          <Link
            href="/"
            className="text-sm font-semibold text-[#57574f] transition hover:text-[#171714]"
          >
            ← Back to home
          </Link>
        </nav>
      </header>

      {/* Intro */}
      <section className="px-5 pb-10 pt-16 text-center sm:px-6 md:px-10 md:pb-14 md:pt-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#966c18] sm:text-sm">
            Book a call
          </p>

          <h1 className="mx-auto mt-5 text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-6xl md:text-7xl">
            Let&apos;s see if
            <span className="block text-[#9b721e]">
              we&apos;re a fit.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#57574f] md:text-xl">
            Tell me what you&apos;re working toward and what&apos;s getting in
            the way. We&apos;ll talk through where you are, where you want to
            go, and whether working together makes sense.
          </p>

          {/* Quick details */}
          <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-[#57574f]">
            <CallDetail>20 minutes</CallDetail>
            <CallDetail>No preparation needed</CallDetail>
            <CallDetail>No obligation</CallDetail>
          </div>
        </div>
      </section>

      {/* Booking area */}
      <section className="px-5 pb-20 sm:px-6 md:px-10 md:pb-28">
        <div className="mx-auto max-w-5xl">
          {bookingUrl ? (
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <iframe
                src={bookingUrl}
                title="Book a call with Evan Duxbury"
                className="h-[760px] w-full border-0 sm:h-[820px]"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="rounded-[2rem] border border-[#d8c58f] bg-[#eee4c9] px-7 py-12 text-center sm:px-10 md:py-16">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#735415]">
                Booking calendar
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Your calendar will appear here.
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-[#665627]">
                Once your scheduling link is connected, visitors will be able
                to choose a time without leaving Eat Excellence.
              </p>

              <a
                href="mailto:hello@eatexcellence.ca"
                className="mt-7 inline-flex rounded-full bg-[#0F6B63] px-7 py-4 font-bold text-white transition hover:scale-[1.02] hover:bg-[#0B554F]"
              >
                Email me instead
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Reassurance */}
      <section className="border-t border-black/[0.07] bg-white px-5 py-12 text-center sm:px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg font-semibold">
            Evan Duxbury, RD
          </p>

          <p className="mx-auto mt-2 max-w-xl leading-7 text-[#66665f]">
            Registered Dietitian and ICF Certified Coach helping men build
            nutrition and behaviour systems that work in real life.
          </p>
        </div>
      </section>

      <footer className="bg-[#171714] px-5 py-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Eat Excellence
      </footer>
    </main>
  );
}

function CallDetail({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-[#c99a35]" />
      {children}
    </span>
  );
}