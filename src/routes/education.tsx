import { createFileRoute } from "@tanstack/react-router";
import { Shell, EducationSection } from "@/components/portfolio";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — A S Udaya K R Guptha" },
      { name: "description", content: "Education of A S Udaya K R Guptha, PhD scholar in computational physics at SRM University-AP." },
      { property: "og:title", content: "Education — A S Udaya K R Guptha" },
      { property: "og:description", content: "Education of A S Udaya K R Guptha, PhD scholar in computational physics at SRM University-AP." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <Shell>
      <EducationSection />
    </Shell>
  ),
});
