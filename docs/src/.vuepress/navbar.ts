import { navbar } from "vuepress-theme-hope";

export default navbar([
  { 
    text: "首页",
    icon: "gaishu",
    link: "/blog.md" 
  },
  { 
    text: "博客",
    icon: "gaishu",
    link: "/blog.md" 
  },
  { 
    text: "实战项目",
    icon: "gaishu",
    link: "/blog.md",
    children: [
      {
        text: "PmHub",
        icon: "lightbulb",
        link: "bar/"
      },
    ],
  },
  { 
    text: "程序人生",
    icon: "gaishu",
    link: "/blog.md" 
  },
  { 
    text: "独立开发",
    icon: "gaishu",
    link: "/blog.md" 
  },
  { 
    text: "AI导航",
    icon: "gaishu",
    link: "/blog.md" 
  },

]);
