import { createFileRoute } from "@tanstack/react-router";
import { Shell, ExperienceSection } from "@/components/portfolio";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — A S Udaya K R Guptha" },
      { name: "description", content: "Experience of A S Udaya K R Guptha, PhD scholar in computational physics at SRM University-AP." },
      { property: "og:title", content: "Experience — A S Udaya K R Guptha" },
      { property: "og:description", content: "Experience of A S Udaya K R Guptha, PhD scholar in computational physics at SRM University-AP." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <Shell>
      <ExperienceSection />
    </Shell>
  ),
});
