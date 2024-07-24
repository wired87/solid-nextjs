import Hero from "@/components/Hero";
import React from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import Contact from "@/components/Contact";

export default function KariereMain() {
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
      <SectionHeader headerInfo={} />

      <Contact />
    </>
  );
}