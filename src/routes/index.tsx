import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Services } from "@/components/portfolio/Services";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — ${profile.title} | Portfolio` },
      {
        name: "description",
        content:
          "Muhammad Ayman — Blue Team & Microsoft 365 Security Engineer. Network defense, SOC operations, cloud security, IoT and modern web engineering.",
      },
      { property: "og:title", content: `${profile.name} — ${profile.title}` },
      {
        property: "og:description",
        content:
          "Cybersecurity engineer specializing in Microsoft 365 security, SOC operations, network defense, IoT and software engineering.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="dark min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Services />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
