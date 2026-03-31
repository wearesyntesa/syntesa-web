import { motion, useReducedMotion } from "framer-motion";
import type { LinksFunction } from "react-router";
import Reveal from "~/components/Reveal";
import { SoftMeetings, SoftPrograms } from "~/constants/softdev/model";
import { generateLinks } from "~/utils/seo";

export const links: LinksFunction = () => generateLinks("/softdev");

export default function SoftDev() {
  const prefersReducedMotion = useReducedMotion();
  const headingLines = ["Software", "Development"];

  return (
    <div className="space-y-2">
      <section
        aria-labelledby="softdev-hero-heading"
        className="relative bg-white dark:bg-neutral-950 pt-24 sm:pt-32 border-y border-gray-200 dark:border-neutral-800"
      >
        <div className="mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-6 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-neutral-800">
              <h1
                id="softdev-hero-heading"
                className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-medium tracking-tight text-gray-900 dark:text-neutral-100 leading-[1.15]"
              >
                {headingLines.map((line) => (
                  <span key={line} className="block overflow-hidden pb-[0.15em]">
                    <motion.span
                      className={`block ${
                        line === "Development" ? "text-gray-400 dark:text-neutral-600" : ""
                      }`}
                      initial={{ y: prefersReducedMotion ? "0%" : "110%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: prefersReducedMotion ? 0 : 0.9,
                        delay: prefersReducedMotion ? 0 : 0.15,
                        ease: [0.33, 1, 0.68, 1],
                      }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h1>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-12 lg:p-16 flex items-end bg-dot-grid">
              <motion.p
                className="text-lg sm:text-xl text-gray-600 dark:text-neutral-400 leading-relaxed font-light"
                initial={{
                  opacity: prefersReducedMotion ? 1 : 0,
                  y: prefersReducedMotion ? 0 : 16,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: prefersReducedMotion ? 0 : 0.5,
                  duration: prefersReducedMotion ? 0 : 0.6,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                Focuses on developing application creation skills from design to testing, with
                practice-based learning through projects, discussions, and team collaboration to
                prepare for the world of work.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="softdev-tracks-heading"
        className="bg-white dark:bg-neutral-950 border-y border-gray-200 dark:border-neutral-800"
      >
        <div className=" mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
          <div className="p-6 sm:p-12 border-b border-gray-200 dark:border-neutral-800 bg-hatching relative">
            <Reveal>
              <h2
                id="softdev-tracks-heading"
                className="text-sm font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400"
              >
                Inside the Program
              </h2>
            </Reveal>
            <span
              className="absolute bottom-2 right-4 text-[4rem] sm:text-[6rem] font-mono font-bold leading-none text-gray-100 dark:text-neutral-800 select-none pointer-events-none"
              aria-hidden="true"
            >
              01
            </span>
          </div>
        </div>

        <div className="mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Section 1 */}
            <div className="p-6 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-neutral-800">
              <Reveal>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-100">
                  {SoftPrograms?.[0]?.title}
                </h3>
              </Reveal>

              <div className="mt-8 space-y-6">
                {SoftPrograms?.[0]?.description?.map((topic) => (
                  <Reveal key={topic}>
                    <div className="flex items-start space-x-3">
                      <div className="shrink-0">
                        <svg
                          className="h-5 w-5 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-label="Completed"
                          role="img"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700 dark:text-neutral-300">{topic}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Section 2 */}
            <div className="p-6 sm:p-12 lg:p-16">
              <Reveal>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-100">
                  {SoftPrograms?.[1]?.title}
                </h3>
              </Reveal>

              <div className="mt-8 space-y-6">
                {SoftPrograms?.[1]?.description?.map((topic) => (
                  <Reveal key={topic}>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-label="Completed"
                          role="img"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700 dark:text-neutral-300">{topic}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="softdev-meetings-heading"
        className="bg-white dark:bg-neutral-950 border-y border-gray-200 dark:border-neutral-800"
      >
        <div className=" mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
          <div className="p-6 sm:p-12 border-b border-gray-200 dark:border-neutral-800 bg-hatching relative">
            <Reveal>
              <h2
                id="softdev-meetings-heading"
                className="text-sm font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400"
              >
                Meeting Schedule
              </h2>
            </Reveal>
            <span
              className="absolute bottom-2 right-4 text-[4rem] sm:text-[6rem] font-mono font-bold leading-none text-gray-100 dark:text-neutral-800 select-none pointer-events-none"
              aria-hidden="true"
            >
              02
            </span>
          </div>
        </div>

        <div className="mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
          <div className="p-6 sm:p-12 space-y-4">
            {SoftMeetings.map((item) => (
              <Reveal key={`${item.date}-${item.location}`}>
                <div className="flex items-center justify-between gap-9 p-9 rounded-xl border border-gray-200 dark:border-neutral-800 dark:bg-neutral-900">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 w-full">
                    <div className="sm:col-span-2">
                      <p className="text-xs text-gray-400">DAY</p>
                      <p className="mt-3 text-gray-900 dark:text-white capitalize">{item.date}</p>
                    </div>

                    <div className="sm:col-span-6">
                      <p className="text-xs text-gray-400">LOCATION</p>
                      <p className="mt-3 text-gray-900 dark:text-white">{item.location}</p>
                    </div>

                    <div className="sm:col-span-4 flex items-center justify-end">
                      <div className="min-w-35 gap-3 px-8 py-3 flex items-center justify-center text-base bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200">
                        {item.location.toLowerCase().includes("lab") ? "Offline" : "Online"}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
