import { DownloadIcon, GithubIcon, ShieldIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#07090e] py-14 text-zinc-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/6">
          {/* Logo & Tagline */}
          <div className="max-w-md">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                <ShieldIcon size={16} />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Acctx
              </span>
              <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-mono text-zinc-300">
                v1.0.0
              </span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-zinc-400">
              Modern, private, offline-first personal finance and smart bill
              reminder application for Windows, macOS, and Linux. Zero
              telemetry, zero cloud tracking.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-zinc-400">
              IDEA BY RISHI BOSE / DESIGN BY AYAN BANERJEE
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            <div>
              <div className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
                Product
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#preview"
                    className="hover:text-white transition-colors"
                  >
                    Simulation
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="hover:text-white transition-colors"
                  >
                    Desktop UI Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#download"
                    className="hover:text-white transition-colors"
                  >
                    Download App
                  </a>
                </li>
                <li>
                  <a
                    href="#security"
                    className="hover:text-white transition-colors"
                  >
                    Security & Privacy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
                Comparison
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#comparison"
                    className="hover:text-white transition-colors"
                  >
                    Acctx vs Cloud Apps
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
                Open Source
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/ayanbanerjee-png/Acctx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <GithubIcon size={13} />
                    <span>GitHub Repo</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/RishiBose961/Acctx/releases/tag/Acctx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <DownloadIcon size={13} />
                    <span>Releases</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>© 2026 Acctx. Released under the MIT Open Source License.</div>
          <div className="flex items-center gap-4">
            <span>100% Offline & Private</span>
            <span>•</span>
            <span>No Cookies / Zero Telemetry</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
