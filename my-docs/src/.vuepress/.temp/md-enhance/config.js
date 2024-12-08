import { defineClientConfig } from "vuepress/client";
import CodeDemo from "/Users/canghe/responsibility/canghe/canghecode/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/canghe/responsibility/canghe/canghecode/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import { useHintContainers } from "/Users/canghe/responsibility/canghe/canghecode/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "/Users/canghe/responsibility/canghe/canghecode/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
  setup: () => {
useHintContainers();
  }
});
