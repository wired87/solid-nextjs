import React, {ReactNode} from "react";
import Image from "next/image";
import {ButtonDefault} from "@/components/Button/ButtonDefault";
import {getPoints} from "@/components/CheckList";


const getImageSec = (imageSec: ReactNode | string) => {
  if (imageSec) {
    if (typeof imageSec === "string") {
      return(
        <Image fill alt={"hello.png"} className={"object-contain"} src={imageSec}/>
      )
    } else {
      return imageSec
    }
  }
  return(
    <>
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
    </>
  )
}

const points = [
  "Rund um die Uhr Beratung und (Sales) Support für Ihre Kunden",
  "Auf allen online Kanälen verfügbar",
  "Interne Prozesse bearbeiten",
  "Kundenzufriedenheit und Umsatzsteigerung sowie Zeitersparnis",
];

const HomeBot = () => {



  const getBtn = () => {
      return <ButtonDefault
        href={"https://www.botworld.cloud/chatbot"}
        btnText={"Zeigs mir!"}
      />
    }

  return(

     <section className="overflow-hidden p-20 mt-10 md:pb-5 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
        <div className="flex items-start gap-8 lg:gap-32.5">
          <div
            className="animate_left bg-red relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
          >
            {
              getImageSec("/images/bot_prev.jpg")
            }

          </div>
          <div
            className="animate_right md:w-1/2 min-w-[500px]"
          >
              <span className="font-medium text-left uppercase text-black dark:text-white">
                <span className="mb-4 text-left mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  Seien Sie dabei!
                </span>
              </span>
            <h2 className="relative text-left mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              <span className="relative text-left inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  Digitaler Mitarbeiter gefällig?
                </span>
            </h2>
            {
                getPoints(points, 1)
              }
            <p className={"dark:text-white text-black text-left"}>

            </p>
            {getBtn()}
          </div>

        </div>
      </div>
    </section>
  );
}

export default HomeBot;