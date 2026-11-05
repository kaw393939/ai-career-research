import { defineConfig } from 'vitepress'

const repo = 'https://github.com/kaw393939/ai-career-research'

export default defineConfig({
  title: 'AI Career Atlas',
  description: 'Understand the work behind emerging AI job titles. Explore career profiles, compare skills, and build a practical path into AI.',
  lang: 'en-US',
  base: '/ai-career-research/',
  appearance: false,
  cleanUrls: false,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/ai-career-research/mark.svg' }],
    ['meta', { name: 'theme-color', content: '#f6f7f2' }],
    ['meta', { property: 'og:site_name', content: 'AI Career Atlas' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],
  sitemap: { hostname: 'https://kaw393939.github.io/ai-career-research/' },
  themeConfig: {
    logo: { src: '/mark.svg', alt: '' },
    siteTitle: 'AI Career Atlas',
    nav: [
      { text: 'Internships & jobs', link: '/jobs/', activeMatch: '/jobs/' },
      { text: 'Explore roles', link: '/roles/', activeMatch: '/roles/' },
      { text: 'Career roadmap', link: '/roadmap' },
      { text: 'Research notes', link: '/research/methodology' }
    ],
    socialLinks: [{ icon: 'github', link: repo }],
    search: { provider: 'local' },
    sidebar: [
      { text: 'Find your starting point', items: [
        { text: 'Internships & entry-level jobs', link: '/jobs/' },
        { text: 'Employer source ledger', link: '/jobs/sources' },
        { text: 'New role patterns', link: '/research/emerging-roles' }
      ] },
      { text: 'Start here', items: [
        { text: 'Compare AI careers', link: '/roles/' },
        { text: 'Career roadmap', link: '/roadmap' }
      ] },
      { text: 'The roles', items: [
        { text: 'AI engineer', link: '/roles/ai-engineer' },
        { text: 'Forward-deployed engineer', link: '/roles/forward-deployed-engineer' },
        { text: 'LLM engineer', link: '/roles/llm-engineer' },
        { text: 'ML engineer', link: '/roles/ml-engineer' },
        { text: 'AI evaluation engineer', link: '/roles/ai-evaluation-engineer' },
        { text: 'AI solutions architect', link: '/roles/ai-solutions-architect' },
        { text: 'AI platform / inference engineer', link: '/roles/ai-platform-engineer' },
        { text: 'AI automation / agent engineer', link: '/roles/ai-automation-engineer' },
        { text: 'AI product manager', link: '/roles/ai-product-manager' },
        { text: 'Responsible AI / governance', link: '/roles/responsible-ai-engineer' }
      ] },
      { text: 'The research', items: [
        { text: 'Methodology & sources', link: '/research/methodology' },
        { text: 'AI career glossary', link: '/research/glossary' }
      ] }
    ],
    editLink: { pattern: `${repo}/edit/main/docs/:path`, text: 'Improve this research on GitHub' },
    outline: { level: [2, 3] },
    footer: {
      message: 'An open research project. Read the work behind the title.',
      copyright: 'AI Career Atlas · Research reviewed November 5, 2026'
    }
  }
})
