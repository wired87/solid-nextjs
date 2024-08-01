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
  description: `Software ist vielseitig. 
  Durch unsere Expertise und Erfahrung decken wir ein breites Spektrum an Möglichkeiten ab, um Ihr Projekt optimal umzusetzen.`,
}
//       <Testimonial />
const HomeMain = () => {
  return(
    <div className={"w-full"}>
      <FunFact data={factDataHome}/>
      <Feature data={homeFeaturesData} headerInfo={headerInfo}/>
      <CTA />
      <Integration />
      <Contact />
    </div>
  );
}

export default HomeMain;