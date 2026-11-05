---
title: Student journey delivery & decision provenance
description: The v1.4.1 plan connecting student observations, design decisions, GitHub issues, code, and release verification.
---

# Student journey delivery & decision provenance

**Planned release:** v1.4.1 · **Created:** November 5, 2026 · **Status:** Planned

## Why this release exists

The [simulated student review](./brand-and-student-journey) led to the Sage / Explorer direction and the v1.4.0 implementation in [issue #13](https://github.com/kaw393939/ai-career-research/issues/13). That work shipped, but its new mobile visual check was explicitly unverified. The user requested a plan and a complete provenance chain before resolving this follow-up.

This release makes that chain inspectable: **observation → decision → issue → implementation commit → validation → deployment**. It preserves the original review and its limits. It does not retroactively describe a simulated walkthrough as a real student study.

## Delivery plan

| Revision | Work | Acceptance | Status |
| --- | --- | --- | --- |
| [REV-14 · #14](https://github.com/kaw393939/ai-career-research/issues/14) | Publish this plan in Revisions and connect its work to GitHub issues | Plan accessible from revision overview and sidebar; each work item has an issue and explicit acceptance criteria | Planned |
| [REV-15 · #15](https://github.com/kaw393939/ai-career-research/issues/15) | Add decision provenance and a repeatable contribution record | Map student findings and Cialdini interpretations to exact code commits/files; provide an issue template and release checklist; verify referenced local code exists | Planned |
| [REV-16 · #16](https://github.com/kaw393939/ai-career-research/issues/16) | Complete mobile and keyboard verification of the student journey | Verify actual CSS viewport, layout, selection, reset, profile and worksheet access at narrow widths; fix observed defects; record evidence and rerun production checks | Planned |

Implementation follows these steps in order. The plan is committed before feature work. Each implementation commit references its issue; issues receive code and validation comments while work proceeds. The final delivery record includes the deployed URL and successful GitHub Actions run before closure.

## Decision record

These are editorial hypotheses, not measured persuasion effects. The [original review](./brand-and-student-journey#cialdini-applied-with-restraint) retains the primary Cialdini source and review date.

| Decision | Observation / rationale | Application | Evidence |
| --- | --- | --- | --- |
| DEC-01 · Sage / Explorer | Students face unfamiliar titles and need a calm, inspectable starting point | Plain language, exploratory choices, green/ivory field guide styling | v1.4.0 review and issue #13; exact implementation links to be added |
| DEC-02 · Voluntary small step | Scanning 15 roles before choosing a direction can be demanding | Optional interest selection, related profiles and reset; consistency interpreted as a useful small action | Exact implementation links to be added |
| DEC-03 · Give useful material | Students need to carry their reasoning beyond a page visit | Ungated editable worksheet; reciprocity interpreted as practical value | Exact implementation links to be added |
| DEC-04 · Inspectable authority | Research sources should be visible before a student relies on them | Employer, BLS/O*NET, NJIT and methodology links, with independent-project language | Exact implementation links to be added |
| DEC-05 · Distinct next actions | Identical calls to action previously led to different destinations | Choose a field, See internships, Choose one project | Exact implementation links to be added |
| DEC-06 · Evidence before completion | v1.4.0 recorded an unsuccessful mobile viewport setup | Check actual CSS viewport and preserve the historical limitation alongside new verification | Follow-up validation evidence to be added |

## Release acceptance

- [ ] The plan, issues and code can be followed in both directions.
- [ ] Historical implementation and new work are distinguished by commit.
- [ ] No fabricated endorsements, social proof, urgency, fit scores or outcome claims are introduced.
- [ ] Mobile dimensions are measured, not assumed from a tool setting.
- [ ] Field choices, reset, keyboard activation, profile links and worksheet download are checked.
- [ ] Existing eligibility, job/source and occupational-data checks pass.
- [ ] Production build and internal link/asset checks pass.
- [ ] Deployment and public-page verification evidence are recorded before issue closure.

## Delivery evidence

Issue links, implementation commits and validation results will be added as work proceeds. The [worklog](./worklog) and [release history](./releases) retain the release-level record.

## Revisit conditions

A future real-student study can test whether readers explain their chosen direction, inspect a source, identify uncertainty and choose a project. That study is not a prerequisite for this delivery and has not been conducted. New findings should create a new issue and preserve this release's evidence rather than rewrite its history.
