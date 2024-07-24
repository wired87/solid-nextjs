import { Metadata } from "next";
import {MVPMain} from "@/components/mvp";

export const metadata: Metadata = {
  title: "MVP Entwicklung",
  description: "This is Login page for Startup Pro",

};



export const MVP = () => {
  return(
    <>
      <MVPMain />
    </>
  );
}

export default MVP;