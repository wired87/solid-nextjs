import { Metadata } from "next";
import FAQ from "@/components/FAQ";
import {botFaqData} from "@/components/FAQ/faqData";
import ChatBotNeed from "@/components/ChatBot/WhyWe";
import Hero from "@/components/ChatBot/Hero";
import CTA from "@/components/CTA";
import React from "react";
import SectionHeader from "@/components/Common/SectionHeader";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const ChatBotMain = async () => {

  const heading = {
    title: "Was macht ein support Agent?",
    subtitle: "",
    description: "",
    link: false,
  }
  return (
    <>
      <Hero />
      <SectionHeader  headerInfo={heading}/>
       <div className="self-stretch flex flex-col items-center justify-center">
        <b className="self-stretch relative leading-[30px] md:text-5xl">
        </b>
      </div>
      <ChatBotNeed />
      <CTA />

      <FAQ data={botFaqData} />


    </>
  );
};
export default ChatBotMain;

/*
<PartnerSection />


        <WhyWeComp />
 */