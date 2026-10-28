/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { DownloadIcon, GithubIcon } from "./icons";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/8 bg-[#090a0f]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl p-0.5 shadow-lg shadow-emerald-500/20 transition-transform group-hover:scale-105">
           
             <img src="/White-Logo.png" alt="Acctx Logo" className="rounded-full" />
            
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white">Acctx</span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#features" className="transition-colors hover:text-white">
            Features
          </a>
          <a href="#preview" className="transition-colors hover:text-white">
            Simulation
          </a>
          <a href="#gallery" className="transition-colors hover:text-white">
            App UI
          </a>
          <a href="#security" className="transition-colors hover:text-white">
            Security & Privacy
          </a>
          <a href="#comparison" className="transition-colors hover:text-white">
            Comparison
          </a>
          <a href="#faq" className="transition-colors hover:text-white">
            FAQ
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/RishiBose961/Acctx-Web"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/3 px-3.5 py-1.5 text-xs font-medium text-zinc-300 transition-all hover:bg-white/8 hover:text-white"
            aria-label="View Acctx repository on GitHub"
          >
            <GithubIcon size={15} />
            <span>Star on GitHub</span>
          </a>

          <a
            href="#download"
            className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-black transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95"
          >
            <DownloadIcon size={14} className="stroke-[2.5]" />
            <span>Download Free</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#0c0e15] px-4 py-6 md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-zinc-300">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 py-1"
            >
              Features
            </a>
            <a
              href="#preview"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 py-1"
            >
              Simulation
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 py-1"
            >
              App UI Gallery
            </a>
            <a
              href="#security"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 py-1"
            >
              Security & Privacy
            </a>
            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 py-1"
            >
              Comparison
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 py-1"
            >
              FAQ
            </a>
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-emerald-500 py-2.5 text-xs font-semibold text-black"
              >
                <DownloadIcon size={14} className="stroke-[2.5]" />
                <span>Download App Free</span>
              </a>
              <a
                href="https://github.com/RishiBose961/Acctx-Web"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 py-2 text-xs font-medium text-zinc-300"
              >
                <GithubIcon size={15} />
                <span>GitHub Repository</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
