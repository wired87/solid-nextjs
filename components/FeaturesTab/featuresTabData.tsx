import { FeatureTab } from "@/types/featureTab";
import {FeaturesTabCarousel} from "@/components/FeaturesTab/FeaturesTabCarousel";

export const mobileTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Kotlin/Java",
    desc1: `Unser professionelles Team entwickelt innovative Anwendungen für Android-Geräte, die auf die individuellen Bedürfnisse unserer Kunden zugeschnitten sind.`,
    desc2: ``,
    image: "https://images.mockupcloud.com/images/thumbs/images/2020/09/09/26-galaxy-s10-mockup-1170x780.jpg",
    imageDark: "https://images.mockupcloud.com/images/thumbs/images/2020/09/09/26-galaxy-s10-mockup-1170x780.jpg",
  },
  {
    id: "tabTwo",
    title: "Swift/Objective C",
    desc1: `Wir entwickeln skalierbare mobile Applikationen für iOS mit einer angenehmen User Experience, die einen bleibenden Eindruck hinterlässt.`,
    desc2: `Beider Planung arbeiten wir eng mit unseren Kunden zusammen um für sie die optimale Lösung zu finden.`,
    image: "https://unblast.com/wp-content/uploads/2024/07/iPhone-15-Pro-Max-Mockup-3.jpg",
    imageDark: "https://unblast.com/wp-content/uploads/2024/07/iPhone-15-Pro-Max-Mockups.jpg",
  },
  {
    id: "tabThree",
    title: "REACT NATIVE",
    desc1: `Wir sind auf die Entwicklung plattformübergreifender mobiler Anwendungen spezialisiert, die auf allen Betriebssystemen stabil und sicher laufen.`,
    desc2: `Dabei sparen Sie nicht nur Geld sondern auch Zeit da die Arbeit nicht zwei mal für verschieden OS erledigt werden muss.`,
    image: "https://i.pinimg.com/originals/7d/f1/fa/7df1fabaa3541e62013fe23db51532f0.png",
    imageDark: "https://i.pinimg.com/originals/7d/f1/fa/7df1fabaa3541e62013fe23db51532f0.png",
  },
];

const crmImg: string[] = [
  "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/657736c81039468803be3d48_5darkdashboardwebflowtheme.png",
  "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/657736c81039468803be3d50_4techdashboardwebflowtemplate.png",
  "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/657736c81039468803be3d64_3saasdashboardwebflowtemplate.png",
]
const shopImg: string[] = [
  "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/66197afad2d8d4bd3f40682a_a545bd46-1cff-438f-b0d2-d7b44e7c9abc.jpeg",
  "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/66197afad2d8d4bd3f40683d_6268b2fe-fa36-494c-8dee-f1e8069e17f2.jpeg",
  "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/66197afad2d8d4bd3f40682f_62032cb0-b832-4494-b5a8-033019e1acce.jpeg",
  "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/66197afad2d8d4bd3f406832_e5d138e3-7895-4cc0-85fc-f9d0fd2c8f55.jpeg",
  "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/66197afad2d8d4bd3f406840_d2cb0e6d-04ef-42d8-9926-3f012a55e621.jpeg",
]

const webImg: string[] = [
  "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/636ab10366ad31118a65fe8d_2blogpaidmembershipwebflowtemplate.jpeg",
  "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/636ab10366ad31b10865fe8b_3blogpaidcontentwebflowtemplate.png",
  "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/636ab10366ad316e3f65fe88_4webflowmembershipswebflowtemplate.png",
  "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/636ab10366ad3100e465fe89_5blogwebflowmembershipwebflowtheme.png",
  "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/636ab10366ad31413f65fe8c_1blogmembershipwebflowtemplate.png"
]

export const webTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Webanwendungen als Individualsoftware",
    desc1: 'Sie erhalten eine vollständig maßgeschneiderte Webanwendung, die auf Ihre geschäftlichen Anforderungen zugeschnitten ist und Ihnen einen Wettbewerbsvorteil verschafft.',
    desc2: [
      "CRM- und CMS-Entwicklung",
      "Integrierte Webanwendungen",
      "AWS oder Google Cloud-Infrastruktur"
    ],
    image: <FeaturesTabCarousel img={crmImg} /> ,
    imageDark: "https://images.mockupcloud.com/images/thumbs/images/2020/09/09/26-galaxy-s10-mockup-1170x780.jpg",
  },
  {
    id: "tabTwo",
    title: "Websites",
    desc1: "Wir schaffen bleibende Eindrücke mit gut optimierten und effizienten Websites. Beider Planung arbeiten wir eng mit unseren Kunden zusammen um für Sie die optimale Lösung zu finden.",
    desc2: [
      "Unternehmens-Websites",
      "UI/UX Design & Branding",
      "SEO-freundlich"
    ],
    image: <FeaturesTabCarousel img={webImg} />,
    imageDark: "https://unblast.com/wp-content/uploads/2024/07/iPhone-15-Pro-Max-Mockups.jpg",
  },
  {
    id: "tabThree",
    title: "E-commerce / Saas",
    desc1: "Unser Team ist erfahren in fortschrittlicher E-Commerce Webentwicklung und liefert konvertierende Webshops und andere Lösungen.",
    desc2: [
      "Plattformbasierte Webshop-Einrichtung",
      "Produkt-Informations-Management",
      "Migration von Webshops"
    ],
    image: <FeaturesTabCarousel img={shopImg}/>,
    imageDark: "https://i.pinimg.com/originals/7d/f1/fa/7df1fabaa3541e62013fe23db51532f0.png",
  },
];

