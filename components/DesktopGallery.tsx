"use client";

import Image from "next/image";
import { useState } from "react";
import {
    SparklesIcon
} from "./icons";

interface ScreenshotItem {
  id: string;
  title: string;
  shortLabel: string;
  category: string;
  src: string;
  alt: string;
  description: string;
  highlights: string[];
}

const screenshots: ScreenshotItem[] = [
  {
    id: "pin",
    title: "Master 6-Digit PIN & Lockout Protection",
    shortLabel: "PIN Lock",
    category: "Security",
    src: "https://res.cloudinary.com/nb1pqpkh/image/upload/v1793035676/Acctx_26-10-2026_19_51_10.png",
    alt: "Acctx Desktop Master PIN Lock Screen with Virtual Keypad and Lockout Delay",
    description:
      "When launched, Acctx halts all data access behind a 6-digit cryptographic PIN. Supports on-screen virtual keypad or physical typing, with brute-force cooldown timers to neutralize automated dictionary attacks.",
    highlights: [
      "Salted local key derivation",
      "Automated lockout cooldown timers",
      "Anti-shoulder surfing design",
    ],
  },
  {
    id: "dashboard",
    title: "Real-Time Financial Dashboard & Net Cash Flow",
    shortLabel: "Dashboard",
    category: "Overview",
    src: "https://res.cloudinary.com/nb1pqpkh/image/upload/v1793035677/Acctx_26-10-2026_19_51_24.png",
    alt: "Acctx Desktop Financial Health Dashboard showing net cash flow, income, expenses, and pending dues",
    description:
      "An immediate, high-level summary of your financial status as soon as you unlock the app. Features privacy masking (eye toggle) to instantly conceal sensitive numbers when working in public.",
    highlights: [
      "Instant net cash flow calculation",
      "One-click privacy masking eye toggle",
      "Quick-pay pending bill widget",
    ],
  },
  {
    id: "bills",
    title: "Smart Recurring Bills & Next Cycle Auto-Advance",
    shortLabel: "Recurring Bills",
    category: "Automation",
    src: "https://res.cloudinary.com/nb1pqpkh/image/upload/v1793035677/Acctx_26-10-2026_19_52_18.png",
    alt: "Acctx Desktop Smart Recurring Bills Schedule with automatic due date advancement",
    description:
      "Configure repeating utilities, rent, subscriptions, or credit card bills across weekly, monthly, quarterly, or annual cadences. Marking a bill as settled advances the next due date automatically without duplicate entries.",
    highlights: [
      "Weekly, monthly, quarterly, & yearly cycles",
      "Automatic next-due-date advancement",
      "Linked to transaction expense ledger",
    ],
  },
  {
    id: "ledger",
    title: "Encrypted Transaction Ledger & Instant Search",
    shortLabel: "Ledger",
    category: "Transactions",
    src: "https://res.cloudinary.com/nb1pqpkh/image/upload/v1793035678/Acctx_26-10-2026_19_51_31.png",
    alt: "Acctx Desktop Encrypted Transaction Ledger with real-time category filtering and date ranges",
    description:
      "Lightning-fast local transaction bookkeeping with zero network latency. Filter by category, payment method, date range, or keywords with instant client-side query evaluation.",
    highlights: [
      "0ms local query latency",
      "Comprehensive category tags",
      "Inline quick-edit and delete",
    ],
  },
  {
    id: "notifications",
    title: "Urgency Notification Center Drawer",
    shortLabel: "Notifications",
    category: "Alerts",
    src: "https://res.cloudinary.com/nb1pqpkh/image/upload/v1793035678/Acctx_26-10-2026_19_52_28.png",
    alt: "Acctx Desktop Notification Center Drawer with prioritized bill urgency alerts",
    description:
      "Proactive notifications grouped by urgency: Overdue, Due Today, and Due Soon. Paired with native desktop OS notifications so you never incur a late fee or forgotten subscription.",
    highlights: [
      "Three urgency tiers (Overdue / Today / Soon)",
      "Native Windows, macOS, & Linux notifications",
      "Quick-action settle shortcuts",
    ],
  },
  {
    id: "analytics",
    title: "Visual Cash Flow Trends & Savings Efficiency",
    shortLabel: "Analytics",
    category: "Insights",
    src: "https://res.cloudinary.com/nb1pqpkh/image/upload/v1793035677/Acctx_26-10-2026_19_52_05.png",
    alt: "Acctx Desktop Visual Analytics and Charts showing income vs expense ratio and category breakdowns",
    description:
      "Interactive data visualizations rendered completely on your machine. Inspect category distribution pie charts, monthly cash flow bar charts, and net savings trends.",
    highlights: [
      "Interactive category breakdowns",
      "Monthly savings rate trends",
      "100% private local charting",
    ],
  },
];

