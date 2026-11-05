import { defineConfig } from 'vitepress'

const repo = 'https://github.com/kaw393939/ai-career-research'

const learningItems = [
  { text: 'Build a project', link: '/roadmap' },
  { text: 'Skills & learning paths', link: '/research/visual-guide' },
  { text: 'NJIT resources', link: '/njit' }
]
const researchItems = [
  { text: 'Methodology & sources', link: '/research/methodology' },
  { text: 'Occupational context', link: '/research/occupational-context' },
  { text: 'Employer source ledger', link: '/jobs/sources' },
  { text: 'Emerging role patterns', link: '/research/emerging-roles' },
  { text: 'Source review record', link: '/research/source-review' },
  { text: 'Glossary', link: '/research/glossary' },
  { text: 'Revisions & plans', link: '/revisions/' }
]
const nextSteps = { text: 'Next steps', items: [
  { text: 'Explore roles', link: '/roles/' },
  { text: 'Find job examples', link: '/jobs/' },
  { text: 'Build a project', link: '/roadmap' }
] }
const roleSidebar = [
  { text: 'Explore roles', items: [{ text: 'Browse & compare all roles', link: '/roles/' }] },
  { text: 'Career profiles', items: [
        { text: 'AI engineer', link: '/roles/ai-engineer' },
        { text: 'Forward-deployed engineer', link: '/roles/forward-deployed-engineer' },
        { text: 'LLM engineer', link: '/roles/llm-engineer' },
        { text: 'ML engineer', link: '/roles/ml-engineer' },
        { text: 'AI evaluation engineer', link: '/roles/ai-evaluation-engineer' },
        { text: 'AI solutions architect', link: '/roles/ai-solutions-architect' },
        { text: 'AI platform / inference engineer', link: '/roles/ai-platform-engineer' },
        { text: 'AI automation / agent engineer', link: '/roles/ai-automation-engineer' },
        { text: 'AI product manager', link: '/roles/ai-product-manager' },
        { text: 'Responsible AI / governance', link: '/roles/responsible-ai-engineer' },
        { text: 'AI security engineer', link: '/roles/ai-security-engineer' },
        { text: 'AI infrastructure networking', link: '/roles/ai-network-engineer' },
        { text: 'Network quality & AI tools', link: '/roles/ai-quality-engineer' },
        { text: 'Data engineering & AI', link: '/roles/ai-data-engineer' },
        { text: 'Physical AI & autonomy', link: '/roles/physical-ai-engineer' }
      ] },
  nextSteps,
  { text: 'Research', items: [{ text: 'Methodology', link: '/research/methodology' }, { text: 'Glossary', link: '/research/glossary' }] }
]
const learningSidebar = [{ text: 'Learning', items: learningItems }, nextSteps]
const revisionsSidebar = [{ text: 'Revisions & releases', items: [
        { text: 'Revision tracker', link: '/revisions/' },
        { text: 'Implementation worklog', link: '/revisions/worklog' },
        { text: 'Concision & readability plan', link: '/revisions/concision-and-readability' },
        { text: 'Student journey delivery plan', link: '/revisions/decision-provenance' },
        { text: 'Student review', link: '/revisions/student-review' },
        { text: 'Brand & student journey review', link: '/revisions/brand-and-student-journey' },
        { text: 'Broader technology careers', link: '/revisions/industry-coverage' },
        { text: 'Student decision support', link: '/revisions/student-experience' },
        { text: 'Primary sources & visuals', link: '/revisions/evidence-and-visuals' },
        { text: 'Release history', link: '/revisions/releases' }
      ] }, nextSteps]


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
      { text: 'Roles', link: '/roles/', activeMatch: '/roles/' },
      { text: 'Jobs', link: '/jobs/', activeMatch: '/jobs/' },
      { text: 'Learning', items: learningItems, activeMatch: '^/(roadmap|njit|research/visual-guide)' },
      { text: 'Research', items: researchItems, activeMatch: '^/(research/(?!visual-guide)|revisions/)' }
    ],
    socialLinks: [{ icon: 'github', link: repo }],
    search: { provider: 'local' },
    sidebar: {
      '/roles/': roleSidebar,
      '/jobs/': [{ text: 'Jobs', items: [
        { text: 'Browse job examples', link: '/jobs/' },
        { text: 'Employer source ledger', link: '/jobs/sources' }
      ] }, nextSteps],
      '/research/visual-guide': learningSidebar,
      '/roadmap': learningSidebar,
      '/njit': learningSidebar,
      '/research/': [{ text: 'Research', items: researchItems }, nextSteps],
      '/revisions/': revisionsSidebar,
      '/': [nextSteps, { text: 'Research', items: researchItems }]
    },
    editLink: { pattern: `${repo}/edit/main/docs/:path`, text: 'Improve this research on GitHub' },
    outline: { level: [2, 3] },
    footer: {
      message: 'Clear evidence for a next step you choose. An independent career research project.',
      copyright: 'AI Career Atlas · Research reviewed November 5, 2026'
    }
  }
})
