---
title: Brand & student journey review
description: A simulated student review, Sage and Explorer brand direction, and restrained applications of Cialdini's persuasion principles.
---

# A clearer invitation to explore

**Revision:** REV-13 · **Issue:** [#13](https://github.com/kaw393939/ai-career-research/issues/13) · **Review date:** November 5, 2026 · **Release:** v1.4.0

## What the student review found

This was a simulated NJIT undergraduate walkthrough in Chrome, not a study with real students. The scenario assumes some programming coursework, no prior AI internship, and interest in NYC/NJ or US-remote work. Those are fictional assumptions, not facts about the site owner.

The v1.3 site has useful requirements, sources and student tools. Its homepage still asks a newcomer to browse 15 profiles before offering much help choosing a direction. “Find your starting point” appears twice but leads to different destinations: the job library and the learning roadmap. The headline emphasizes industry change while the student's immediate question is more personal: “What kind of work would I enjoy investigating?”

The design response is a small optional first step, distinct calls to action, and evidence that readers can inspect early. This is a design hypothesis; we have not measured changes in conversion, confidence, or career outcomes.

## Chosen brand archetype

**Sage primary; Explorer secondary.** This is a creative brand decision, not a psychological assessment of students.

- The Sage direction expresses clarity, source literacy, honest limitations, and practical explanations.
- The Explorer direction gives readers room to follow an interest, compare paths, and change their minds.
- The promise is **clear evidence for a next step you choose**.
- The voice is calm, welcoming and concrete. It invites a small action and explains why that action helps.

The existing forest-green, ivory and field-guide visual language already suits this direction. The update keeps that identity and adds clear selection states, readable option cards and a quieter hierarchy rather than replacing the site with a new visual system.

## Cialdini, applied with restraint

Cialdini's [official Influence at Work explanation](https://www.influenceatwork.com/7-principles-of-persuasion/) describes reciprocity, authority, consistency and liking among its principles. The following applications are our design interpretations, not claims that those principles have been experimentally validated on this site. The source was inspected in Chrome on November 5, 2026.

| Principle | Application here | Intended student benefit |
| --- | --- | --- |
| Reciprocity | Give an editable first-role worksheet through a direct download, with no account or email gate | A useful resource the student can keep and use independently |
| Authority | Surface links to employer descriptions, BLS/O*NET context, NJIT resources and methodology | Credibility through inspectable sources, with their scope preserved |
| Consistency | Invite one optional choice of work interest, then suggest reading one related profile and writing one question | A manageable next action, with reset and alternative routes |
| Liking | Use plain, encouraging language that respects uncertainty and existing skills | A more approachable introduction without flattery or pretending to share a student's identity |

No fabricated testimonials, user counts, popularity badges, countdowns, deadlines, endorsements or guaranteed-fit scores were added. Employer deadlines remain factual research details. We have no student behavior data supporting social-proof claims, and no product reason to manufacture scarcity. The site's name and sources do not imply affiliation with NJIT, BLS, O*NET or the employers.

## What changed

- The homepage now opens with “Find your direction. Build from here.” and separates **Choose a field** from **See internships**.
- An optional work-interest chooser connects eight fields to the existing sourced profiles. It is an editorial navigation aid, not a quiz or eligibility assessment.
- The choice can be changed or reset and is not stored beyond the page's lifetime. The full atlas remains available below it.
- A <a href="/ai-career-research/first-role-worksheet.md" download="ai-career-first-role-worksheet.md">first-role worksheet</a> helps the reader record an interest, evidence, eligibility questions, a project and a later reflection.
- Primary-source links are visible near the beginning. Descriptive counts refer to the research library, including its historical and pipeline examples, rather than popularity or hiring demand.
- Navigation groups learning and research resources while keeping **Revisions** directly accessible.
- Job and roadmap copy distinguishes exploring a role, checking an opportunity and choosing a project.

## Validation and remaining questions

Production checks passed: 13 eligibility cases, 20 employer records with source coverage, five occupational series, and 2,246 internal links/assets across 38 pages. Chrome checks confirmed two security results, one networking result, keyboard activation, reset, navigation to the network profile and an actual worksheet download. Existing eligibility and shortlist tools remain separate from the new choice.

Desktop visual review passed at 1,200 CSS pixels. The browser viewport override did not take effect during this session, so a new 390px visual check remains unverified; responsive styles are included, but the desktop check is not evidence of a mobile test.

The [v1.4.1 follow-up](./decision-provenance#verification-record) subsequently completed measured 320px, 390px and desktop checks, preserving this original attempt and its limitation.

A future real-student review should observe whether readers can explain their chosen direction, inspect a source, identify an uncertainty and choose a project. Do not infer success from clicking a button alone. Additional analytics or a user study would be separate work; none was added here.

Code and deployment evidence are attached to [issue #13](https://github.com/kaw393939/ai-career-research/issues/13) and retained in the [release history](./releases).
