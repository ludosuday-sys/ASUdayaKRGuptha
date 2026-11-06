import { createFileRoute } from "@tanstack/react-router";
import { Shell, CertificationsSection } from "@/components/portfolio";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications & CV — A S Udaya K R Guptha" },
      { name: "description", content: "Certifications & CV of A S Udaya K R Guptha, PhD scholar in computational physics at SRM University-AP." },
      { property: "og:title", content: "Certifications & CV — A S Udaya K R Guptha" },
      { property: "og:description", content: "Certifications & CV of A S Udaya K R Guptha, PhD scholar in computational physics at SRM University-AP." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <Shell>
      <CertificationsSection />
    </Shell>
  ),
});
