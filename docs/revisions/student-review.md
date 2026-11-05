---
title: Simulated NJIT student review
description: A transparent student scenario, observed obstacles, and improvement ideas from the live career research site.
---

# Simulated NJIT student review

**Review date: November 5, 2026.** This is an assistant-led scenario walkthrough in Chrome, not feedback collected from an actual NJIT student, a survey, or a validated usability study.

## Scenario and question

Assume a junior undergraduate studying computer science at NJIT, planning to graduate in spring 2028, with some Python/web coursework and team projects but no AI internship or research publications. The student prefers New York/New Jersey or US-remote work. These are fictional scenario assumptions, not facts about the site owner. Work authorization must be checked separately for each opportunity.

The question is: **Which kind of AI work interests me, and what realistic next step can I take?**

## What was observed on the live site

| Action | Observed result | Implication |
| --- | --- | --- |
| Follow the homepage's starting-point link | Eight early-career examples, with internships before entry-level jobs | The initial route is clear and prioritizes students |
| Select US-remote work in the default view | One graduate example, Bitdeer; no internship examples | The sample does not supply a confirmed remote internship route |
| Search for New York | Scale's research internship and Adobe's graduate ML example | Geography alone does not establish a suitable opportunity |
| Read the New York examples' requirements | Scale asks for prior research; Adobe asks for MS/PhD or equivalent experience and a different graduation window | Both need more qualification checking for this scenario |
| Search for 2028 | Atlassian and Scale appear; GM's broader 2027–2029 graduation range is not matched by that literal search | Free-text search cannot substitute for a structured graduation eligibility check |
| Inspect the broader role comparison | Platform, automation, product, and responsible-AI paths are present on a separate page | Useful breadth exists, but discovery is split between interfaces |

The results describe this small research snapshot, not the availability of all jobs in the region. Unknown eligibility should remain unknown until the employer clarifies it.

## What helps

The site exposes degree and authorization restrictions, links employer sources, dates its examples, and labels portfolio suggestions as editorial guidance. The early-career-first ordering is useful. It also distinguishes a future-opportunity pipeline from an opening observed with an application affordance.

## Student interpretation

For this scenario, **AI application or workflow-automation engineering** is a reasonable direction to investigate: it connects existing programming practice with APIs, testing, and useful applications. That is an editorial judgment about interests and learning, not a verified match or hiring recommendation.

The student still cannot build a confident local/remote internship shortlist from this sample. Research requirements, degree level, graduation timing, location, and incomplete remote details prevent a simple “entry level means eligible” conclusion. A sensible next project would be a bounded application with a fixed test set, documented failures, and a clear user guide.

## Issues to carry into revisions

- **Eligibility first:** structured degree, graduation, experience, and location checks would reduce manual interpretation. See REV-04 and REV-05.
- **Decision support:** a side-by-side role comparison and explicit shortlist reasons would help distinguish interest from eligibility. See REV-06.
- **Scanability:** summarize decisive requirements before expanded descriptions. See REV-07.
- **NJIT connection:** connect verified curriculum and career-service resources to skills and projects without promising course availability or placement. See REV-08.
- **Industry breadth:** security and networking remain important gaps, also raised independently in [issue #1](https://github.com/kaw393939/ai-career-research/issues/1). See REV-01–03.
- **Evidence context:** occupation data and skill diagrams could help, provided they disclose their scope and avoid presenting the sample as market statistics. See REV-09–12.

## Retest after improvements

Ask a student to select a field, identify two opportunities worth investigating, explain any eligibility uncertainty, compare two roles, and choose one skill-building project. Record observed obstacles rather than claiming the interface guarantees a match. Include different degree stages and work-authorization scenarios without collecting unnecessary personal information.

[Return to the revision tracker](./) · [Student experience plan](./student-experience)
