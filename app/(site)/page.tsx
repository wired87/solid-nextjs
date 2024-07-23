import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";

import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";


export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
  // other metadata
};
/*
 ✓ Ready in 2.2s
(node:8588) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
<Blog />
<Pricing />

 */
export default function Home() {
  return (
    <main>
      <Hero />
      <FunFact />
      <Feature />
      <CTA />

      <Integration />

      <Testimonial />
      <Contact />

    </main>
  );
}
