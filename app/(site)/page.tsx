import { Metadata } from "next";
import Hero from "@/components/Hero";

import HomeMain from "@/components/Home";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Individuelle Softwareentwicklung by BotWorld.cloud",
  description: "Homepage for BotWorld.cloud",
}

export default function Home() {
  return (
    <>
      <Hero  explanationOrComponent={"Genießen auch Sie die Vorteile von KI im eigenen Unternehmen und sparen Zeit, Geld und Nerven"}
             imageOrSection={
               <Image
                 src="/img_1.png"
                 alt="shape"
                 width={600}
                 height={600}
                 className="object-contain"
               />
        }
             mainHeading={"Wir automatisieren Ihr Business!"}
             smallHeading={""}
      noContact={true}
       />
      <HomeMain />
    </>
  );
}
