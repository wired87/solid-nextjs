"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react';

import Image from "next/image";
import Autoplay from 'embla-carousel-autoplay'

interface FTCT {
  img: string[];
}

export const FeaturesTabCarousel:React.FC<FTCT> = (
  {
    img
  }
) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
  return(
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
        {img.map((item, i) => (
          <div className="embla__slide" key={i}>
            <Image src={item} alt={"image"+i} width={100} height={100} className={"object-cover"}/>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}