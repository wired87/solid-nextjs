import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Dienstleistungen",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Web-Entwicklung",
        newTab: false,
        path: "/web-entwicklung",
      },
      {
        id: 34,
        title: "Mobile-App-Entwicklung",
        newTab: false,
        path: "/mobile",
      },
      {
        id: 354,
        title: "UI/UX-Design",
        newTab: false,
        path: "/design",
      },{
        id: 335,
        title: "MVP Entwicklung",
        newTab: false,
        path: "/mvp",
      },/*{
        id: 335,
        title: "Individual Software Entwicklung",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 34,
        title: "Cloud Infrastruktur",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "API Entwicklung und Integration",
        newTab: false,
        path: "/auth/signup",
      },*/
    ]
  },
  {
    id: 2,
    title: "KI - Dienstleistungen",
    newTab: false,
    submenu: [
      {
        id: 31111111,
        title: "Support Agents",
        newTab: false,
        path: "/chatbot",
      },
      {
        id: 31,
        title: "KI - Entwicklung und Integration",
        newTab: false,
        path: "/ki",
      },

    ]
  },

  {
    id: 2.3,
    title: "Unternehmen",
    newTab: false,
    submenu: [
      {
        id: 13112,
        title: "Über uns",
        newTab: false,
        path: "/about",
      },{
        id: 13112,
        title: "Kontakt",
        newTab: false,
        path: "/contact",
      },
    ]
  },
];

export default menuData;
/*
{
        id: 13112,
        title: "Karriere",
        newTab: false,
        path: "/chatbot",
      }
 */