import {motion} from "framer-motion";
import Image from "next/image";
import {AboutSingleT} from "@/types/about";
import React from "react";

export const SingleSectionTL: React.FC<AboutSingleT> = (
  {
    imageSec,
    headingOne,
    headingTwo,
    exp
  }
) => {

  const getImageSec = () => {
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

  return(
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
            {
              getImageSec()
            }
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
                  {headingOne}
                </span>{" "}
              </span>
            <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  {headingTwo}
                </span>
            </h2>
            <p>
              {exp}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}