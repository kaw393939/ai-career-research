---
title: Release history
description: A dated record of deployed changes, verification evidence, and the revision findings they address.
---

# Release history

Entries record deployed changes. Future release numbers remain proposals until implementation and verification are complete. The baseline below describes Git commits and deployments; no matching GitHub Release or version tag is implied.

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
