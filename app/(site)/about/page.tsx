import { Metadata } from "next";
import Hero from "@/components/Hero";

import React from "react";
import Blog from "@/components/Blog";
import {teamData} from "@/components/Blog/blogData";
import FunFact from "@/components/FunFact";




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

const AboutImageSection = () => {
  return(
    <>

    </>
  );
}


export default function AboutMain() {
  return (
    <><Hero
        smallHeading={""}
        mainHeading={"Wer sind 'wir'"}
        explanationOrComponent={""}
        actionButtonSection={<AboutImageSection />}
        endingText={""}
        imageOrSection={<AboutImageSection />}
      />
      <FunFact />

      <Blog
        data={teamData}
      />
    </>
  );
}
