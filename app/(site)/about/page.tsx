import { Metadata } from "next";
import Hero from "@/components/Hero";
import Image from "next/image";
import React from "react";
import {MainContent} from "@/components/About/Content";

export const metadata: Metadata = {
  title: "About us",
  description: "About ",
  // other metadata
};



const AboutImageSection = () => {
  return(
    <>
      <Image
        src={"/images/trust/about_hero.jpg"}
        alt={"https://www.freepik.com/free-photo/close-up-young-colleagues-having-meeting_17123784.htm#query=team%20planning&position=10&from_view=keyword&track=ais_user&uuid=ad24fb6b-48c9-49d7-8fa5-33a288bf7d80"}
        width={600}
        height={600}
      />
    </>
  );
}

export default function AboutMain() {
  return (
    <>
      <Hero
        smallHeading={""}
        actionButtonSection={<></>}
        mainHeading={"Wer wir sind"}
        explanationOrComponent={"Unser Team vereint individuelle Stärken und langjährige Expertise in der erfolgreichen Umsetzung von Softwareprojekten."}
        endingText={""}
        noContact={true}
        imageOrSection={<AboutImageSection />}
      />
      <MainContent />
    </>
  );
}
