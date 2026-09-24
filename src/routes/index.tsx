import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/lariba/Nav";
import Hero from "@/components/lariba/Hero";
import About from "@/components/lariba/About";
import Mission from "@/components/lariba/Mission";
import Services from "@/components/lariba/Services";
import WhyUs from "@/components/lariba/WhyUs";
import Compliance from "@/components/lariba/Compliance";
import Solutions from "@/components/lariba/Solutions";
import Community from "@/components/lariba/Community";
import Faq from "@/components/lariba/Faq";
import Contact from "@/components/lariba/Contact";
import Footer from "@/components/lariba/Footer";
import FloatingWidgets from "@/components/lariba/FloatingWidgets";

const title = "La Riba Pay — Shariah-Compliant Financing for Everyone";
const description =
  "Interest-free, Shariah-compliant financing, digital wallet, crowdfunding and estate planning from La Riba Pay. Fast approvals up to R3 million within 24 hours.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Nav />
      <main>
        <Hero />
        <About />
        <Mission />
        <Services />
        <WhyUs />
        <Compliance />
        <Solutions />
        <Community />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}
