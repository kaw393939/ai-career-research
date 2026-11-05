---
title: v1.2 plan — student decision support
description: Improve eligibility checks, local research coverage, role comparison, card scanability, and NJIT learning connections.
---

# v1.2 plan: student decision support

**Status:** Planned · **Created:** November 5, 2026 · **Findings:** REV-04–REV-08

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

- [ ] Degree and graduation-range cases are handled accurately, including unspecified values.
- [ ] Required/preferred qualifications stay distinct after filtering and summarization.
- [ ] A student can explain why a result appeared and what remains uncertain.
- [ ] Local/remote coverage is expanded with direct employer evidence, or the remaining gap is documented.
- [ ] Comparison and shortlist controls are keyboard-accessible and usable on mobile.
- [ ] The shortlist explains storage behavior and supports clearing saved items.
- [ ] NJIT resources are linked with review dates and appropriate limitations.
- [ ] Repeat the student scenario and record remaining obstacles in the release notes.
- [ ] Build, data, link, behavior, and deployment checks pass.

## Delivery record

Implementation commit/PR: **Pending** · Deployment evidence: **Pending** · Deferred scope: **None decided yet**

[Revision tracker](./) · [Next: evidence and visuals](./evidence-and-visuals)
