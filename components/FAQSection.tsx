"use client";

import { useState } from "react";
import { ArrowUpRightIcon, ChevronDownIcon, GithubIcon, SparklesIcon } from "./icons";
import { faqs } from "./faqData";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 border-t border-white/[0.06] bg-[#0c0e16]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-4">
            <SparklesIcon size={13} />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Everything you need to know about privacy, security, and using Acctx.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/[0.08] bg-white/[0.02] transition-colors hover:border-white/15 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-white focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDownIcon
                    size={18}
                    className={`shrink-0 text-emerald-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-white/[0.04] px-5 pb-5 pt-3 text-xs sm:text-sm leading-relaxed text-zinc-400 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Footer Card */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-gradient-to-r from-emerald-950/20 via-zinc-900/40 to-[#0e111a] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5">
            <h3 className="text-base sm:text-lg font-bold text-white">
              Still have questions about Acctx?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Explore our comprehensive{" "}
              <a
                href="https://github.com/RishiBose961/Acctx-Web#readme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300 font-medium transition-colors"
              >
                Documentation on GitHub
              </a>{" "}
              or get direct help by{" "}
              <a
                href="https://github.com/RishiBose961/Acctx-Web/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300 font-medium transition-colors"
              >
                opening an issue
              </a>.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://github.com/RishiBose961/Acctx-Web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-zinc-200 transition-all hover:bg-white/[0.08] hover:text-white"
              aria-label="View Acctx GitHub Repository"
            >
              <GithubIcon size={15} />
              <span>GitHub Docs</span>
            </a>
            <a
              href="https://github.com/RishiBose961/Acctx-Web/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-black transition-all hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
              aria-label="Ask questions on Acctx GitHub issues"
            >
              <span>Ask on GitHub</span>
              <ArrowUpRightIcon size={14} className="stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
