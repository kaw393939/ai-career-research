import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import RoleExplorer from './components/RoleExplorer.vue'
import CareerHome from './components/CareerHome.vue'
import JobExamples from './components/JobExamples.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CareerHome', CareerHome)
    app.component('RoleExplorer', RoleExplorer)
    app.component('JobExamples', JobExamples)
  }
} satisfies Theme
