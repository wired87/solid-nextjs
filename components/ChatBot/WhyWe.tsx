"use client";


import {SingleSectionTL, SingleSectionTR} from "@/components/About/SingleSection";
import React from "react";

const topSection = {
  imageSec: "https://www.botworld.cloud/home/eng.png",
  headingOne: "Ihr digitaler Kundenservice-Experte",
  headingTwo: "24/7 Verfügbarkeit",
  exp: "Bieten Sie Ihren Kunden erstklassigen Support rund um die Uhr, 24 Stunden am Tag, " +
    "7 Tage die Woche – auch außerhalb Ihrer Geschäftszeiten. Das spart Zeit und Geld. " +
    "Unser Bot übernimmt die Bearbeitung von Kundenanfragen im digitalen Raum, " +
    "entlastet Ihr Team und spart Ihnen wertvolle Ressourcen. ",
}

const middleSection = {
  imageSec: "https://www.botworld.cloud/home/tools.png",
  headingOne: "Integrations",
  headingTwo: "Verknüpfbar mit dutzenden services",
  exp: "",
  points: [
    "Bestellungen aufgeben",

    " Integration in bestehende Systeme",

    "Multi-channel Verfügbarkeit",

    "In vielen Sprachen verfügbar",

    "Interagiere mit dutzenden von services",

    "Promote produkte",

    "Erhalte Feedback"
  ]
}
const bottomSection = {
  imageSec: "https://static.vecteezy.com/system/resources/previews/004/112/841/original/facebook-instagram-and-telegram-logo-free-vector.jpg",
  headingOne: "",
  headingTwo: "Multi Channel verfügbarkeit",
  exp: "Keine Einschränkungen! Unser Bot ist auf den gängigsten Plattformen integrierbar",
  points: [
    "Instagram",
    "Facebook Messengeer",
    "Telegram",
    "WhatsApp",
    "Mobil"
  ]

}



const ChatBotNeed = () => {
  return (
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
};

export default ChatBotNeed;
/*
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  Ihr digitaler Kundenservice-Experte
                </span>{" "}
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                24/7 Verfügbarkeit
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                </span>
              </h2>
              <p>
                Bieten Sie Ihren Kunden erstklassigen Support rund um die Uhr, 24 Stunden am Tag, 7 Tage die Woche – auch außerhalb Ihrer Geschäftszeiten.
              </p>

            </motion.div>
          </div>
        </div>
      </section>
 */