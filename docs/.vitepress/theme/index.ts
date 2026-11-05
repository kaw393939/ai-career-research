import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import CareerHome from './components/CareerHome.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CareerHome', CareerHome)
  }
} satisfies Theme
