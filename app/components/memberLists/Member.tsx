import { useCallback, useMemo, useState } from "react";
import Reveal from "~/components/Reveal";
import ScrambleText from "~/components/ScrambleText";

export interface TypeMember {
  readonly name: string;
  readonly role: string;
  readonly prodi: string;
  readonly batch: string;
}

interface MembersProps {
  members: readonly TypeMember[];
}

type TabKey = "all" | "software" | "cloud";
const PAGE_SIZE = 10;

const tabs = [
  {
    key: "all" as const,
    label: "All Members",
    description: "All divisions combined.",
  },
  {
    key: "software" as const,
    label: "Software Development",
    description: "Product engineering, web systems, and applied research.",
  },
  {
    key: "cloud" as const,
    label: "Cloud Infrastructure",
    description: "Systems, networking, and platform operations.",
  },
] as const;

export default function Members({ members }: MembersProps) {
  const safeMembers = Array.isArray(members) ? members : [];
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const softwareMembers = useMemo(() => {
    return safeMembers.filter(({ role }) => {
      const words = role.toLowerCase().split(/\s+/);
      return words.includes("software");
    });
  }, [safeMembers]);

  const cloudMembers = useMemo(() => {
    return safeMembers.filter(({ role }) => {
      const words = role.toLowerCase().split(/\s+/);
      const hasCloud = words.includes("cloud");
      const hasSoftware = words.includes("software");
      return hasCloud && !hasSoftware;
    });
  }, [safeMembers]);

  const activeMembers = useMemo(() => {
    switch (activeTab) {
      case "software":
        return softwareMembers;
      case "cloud":
        return cloudMembers;
      default:
        return safeMembers;
    }
  }, [activeTab, softwareMembers, cloudMembers, safeMembers]);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredMembers = useMemo(() => {
    if (!normalizedQuery) return activeMembers;
    return activeMembers.filter((member) => {
      const haystack =
        `${member.name} ${member.role} ${member.prodi} ${member.batch}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [activeMembers, normalizedQuery]);

  const sortedMembers = useMemo(() => {
    return [...filteredMembers].sort((a, b) => {
      const aIsLead = /\blead\b/i.test(a.role);
      const bIsLead = /\blead\b/i.test(b.role);
      if (aIsLead !== bIsLead) {
        return aIsLead ? -1 : 1;
      }
      return a.name.localeCompare(b.name);
    });
  }, [filteredMembers]);

  const activeLabel = tabs.find((tab) => tab.key === activeTab)?.label ?? "Members";
  const activeDescription = tabs.find((tab) => tab.key === activeTab)?.description ?? "";

  const totalMembers = sortedMembers.length;
  const totalPages = Math.max(Math.ceil(totalMembers / PAGE_SIZE), 1);
  const boundedPage = Math.min(currentPage, totalPages);
  const startIndex = (boundedPage - 1) * PAGE_SIZE;
  const pagedMembers = sortedMembers.slice(startIndex, startIndex + PAGE_SIZE);
  const statusLabel = query.trim().length > 0 ? "Filtered" : "All members";

  return (
    <section
      aria-labelledby="members-heading"
      className=" h-calc(100vh - 4rem) relative pt-12 bg-white dark:bg-neutral-950 border-t border-gray-200 dark:border-neutral-800 overflow-hidden"
    >
      <div className="max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200 dark:border-neutral-800">
          <div className="lg:col-span-4 p-6 sm:p-12 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-neutral-800 bg-hatching relative">
            <Reveal>
              <ScrambleText
                as="p"
                text="Our Team"
                className="text-lg font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400"
              />
            </Reveal>
            <span
              className="absolute bottom-2 right-4 text-[4rem] sm:text-[6rem] font-mono font-bold leading-none text-gray-100 dark:text-neutral-800 select-none pointer-events-none"
              aria-hidden="true"
            ></span>
          </div>
          <div className="lg:col-span-8 p-6 sm:p-12">
            <Reveal delay={0.1}>
              <h2
                id="members-heading"
                className="text-3xl sm:text-4xl font-medium text-gray-900 dark:text-neutral-100 leading-tight"
              >
                Meet our talented members.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-gray-600 dark:text-neutral-400 mt-4 max-w-2xl">
                A diverse group of passionate individuals driving innovation in technology.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="border-b border-gray-200 dark:border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4 p-6 sm:p-8 lg:border-r border-gray-200 dark:border-neutral-800">
              <p className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400">
                Interest Groups
              </p>
              <div className="mt-4 inline-flex flex-wrap gap-2 rounded-full border border-gray-200 dark:border-neutral-800 p-1 bg-white dark:bg-neutral-950">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.key;
                  const tabCount =
                    tab.key === "all"
                      ? safeMembers.length
                      : tab.key === "software"
                        ? softwareMembers.length
                        : cloudMembers.length;

                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => {
                        setActiveTab(tab.key);
                        setCurrentPage(1);
                      }}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${
                        isActive
                          ? "bg-gray-900 text-white dark:bg-apple-blue-500"
                          : "text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-neutral-100"
                      }`}
                    >
                      <span>
                        {tab.key === "all" ? "All" : tab.key === "software" ? "Software" : "Cloud"}
                      </span>
                      <span
                        className={`text-[10px] font-mono ${
                          isActive ? "text-white/80" : "text-gray-400 dark:text-neutral-500"
                        }`}
                      >
                        {tabCount}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-neutral-300">{activeLabel}</p>
                <p className="text-xs text-gray-500 dark:text-neutral-500 mt-1">
                  {activeDescription}
                </p>
              </div>
              <label className="w-full sm:w-72">
                <span className="sr-only">Search members</span>
                <input
                  id="member-search"
                  type="search"
                  value={query}
                  onChange={useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
                    setQuery(e.target.value);
                    setCurrentPage(1);
                  }, [])}
                  placeholder="Search name, role, or batch"
                  className="w-full rounded-full border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-2 text-sm text-gray-700 dark:text-neutral-200 placeholder:text-gray-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-neutral-600"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-200 dark:border-neutral-800">
          <div className="grid grid-cols-1 sm:grid-cols-12 border-b border-gray-200 dark:border-neutral-800">
            <div className="sm:col-span-4 p-6 sm:p-8 sm:border-r border-gray-200 dark:border-neutral-800">
              <p className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400">
                Members
              </p>
              <h3 className="text-2xl font-medium text-gray-900 dark:text-neutral-100 mt-2">
                {activeLabel}
              </h3>
            </div>
            <div className="sm:col-span-8 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-sm text-gray-500 dark:text-neutral-400">
                Showing {pagedMembers.length} of {totalMembers} members.
              </p>
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-neutral-500">
                {statusLabel}
              </span>
            </div>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-neutral-800">
            {totalMembers === 0 ? (
              <div className="p-8 text-center text-sm text-gray-500 dark:text-neutral-400">
                No members found. Try a different search term.
              </div>
            ) : (
              pagedMembers.map((member, index) => {
                const isLead = member.role.toLowerCase().includes("lead");
                const memberIndex = startIndex + index + 1;

                return (
                  <article
                    key={member.name}
                    className="grid grid-cols-1 sm:grid-cols-12 transition-[background-color] duration-300 hover:bg-gray-50 dark:hover:bg-neutral-900"
                  >
                    <div className="sm:col-span-1 p-6 sm:p-8 sm:border-r border-gray-200 dark:border-neutral-800">
                      <span className="text-xs font-mono text-gray-400 dark:text-neutral-600">
                        {memberIndex.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <div className="sm:col-span-5 p-6 sm:p-8 sm:border-r border-gray-200 dark:border-neutral-800">
                      <h4 className="font-medium text-gray-900 dark:text-neutral-100">
                        {member.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-neutral-400 mt-1">
                        {member.role}
                      </p>
                    </div>
                    <div className="sm:col-span-4 p-6 sm:p-8 sm:border-r border-gray-200 dark:border-neutral-800">
                      <p className="text-sm text-gray-600 dark:text-neutral-400">{member.prodi}</p>
                    </div>
                    <div className="sm:col-span-2 p-6 sm:p-8 flex items-center sm:items-start sm:flex-col gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-neutral-500">
                        Batch {member.batch}
                      </span>
                      {isLead && (
                        <span className="inline-flex px-2.5 py-1 text-xs font-mono uppercase tracking-wider border border-gray-200 dark:border-neutral-800 text-gray-500 dark:text-neutral-400">
                          Lead
                        </span>
                      )}
                    </div>
                  </article>
                );
              })
            )}
          </div>

          {totalPages > 1 && (
            <div className="p-6 sm:p-8 border-t border-gray-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={boundedPage === 1}
                className="order-2 sm:order-1 flex-1 sm:flex-none px-4 py-2 text-xs font-mono uppercase tracking-wider border border-gray-200 dark:border-neutral-800 text-gray-600 dark:text-neutral-400 disabled:opacity-40 disabled:cursor-not-allowed hover:text-gray-900 dark:hover:text-neutral-100 transition-colors text-center"
              >
                Previous
              </button>

              <div className="order-1 sm:order-2 flex items-center justify-center gap-2 w-full sm:w-auto">
                {Array.from({ length: totalPages }, (_, index) => {
                  const page = index + 1;
                  const isActive = page === boundedPage;

                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`min-w-9 px-3 py-1.5 text-xs font-mono uppercase tracking-wider border transition-colors ${
                        isActive
                          ? "bg-gray-900 text-white border-gray-900 dark:bg-apple-blue-500 dark:border-apple-blue-500"
                          : "border-gray-200 dark:border-neutral-800 text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-neutral-100"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={boundedPage === totalPages}
                className="order-3 flex-1 sm:flex-none px-4 py-2 text-xs font-mono uppercase tracking-wider border border-gray-200 dark:border-neutral-800 text-gray-600 dark:text-neutral-400 disabled:opacity-40 disabled:cursor-not-allowed hover:text-gray-900 dark:hover:text-neutral-100 transition-colors text-center"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
