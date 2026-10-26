"use client";

import { useEffect, useState } from "react";
import {
  BellIcon,
  CheckCircle2Icon,
  CheckIcon,
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  RefreshCwIcon,
  ShieldIcon,
  SparklesIcon,
} from "./icons";

type TabType = "dashboard" | "pin" | "bills" | "notifications" | "analytics";

function useAnimatedCount(targetValue: number, durationMs = 1500) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrentValue(targetValue);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      const easedProgress = easeOutExpo(progress);

      setCurrentValue(Math.floor(easedProgress * targetValue));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCurrentValue(targetValue);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetValue, durationMs]);

  return currentValue;
}

export function InteractivePreview() {
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");
  const [isPrivacyMasked, setIsPrivacyMasked] = useState(false);
  const [pinDigits, setPinDigits] = useState<string[]>(["1", "2", "3"]);
  const [pinUnlocked, setPinUnlocked] = useState(false);
  const [paidBills, setPaidBills] = useState<{ [key: string]: boolean }>({
    b1: false,
    b2: false,
    b3: false,
  });

  const animatedBalance = useAnimatedCount(18450, 1600);
  const animatedIncome = useAnimatedCount(6200, 1400);
  const animatedExpenses = useAnimatedCount(2840, 1500);
  const animatedDues = useAnimatedCount(640, 1300);

  const handleKeypadPress = (val: string) => {
    if (val === "clear") {
      setPinDigits([]);
      setPinUnlocked(false);
      return;
    }
    if (pinDigits.length < 6) {
      const next = [...pinDigits, val];
      setPinDigits(next);
      if (next.length === 6) {
        setPinUnlocked(true);
      }
    }
  };

  const toggleBillPayment = (id: string) => {
    setPaidBills((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="preview" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-4">
            <SparklesIcon size={13} />
            <span>Interactive Desktop Simulation</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Experience the Acctx Interface
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Click through the live tabs below to test drive the desktop application features directly inside your browser.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: "dashboard", label: "Financial Dashboard" },
            { id: "pin", label: "Master PIN Lock" },
            { id: "bills", label: "Smart Recurring Bills" },
            { id: "notifications", label: "Notification Drawer" },
            { id: "analytics", label: "Visual Analytics" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                  : "bg-white/[0.04] text-zinc-400 border border-white/5 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Desktop App Window Mockup */}
        <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#0e111a] shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Desktop Titlebar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0a0c13] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-3 text-xs font-mono font-medium text-zinc-400 hidden sm:inline-block">
                Acctx Desktop — [AES-256 Encrypted Vault Active]
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                <LockIcon size={11} />
                <span>Local Session</span>
              </span>
            </div>
          </div>

          {/* Interactive Tab 1: Dashboard View */}
          {activeTab === "dashboard" && (
            <div className="p-6 sm:p-8 space-y-6 animate-fadeIn">
              {/* Top Banner with Balance and Privacy Eye Toggle */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-gradient-to-r from-emerald-950/20 via-zinc-900/40 to-transparent p-5">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
                    <span>Net Available Cash Flow</span>
                    <button
                      type="button"
                      onClick={() => setIsPrivacyMasked(!isPrivacyMasked)}
                      className="rounded p-1 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                      title="Toggle Privacy Blur"
                      aria-label="Toggle sensitive balance visibility"
                    >
                      {isPrivacyMasked ? <EyeOffIcon size={14} className="text-emerald-400" /> : <EyeIcon size={14} />}
                    </button>
                    <span className="text-[10px] text-zinc-500">(Click eye to test privacy mask)</span>
                  </div>
                  <div className="mt-1 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {isPrivacyMasked ? (
                      <span className="tracking-widest text-emerald-400">••••••••</span>
                    ) : (
                      `$${animatedBalance.toLocaleString("en-US")}.00`
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-emerald-500/15 px-3 py-1.5 text-xs font-bold text-emerald-400 border border-emerald-500/20">
                    +18.4% this month
                  </span>
                </div>
              </div>

              {/* KPI Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <span className="text-xs font-medium text-zinc-400">Total Monthly Income</span>
                  <div className="mt-2 text-2xl font-bold text-emerald-400 font-mono">
                    {isPrivacyMasked ? "••••" : `+$${animatedIncome.toLocaleString("en-US")}.00`}
                  </div>
                  <span className="text-[11px] text-zinc-500">2 active income sources</span>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <span className="text-xs font-medium text-zinc-400">Total Expenses</span>
                  <div className="mt-2 text-2xl font-bold text-rose-400 font-mono">
                    {isPrivacyMasked ? "••••" : `-$${animatedExpenses.toLocaleString("en-US")}.00`}
                  </div>
                  <span className="text-[11px] text-zinc-500">Across 14 categories</span>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <span className="text-xs font-medium text-zinc-400">Active Dues & Bills</span>
                  <div className="mt-2 text-2xl font-bold text-amber-400 font-mono">
                    {isPrivacyMasked ? "••••" : `$${animatedDues.toLocaleString("en-US")}.00`}
                  </div>
                  <span className="text-[11px] text-zinc-500">3 bills pending this cycle</span>
                </div>
              </div>

              {/* Split View: Recent Transactions & Quick Pay Bills */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Recent Transactions */}
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-white">Recent Transactions</h3>
                    <span className="text-xs text-zinc-500">Last 5 records</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { title: "Monthly Salary Client A", cat: "Income", date: "Today, 10:30 AM", amt: "+$4,500.00", isIncome: true },
                      { title: "Whole Foods Market", cat: "Groceries", date: "Yesterday", amt: "-$84.50", isIncome: false },
                      { title: "DigitalOcean Cloud VPS", cat: "Servers", date: "2 days ago", amt: "-$48.00", isIncome: false },
                    ].map((tx, idx) => (
                      <div key={idx} className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-none">
                        <div>
                          <div className="text-xs font-medium text-zinc-200">{tx.title}</div>
                          <div className="text-[10px] text-zinc-500">{tx.cat} • {tx.date}</div>
                        </div>
                        <div className={`text-xs font-bold ${tx.isIncome ? "text-emerald-400" : "text-zinc-200"}`}>
                          {isPrivacyMasked ? "••••" : tx.amt}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Bills Settlement */}
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-white">Pending Obligations</h3>
                    <span className="text-xs text-emerald-400">Auto-Cycle Ready</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { id: "b1", title: "Internet Fiber 1Gbps", due: "Due Today", amt: "$79.00", cycle: "Monthly" },
                      { id: "b2", title: "Health Insurance Plan", due: "Due in 3d", amt: "$210.00", cycle: "Monthly" },
                      { id: "b3", title: "Domain Renewals (Cloudflare)", due: "Due in 7d", amt: "$32.00", cycle: "Yearly" },
                    ].map((bill) => (
                      <div key={bill.id} className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-none">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-zinc-200">{bill.title}</span>
                            <span className="rounded bg-white/5 px-1.5 py-0.2 text-[9px] text-zinc-400">
                              {bill.cycle}
                            </span>
                          </div>
                          <div className="text-[10px] text-amber-400">{bill.due} • {bill.amt}</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleBillPayment(bill.id)}
                          className={`rounded px-2.5 py-1 text-xs font-semibold transition-all ${
                            paidBills[bill.id]
                              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                              : "bg-emerald-500 text-black hover:bg-emerald-400"
                          }`}
                        >
                          {paidBills[bill.id] ? "✓ Settled" : "Pay Now"}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Tab 2: Master PIN Screen */}
          {activeTab === "pin" && (
            <div className="p-8 sm:p-12 flex flex-col items-center justify-center animate-fadeIn text-center">
              <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <LockIcon size={24} className="text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Acctx Security Lock</h3>
              <p className="text-xs text-zinc-400 mt-1 max-w-sm">
                Enter your 6-digit Master PIN to decrypt your local AES-256 database. Brute-force protected.
              </p>

              {/* 6 Dots Indicator */}
              <div className="flex items-center gap-3 my-6">
                {[0, 1, 2, 3, 4, 5].map((idx) => (
                  <span
                    key={idx}
                    className={`h-4 w-4 rounded-full transition-all ${
                      idx < pinDigits.length
                        ? "bg-emerald-400 shadow-md shadow-emerald-400/50 scale-110"
                        : "border-2 border-white/20 bg-transparent"
                    }`}
                  />
                ))}
              </div>

              {pinUnlocked ? (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-400 mb-6 flex items-center gap-2">
                  <CheckCircle2Icon size={16} />
                  <span>Vault Decrypted Successfully! Session active.</span>
                </div>
              ) : (
                <div className="text-[11px] text-zinc-500 mb-6">
                  Cooldown protection active • 0 failed attempts
                </div>
              )}

              {/* Interactive Keypad */}
              <div className="grid grid-cols-3 gap-3 w-64 max-w-full">
                {["1", "2", "3", "4", "5", "6", "7", "8", "9", "clear", "0", "OK"].map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      if (key === "clear") handleKeypadPress("clear");
                      else if (key === "OK") {
                        if (pinDigits.length === 6) setPinUnlocked(true);
                      } else handleKeypadPress(key);
                    }}
                    className={`h-12 rounded-xl text-sm font-semibold transition-all ${
                      key === "clear"
                        ? "bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20"
                        : key === "OK"
                        ? "bg-emerald-500 text-black hover:bg-emerald-400 font-bold"
                        : "bg-white/[0.04] text-white hover:bg-white/[0.1] border border-white/[0.08]"
                    }`}
                  >
                    {key === "clear" ? "Reset" : key}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Tab 3: Smart Recurring Bills */}
          {activeTab === "bills" && (
            <div className="p-6 sm:p-8 space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-white">Smart Recurring Cycles</h3>
                  <p className="text-xs text-zinc-400">
                    When you settle a bill, Acctx automatically logs payment history and advances the date to the next cycle.
                  </p>
                </div>
                <span className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
                  Real-time Cycle Engine
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-white/10 text-zinc-400 uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="py-3 px-4">Bill Title</th>
                      <th className="py-3 px-4">Frequency</th>
                      <th className="py-3 px-4">Amount</th>
                      <th className="py-3 px-4">Current Due</th>
                      <th className="py-3 px-4">Next Cycle Preview</th>
                      <th className="py-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    {[
                      { id: "bill1", name: "Apartment Rent", freq: "Monthly", amt: "$1,450.00", due: "Nov 01, 2026", next: "Dec 01, 2026", urgent: true },
                      { id: "bill2", name: "Adobe Creative Cloud", freq: "Monthly", amt: "$54.99", due: "Nov 05, 2026", next: "Dec 05, 2026", urgent: false },
                      { id: "bill3", name: "Gym Membership", freq: "Quarterly", amt: "$180.00", due: "Nov 15, 2026", next: "Feb 15, 2027", urgent: false },
                      { id: "bill4", name: "Car Insurance (Geico)", freq: "6-Months", amt: "$420.00", due: "Dec 10, 2026", next: "Jun 10, 2027", urgent: false },
                    ].map((row) => (
                      <tr key={row.id} className="hover:bg-white/[0.02]">
                        <td className="py-3.5 px-4 font-semibold text-white">{row.name}</td>
                        <td className="py-3.5 px-4">
                          <span className="rounded bg-white/[0.06] px-2 py-0.5 text-[10px] text-zinc-300">
                            {row.freq}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-zinc-100">{row.amt}</td>
                        <td className="py-3.5 px-4">
                          <span className={row.urgent ? "text-amber-400 font-semibold" : "text-zinc-400"}>
                            {paidBills[row.id] ? "Paid" : row.due}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-emerald-400 font-mono text-[11px]">{row.next}</td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            type="button"
                            onClick={() => toggleBillPayment(row.id)}
                            className={`rounded px-3 py-1 text-xs font-semibold transition-all ${
                              paidBills[row.id]
                                ? "bg-emerald-500/20 text-emerald-400"
                                : "bg-emerald-500 text-black hover:bg-emerald-400"
                            }`}
                          >
                            {paidBills[row.id] ? "Advanced ✓" : "Settle & Advance"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Interactive Tab 4: Urgency Notification Drawer */}
          {activeTab === "notifications" && (
            <div className="p-6 sm:p-8 space-y-5 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <BellIcon size={18} className="text-emerald-400" />
                  <h3 className="text-base font-bold text-white">Notification Urgency Center</h3>
                </div>
                <span className="rounded-full bg-rose-500/20 px-2.5 py-0.5 text-[10px] font-bold text-rose-400 border border-rose-500/30">
                  1 Overdue • 1 Due Today
                </span>
              </div>

              {/* Urgent Tier: Overdue */}
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-500 animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-400">Overdue Notice</span>
                  </div>
                  <span className="text-xs font-bold text-rose-300">-$45.00</span>
                </div>
                <div className="mt-2 text-sm font-semibold text-white">DigitalOcean Web VPS</div>
                <p className="text-xs text-rose-200/70 mt-0.5">Scheduled for 2 days ago. Settle to keep services running.</p>
              </div>

              {/* Warning Tier: Due Today */}
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Due Today</span>
                  <span className="text-xs font-bold text-amber-300">-$79.00</span>
                </div>
                <div className="mt-2 text-sm font-semibold text-white">AT&T High-Speed Fiber</div>
                <p className="text-xs text-amber-200/70 mt-0.5">Cycle resets tonight at 11:59 PM.</p>
              </div>

              {/* Info Tier: Due Soon */}
              <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Due In 3 Days</span>
                  <span className="text-xs font-bold text-blue-300">-$210.00</span>
                </div>
                <div className="mt-2 text-sm font-semibold text-white">Health Insurance Premium</div>
                <p className="text-xs text-blue-200/70 mt-0.5">Recurring monthly obligation.</p>
              </div>
            </div>
          )}

          {/* Interactive Tab 5: Visual Analytics */}
          {activeTab === "analytics" && (
            <div className="p-6 sm:p-8 space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-white">Visual Cash Flow Analytics</h3>
                  <p className="text-xs text-zinc-400">
                    Live distributions and net flow trajectory powered by offline local aggregation.
                  </p>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
                  Savings Rate: 54.2%
                </span>
              </div>

              {/* Cash Flow Comparison Bar Simulation */}
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="text-xs font-semibold text-zinc-300 mb-4">Monthly Income vs. Expenses (USD)</div>
                <div className="grid grid-cols-4 gap-4 items-end h-40 pt-4">
                  {[
                    { month: "Jul", income: 80, expense: 45 },
                    { month: "Aug", income: 85, expense: 50 },
                    { month: "Sep", income: 75, expense: 40 },
                    { month: "Oct", income: 95, expense: 42 },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 h-full justify-end">
                      <div className="flex items-end gap-1.5 w-full justify-center h-28">
                        <div
                          style={{ height: `${item.income}%` }}
                          className="w-4 sm:w-6 rounded-t bg-emerald-400 transition-all hover:bg-emerald-300"
                          title={`Income: ${item.income}%`}
                        />
                        <div
                          style={{ height: `${item.expense}%` }}
                          className="w-4 sm:w-6 rounded-t bg-rose-400/80 transition-all hover:bg-rose-300"
                          title={`Expenses: ${item.expense}%`}
                        />
                      </div>
                      <span className="text-[11px] font-medium text-zinc-400">{item.month}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-6 mt-4 text-xs font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="text-zinc-300">Income</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="text-zinc-300">Expenses</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
