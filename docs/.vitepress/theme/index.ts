import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import OccupationCharts from './components/OccupationCharts.vue'
import CareerVisuals from './components/CareerVisuals.vue'
import RoleExplorer from './components/RoleExplorer.vue'
import StudentStart from './components/StudentStart.vue'
import CareerHome from './components/CareerHome.vue'
import JobExamples from './components/JobExamples.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CareerHome', CareerHome)
    app.component('StudentStart', StudentStart)
    app.component('RoleExplorer', RoleExplorer)
    app.component('OccupationCharts', OccupationCharts)
    app.component('CareerVisuals', CareerVisuals)
    app.component('JobExamples', JobExamples)
  }
} satisfies Theme
