import { createFileRoute } from "@tanstack/react-router";
import { Shell, ResearchSection } from "@/components/portfolio";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research Interests — A S Udaya K R Guptha" },
      { name: "description", content: "Research Interests of A S Udaya K R Guptha, PhD scholar in computational physics at SRM University-AP." },
      { property: "og:title", content: "Research Interests — A S Udaya K R Guptha" },
      { property: "og:description", content: "Research Interests of A S Udaya K R Guptha, PhD scholar in computational physics at SRM University-AP." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <Shell>
      <ResearchSection />
    </Shell>
  ),
});
