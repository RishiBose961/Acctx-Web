"use client";

import { useRef, useState } from "react";
import {
  BarChart3Icon,
  BellIcon,
  DatabaseIcon,
  HardDriveIcon,
  LockIcon,
  RefreshCwIcon,
  ShieldIcon,
  IconProps,
} from "./icons";

interface FeatureItem {
  icon: (props: IconProps) => React.JSX.Element;
  title: string;
  desc: string;
  tag: string;
}

const features: FeatureItem[] = [
  {
    icon: LockIcon,
    title: "Master 6-Digit PIN Security",
    desc: "Lock your finances behind a cryptographic PIN. Protects against local shoulder surfers with automated lockout cooldown delays.",
    tag: "Bank-Grade",
  },
  {
    icon: HardDriveIcon,
    title: "100% Offline & Private Vault",
    desc: "Your records never touch an external server or cloud provider. Securely encrypted and stored entirely on your local drive.",
    tag: "Zero Cloud",
  },
  {
    icon: RefreshCwIcon,
    title: "Smart Recurring Cycles",
    desc: "Handle weekly, monthly, quarterly, and annual bills. When settled, Acctx automatically advances to the next payment cycle.",
    tag: "Automated",
  },
  {
    icon: BellIcon,
    title: "Urgency Notification Center",
    desc: "Prioritized alerts sorted into Overdue, Due Today, and Due Soon. Native OS desktop alerts ensure you never miss a deadline.",
    tag: "Proactive",
  },
  {
    icon: BarChart3Icon,
    title: "Visual Cash Flow Analytics",
    desc: "Compare monthly income vs expenses, view interactive category distribution charts, and calculate your real savings efficiency.",
    tag: "Insights",
  },
  {
    icon: DatabaseIcon,
    title: "1-Click Portable Backups",
    desc: "Export and import your entire encrypted financial database with a single click. Seamless local backups with zero cloud lock-in.",
    tag: "Sovereignty",
  },
];

function FeatureCard({ item }: { item: FeatureItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const Icon = item.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10 overflow-hidden"
    >
      {/* Linear.app Style Mouse-Following Spotlight Glow */}
      {mousePos && (
        <>
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
            style={{
              background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.15), transparent 80%)`,
            }}
          />
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl border border-emerald-400/50 transition-opacity duration-300"
            style={{
              maskImage: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 80%)`,
              WebkitMaskImage: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 80%)`,
            }}
          />
        </>
      )}

      {/* Card Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 transition-transform group-hover:scale-110">
            <Icon size={20} />
          </div>
          <span className="rounded-full bg-white/[0.05] border border-white/[0.08] px-2.5 py-0.5 text-[10px] font-semibold text-zinc-400">
            {item.tag}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28 border-t border-white/[0.06] bg-[#0b0d14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-4">
            <ShieldIcon size={13} />
            <span>Built For Privacy & Precision</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Everything You Need To Master Your Money
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Engineered from the ground up to eliminate cloud vulnerabilities, subscription paywalls, and tedious manual accounting.
          </p>
        </div>

        {/* Bento Grid Features with Spotlight Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <FeatureCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
