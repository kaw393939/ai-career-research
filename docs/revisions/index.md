---
title: Revisions & release plans
description: Track review findings, planned improvements, acceptance criteria, and shipped changes to AI Career Atlas.
---

# Revisions & release plans

This is the public planning record for AI Career Atlas. It combines the simulated NJIT student review, the research limitations found while building the job library, and [GitHub issue #1: not enough other fields](https://github.com/kaw393939/ai-career-research/issues/1).

**Updated November 5, 2026.** The v1.1–v1.3 plans below have been implemented, verified and shipped. They preserve the original scope and acceptance criteria alongside delivery records. GitHub issues retain implementation comments and closure evidence.

## Release roadmap

| Release | Plan | Status | Intended outcome |
| --- | --- | --- | --- |
| v1.1 | [Broader technology careers](./industry-coverage) | Shipped | Explain AI's effect on security, networking, and other technology fields |
| v1.2 | [Student decision support](./student-experience) | Shipped | Help a student identify plausible opportunities and choose a learning direction |
| v1.3 | [Primary sources & useful visuals](./evidence-and-visuals) | Shipped | Add occupational context and visuals that answer concrete career questions |
| v1.4.0 | [Student brand refinement](./brand-and-student-journey) | Shipped | Offer a clear voluntary first step |
| v1.4.1 | [Decision provenance & verification](./decision-provenance) | Shipped | Trace decisions to issues/code and finish narrow-screen verification |
| v1.5.0 | [Concision & readability](./concision-and-readability) | In progress | Reduce repeated guidance and make career/job decisions easier to scan |

Follow the [implementation worklog](./worklog) for issue links, code, and deployment evidence.

Read the [student review](./student-review) for the scenario, observed behavior, and limits. The [release history](./releases) records what is already live.

## Student journey delivery plan

[v1.5.0: concision and readability](./concision-and-readability) responds to [issue #17](https://github.com/kaw393939/ai-career-research/issues/17), with five implementation issues, decisions and acceptance criteria recorded before code changes.

[v1.4.1: decision provenance and verification](./decision-provenance) connects the student review to decisions, GitHub issues, code and deployment evidence.

## Student brand refinement

[REV-13: brand and student journey review](./brand-and-student-journey) records the shipped refinement: Sage/Explorer branding, a voluntary first step and restrained persuasion. [Issue #13](https://github.com/kaw393939/ai-career-research/issues/13) retains its code and delivery evidence.

## Findings register

IDs remain stable so commits and future release notes can refer to the same finding.

| ID | Finding | Priority | Planned release | Status |
| --- | --- | --- | --- | --- |
| [REV-01](https://github.com/kaw393939/ai-career-research/issues/1) | Career coverage concentrates on software, ML, and platform work | High | v1.1 | Shipped |
| [REV-02](https://github.com/kaw393939/ai-career-research/issues/2) | New titles, changed responsibilities, and renamed existing work need clearer separation | High | v1.1 | Shipped |
| [REV-03](https://github.com/kaw393939/ai-career-research/issues/3) | The homepage's six-role explorer and four additional profiles are separated | Medium | v1.1 | Shipped |
| [REV-04](https://github.com/kaw393939/ai-career-research/issues/4) | Search does not evaluate degree, graduation windows, or experience eligibility | High | v1.2 | Shipped |
| [REV-05](https://github.com/kaw393939/ai-career-research/issues/5) | Local and remote early-career coverage is too limited for the student scenario | High | v1.2 | Shipped |
| [REV-06](https://github.com/kaw393939/ai-career-research/issues/6) | Comparing several roles and keeping a shortlist takes too much manual work | Medium | v1.2 | Shipped |
| [REV-07](https://github.com/kaw393939/ai-career-research/issues/7) | Dense cards make it difficult to scan decisive requirements quickly | Medium | v1.2 | Shipped |
| [REV-08](https://github.com/kaw393939/ai-career-research/issues/8) | The learning roadmap lacks an NJIT-specific bridge from courses to portfolio evidence | Medium | v1.2 | Shipped |
| [REV-09](https://github.com/kaw393939/ai-career-research/issues/9) | Selected employer examples do not establish occupation-wide demand or pay | High | v1.3 | Shipped |
| [REV-10](https://github.com/kaw393939/ai-career-research/issues/10) | Role/skill relationships and progression need clearer visual explanations | Medium | v1.3 | Shipped |
| [REV-11](https://github.com/kaw393939/ai-career-research/issues/11) | Generated images need a defined explanatory purpose and illustration labels | Low | v1.3 | Shipped |
| [REV-12](https://github.com/kaw393939/ai-career-research/issues/12) | Time-sensitive postings need a repeatable review and release record | High | v1.3 | Shipped |
| [REV-13](https://github.com/kaw393939/ai-career-research/issues/13) | Student starting point and next actions need clarity | Medium | v1.4.0 | Shipped |
| [REV-14](https://github.com/kaw393939/ai-career-research/issues/14) | Follow-up work needs a linked public plan | Medium | v1.4.1 | Shipped |
| [REV-15](https://github.com/kaw393939/ai-career-research/issues/15) | Design decisions need immutable code evidence and a reusable process | Medium | v1.4.1 | Shipped |
| [REV-16](https://github.com/kaw393939/ai-career-research/issues/16) | Narrow-screen verification remains incomplete in v1.4.0 | High | v1.4.1 | Shipped |
| [REV-17](https://github.com/kaw393939/ai-career-research/issues/17) | Reading flow needs more concision and clearer priorities | High | v1.5.0 | In progress |
| [REV-18](https://github.com/kaw393939/ai-career-research/issues/18) | The homepage repeats career discovery | Medium | v1.5.0 | Planned |
| [REV-19](https://github.com/kaw393939/ai-career-research/issues/19) | Guidance pushes job controls and results down the page | Medium | v1.5.0 | Planned |
| [REV-20](https://github.com/kaw393939/ai-career-research/issues/20) | Job summaries hide the work and repeat eligibility explanations | High | v1.5.0 | Planned |
| [REV-21](https://github.com/kaw393939/ai-career-research/issues/21) | Career profiles repeat general caveats between practical sections | Medium | v1.5.0 | Planned |
| [REV-22](https://github.com/kaw393939/ai-career-research/issues/22) | Maintenance history precedes student tasks in navigation | Medium | v1.5.0 | Planned |

Priority expresses impact on research quality or student decisions, not an estimate of implementation effort.

## How we track work

1. Keep a finding's ID and source, then define the intended behavior in its plan.
2. Change status from **Proposed/Planned** to **In progress** when implementation starts. Use **Blocked** only with a concrete reason and next action.
3. Reference IDs in commits or pull requests. Add evidence of validation alongside completed acceptance criteria.
4. Mark work **Shipped** only after deployment succeeds and the public result is checked. Add its date, commit/PR, and website links to the release history.
5. Record any deferred scope explicitly. Keep historical entries instead of rewriting a plan to imply everything was completed.

Checkboxes are manually maintained Markdown records. GitHub issues, commits, and deployment runs provide the supporting history; this page does not automatically synchronize their status.

## Shared release checks

- [x] Reopen relevant primary sources and record review dates.
- [x] Separate employer requirements, editorial interpretation, and broader occupational evidence.
- [x] Preserve US location, remote eligibility, degree, graduation, and authorization restrictions.
- [x] Run `npm run check` and document the result.
- [x] Exercise changed filters/navigation on desktop and mobile when behavior changes.
- [x] Verify the deployed pages and update the release history with evidence.

These checks were completed for the shipped revisions. Copy a fresh checklist for the next release. The v1.4.1 plan keeps its own acceptance checklist and issue status above.

## Delivered versions

[GitHub releases](https://github.com/kaw393939/ai-career-research/releases) retain versioned source snapshots. See the [implementation worklog](./worklog) for per-finding code and deployment links. The v1.1–v1.4.1 backlog is shipped; documented research limitations remain part of the product rather than hidden unfinished features.
