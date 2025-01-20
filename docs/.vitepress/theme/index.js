import DefaultTheme from 'vitepress/theme'
import Layout from './myLayout.vue' 
import confetti from './components/confetti.vue'
import busuanzi from "busuanzi.pure.js";
import VisitorPanel from "./components/VisitorPanel.vue";
import { inBrowser } from 'vitepress'
// 导入hooks
import useVisitData from './components/useVisitData'

export default {
  Layout,
  extends: DefaultTheme,
  enhanceApp( ctx ) {
    console.log(ctx)
    const { app, router, siteData } = ctx;
    app.component('confetti', confetti)
    app.component("VisitorPanel", VisitorPanel);
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch();
        // useVisitData()
      };
    }


  },
  
}