import { createFileRoute } from "@tanstack/react-router";
import { Shell, MoreSection } from "@/components/portfolio";

export const Route = createFileRoute("/more")({
  head: () => ({
    meta: [
      { title: "Picture & Fact of the Day — A S Udaya K R Guptha" },
      { name: "description", content: "Picture & Fact of the Day of A S Udaya K R Guptha, PhD scholar in computational physics at SRM University-AP." },
      { property: "og:title", content: "Picture & Fact of the Day — A S Udaya K R Guptha" },
      { property: "og:description", content: "Picture & Fact of the Day of A S Udaya K R Guptha, PhD scholar in computational physics at SRM University-AP." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <Shell>
      <MoreSection />
    </Shell>
  ),
});
