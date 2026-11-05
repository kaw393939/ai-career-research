---
title: Concision & readability plan
description: The v1.5.0 plan tracing issue 17 through five focused improvements, code, checks, and deployment.
---

# Concision & readability

**Release:** v1.5.0 · **Created:** November 5, 2026 · **Status:** In progress

**Parent request:** [#17 — make more concise](https://github.com/kaw393939/ai-career-research/issues/17). The user requested a roadmap document, individual implementation issues, and code links showing why each change was made.

## Observation and scope

A Chrome walkthrough of the homepage, job library and forward-deployed engineer profile, plus a source review, found repeated guidance, competing starting points and maintenance navigation ahead of student tasks. The baseline is [b5e0ada](https://github.com/kaw393939/ai-career-research/tree/b5e0adaa4864b2ad4853a1ac7b7e0b8b8b98a20e).

These are heuristic findings, not results from a real-student study. The site already has useful research, a consistent visual identity, and expandable job details. This release reorganizes that material so readers can identify the work, check relevant requirements, and choose a next step with less preliminary reading.

The design uses [progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/): frequently needed facts stay visible; supporting explanations are available through clearly labeled links or disclosures. A shorter page must still show specific restrictions and distinguish missing information from a match.

## Delivery roadmap

| Finding / issue | Decision | Intended result | Status |
| --- | --- | --- | --- |
| [REV-18 / #18](https://github.com/kaw393939/ai-career-research/issues/18) | DEC-07 · One homepage chooser | Keep the voluntary interest chooser; link to the full Roles explorer, Jobs and a project | In progress |
| [REV-19 / #19](https://github.com/kaw393939/ai-career-research/issues/19) | DEC-08 · Results sooner | Short introduction, one dated research note, then useful job controls and results | In progress |
| [REV-20 / #20](https://github.com/kaw393939/ai-career-research/issues/20) | DEC-09 · Useful summaries | Show the actual work and decisive eligibility facts; expand complete explanations | In progress |
| [REV-21 / #21](https://github.com/kaw393939/ai-career-research/issues/21) | DEC-10 · Consistent profiles | Apply a concise, task-oriented outline to all 15 career profiles | In progress |
| [REV-22 / #22](https://github.com/kaw393939/ai-career-research/issues/22) | DEC-11 · Student tasks first | Prioritize Roles, Jobs, Learning and Research; keep history in Revisions | In progress |

The [revision tracker](./) and [implementation worklog](./worklog) link this release to the complete roadmap. Each issue carries its own acceptance criteria. Implementation commits reference the issue and are linked back to its thread while work proceeds.

## Decisions, alternatives and acceptance

### DEC-07 · One homepage chooser

**Evidence:** [CareerHome.vue at the baseline](https://github.com/kaw393939/ai-career-research/blob/b5e0adaa4864b2ad4853a1ac7b7e0b8b8b98a20e/docs/.vitepress/theme/components/CareerHome.vue#L43) renders the interest picker before a second, full role explorer and repeated next-step sections.

Keep one chooser and short, clearly named exits. The complete filterable/comparable role explorer belongs on Roles. Keeping both on the homepage duplicates discovery; a mandatory fit quiz would introduce an unsupported judgment.

**Accept when:** selection, related results, reset focus, keyboard use, all-role access, jobs, project and worksheet links work on desktop and narrow screens. All eight fields remain available.

### DEC-08 · Put job results closer to the task

**Evidence:** the [job-page introduction](https://github.com/kaw393939/ai-career-research/blob/b5e0adaa4864b2ad4853a1ac7b7e0b8b8b98a20e/docs/jobs/index.md) and [shared controls](https://github.com/kaw393939/ai-career-research/blob/b5e0adaa4864b2ad4853a1ac7b7e0b8b8b98a20e/docs/.vitepress/theme/components/JobExamples.vue#L35) stack guidance and related links before results.

Use a short heading/introduction and one dated availability note. Keep search, stage, location, status, optional eligibility and shortlist functions. Removing every research limit would be misleading; consolidate the general explanation and link the ledger.

**Accept when:** the first result follows the core controls, secondary links no longer dominate the introduction, and saved notes and existing filtering semantics remain intact.

### DEC-09 · Summaries that explain the work

**Evidence:** [job-card markup](https://github.com/kaw393939/ai-career-research/blob/b5e0adaa4864b2ad4853a1ac7b7e0b8b8b98a20e/docs/.vitepress/theme/components/JobExamples.vue#L59) hides responsibilities while displaying generic prompts; eligibility output can repeat each successful check and several caveats.

Show exact title/employer, one short responsibility summary, location/mode, availability/check date and decisive eligibility facts. Expand full requirements, pay, skills, level rationale and project guidance. Show restriction reasons and summarize unknowns; retain all recorded checks in an accessible explanation. The eligibility evaluator and source records remain authoritative.

**Accept when:** readers can understand the work and identify material restrictions without expanding every card; positives, restrictions and unknowns remain distinct; pay units, full source links and editorial labels survive. Existing eligibility and source-integrity checks pass.

### DEC-10 · A repeatable career-profile outline

**Evidence:** [AI Engineer](https://github.com/kaw393939/ai-career-research/blob/b5e0adaa4864b2ad4853a1ac7b7e0b8b8b98a20e/docs/roles/ai-engineer.md) repeats general scope and interpretation notes between practical sections.

Use **What you do → Skills → Example requirements → One project → Sources and notes** for all 15 profiles. Keep employer-specific experience and eligibility facts, title boundaries, meaningful project criteria and directly supporting sources. Consolidate general caveats instead of deleting qualifications to meet an arbitrary word count.

**Accept when:** profiles share the outline, begin with a plain description, retain review dates and source distinctions, and preserve or update old internal anchors. No job, credential or hiring outcome is invented.

### DEC-11 · Put student tasks first

**Evidence:** the [baseline navigation](https://github.com/kaw393939/ai-career-research/blob/b5e0adaa4864b2ad4853a1ac7b7e0b8b8b98a20e/docs/.vitepress/config.mts#L41) leads with nine revision links and repeats starting-point groups.

Prioritize Roles, Jobs, Learning and Research, with section-specific sidebars. Keep the complete revision history, plans and provenance under Research/Revisions. Deleting maintenance records would lose the reasoning the user explicitly requested.

**Accept when:** student pages lead with relevant tasks, the Revisions section retains its full history, this plan is reachable from the roadmap, and desktop/mobile menus and old URLs work.

## Implementation and release checks

- [x] Create issues #18–#22 and link the parent request.
- [x] Commit this plan before implementation: [0960009](https://github.com/kaw393939/ai-career-research/commit/09600099afeeb56490f96916c6c1b48dab56c72f).
- [ ] Attach each issue-referencing implementation commit and exact file links to its issue.
- [ ] Run `npm run check` for eligibility, source/job integrity, occupation data, production build and internal links.
- [ ] Exercise changed controls, disclosures, navigation and keyboard paths in Chrome.
- [ ] Measure desktop and narrow CSS viewports, check overflow, and retain screenshots as release evidence.
- [ ] Verify the successful implementation deployment and public pages/downloads.
- [ ] Publish the release record, worklog and GitHub release; verify any tracking-document deployment before closing the issues.

The plan and implementation use separate commits. Completion records are added only after checks and deployment, avoiding a self-referential commit hash. This release changes presentation, not the research access dates or availability findings of employer records.

## Limits and revisit conditions

No reduction in reading time or improvement in student decisions is claimed without measurement. A later student study can ask participants to choose a role, explain an internship requirement and select a project. If concise summaries hide an important fact or create extra navigation, revise the split between summary and detail. That study is a future evaluation, not a prerequisite disguised as completed work.
