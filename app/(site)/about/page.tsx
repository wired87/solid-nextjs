import { Metadata } from "next";
import Hero from "@/components/Hero";

import React from "react";
import {MainContent} from "@/components/About/Content";

export const metadata: Metadata = {
  title: "About us",
  description: "About ",
  // other metadata
};



const AboutImageSection = () => {
  return(
    <></>
  );
}
/*
<Image
      src={"https://img.freepik.com/vektoren-kostenlos/brainstorming-idee-des-geschaeftsteams-und-gluehbirne-vom-puzzle-zusammenarbeit-im-arbeitsteam-zusammenarbeit-in-unternehmen-konzept-der-gegenseitigen-unterstuetzung-der-kollegen-helle-lebendige-violette-isolierte-illustration_335657-580.jpg?t=st=1721850382~exp=1721853982~hmac=6a2a373b41b540f40df4fe13e46363a367dd331a86e33a214ea371e408bcaaac&w=1060"}
      alt={"https://img.freepik.com/vektoren-kostenlos/brainstorming-idee-des-geschaeftsteams-und-gluehbirne-vom-puzzle-zusammenarbeit-im-arbeitsteam-zusammenarbeit-in-unternehmen-konzept-der-gegenseitigen-unterstuetzung-der-kollegen-helle-lebendige-violette-isolierte-illustration_335657-580.jpg?t=st=1721850382~exp=1721853982~hmac=6a2a373b41b540f40df4fe13e46363a367dd331a86e33a214ea371e408bcaaac&w=1060\n"}
      width={600}
      height={600}
    />
 */

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
