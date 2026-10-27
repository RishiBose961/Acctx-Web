import { CheckIcon, SparklesIcon } from "./icons";

const comparisonData = [
  {
    feature: "Data Storage Location",
    acctx: "100% Local Hard Drive",
    cloud: "Third-Party Cloud Servers",
    spreadsheets: "Local File / Cloud Sync",
  },
  {
    feature: "Monthly Subscription Cost",
    acctx: "Free Forever ($0/mo)",
    cloud: "$12 - $20 / month",
    spreadsheets: "Office 365 or Free",
  },
  {
    feature: "Master PIN Lock & Anti-Brute Force",
    acctx: true,
    cloud: false,
    spreadsheets: false,
  },
  {
    feature: "Smart Bill Recurrence & Next Cycle Auto-Calc",
    acctx: true,
    cloud: true,
    spreadsheets: false,
  },
  {
    feature: "Desktop Native Urgency Notifications",
    acctx: true,
    cloud: false,
    spreadsheets: false,
  },
  {
    feature: "Account or Email Required",
    acctx: "None (Zero Registration)",
    cloud: "Mandatory Email & Phone",
    spreadsheets: "Google / MS Account",
  },
  {
    feature: "Zero Telemetry / Tracking Guarantee",
    acctx: true,
    cloud: false,
    spreadsheets: false,
  },
];

export function Comparison() {
  return (
    <section id="comparison" className="relative py-20 sm:py-28 border-t border-white/6 bg-[#090b11]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-4">
            <SparklesIcon size={13} />
            <span>Honest Evaluation</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Why Switch to Acctx?
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Compare how Acctx stands apart from overpriced cloud trackers and fragile spreadsheet templates.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0e111a] shadow-2xl">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-[#121622]">
                <th className="py-4 px-6 font-semibold text-zinc-400">Capability / Feature</th>
                <th className="py-4 px-6 font-bold text-emerald-400 bg-emerald-500/10 border-x border-emerald-500/20">
                  <div className="flex items-center gap-2">
                    <span>Acctx Desktop</span>
                    <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                      Recommended
                    </span>
                  </div>
                </th>
                <th className="py-4 px-6 font-semibold text-zinc-400">Cloud Budget SaaS</th>
                <th className="py-4 px-6 font-semibold text-zinc-400">Spreadsheets (Excel/Sheets)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/2 transition-colors">
                  <td className="py-4 px-6 font-medium text-white">{row.feature}</td>

                  {/* Acctx Column */}
                  <td className="py-4 px-6 font-bold text-white bg-emerald-500/5 border-x border-emerald-500/20">
                    {typeof row.acctx === "boolean" ? (
                      row.acctx ? (
                        <div className="flex items-center gap-2 text-emerald-400">
                          <CheckIcon size={18} />
                          <span>Included</span>
                        </div>
                      ) : (
                        <span className="text-zinc-500">—</span>
                      )
                    ) : (
                      <span className="text-emerald-400">{row.acctx}</span>
                    )}
                  </td>

                  {/* Cloud Apps Column */}
                  <td className="py-4 px-6 text-zinc-400">
                    {typeof row.cloud === "boolean" ? (
                      row.cloud ? (
                        <div className="flex items-center gap-1.5 text-zinc-300">
                          <CheckIcon size={16} />
                          <span>Yes</span>
                        </div>
                      ) : (
                        <span className="text-rose-400/80">✕ No</span>
                      )
                    ) : (
                      <span>{row.cloud}</span>
                    )}
                  </td>

                  {/* Spreadsheets Column */}
                  <td className="py-4 px-6 text-zinc-400">
                    {typeof row.spreadsheets === "boolean" ? (
                      row.spreadsheets ? (
                        <div className="flex items-center gap-1.5 text-zinc-300">
                          <CheckIcon size={16} />
                          <span>Yes</span>
                        </div>
                      ) : (
                        <span className="text-rose-400/80">✕ Manual only</span>
                      )
                    ) : (
                      <span>{row.spreadsheets}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
