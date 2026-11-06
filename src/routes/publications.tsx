import { createFileRoute } from "@tanstack/react-router";
import { Shell, PublicationsSection } from "@/components/portfolio";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications & Conferences — A S Udaya K R Guptha" },
      { name: "description", content: "Publications & Conferences of A S Udaya K R Guptha, PhD scholar in computational physics at SRM University-AP." },
      { property: "og:title", content: "Publications & Conferences — A S Udaya K R Guptha" },
      { property: "og:description", content: "Publications & Conferences of A S Udaya K R Guptha, PhD scholar in computational physics at SRM University-AP." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <Shell>
      <PublicationsSection />
    </Shell>
  ),
});
