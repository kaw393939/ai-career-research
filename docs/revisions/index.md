---
title: Revisions & release plans
description: Track review findings, planned improvements, acceptance criteria, and shipped changes to AI Career Atlas.
---

# Revisions & release plans

This is the public planning record for AI Career Atlas. It combines the simulated NJIT student review, the research limitations found while building the job library, and [GitHub issue #1: not enough other fields](https://github.com/kaw393939/ai-career-research/issues/1).

**Updated November 5, 2026.** The plans below describe future work. Publishing a plan does not mean its features have shipped. Proposed version numbers establish an order; they are not published GitHub releases or delivery dates.

## Release roadmap

| Proposed release | Plan | Status | Intended outcome |
| --- | --- | --- | --- |
| v1.1 | [Broader technology careers](./industry-coverage) | Planned | Explain AI's effect on security, networking, and other technology fields |
| v1.2 | [Student decision support](./student-experience) | Planned | Help a student identify plausible opportunities and choose a learning direction |
| v1.3 | [Primary sources & useful visuals](./evidence-and-visuals) | Planned; authorized for implementation | Add occupational context and visuals that answer concrete career questions |

Follow the [implementation worklog](./worklog) for issue links, code, and deployment evidence.

Read the [student review](./student-review) for the scenario, observed behavior, and limits. The [release history](./releases) records what is already live.

## Findings register

IDs remain stable so commits and future release notes can refer to the same finding.

| ID | Finding | Priority | Planned release | Status |
| --- | --- | --- | --- | --- |
| [REV-01](https://github.com/kaw393939/ai-career-research/issues/1) | Career coverage concentrates on software, ML, and platform work | High | v1.1 | Planned |
| [REV-02](https://github.com/kaw393939/ai-career-research/issues/2) | New titles, changed responsibilities, and renamed existing work need clearer separation | High | v1.1 | Planned |
| [REV-03](https://github.com/kaw393939/ai-career-research/issues/3) | The homepage's six-role explorer and four additional profiles are separated | Medium | v1.1 | Planned |
| [REV-04](https://github.com/kaw393939/ai-career-research/issues/4) | Search does not evaluate degree, graduation windows, or experience eligibility | High | v1.2 | Planned |
| [REV-05](https://github.com/kaw393939/ai-career-research/issues/5) | Local and remote early-career coverage is too limited for the student scenario | High | v1.2 | Planned |
| [REV-06](https://github.com/kaw393939/ai-career-research/issues/6) | Comparing several roles and keeping a shortlist takes too much manual work | Medium | v1.2 | Planned |
| [REV-07](https://github.com/kaw393939/ai-career-research/issues/7) | Dense cards make it difficult to scan decisive requirements quickly | Medium | v1.2 | Planned |
| [REV-08](https://github.com/kaw393939/ai-career-research/issues/8) | The learning roadmap lacks an NJIT-specific bridge from courses to portfolio evidence | Medium | v1.2 | Planned |
| [REV-09](https://github.com/kaw393939/ai-career-research/issues/9) | Selected employer examples do not establish occupation-wide demand or pay | High | v1.3 | Planned |
| [REV-10](https://github.com/kaw393939/ai-career-research/issues/10) | Role/skill relationships and progression need clearer visual explanations | Medium | v1.3 | Planned |
| [REV-11](https://github.com/kaw393939/ai-career-research/issues/11) | Generated images need a defined explanatory purpose and illustration labels | Low | v1.3 | Proposed |
| [REV-12](https://github.com/kaw393939/ai-career-research/issues/12) | Time-sensitive postings need a repeatable review and release record | High | v1.3 | Planned |

Priority expresses impact on research quality or student decisions, not an estimate of implementation effort.

## How we track work

1. Keep a finding's ID and source, then define the intended behavior in its plan.
2. Change status from **Proposed/Planned** to **In progress** when implementation starts. Use **Blocked** only with a concrete reason and next action.
3. Reference IDs in commits or pull requests. Add evidence of validation alongside completed acceptance criteria.
4. Mark work **Shipped** only after deployment succeeds and the public result is checked. Add its date, commit/PR, and website links to the release history.
5. Record any deferred scope explicitly. Keep historical entries instead of rewriting a plan to imply everything was completed.

Checkboxes are manually maintained Markdown records. GitHub issues, commits, and deployment runs provide the supporting history; this page does not automatically synchronize their status.

## Shared release checks

- [ ] Reopen relevant primary sources and record review dates.
- [ ] Separate employer requirements, editorial interpretation, and broader occupational evidence.
- [ ] Preserve US location, remote eligibility, degree, graduation, and authorization restrictions.
- [ ] Run `npm run check` and document the result.
- [ ] Exercise changed filters/navigation on desktop and mobile when behavior changes.
- [ ] Verify the deployed pages and update the release history with evidence.

These are the reusable checks for future releases, not a claim that the current planning-only update has unfinished features.
