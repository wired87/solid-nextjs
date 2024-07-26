import FunFact from "@/components/FunFact";
import {factDataHome} from "@/components/FunFact/factData";
import Feature from "@/components/Features";
import {homeFeaturesData} from "@/components/Features/featuresData";
import CTA from "@/components/CTA";
import Integration from "@/components/Integration";
import Contact from "@/components/Contact";
const headerInfo= {
  title: "Wo sind wir die besten",
  subtitle: "Unsere Spezialgebiete",
  description: `Software is vielseitig. 
  Durch unsere Expertise und Erfahrung decken wir ein breites spektrum an möglichkeiten ab um Ihr Projekt umzusetzen `,
}
//       <Testimonial />
const HomeMain = () => {
  return(

    <>
      <FunFact data={factDataHome}/>
      <Feature data={homeFeaturesData} headerInfo={headerInfo}/>
      <CTA />

      <Integration />

      <Contact />
    </>

  );
}

export default HomeMain;