import {FaCheck} from "react-icons/fa";
import React from "react";
import Image from "next/image";
export const PBAWS = () => {

  return(
    <div className={"w-full h-[150px] justify-center items-center flex "}>
      <Image src={"/pbaws.png"} className={"flex dark:hidden"} height={150} width={150} alt={"alt"}/>
      <Image src={"https://d0.awsstatic.com/logos/powered-by-aws-white.png"} className={"hidden dark:flex"} height={150} width={150} alt={"alt"}/>
    </div>
  )
}