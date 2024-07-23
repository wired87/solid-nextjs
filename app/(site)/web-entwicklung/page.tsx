import { Metadata } from "next";
import FeaturesTab from "@/components/FeaturesTab";
import React from "react";
import CTA from "@/components/CTA";
import {webTabData} from "@/components/FeaturesTab/featuresTabData";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Web Entwicklung",
  description: "Wir erstellen Ihre individuelle Web-Lösung.",

};



const Presentation = () => {
  // carousel here
  return(
    <></>
  );
}
// todo bilde raussuchen carousel + carousel einrichten
// todo cta mit bild
//
const WebDev = () => {

  return(
    <>
      <Hero
        explanationOrComponent={"This is basic exp"}
        imageOrSection={<Presentation />}
        mainHeading={"Wir erstellen Individuell, auf Ihre Wünsche Angepasste Applikationslösungen welche perfekt zu Ihrem Unternehmen passen."}
        smallHeading={""}
        endingText={"Lassen Sie uns starten"}
      />
      <FeaturesTab
        titleOne={"Web Apps"}
        titleTwo={"Websites"}
        titleThree={"E-commerce / Saas"}
        data={webTabData}
      />
      <CTA />
      <Contact />
    </>
  );


}

export default WebDev;