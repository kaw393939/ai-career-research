---
title: v1.2 plan — student decision support
description: Improve eligibility checks, local research coverage, role comparison, card scanability, and NJIT learning connections.
---

# v1.2 plan: student decision support

**Status:** Shipped · **Created:** November 5, 2026 · **Findings:** REV-04–REV-08

**Source:** [Simulated NJIT student review](./student-review). This is a scenario-based design plan, not a conclusion from real student testing.

## Intended result

A student can distinguish **interesting work**, **potentially eligible opportunities**, and **future targets**, then choose a concrete learning step. The interface should explain uncertainty rather than assign an opaque fit score.

## Planned work

| Finding | Change | Observable success |
| --- | --- | --- |
| REV-04 | Normalize explicit degree, enrollment, graduation ranges, experience, and authorization details; retain unknowns | A 2028 graduation check recognizes an inclusive 2027–2029 range and does not infer missing dates |
| REV-05 | Add researched NYC/NJ and US-remote early-career examples; distinguish geographic match from full eligibility | Local and remote results show location limits and clear reasons to investigate or exclude an example |
| REV-06 | Add side-by-side role comparison and an optional browser-local shortlist | A student can compare responsibilities and keep notes without an account |
| REV-07 | Use compact requirement summaries with expandable detail | Degree, timing, location, and experience can be inspected before reading full cards |
| REV-08 | Connect official NJIT learning/career resources to skills and portfolio evidence | Each suggested connection has a source and separates curriculum facts from editorial recommendations |

## Implementation rules

- Use structured facts supported by sources, not keyword guesses about eligibility.
- Offer **potential match**, **restriction identified**, and **needs employer confirmation** explanations. Do not promise qualification or admission to a hiring process.
- Keep sensitive authorization/citizenship information optional and local if a reader chooses to filter by it. No account or transmission is needed for this feature.
- Keep current internship/new-graduate ordering and allow readers to inspect experienced roles as future targets.
- Make clear when a narrow result reflects limited research coverage rather than the labor market.
- Verify NJIT catalog year, prerequisites, course offering uncertainty, and public career-service links before adding course guidance. Do not imply access to private Handshake listings or guaranteed placement.

## Acceptance criteria

- [x] Degree and graduation-range cases are handled accurately, including unspecified values.
- [x] Required/preferred qualifications stay distinct after filtering and summarization.
- [x] A student can explain why a result appeared and what remains uncertain.
- [x] Local/remote coverage is expanded with direct employer evidence, or the remaining gap is documented.
- [x] Comparison and shortlist controls are keyboard-accessible and usable on mobile.
- [x] The shortlist explains storage behavior and supports clearing saved items.
- [x] NJIT resources are linked with review dates and appropriate limitations.
- [x] Repeat the student scenario and record remaining obstacles in the release notes.
- [x] Build, data, link, behavior, and deployment checks pass.

## Delivery record

Implementation: [6458757](https://github.com/kaw393939/ai-career-research/commit/645875741ba68738d3c8f570f28b6b95b8298891) · [Successful deployment](https://github.com/kaw393939/ai-career-research/actions/runs/42048885582) · [Release v1.2.0](https://github.com/kaw393939/ai-career-research/releases/tag/v1.2.0).

[Revision tracker](./) · [Next: evidence and visuals](./evidence-and-visuals)

## Delivered scope and limits

Structured, explainable selected checks cover degree, graduation years, enrollment, experience, research, optional authorization/citizenship and selected remote states. Unknowns and equivalence routes stay visible. Compact cards, browser-local shortlist notes, comparison and the official-source NJIT learning map are live. Thirteen boundary/unknown/restriction tests and Chrome student/mobile/storage checks passed. Exact months, field-of-study and other conditions still need employer review. Issues #4–#8 are closed with evidence.
