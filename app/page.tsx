import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { InteractivePreview } from "@/components/InteractivePreview";
import { DesktopGallery } from "@/components/DesktopGallery";
import { Features } from "@/components/Features";
import { SecurityShowcase } from "@/components/SecurityShowcase";
import { Comparison } from "@/components/Comparison";
import { DownloadSection } from "@/components/DownloadSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#090a0f] text-zinc-100 selection:bg-emerald-500 selection:text-black">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Hub */}
      <main className="flex-1">
        <Hero />
        <InteractivePreview />
        <DesktopGallery />
        <Features />
        <SecurityShowcase />
        <Comparison />
        <DownloadSection />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
