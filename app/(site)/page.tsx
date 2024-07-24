import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";

import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";
import {homeFeaturesData} from "@/components/Features/featuresData";
import {factDataHome} from "@/components/FunFact/factData";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
  // other metadata
};

const headerInfo={
  title: "SOLID FEATURES",
  subtitle: "Unsere Spezialgebiete",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
ante in maximus.`,
}

export default function Home() {
  return (
    <main>
      <Hero />
      <FunFact data={factDataHome}/>
      <Feature data={homeFeaturesData} headerInfo={headerInfo}/>
      <CTA />

      <Integration />

      <Testimonial />
      <Contact />

    </main>
  );
}
