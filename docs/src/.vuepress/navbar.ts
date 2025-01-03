import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: '主页',
    icon: 'home',
    link: '/',
  },
  { 
    text: "实战项目",
    icon: "blog",
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
    icon: "info",
    link: "/javamore/" 
  },
  { 
    text: "程序人生",
    icon: "share",
    link: "/rensheng/" 
  },
  { 
    text: "独立开发",
    icon: "info",
    link: "/selfdev/" 
  },
  { 
    text: "AI导航",
    icon: "edit",
    link: "/aiguide/" 
  },

]);
