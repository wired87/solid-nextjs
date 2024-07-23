import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Frontend",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Web-Entwicklung",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Mobile-App-Entwicklung",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "UI/UX-Design",
        newTab: false,
        path: "/auth/signup",
      },
    ]
  },
  {
    id: 2,
    title: "Backend",
    newTab: false,
    submenu: [
      {
        id: 31111111,
        title: "Backend Development",
        newTab: false,
        path: "/blog",
      },
      {
        id: 31,
        title: "Datenbank Management",
        newTab: false,
        path: "/blog",
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
      },
    ]
  },
  {
    id: 49,
    title: "Mobile",
    newTab: false,
    submenu: [
      {
        id: 222,
        title: "IOS",
        newTab: false,
        path: "/blog",
      },
      {
        id: 332,
        title: "Android",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 112,
        title: "React Native (cross plattform)",
        newTab: false,
        path: "/auth/signup",
      },
    ]
  },{
    id: 331,
    title: "KI",
    newTab: false,
    submenu: [
      {
        id: 2212,
        title: "KI-Entwicklung",
        newTab: false,
        path: "/blog",
      },
      {
        id: 3312,
        title: "Automatisierung",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 1112,
        title: "Chat Bots",
        newTab: false,
        path: "/chatbot",
      },
    ]
  },

  {
    id: 2.3,
    title: "Unternehmen",
    newTab: false,
    path: "/docs",
  },
];

export default menuData;
