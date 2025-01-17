import DefaultTheme from 'vitepress/theme'
import myLayout from './myLayout.vue' 

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('myLayout', myLayout)
  }
}