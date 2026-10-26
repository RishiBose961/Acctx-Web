import {
  BarChart3Icon,
  BellIcon,
  DatabaseIcon,
  HardDriveIcon,
  LockIcon,
  RefreshCwIcon,
  ShieldIcon,
  SparklesIcon,
} from "./icons";

const features = [
  {
    icon: LockIcon,
    title: "Master 6-Digit PIN Security",
    desc: "Lock your finances behind a cryptographic PIN. Protects against local shoulder surfers with automated lockout cooldown delays.",
    tag: "Bank-Grade",
  },
  {
    icon: HardDriveIcon,
    title: "100% Offline & Private Vault",
    desc: "Your records never touch an external server or cloud provider. Encrypted with AES-256-GCM and stored in local binary BSON.",
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
    desc: "Export and import your entire encrypted financial database with single-click BSON portability. Zero cloud lock-in.",
    tag: "Sovereignty",
  },
];

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

        {/* Bento Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5"
              >
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
