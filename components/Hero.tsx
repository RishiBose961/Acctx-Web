"use client";

import { useEffect, useState } from "react";
import {
  AppleIcon,
  CheckIcon,
  ChevronDownIcon,
  DownloadIcon,
  LinuxIcon,
  LockIcon,
  ShieldIcon,
  SparklesIcon,
  WifiOffIcon,
  WindowsIcon,
} from "./icons";

interface PlatformInfo {
  os: "windows" | "mac" | "linux";
  label: string;
  ext: string;
  filename: string;
  badge: string;
  available: boolean;
  downloadUrl: string;
}

export function Hero() {
  const [platform, setPlatform] = useState<PlatformInfo>({
    os: "windows",
    label: "Download for Windows",
    ext: "Windows 10 / 11 (64-bit)",
    filename: "Acctx-Windows-Setup.exe",
    badge: "v1.0.0 (102 MB)",
    available: true,
    downloadUrl: "https://github.com/RishiBose961/Acctx-Web/releases",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const selectOS = (os: "windows" | "mac" | "linux") => {
    if (os === "windows") {
      setPlatform({
        os: "windows",
        label: "Download for Windows",
        ext: "Windows 10 / 11 (64-bit)",
        filename: "Acctx-Windows-Setup.exe",
        badge: "v1.0.0 (102 MB)",
        available: true,
        downloadUrl: "https://github.com/RishiBose961/Acctx-Web/releases",
      });
    } else if (os === "mac") {
      setPlatform({
        os: "mac",
        label: "macOS Build Coming Soon",
        ext: "In Development",
        filename: "Acctx-macOS.dmg",
        badge: "Coming Soon",
        available: false,
        downloadUrl: "#download",
      });
    } else {
      setPlatform({
        os: "linux",
        label: "Linux Build Coming Soon",
        ext: "In Development",
        filename: "Acctx-Linux.AppImage",
        badge: "Coming Soon",
        available: false,
        downloadUrl: "#download",
      });
    }
    setDropdownOpen(false);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-112.5 w-150 rounded-full bg-emerald-500/15 blur-[140px] animate-pulse-glow" />
        <div className="absolute top-1/4 h-87.5 w-125 rounded-full bg-blue-500/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Animated Version Announcement Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400 backdrop-blur-md mb-8 transition-all hover:bg-emerald-500/15 hover:border-emerald-500/40">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <SparklesIcon size={14} />
          <span>Acctx v1.0.0 for Windows Available Now</span>
          <span className="text-emerald-300/40">•</span>
          <span className="text-zinc-300">100% Offline & Free</span>
        </div>

        {/* Main H1 Title for SEO & Brand */}
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-[1.12]">
          Private, Offline-First Personal Finance &{" "}
          <span className="bg-linear-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Smart Bill Management
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 sm:text-lg sm:leading-relaxed">
          Take total control of your money without exposing your bank accounts or expenses to cloud servers. 
          Protected by <strong className="font-semibold text-zinc-200">Master 6-digit PIN authentication</strong>, 
          <strong className="font-semibold text-zinc-200"> secure local encryption</strong>, and automatic recurring bill cycles.
        </p>

        {/* Main Download CTA Hub with OS Awareness */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="relative inline-flex flex-col sm:flex-row items-center">
            {/* Primary Download Button */}
            <a
              id="hero-download-btn"
              href={platform.downloadUrl}
              target={platform.available ? "_blank" : undefined}
              rel={platform.available ? "noopener noreferrer" : undefined}
              className={`group relative flex items-center justify-center gap-3.5 rounded-xl px-7 py-4 text-base font-bold shadow-xl transition-all active:scale-95 ${
                platform.available
                  ? "bg-linear-to-r from-emerald-500 to-teal-400 text-black shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-300 hover:shadow-2xl hover:shadow-emerald-500/40"
                  : "bg-white/10 text-white border border-white/15 hover:bg-white/15"
              }`}
            >
              <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${platform.available ? "bg-black/15 text-black" : "bg-white/10 text-white"}`}>
                {platform.os === "windows" && <WindowsIcon size={18} />}
                {platform.os === "mac" && <AppleIcon size={18} />}
                {platform.os === "linux" && <LinuxIcon size={18} />}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5 leading-none">
                  <span>{platform.label}</span>
                  <DownloadIcon size={16} className="transition-transform group-hover:translate-y-0.5" />
                </div>
                <span className={`text-[11px] font-medium ${platform.available ? "text-black/75" : "text-zinc-400"}`}>
                  {platform.available ? `${platform.ext} • Free (102 MB)` : "In Development • Windows Available"}
                </span>
              </div>
            </a>

            {/* Platform Selector Dropdown Toggle */}
            <div className="relative mt-2 sm:mt-0 sm:ml-2">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/4 px-3 py-3.5 text-xs font-medium text-zinc-300 transition-colors hover:bg-white/8 hover:text-white"
                aria-label="Select alternative operating system"
                title="Select another operating system"
              >
                <span>Other OS</span>
                <ChevronDownIcon size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute left-1/2 sm:left-0 z-30 mt-2 w-64 -translate-x-1/2 sm:translate-x-0 rounded-xl border border-white/10 bg-[#12151f] p-1.5 shadow-2xl backdrop-blur-xl">
                  <button
                    type="button"
                    onClick={() => selectOS("windows")}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-xs transition-colors ${
                      platform.os === "windows"
                        ? "bg-emerald-500/20 text-emerald-400 font-semibold"
                        : "text-zinc-300 hover:bg-white/5"
                    }`}
                  >
                    <WindowsIcon size={16} />
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <span>Windows (64-bit)</span>
                        <span className="rounded bg-emerald-500/20 px-1.5 py-0.2 text-[9px] font-semibold text-emerald-400">Available</span>
                      </div>
                      <div className="text-[10px] text-zinc-500">.exe Installer • 102 MB</div>
                    </div>
                    {platform.os === "windows" && <CheckIcon size={14} />}
                  </button>

                  <button
                    type="button"
                    onClick={() => selectOS("mac")}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-xs transition-colors ${
                      platform.os === "mac"
                        ? "bg-emerald-500/20 text-emerald-400 font-semibold"
                        : "text-zinc-300 hover:bg-white/5"
                    }`}
                  >
                    <AppleIcon size={16} />
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <span>macOS</span>
                        <span className="rounded bg-white/10 px-1.5 py-0.2 text-[9px] font-medium text-zinc-400">Soon</span>
                      </div>
                      <div className="text-[10px] text-zinc-500">Apple Silicon / Intel .dmg</div>
                    </div>
                    {platform.os === "mac" && <CheckIcon size={14} />}
                  </button>

                  <button
                    type="button"
                    onClick={() => selectOS("linux")}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-xs transition-colors ${
                      platform.os === "linux"
                        ? "bg-emerald-500/20 text-emerald-400 font-semibold"
                        : "text-zinc-300 hover:bg-white/5"
                    }`}
                  >
                    <LinuxIcon size={16} />
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <span>Linux</span>
                        <span className="rounded bg-white/10 px-1.5 py-0.2 text-[9px] font-medium text-zinc-400">Soon</span>
                      </div>
                      <div className="text-[10px] text-zinc-500">.AppImage / .deb</div>
                    </div>
                    {platform.os === "linux" && <CheckIcon size={14} />}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Secondary CTA: Live Interactive Demo */}
          <a
            href="#preview"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-white/9 hover:border-white/20 active:scale-95"
          >
            <span>Interactive Live Preview</span>
            <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400">
              Try In Browser
            </span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-medium text-zinc-400">
          <div className="flex items-center gap-2">
            <WifiOffIcon size={15} className="text-emerald-400" />
            <span>100% Offline (No Cloud)</span>
          </div>
          <div className="flex items-center gap-2">
            <LockIcon size={15} className="text-emerald-400" />
            <span>Secure Encrypted Vault</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldIcon size={15} className="text-emerald-400" />
            <span>6-Digit Master PIN Lockout</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon size={15} className="text-emerald-400" />
            <span>Zero Subscriptions & Free Forever</span>
          </div>
        </div>
      </div>
    </section>
  );
}
