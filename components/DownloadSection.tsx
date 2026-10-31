import {
  AppleIcon,
  CheckCircle2Icon,
  DownloadIcon,
  GithubIcon,
  LinuxIcon,
  LockIcon,
  ShieldIcon,
  WindowsIcon,
} from "./icons";

const platforms = [
  {
    name: "Windows",
    version: "v1.0.2 (Latest)",
    req: "Windows 10 / 11 (64-bit)",
    format: "Setup Installer (.exe)",
    size: "102 MB",
    icon: WindowsIcon,
    featured: true,
    available: true,
    downloadUrl: "https://github.com/RishiBose961/Acctx-Web/releases/download/Acctx102/Acctx-Windows-1.0.2-Setup.exe",
    releaseUrl: "https://github.com/RishiBose961/Acctx-Web/releases/tag/Acctx102",
    btnLabel: "Download for Windows (.exe)",
    altBtn: "View Release Notes & Checksum",
  },
  {
    name: "macOS",
    version: "Coming Soon",
    req: "macOS 12+ (Apple Silicon & Intel)",
    format: "Disk Image (.dmg)",
    size: "In Build",
    icon: AppleIcon,
    featured: false,
    available: false,
    downloadUrl: "https://github.com/RishiBose961/Acctx-Web/releases/tag/Acctx102",
    releaseUrl: "https://github.com/RishiBose961/Acctx-Web/releases/tag/Acctx102",
    btnLabel: "macOS Build Coming Soon",
    altBtn: "Follow Releases on GitHub",
  },
  {
    name: "Linux",
    version: "Coming Soon",
    req: "Ubuntu, Debian, Fedora, Arch",
    format: "Standalone (.AppImage)",
    size: "In Build",
    icon: LinuxIcon,
    featured: false,
    available: false,
    downloadUrl: "https://github.com/RishiBose961/Acctx-Web/releases/tag/Acctx102",
    releaseUrl: "https://github.com/RishiBose961/Acctx-Web/releases/tag/Acctx102",
    btnLabel: "Linux Build Coming Soon",
    altBtn: "Follow Releases on GitHub",
  },
];

export function DownloadSection() {
  return (
    <section id="download" className="relative py-20 sm:py-28 overflow-hidden bg-[#0a0c13]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[500px] w-[700px] rounded-full bg-emerald-500/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-4">
            <DownloadIcon size={13} />
            <span>Official Desktop Release</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Download Acctx for Your Desktop
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Free forever, open-source, and offline. Windows v1.0.2 is available now. macOS and Linux builds are currently in development.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className={`relative flex flex-col justify-between rounded-2xl border p-7 transition-all duration-300 ${
                  p.featured
                    ? "border-emerald-500/40 bg-gradient-to-b from-[#141b24] to-[#0e111a] shadow-2xl shadow-emerald-500/10 scale-105 z-10"
                    : "border-white/10 bg-[#0e111a] hover:border-white/20"
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-black">
                    Available Now
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 text-white">
                      <Icon size={24} />
                    </div>
                    <span className={`rounded px-2 py-0.5 text-xs font-mono ${
                      p.available ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold" : "bg-white/[0.06] text-zinc-500"
                    }`}>
                      {p.version}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">{p.name}</h3>
                  <div className="text-xs text-zinc-400 mt-1">{p.req}</div>

                  <div className="my-6 space-y-2 border-y border-white/[0.06] py-4 text-xs text-zinc-300">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500">Package Type:</span>
                      <span className="font-medium text-white">{p.format}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500">File Size:</span>
                      <span className="font-mono text-white">{p.size}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500">Data Storage:</span>
                      <span className="text-emerald-400 font-medium">100% Offline Vault</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {p.available ? (
                    <a
                      href={p.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold transition-all bg-emerald-500 text-black hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95"
                    >
                      <DownloadIcon size={14} className="stroke-[2.5]" />
                      <span>{p.btnLabel}</span>
                    </a>
                  ) : (
                    <div className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-medium bg-white/[0.04] text-zinc-500 border border-white/[0.06] cursor-not-allowed">
                      <span>{p.btnLabel}</span>
                    </div>
                  )}

                  <a
                    href={p.releaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-[11px] text-zinc-500 transition-colors hover:text-zinc-300"
                  >
                    {p.altBtn}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
