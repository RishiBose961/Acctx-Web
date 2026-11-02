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
import { getGitHubDownloads } from "@/lib/github";

export default async function Home() {
  const downloads = await getGitHubDownloads();

  return (
    <div className="flex min-h-screen flex-col bg-[#090a0f] text-zinc-100 selection:bg-emerald-500 selection:text-black">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Hub */}
      <main className="flex-1">
        <Hero downloads={downloads} />
        <InteractivePreview />
        <DesktopGallery />
        <Features />
        <SecurityShowcase />
        <Comparison />
        <DownloadSection downloads={downloads} />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
