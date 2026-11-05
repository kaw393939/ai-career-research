# AI Career Atlas

**Visit the website: [https://kaw393939.github.io/ai-career-research/](https://kaw393939.github.io/ai-career-research/)**

[![Deploy VitePress to GitHub Pages](https://github.com/kaw393939/ai-career-research/actions/workflows/deploy.yml/badge.svg)](https://github.com/kaw393939/ai-career-research/actions/workflows/deploy.yml)

A career research project about the work behind AI job titles: what people do, which skills matter, and how to build a portfolio that demonstrates those skills. Built with **VitePress + Vue** and published with **GitHub Pages**.

## Explore

- [Revisions and release plans](https://kaw393939.github.io/ai-career-research/revisions/) — findings, planned releases, acceptance checklists, and deployed change history.

- **[Internships and entry-level jobs](https://kaw393939.github.io/ai-career-research/jobs/)** — the default view of the US job-example library; switch to all levels, mid-level, or senior examples to compare responsibility.
- [Job sources and evidence ledger](https://kaw393939.github.io/ai-career-research/jobs/sources.html)
- [Additional AI roles and title comparisons](https://kaw393939.github.io/ai-career-research/research/emerging-roles.html)

The role profiles provide broader context:

- [AI engineer](https://kaw393939.github.io/ai-career-research/roles/ai-engineer.html)
- [Forward-deployed engineer](https://kaw393939.github.io/ai-career-research/roles/forward-deployed-engineer.html), sometimes loosely called an “AI forward engineer”
- [LLM engineer](https://kaw393939.github.io/ai-career-research/roles/llm-engineer.html)
- [Machine learning engineer](https://kaw393939.github.io/ai-career-research/roles/ml-engineer.html)
- [AI evaluation engineer](https://kaw393939.github.io/ai-career-research/roles/ai-evaluation-engineer.html)
- [AI solutions architect](https://kaw393939.github.io/ai-career-research/roles/ai-solutions-architect.html)

The site includes searchable job examples and role profiles, a career comparison, a learning roadmap, a glossary, and linked primary sources. Role boundaries overlap; some titles predate the recent generative AI wave. This project does not assume that every role is new or entry-level.

## About the job research

Research uses **Chrome** to inspect employer descriptions and their recruiting platforms. The library covers US positions and remote positions explicitly open to US applicants. Hybrid jobs remain labeled hybrid; US-remote eligibility does not imply every state or work-authorization status is accepted.

Examples are ordered **internships → entry level → mid level → senior**, with **Starting out** selected by default. Career-stage labels are editorial judgments explained by each example's responsibilities and stated requirements, rather than fixed experience-year bands. The records preserve stated enrollment, age, graduation, location, and authorization restrictions and distinguish required from preferred qualifications. Portfolio ideas are editorial suggestions.

**Open when checked** means a job description and application link or form were visible during review. It does not mean we applied or confirmed ongoing hiring. Future-opportunity pipelines and unclear availability use **Status uncertain**; closed examples are labeled. Published pay keeps its original unit and is not annualized. A pay summary is omitted if source fields conflict; omission does not mean the employer published no pay.

## Run locally

Use Node.js 24 LTS (see [.nvmrc](.nvmrc)) and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by VitePress, including the `/ai-career-research/` base path.

```sh
npm run check    # Production build and internal link checks
npm run preview  # Serve the production build
```

## Deployment

[GitHub Actions](https://github.com/kaw393939/ai-career-research/actions/workflows/deploy.yml) builds and publishes every push to `main`. Pull requests run the build and internal link checks without deploying. You can also deploy manually with **Actions → Deploy VitePress to GitHub Pages → Run workflow**.

- Pages source: **GitHub Actions**.
- Build output: `docs/.vitepress/dist`.
- Public base path: `/ai-career-research/`, set in `docs/.vitepress/config.mts`.
- No API keys, external database, or paid hosting required.
- If you rename the repository, update the base path, sitemap hostname, favicon path, GitHub URLs, and website links.

Setup follows the official [VitePress deployment guide](https://vitepress.dev/guide/deploy) and [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

The project pins stable VitePress 1.6.4 and overrides its Vite dependency to 6.4.5 to avoid advisories affecting the default Vite 5 dependency and Vite 6.4.4 ([Vite advisory](https://github.com/vitejs/vite/security/advisories/GHSA-8g5g-mxqh-grgj)). VitePress's Vue plugin supports Vite 6. This override is outside VitePress's declared Vite version range; production build, link checks, local development, and browser interactions are verified for this project. Review it when upgrading VitePress.

## Update the research

Edit Markdown pages under `docs/roles/` and add directly supporting employer or official role-definition sources. Mark the date you reviewed them and distinguish employer requirements from your own career advice. Homepage explorer summaries live in `docs/.vitepress/theme/components/CareerHome.vue`; navigation lives in `docs/.vitepress/config.mts`.

Job-library files:

- `docs/research/internship-evidence.json`, `docs/research/entry-evidence.json`, and `docs/research/experienced-evidence.json`: retained research provenance.
- `docs/.vitepress/data/jobs.ts`: typed, curated job-example data.
- `docs/.vitepress/theme/components/JobExamples.vue` and `docs/.vitepress/theme/jobs.css`: explorer behavior and styling.
- `docs/jobs/`: job-library pages and source ledger.

Reopen employer sources when updating examples, preserve eligibility and required/preferred distinctions, and refresh the checked date and availability label. Read the [research methodology](https://kaw393939.github.io/ai-career-research/research/methodology.html) before adding salary, growth, or hiring claims. Listings may close or change; snapshots do not establish market-wide trends.

Research reviewed **November 5, 2026**. The site is a research guide, not a live job board.
