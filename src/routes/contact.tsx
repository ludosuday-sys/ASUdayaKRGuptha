import { createFileRoute } from "@tanstack/react-router";
import { Shell, ContactSection } from "@/components/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — A S Udaya K R Guptha" },
      { name: "description", content: "Contact of A S Udaya K R Guptha, PhD scholar in computational physics at SRM University-AP." },
      { property: "og:title", content: "Contact — A S Udaya K R Guptha" },
      { property: "og:description", content: "Contact of A S Udaya K R Guptha, PhD scholar in computational physics at SRM University-AP." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <Shell>
      <ContactSection />
    </Shell>
  ),
});
