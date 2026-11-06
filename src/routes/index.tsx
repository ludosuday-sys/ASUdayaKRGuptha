import { createFileRoute } from "@tanstack/react-router";
import { Shell, HeroSection } from "@/components/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A S Udaya K R Guptha — PhD Scholar in Computational Physics" },
      { name: "description", content: "Academic portfolio of A S Udaya K R Guptha, PhD scholar at SRM University-AP researching ion-related properties of 2D materials with DFT and VASP." },
      { property: "og:title", content: "A S Udaya K R Guptha — PhD Scholar in Computational Physics" },
      { property: "og:description", content: "Academic portfolio of A S Udaya K R Guptha, PhD scholar at SRM University-AP researching ion-related properties of 2D materials with DFT and VASP." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <Shell>
      <HeroSection />
    </Shell>
  ),
});
