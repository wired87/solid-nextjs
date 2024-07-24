import FunFact from "@/components/FunFact";
import {factDataHome} from "@/components/FunFact/factData";
import Feature from "@/components/Features";
import {homeFeaturesData} from "@/components/Features/featuresData";
import CTA from "@/components/CTA";
import Integration from "@/components/Integration";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
const headerInfo= {
  title: "SOLID FEATURES",
  subtitle: "Unsere Spezialgebiete",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
ante in maximus.`,
}
const HomeMain = () => {
  return(

    <>

      <FunFact data={factDataHome}/>
      <Feature data={homeFeaturesData} headerInfo={headerInfo}/>
      <CTA />

      <Integration />

      <Testimonial />
      <Contact />
    </>

  );
}

export default HomeMain;