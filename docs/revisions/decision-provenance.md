---
title: Student journey delivery & decision provenance
description: The v1.4.1 plan connecting student observations, design decisions, GitHub issues, code, and release verification.
---

# Student journey delivery & decision provenance

**Planned release:** v1.4.1 · **Created:** November 5, 2026 · **Status:** In progress

## Why this release exists

The [simulated student review](./brand-and-student-journey) led to the Sage / Explorer direction and the v1.4.0 implementation in [issue #13](https://github.com/kaw393939/ai-career-research/issues/13). That work shipped, but its new mobile visual check was explicitly unverified. The user requested a plan and a complete provenance chain before resolving this follow-up.

This release makes that chain inspectable: **observation → decision → issue → implementation commit → validation → deployment**. It preserves the original review and its limits. It does not retroactively describe a simulated walkthrough as a real student study.

## Delivery plan

| Revision | Work | Acceptance | Status |
| --- | --- | --- | --- |
| [REV-14 · #14](https://github.com/kaw393939/ai-career-research/issues/14) | Publish this plan in Revisions and connect its work to GitHub issues | Plan accessible from revision overview and sidebar; each work item has an issue and explicit acceptance criteria | In progress |
| [REV-15 · #15](https://github.com/kaw393939/ai-career-research/issues/15) | Add decision provenance and a repeatable contribution record | Map student findings and Cialdini interpretations to exact code commits/files; provide an issue template and release checklist; verify referenced local code exists | In progress |
| [REV-16 · #16](https://github.com/kaw393939/ai-career-research/issues/16) | Complete mobile and keyboard verification of the student journey | Verify actual CSS viewport, layout, selection, reset, profile and worksheet access at narrow widths; fix observed defects; record evidence and rerun production checks | In progress |

Implementation follows these steps in order. The plan is committed before feature work. Each implementation commit references its issue; issues receive code and validation comments while work proceeds. The final delivery record includes the deployed URL and successful GitHub Actions run before closure.

## Decision record

These are editorial hypotheses, not measured persuasion effects. The [original review](./brand-and-student-journey#cialdini-applied-with-restraint) retains the primary Cialdini source and review date.

| Decision | Observation / rationale | Application | Evidence |
| --- | --- | --- | --- |
| DEC-01 · Sage / Explorer | Students face unfamiliar titles and need a calm, inspectable starting point | Plain language, exploratory choices, green/ivory field guide styling | [Original review](https://github.com/kaw393939/ai-career-research/blob/d46553bc516c79ec956b8798db94a93c5872df40/docs/revisions/brand-and-student-journey.md) · [Homepage copy](https://github.com/kaw393939/ai-career-research/blob/d46553bc516c79ec956b8798db94a93c5872df40/docs/.vitepress/theme/components/CareerHome.vue#L11) · [Issue #13](https://github.com/kaw393939/ai-career-research/issues/13) |
| DEC-02 · Voluntary small step | Scanning 15 roles before choosing a direction can be demanding | Optional interest selection, related profiles and reset; consistency interpreted as a useful small action | [Chooser and reset](https://github.com/kaw393939/ai-career-research/blob/d46553bc516c79ec956b8798db94a93c5872df40/docs/.vitepress/theme/components/StudentStart.vue) · [Issue #13](https://github.com/kaw393939/ai-career-research/issues/13) |
| DEC-03 · Give useful material | Students need to carry their reasoning beyond a page visit | Ungated editable worksheet; reciprocity interpreted as practical value | [Worksheet](https://github.com/kaw393939/ai-career-research/blob/d46553bc516c79ec956b8798db94a93c5872df40/docs/public/first-role-worksheet.md) · [Download control](https://github.com/kaw393939/ai-career-research/blob/d46553bc516c79ec956b8798db94a93c5872df40/docs/.vitepress/theme/components/StudentStart.vue) · [Issue #13](https://github.com/kaw393939/ai-career-research/issues/13) |
| DEC-04 · Inspectable authority | Research sources should be visible before a student relies on them | Employer, BLS/O*NET, NJIT and methodology links, with independent-project language | [Source strip](https://github.com/kaw393939/ai-career-research/blob/d46553bc516c79ec956b8798db94a93c5872df40/docs/.vitepress/theme/components/CareerHome.vue#L41) · [Independent-project footer](https://github.com/kaw393939/ai-career-research/blob/d46553bc516c79ec956b8798db94a93c5872df40/docs/.vitepress/config.mts) · [Issue #13](https://github.com/kaw393939/ai-career-research/issues/13) |
| DEC-05 · Distinct next actions | Identical calls to action previously led to different destinations | Choose a field, See internships, Choose one project | [Distinct hero actions](https://github.com/kaw393939/ai-career-research/blob/d46553bc516c79ec956b8798db94a93c5872df40/docs/.vitepress/theme/components/CareerHome.vue#L15) · [Project action](https://github.com/kaw393939/ai-career-research/blob/d46553bc516c79ec956b8798db94a93c5872df40/docs/.vitepress/theme/components/CareerHome.vue#L55) · [Issue #13](https://github.com/kaw393939/ai-career-research/issues/13) |
| DEC-06 · Evidence before completion | v1.4.0 recorded an unsuccessful mobile viewport setup | Check actual CSS viewport and preserve the historical limitation alongside new verification | [Focus restoration](https://github.com/kaw393939/ai-career-research/blob/eab5b7d91800810329598df45e728b9cee4b916d/docs/.vitepress/theme/components/StudentStart.vue#L7) · [Narrow-screen styles](https://github.com/kaw393939/ai-career-research/blob/eab5b7d91800810329598df45e728b9cee4b916d/docs/.vitepress/theme/style.css) · [Issue #16](https://github.com/kaw393939/ai-career-research/issues/16) |

## Implementation sequence and alternatives

1. [Plan commit 596231d](https://github.com/kaw393939/ai-career-research/commit/596231d171c40e802dc18c897bccca9bc8ab3a90) created this plan and navigation before implementation; it references issues #14–#16.
2. [Behavior commit eab5b7d](https://github.com/kaw393939/ai-career-research/commit/eab5b7d91800810329598df45e728b9cee4b916d) addresses #16: below 361px, choices use one readable column; resetting returns keyboard focus to the choice that was cleared.
3. Issue #15 records this provenance table and the contribution/release templates. Its implementation commit is attached to the issue after commit creation, avoiding a self-referential hash.

We considered an exhaustive first-screen role grid, an automatic “best role” quiz, and mandatory signup for the worksheet. The voluntary chooser keeps scope small, avoids unsupported fit judgments, and lets students keep useful material freely. We considered leaving the narrowest choices in two columns; the 320px review showed cramped text, so the follow-up uses one column. These are design judgments, not measured outcome differences.

For future work, use the [decision issue template](https://github.com/kaw393939/ai-career-research/blob/main/.github/ISSUE_TEMPLATE/decision.md) and [release checklist](https://github.com/kaw393939/ai-career-research/blob/main/.github/RELEASE_CHECKLIST.md). Each issue should name a decision ID, source observation, alternatives, exact code commit, checks and deployment. Templates use main links intentionally so contributors get the latest process; the implementation evidence above is pinned to immutable commits.

## Verification record

Chrome checked the production preview on November 5, 2026. These are browser-emulated viewport checks, not tests on physical phones.

| CSS viewport | Document scroll width | Layout and checks | Evidence |
| --- | --- | --- | --- |
| 320px | 320px | One-column choices; no horizontal overflow; Enter/Space selection, reset, related networking profile, actual worksheet download; mobile menu and Learn submenu | [320px screenshot](/revisions/evidence/v1.4.1-320.jpg) |
| 390px | 390px | Two-column choices; no horizontal overflow; security selection shows two related profiles | [390px screenshot](/revisions/evidence/v1.4.1-390.jpg) |
| 1,200px | 1,200px | Enter selection and reset return focus to the networking choice; visible 3px outline | [Keyboard screenshot](/revisions/evidence/v1.4.1-keyboard.jpg) |

The old v1.4.0 viewport failure remains in its review as a historical fact. These fresh checks resolve that verification gap for this release. The 320px review also prompted a readable one-column layout, and reset now preserves a useful keyboard position. This is not a full accessibility audit or a real-student outcome study.

## Release acceptance

- [x] The plan, issues and code can be followed in both directions.
- [x] Historical implementation and new work are distinguished by commit.
- [x] No fabricated endorsements, social proof, urgency, fit scores or outcome claims are introduced.
- [x] Mobile dimensions are measured, not assumed from a tool setting.
- [x] Field choices, reset, keyboard activation, profile links and worksheet download are checked.
- [ ] Existing eligibility, job/source and occupational-data checks pass.
- [ ] Production build and internal link/asset checks pass.
- [ ] Deployment and public-page verification evidence are recorded before issue closure.

## Delivery evidence

Issue links, implementation commits and validation results will be added as work proceeds. The [worklog](./worklog) and [release history](./releases) retain the release-level record.

## Revisit conditions

A future real-student study can test whether readers explain their chosen direction, inspect a source, identify uncertainty and choose a project. That study is not a prerequisite for this delivery and has not been conducted. New findings should create a new issue and preserve this release's evidence rather than rewrite its history.
