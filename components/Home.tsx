import FunFact from "@/components/FunFact";
import {factDataHome} from "@/components/FunFact/factData";
import Feature from "@/components/Features";
import {aiFeatures} from "@/components/Features/featuresData";
import CTA from "@/components/CTA";
import Integration from "@/components/Integration";
import Contact from "@/components/Contact";
import React from "react";
import HomeBot from "@/components/ChatBot/HomeBot";
import {PBAWS} from "@/components/PBAWS";


const headerInfo= {
  title: "Unser Angebot",
  subtitle: "Zukunftsfähige Lösungen durch KI",
  description: ``,
}


const HomeMain = () => {

  return(
    <div className={"w-full"}>
      <PBAWS />
      <Feature data={aiFeatures} headerInfo={headerInfo}/>
      <CTA />
      <Integration />
      <HomeBot />

      <Contact />
    </div>
  );
}
// <FunFact data={factDataHome}/>
export default HomeMain;






