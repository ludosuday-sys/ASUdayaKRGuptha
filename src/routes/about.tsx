import { createFileRoute } from "@tanstack/react-router";
import { Shell, AboutSection } from "@/components/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — A S Udaya K R Guptha" },
      { name: "description", content: "About of A S Udaya K R Guptha, PhD scholar in computational physics at SRM University-AP." },
      { property: "og:title", content: "About — A S Udaya K R Guptha" },
      { property: "og:description", content: "About of A S Udaya K R Guptha, PhD scholar in computational physics at SRM University-AP." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <Shell>
      <AboutSection />
    </Shell>
  ),
});
