import { createFileRoute } from "@tanstack/react-router";
import { Shell, SkillsSection } from "@/components/portfolio";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — A S Udaya K R Guptha" },
      { name: "description", content: "Skills of A S Udaya K R Guptha, PhD scholar in computational physics at SRM University-AP." },
      { property: "og:title", content: "Skills — A S Udaya K R Guptha" },
      { property: "og:description", content: "Skills of A S Udaya K R Guptha, PhD scholar in computational physics at SRM University-AP." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <Shell>
      <SkillsSection />
    </Shell>
  ),
});
