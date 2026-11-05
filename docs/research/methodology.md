---
title: Methodology & sources
description: How AI Career Atlas researches US job examples in Chrome, records eligibility and availability, and distinguishes employer evidence from career guidance.
---

# Research with context

AI Career Atlas is a curated career research project for people exploring work in AI. It connects role profiles with [real US job examples](../jobs/), a [source ledger](../jobs/sources), and [additional role comparisons](./emerging-roles). It is not a live job board or a comprehensive labor-market study.

**Research review date: November 5, 2026.** Source access dates describe when material was reviewed; they do not imply a posting was published on that date or remains open.

## How the research is built

1. **Start with primary evidence.** Use employer job descriptions and official role frameworks. Each profile links directly to its supporting sources near the relevant discussion and lists them at the end.
2. **Extract the work.** Look for responsibilities, outputs, collaborators, technical skills, and experience requirements.
3. **Explain the overlap.** Treat job titles as employer-specific labels. Compare responsibilities before assuming two titles represent distinct professions.
4. **Separate advice from requirements.** Suggested portfolio projects, acceptance criteria, and learning routes are editorial recommendations. They are not requirements quoted from employers.
5. **Expose the limits.** A few examples show possible role shapes, not the prevalence of a skill across the market.

## US job examples: internships first

Job-library research uses **Chrome** to discover and inspect employer career pages or the employer's linked recruiting platform. Search results help find candidates; the employer description supplies the evidence. Each example records the exact title, employer, source URL, date checked, location, stated requirements, and an explanation of its career-stage label.

Examples appear in this order: **internships → entry level → mid level → senior**. The explorer defaults to **Starting out**, showing internships and entry-level examples. Readers can select **All levels**, **Mid level**, or **Senior**. This order prioritizes accessibility for students and career changers; it does not imply that every AI role has an entry-level route.

### Location and eligibility

Include US-based positions and remote positions explicitly supporting US applicants. Label **Remote — US** only when the employer provides that evidence. A hybrid position remains hybrid; a US office address alone does not establish remote eligibility. Preserve any state, location, travel, or time-zone limits. US-remote eligibility does not imply that applicants in every state or with every work-authorization status qualify.

Keep age, enrollment, degree, graduation-date, program-date, citizenship, clearance, and work-authorization restrictions when stated. Distinguish required qualifications from preferred ones; a skill mentioned in a description is not automatically mandatory. Readers should verify the full current description before applying.

### Career stage and interpretation

Career-stage labels are editorial classifications justified by the employer's stated work and requirements. They are not fixed experience-year bands. An internship may require graduate enrollment, and an entry-level example may accept particular academic or project experience. A senior title can carry very different scope across employers. Each card's **Why this level?** explanation makes the reasoning inspectable.

Responsibilities are paraphrased in plain language. Portfolio ideas and transferable-skill suggestions are clearly labeled editorial guidance, separate from the employer's requirements. They are examples of evidence a learner could build, not promises that a project qualifies someone for the job.

### Availability and pay

- **Open when checked:** the description and an application link or form were visible during review. We did not apply, confirm that hiring remains active, or verify an applicant's eligibility.
- **Status uncertain:** current hiring could not be established, or the page describes a pipeline for possible future opportunities.
- **Closed example:** the source indicates that the opening has closed; it remains useful only as a labeled research example.

Published compensation retains the employer's currency, range, and unit, such as hourly or annual pay. We do not annualize internship rates. Omit a pay summary when source fields conflict or cannot be interpreted reliably. An omitted summary does not establish that the employer published no compensation.

## Role-profile source map

Read the linked profile for exact URLs and the claims each source supports.

| Profile | Primary evidence used | What it helps explain |
| --- | --- | --- |
| [AI engineer](../roles/ai-engineer) | Anthropic employer description; Microsoft role framework | Application integration, customer-facing variation, production AI responsibilities |
| [Forward-deployed engineer](../roles/forward-deployed-engineer) | Palantir and Anthropic employer descriptions | Customer delivery, implementation, and variation in experience expectations |
| [LLM engineer](../roles/llm-engineer) | seRevel and REI Systems employer descriptions | Retrieval, language systems, integration, and production requirements |
| [ML engineer](../roles/ml-engineer) | Google Cloud role framework; Amazon employer descriptions | Training, production pipelines, serving, and operational ownership |
| [AI evaluation engineer](../roles/ai-evaluation-engineer) | Anthropic and Scale AI employer descriptions | Evaluation infrastructure, measurement, data, and research-oriented variations |
| [AI solutions architect](../roles/ai-solutions-architect) | AWS employer descriptions | Customer architecture, business constraints, and seniority |

Official certification role frameworks are useful descriptions of a vendor's competency model. They do not establish that a certification is required to get a job.

## What this research can support

The profiles can show that particular employers ask for certain kinds of work, that job titles overlap, and that projects can be designed to demonstrate related skills. Responsibility summaries combine the linked evidence with editorial organization; portfolio suggestions are identified as such.

The homepage's three focus groups—product building, customer work, and models and quality—are browsing aids. A role can involve all three. They are not an official occupation classification or a ranking.

## What needs a different kind of evidence

This project does not publish hiring-growth percentages, market-wide salary estimates, or claims that a career is easy to enter. Those claims require broader and geographically appropriate data, not a handful of job listings.

Individual advertised pay ranges are evidence about those listings, not market-wide salary estimates. Broader compensation or growth analysis would need the region, date, seniority, sample size, collection method, and limitations. Separate advertised pay from realized compensation and explain what the underlying data measures.

## Keeping the research useful

Job descriptions can move, close, or change. A linked role is evidence of responsibilities seen during review, not a guarantee of an active opening. Verify current requirements on the employer's careers site before applying.

Job-research provenance is retained in `docs/research/internship-evidence.json`, `docs/research/entry-evidence.json`, and `docs/research/experienced-evidence.json`. The curated explorer records live in `docs/.vitepress/data/jobs.ts`; [the source ledger](../jobs/sources) connects readers to the employer evidence. These are research snapshots, not an automated vacancy feed.

When updating a profile or job example, reopen the source, revise unsupported statements, and update the review date and availability label. Keep required and preferred qualifications distinct. If a role's scope changes, update the comparison page and homepage summary too. The roadmap and glossary should remain consistent with the profiles.

For a useful research contribution, include the employer, exact title, source URL, review date, supported finding, and any limitation. Open a [GitHub issue](https://github.com/kaw393939/ai-career-research/issues) or use the edit link below to suggest a correction.
