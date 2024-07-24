import { Metadata } from "next";
import Hero from "@/components/Hero";

import HomeMain from "@/components/Home";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
  // other metadata


}

export default function Home() {
  return (
    <main>
      <Hero  explanationOrComponent={"Wir unterstützen Unternehmen dabei, neue Ziele zu erreichen, indem wir modernste Software, maßgeschneiderte Lösungen und KI-basierte Anwendungen entwickeln und integrieren. Unser erfahrenes Team steht Ihnen dabei mit professioneller Beratung und Umsetzung zur Seite."}
             imageOrSection={""}
             mainHeading={"Individuelle Software entwicklung"}
             smallHeading={""}
      noContact={true}
      />
      <HomeMain />

    </main>
  );
}
