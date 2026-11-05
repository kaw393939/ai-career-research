---
title: Release history
description: A dated record of deployed changes, verification evidence, and the revision findings they address.
---

# Release history

Entries record deployed changes. Versions v1.1.0–v1.3.0 are shipped with issue-linked code and deployment evidence. Earlier baseline entries describe commits and deployments without implying a matching version tag.

## November 5, 2026 — v1.4.0: a clearer student invitation

Addresses **REV-13 / issue #13**. Applies a Sage-primary, Explorer-secondary brand direction: clearer next actions, an optional work-interest chooser, a direct-download first-role worksheet, more visible primary sources, and grouped learning/research navigation.

The [review and rationale](./brand-and-student-journey) explains restrained applications of reciprocity, authority, consistency and liking. It records a simulated student walkthrough, not a claim about real student behavior or improved outcomes. Existing research and student eligibility/shortlist features are retained.

Implementation and successful deployment evidence: [issue #13](https://github.com/kaw393939/ai-career-research/issues/13) · [versioned source](https://github.com/kaw393939/ai-career-research/releases/tag/v1.4.0).

## November 5, 2026 — v1.3.0: evidence, visuals and maintenance

Addressed **REV-09–REV-12 / issues #9–#12**. Added BLS/O*NET national occupation context, wage/growth charts with accessible source tables and explicit mapping limits, a qualitative skill matrix, interactive learning paths, a labeled generated illustration and its prompt provenance, and a manual source-age review command/report.

Evidence: [feature commit d1c1bef](https://github.com/kaw393939/ai-career-research/commit/d1c1bef78e9b1943b2d937ae424a7ca51e9f10e2) · [successful feature deployment](https://github.com/kaw393939/ai-career-research/actions/runs/42057505531) · [GitHub release v1.3.0](https://github.com/kaw393939/ai-career-research/releases/tag/v1.3.0).

Validation: 13 eligibility cases, 20 sourced records, occupation-data integrity, production build and 1,910 internal links/assets across 36 pages passed. Chrome verified published chart values, source tables/report, learning-path selection, image loading and mobile layouts. The source-age command flagged all 20 records in a future-date threshold test; the final report was restored to November 5. Audit: zero known vulnerabilities. Final tracking documentation is included in the versioned source snapshot.

Limits: national/all-level occupation proxies are not AI-title or starting salaries; the employer library is selective; artwork is illustrative; source-age review does not establish continued hiring.

## November 5, 2026 — v1.2.0: student decision support

Addressed **REV-04–REV-08 / issues #4–#8**. Added structured selected eligibility checks, transparent restrictions/unknowns, NYC/NJ-or-US-remote and availability filters, browser-local shortlist notes and clear controls, compact expandable cards, role comparison and official-source NJIT coursework/career connections.

Evidence: [commit 6458757](https://github.com/kaw393939/ai-career-research/commit/645875741ba68738d3c8f570f28b6b95b8298891) · [successful deployment](https://github.com/kaw393939/ai-career-research/actions/runs/42048885582) · [GitHub release v1.2.0](https://github.com/kaw393939/ai-career-research/releases/tag/v1.2.0).

Validation: 13 boundary/unknown/restriction cases and complete fact coverage passed, together with job/source checks and 1,588 internal links/assets across 32 pages. Chrome verified the NJIT student scenario, inclusive graduation ranges, local search results, note persistence/clearing, two-role comparison, keyboard activation and mobile width. A current Duolingo undergraduate/master's NYC internship provides an additional route to investigate; NJ-specific/remote undergraduate coverage remains limited.

## November 5, 2026 — v1.1.0: broader technology fields

Addressed **REV-01–REV-03 / issues #1–#3**. Unified 15 profiles across eight fields, added security/networking/quality/data/physical-AI profiles, and distinguished AI-focused specialties from changed established responsibilities and overlapping titles. Expanded to 20 employer examples, with exact primary sources and explicit closed/pipeline labels.

Evidence: [commit 6ea8bea](https://github.com/kaw393939/ai-career-research/commit/6ea8bea2c050009a820a226267612412840cd8d7) · [successful deployment](https://github.com/kaw393939/ai-career-research/actions/runs/42047610937) · [GitHub release v1.1.0](https://github.com/kaw393939/ai-career-research/releases/tag/v1.1.0).

Validation: job/source checks, production build and 1,478 internal links/assets across 31 pages passed. Chrome verified field filtering, interpretation/foundation labels and comparison behavior on the deployed explorer.

## November 5, 2026 — revision planning hub

Added the **Revisions** menu, a stable findings register, the simulated student-review record, three proposed release plans, and this history. This is documentation and navigation work; REV-01–REV-12 remain open for implementation.

Validation: production build and checks passed for 14 sourced job records and 1,029 internal links/assets across 25 generated pages.

Evidence: [revision-document commit history](https://github.com/kaw393939/ai-career-research/commits/main/docs/revisions) · [deployment workflow history](https://github.com/kaw393939/ai-career-research/actions/workflows/deploy.yml) · [public revision hub](./). These histories retain the exact commit and deployment result for each update.

## November 5, 2026 — US job research baseline

- Added 14 employer examples: four internships, four entry-level, three mid-level, and three senior examples.
- Prioritized early-career examples; added career-stage, search, and US-remote filters.
- Added source and eligibility notes, an employer ledger, and four additional role-pattern profiles.
- Updated the homepage, methodology, roadmap links, and README.

Evidence: [commit ff43272](https://github.com/kaw393939/ai-career-research/commit/ff43272f260cabdfb7c50940694d5fedc28a13f4) · [successful deployment](https://github.com/kaw393939/ai-career-research/actions/runs/42043986101).

Validation at delivery: 14 job records and source-ledger coverage passed; 660 internal links/assets across 19 generated pages passed. Chrome checks covered career-stage/remote filters, empty/reset states, and a 390-pixel mobile layout. The subsequent [student walkthrough](./student-review) identified the next improvements.

## November 5, 2026 — initial site

Created the VitePress site, six foundational role profiles, comparison, roadmap, glossary, methodology, README website link, and GitHub Pages workflow.

Evidence: [commit 3ac8ef8](https://github.com/kaw393939/ai-career-research/commit/3ac8ef8d87e09ebb509df2f24f1c466ca273196d) · [successful deployment](https://github.com/kaw393939/ai-career-research/actions/runs/42040695645).

## Template for the next release

Copy this structure when a release is ready:

```text
Release/version and deployment date:
Revision IDs addressed:
User-visible changes:
Primary-source updates and review dates:
Validation results:
Commit or pull request:
Successful deployment and public page links:
Remaining limitations and deferred work:
```

[Revision tracker](./)
