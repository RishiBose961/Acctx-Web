import { CheckIcon, HardDriveIcon, LockIcon, ShieldIcon, WifiOffIcon } from "./icons";

export function SecurityShowcase() {
  return (
    <section id="security" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#121622] to-[#0a0c13] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Privacy Philosophy */}
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-6">
                <LockIcon size={13} />
                <span>Zero Trust Architecture</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Your Finances Are Yours Alone. Not Ours. Not The Cloud&apos;s.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                Most budgeting apps require you to link real bank credentials to third-party cloud aggregators where data breaches and server outages are constant risks. Acctx takes the exact opposite approach.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "AES-256-GCM Local Cryptography",
                    desc: "Every transaction, note, and bill is encrypted with symmetric AES-256 before being committed to your storage drive.",
                  },
                  {
                    title: "Master PIN with Salted Hashing",
                    desc: "Your 6-digit PIN never leaves memory. It derives the decryption key locally with brute-force cooldown timers.",
                  },
                  {
                    title: "True 0-Telemetry Guarantee",
                    desc: "Zero tracking cookies, zero Google Analytics, zero telemetry pingbacks. Runs in an air-gapped environment without internet.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5">
                      <CheckIcon size={14} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{item.title}</h3>
                      <p className="text-xs leading-normal text-zinc-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Cryptographic Diagram */}
            <div className="rounded-2xl border border-white/10 bg-[#07090e] p-6 sm:p-8 space-y-4">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 flex items-center justify-between">
                <span>Local Data Flow Diagram</span>
                <span className="text-zinc-500">Air-Gapped</span>
              </div>

              {/* Step 1 */}
              <div className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <LockIcon size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">1. Master 6-Digit PIN</div>
                    <div className="text-[11px] text-zinc-400">Salted & stretched in volatile memory</div>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">Protected</span>
              </div>

              {/* Flow Arrow */}
              <div className="flex justify-center text-zinc-600 font-mono text-xs">
                ↓ Local Symmetric Derivation
              </div>

              {/* Step 2 */}
              <div className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                    <ShieldIcon size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">2. AES-256-GCM Cipher</div>
                    <div className="text-[11px] text-zinc-400">Military-grade authenticated encryption</div>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">Encrypted</span>
              </div>

              {/* Flow Arrow */}
              <div className="flex justify-center text-zinc-600 font-mono text-xs">
                ↓ Binary Storage
              </div>

              {/* Step 3 */}
              <div className="flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                    <HardDriveIcon size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">3. Local User OS Directory</div>
                    <div className="text-[11px] text-zinc-400">Zero external cloud requests (Blocked)</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                  <WifiOffIcon size={13} />
                  <span>Offline</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
