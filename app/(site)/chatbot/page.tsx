import Image from "next/image"
import { Metadata } from "next";
import FAQ from "@/components/FAQ";
import {botFaqData} from "@/components/FAQ/faqData";
import Link from "next/link";
import ChatBotNeed from "@/components/ChatBot/WhyWe";
import Hero from "@/components/ChatBot/Hero";
export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const ChatBotMain = async () => {


  return (
    <>
      <Hero />
    <section className="w-full relative bg-reply-bg overflow-hidden flex flex-col items-start justify-start text-center text-15xl text-black font-h5">
      <div className="self-stretch bg-reply-bg flex flex-col items-start justify-start p-[100px] gap-[64px] lg:p-16 lg:box-border md:p-8 md:box-border sm:pl-4 sm:pr-4 sm:box-border">

        <div className="self-stretch flex flex-col items-center justify-center">
          <b className="self-stretch relative leading-[30px] md:text-5xl">
            Entdecke unsere integrationen
          </b>
        </div>
        <ChatBotNeed />
        <FAQ data={botFaqData} />

      </div>
    </section>
    </>
  );
};

export default ChatBotMain;
/*
<PartnerSection />


        <WhyWeComp />
 */