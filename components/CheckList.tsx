import {FaCheck} from "react-icons/fa";
import React from "react";

export const getPoints = (points: string[] | undefined, colls: number | null = 2) => {
  if (points?.length) {
    return(
      <ul className={`grid grid-cols-1 md:grid-cols-${colls} gap-4 list-none text-left p-0 mt-5 my-4`}>
        {points.map((item:string, i:number) => (
          <div className={"flex-row flex gap-4"}>
            <FaCheck size={18} color={"green"}/>
            <li key={i} className={"dark:text-white text-black"}>
              {item}
            </li>
          </div>
        ))}
      </ul>
    )
  }
}