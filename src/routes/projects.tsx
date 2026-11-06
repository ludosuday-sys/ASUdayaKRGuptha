import { createFileRoute } from "@tanstack/react-router";
import { Shell, ProjectsSection } from "@/components/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Research Projects — A S Udaya K R Guptha" },
      { name: "description", content: "Research Projects of A S Udaya K R Guptha, PhD scholar in computational physics at SRM University-AP." },
      { property: "og:title", content: "Research Projects — A S Udaya K R Guptha" },
      { property: "og:description", content: "Research Projects of A S Udaya K R Guptha, PhD scholar in computational physics at SRM University-AP." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <Shell>
      <ProjectsSection />
    </Shell>
  ),
});
