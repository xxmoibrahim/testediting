import { createFileRoute } from "@tanstack/react-router";
import { PageLoader } from "@/components/site/PageLoader";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { FeaturedShowreel } from "@/components/site/FeaturedShowreel";
import { PortfolioGallery } from "@/components/site/PortfolioGallery";
import { Skills } from "@/components/site/Skills";
import { Testimonials } from "@/components/site/Testimonials";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "V_KINETIC — Video Editor & Motion Designer" },
      {
        name: "description",
        content:
          "Premium video editing, motion graphics, and color grading for brands, agencies, and filmmakers. Cinematic edits, kinetic motion, and a colorist's eye.",
      },
      { property: "og:title", content: "V_KINETIC — Video Editor & Motion Designer" },
      {
        property: "og:description",
        content:
          "Premium video editing and motion graphics for brands and filmmakers. Cinematic, kinetic, color-graded.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "V_KINETIC — Video Editor & Motion Designer" },
      {
        name: "twitter:description",
        content: "Premium video editing and motion graphics for brands and filmmakers.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "V_KINETIC",
          jobTitle: "Video Editor & Motion Designer",
          url: "/",
          sameAs: [
            "https://instagram.com",
            "https://linkedin.com",
            "https://vimeo.com",
          ],
          knowsAbout: [
            "Video Editing",
            "Motion Graphics",
            "Color Grading",
            "Adobe Premiere Pro",
            "After Effects",
            "DaVinci Resolve",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-canvas text-zinc-300 font-sans min-h-screen">
      <PageLoader />
      <SiteNav />
      <main>
        <Hero />
        <FeaturedShowreel />
        <PortfolioGallery />
        <Skills />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