export function DesktopGallery() {
  const [selectedIdx, setSelectedIdx] = useState(1);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const current = screenshots[selectedIdx];

  return (
    <section id="gallery" className="relative py-20 sm:py-28 overflow-hidden bg-[#07090e]">
      {/* Subtle Ambient Radial Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-137.5 w-200 rounded-full bg-emerald-500/10 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-4">
            <SparklesIcon size={13} />
            <span>Native Desktop UI Captures</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Inside the Desktop Vault
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Real, unretouched high-resolution captures from the native Acctx binary running locally on Windows, macOS, and Linux.
          </p>
        </div>

        {/* Tactile Tab Selector Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {screenshots.map((s, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`group flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
                  isSelected
                    ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                    : "bg-white/[0.03] text-zinc-400 border border-white/[0.06] hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                <span
                  className={`flex h-4 w-4 items-center justify-center rounded text-[10px] font-mono font-bold ${
                    isSelected ? "bg-black/20 text-black" : "bg-white/10 text-zinc-400 group-hover:text-white"
                  }`}
                >
                  {idx + 1}
                </span>
                <span>{s.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Screenshot Frame Showcase */}
        <figure className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#0c0e17] shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Desktop Titlebar Mockup Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#090b12] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-3 text-xs font-mono text-zinc-400 hidden sm:inline-block">
                Acctx Desktop — {current.title}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsZoomOpen(true)}
                className="flex items-center gap-1 rounded bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-zinc-300 border border-white/10 hover:bg-white/10 hover:text-white transition-colors"
                title="Expand Fullscreen Capture"
              >
                <span>Full Resolution</span>
                <span className="text-[10px] text-emerald-400 font-mono">↗</span>
              </button>
            </div>
          </div>

          {/* Screenshot Image Container */}
          <div
            className="relative cursor-pointer overflow-hidden bg-black/40 group aspect-[16/10] sm:aspect-[16/9.5]"
            onClick={() => setIsZoomOpen(true)}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain object-top transition-transform duration-500 group-hover:scale-[1.015]"
            />
            {/* Click to expand hover hint */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 backdrop-blur-[2px]">
              <span className="rounded-xl border border-emerald-500/40 bg-[#090a0f]/90 px-4 py-2 text-xs font-semibold text-emerald-400 shadow-xl">
                Click to inspect high-resolution capture ↗
              </span>
            </div>
          </div>

          {/* Caption & Feature Breakdown */}
          <figcaption className="border-t border-white/[0.08] bg-[#090c14] p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                    {current.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {current.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="flex flex-col gap-1.5 border-t border-white/[0.06] pt-4 md:border-t-0 md:pt-0 shrink-0">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </figcaption>
        </figure>

        {/* Fullscreen Zoom Modal */}
        {isZoomOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fadeIn"
            onClick={() => setIsZoomOpen(false)}
          >
            <div
              className="relative max-h-[92vh] max-w-6xl w-full rounded-2xl border border-white/20 bg-[#090a0f] p-3 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10 mb-3">
                <span className="text-xs font-mono font-medium text-zinc-300">
                  {current.title} — Native Capture
                </span>
                <button
                  type="button"
                  onClick={() => setIsZoomOpen(false)}
                  className="rounded-lg bg-white/10 px-3 py-1 text-xs font-bold text-white hover:bg-white/20 transition-colors"
                >
                  Close ✕
                </button>
              </div>
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="1200px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
