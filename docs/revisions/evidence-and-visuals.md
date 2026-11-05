---
title: v1.3 plan — primary sources & useful visuals
description: Plan occupational research, accessible charts, explanatory diagrams, and labeled generated illustrations before implementation.
---

# v1.3 plan: primary sources & useful visuals

**Status:** Shipped · **Created:** November 5, 2026 · **Findings:** REV-09–REV-12

The user requested a plan before adding generated images, charts, graphs, or broader primary-source research to the site. This document records that plan; those additions are not implemented by publishing it.

## Evidence before graphics

Employer descriptions explain individual jobs. Broader occupational context requires a different source and a documented mapping. Verify the current source release and scope before collecting figures.

| Source to investigate | Intended use | Limitation to expose |
| --- | --- | --- |
| [BLS Occupational Outlook Handbook](https://www.bls.gov/ooh/) and [Employment Projections](https://www.bls.gov/emp/) | Occupation-level outlook, education, and employment context | Broad occupations are not direct measurements of specific AI job titles |
| [BLS Occupational Employment and Wage Statistics](https://www.bls.gov/oes/) | National and relevant geographic wage/employment context | Match occupation codes, geography, period, and wage measure; do not call a median a starting salary |
| [O*NET OnLine](https://www.onetonline.org/) | Tasks, skills, and occupational relationships | Its taxonomy is broader than individual employer labels |
| [NIST AI Resource Center](https://airc.nist.gov/) and [CISA](https://www.cisa.gov/) | Technical responsibility and risk context for security/governance profiles | Frameworks and guidance do not measure job demand |
| [NJIT catalog](https://catalog.njit.edu/) and [Career Development Services](https://www.njit.edu/careerservices/) | Learning connections and practical student next steps | Catalog-year requirements, course availability, and service access need checking |

## Proposed visuals, in priority order

1. **Role/skill comparison matrix:** compare programming, systems, networking, security, statistics, customer work, and product judgment using sourced descriptions. Label editorial classifications and avoid unsupported numeric skill scores.
2. **Learning-path diagram:** connect a student's starting skills to a role, a project, and evidence they can show. Mark it as guidance rather than a guaranteed career progression.
3. **Occupational context charts:** after a documented title-to-occupation mapping, show consistent BLS measures with units, years, geography, and source links. Keep wages, projected percentage growth, and openings in separate views.
4. **Sample coverage chart:** optionally show how this research library is distributed by field and career stage. Label the denominator and explicitly identify it as our selected sample, not market share or hiring prevalence.
5. **Generated illustrations:** use a small number of clearly labeled editorial scenes only when they explain a kind of work. Keep employer logos, statistics, chart values, and evidence in ordinary text or data-driven graphics.

Keep charts readable on mobile, keyboard-accessible where interactive, and accompanied by a text explanation and underlying table. Avoid decorative dashboards that make a small sample look like a market dataset.

## Data and maintenance record

For every dataset or chart, retain publisher, exact URL, release/version, access date, occupation code, geographic scope, units, transformation method, and limitations. Record the relationship between site titles and official occupations, including ambiguous mappings. Never silently mix years or combine an occupation group with a narrower occupation's wages.

For job examples, retain each review date and availability state. Establish a manual release-time source check; recurring automated monitoring would be separate work requiring an explicit request.

## Acceptance criteria

- [x] Review this visual/source plan before implementation begins. The user authorized processing all revision issues on November 5, 2026.
- [x] Verify source vintages and document title-to-occupation mappings before choosing chart values.
- [x] Every chart links its source, discloses scope/units/year, and has an accessible table.
- [x] No chart treats 14 selected job examples as a labor-market estimate.
- [x] Images are labeled illustrations and carry appropriate alternative text; they introduce no factual claims.
- [x] New graphics answer a question identified in the student review or coverage issue.
- [x] Verify desktop/mobile rendering, data transformations, internal links, and deployed behavior.
- [x] Record source rechecks and remaining limitations in the release history.

## Delivery record

Implementation: [d1c1bef](https://github.com/kaw393939/ai-career-research/commit/d1c1bef78e9b1943b2d937ae424a7ca51e9f10e2) · [Successful deployment](https://github.com/kaw393939/ai-career-research/actions/runs/42057505531) · [Release v1.3.0](https://github.com/kaw393939/ai-career-research/releases/tag/v1.3.0).

[Revision tracker](./) · [Release history](./releases)

## Delivered scope and limits

Five national wage series and three single-occupation growth series are shown with source tables and explicit broad-occupation mappings. A qualitative skill matrix, role-selectable learning path and labeled generated illustration support student decisions. A manual source-age command/report retains dates and limitations; it does not check live hiring or schedule automation. Chrome verified the published charts, source report and loaded illustration. Issues #9–#12 are closed with evidence.
