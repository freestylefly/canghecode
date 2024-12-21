import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: '主页',
    icon: 'home',
    link: '/',
  },
  { 
    text: "实战项目",
    icon: "friend",
    children: [
      {
        text: "PmHub",
        icon: "lightbulb",
        link: "https://laigeoffer.cn/pmhub/about.html"
      },
    ],
  },
  { 
    text: "Java进阶",
    icon: "gaishu",
    link: "/javamore/" 
  },
  { 
    text: "程序人生",
    icon: "gaishu",
    link: "/rensheng/" 
  },
  { 
    text: "独立开发",
    icon: "gaishu",
    link: "/aliinone/" 
  },
  { 
    text: "AI导航",
    icon: "gaishu",
    link: "/aiguide/" 
  },

]);
