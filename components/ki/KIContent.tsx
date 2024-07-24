import {SingleSectionTL, SingleSectionTR} from "@/components/About/SingleSection";
import React from "react";

const topSection = {
  imageSec: "https://www.nextbraintech.com/assets/front/base/images/mvp-inner-img.png",
  headingOne: "",
  headingTwo: "Produkt-Entdeckung",
  exp: "Wir analysieren gründlich den Markt und bewerten die Probleme und Herausforderungen der Nutzer, um ein " +
    "Produkt zu entwickeln, das genau diesen Anforderungen gerecht wird.",
  points: [
    "Software-Architektur",
    "Technische Anforderungen",
    "UI-UX-Design"
  ]
}
const middleSection = {
  imageSec: "https://blog.solguruz.com/wp-content/uploads/2023/11/Minimum-Viable-Product-8-Benefits-of-MVP-Development.png",
  headingOne: "",
  headingTwo: "MVP-Design",
  exp: "Das Design entsteht forschungsbasiert von Grund auf, um eine nahtlose Nutzererfahrung und " +
    "eine ansprechende Benutzeroberfläche zu gewährleisten. Dabei Interagieren wir stets mit unseren Kunden #" +
    "um Ihre zufriedenheit zu gewährleisten",
  points: [
    "Nutzer-Personas",
    "Journey Mapping",
    "Wireframing und Prototyping"
  ]
}
const bottomSection = {
  imageSec: mvpDev,
  headingOne: "",
  headingTwo: "MVP-Entwicklung",
  exp: "Unser Team begleitet den gesamten Entwicklungs- und Implementierungsprozess und konzentriert sich auf " +
    "die Kernfunktionen, um das Produkt zu testen und mit der Zielgruppe zu validieren.",
  points: [
    "Kernfunktionalität",
    "Produktentwicklung",
    "Nutzertests"
  ]
}



export const KIContent = () => {
  return(
    <>
      <SingleSectionTR
        imageSec={topSection.imageSec}
        headingOne={topSection.headingOne}
        headingTwo={topSection.headingTwo}
        exp={topSection.exp}
      />
      <SingleSectionTL
        imageSec={middleSection.imageSec}
        headingOne={middleSection.headingOne}
        headingTwo={middleSection.headingTwo}
        exp={middleSection.exp}
        points={middleSection.points}

      />
      <SingleSectionTR
        imageSec={bottomSection.imageSec}
        headingOne={bottomSection.headingOne}
        headingTwo={bottomSection.headingTwo}
        exp={bottomSection.exp}
        points={bottomSection.points}
      />
    </>
  );
}