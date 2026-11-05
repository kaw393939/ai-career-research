---
title: AI Evaluation Engineer
description: Explore work that measures AI system quality, investigates failures, and produces trustworthy release evidence.
---

# AI Evaluation Engineer

An **AI evaluation engineer** builds repeatable tests and analysis that reveal what an AI system can do, where it fails, and whether a proposed change improves it.

**Focus:** measurement and reliability · **Related titles:** evaluation engineer, model evaluations research engineer, evaluations research scientist

## How this role is changing

**Editorial classification: AI-focused specialty.** Open-ended model behavior requires explicit rubrics and judgment. Traditional foundations: Experimental design, Testing. This is a responsibility-based interpretation of the employer evidence below, not a claim that a title is newly invented.

## What the work looks like

“AI evaluation engineer” is a useful role-family label; employers use several titles, and the work ranges from application testing to frontier-model research. It is also different from a short-term data-rating assignment: check whether the job owns test design, software infrastructure, analysis, or annotation.

Anthropic's **Research Engineer, Post-Training Model Evaluations** description centers on trustworthy measurements during training, diagnosing regressions, and communicating model quality. Scale AI's **Machine Learning Research Scientist, Evaluations** emphasizes benchmarks, identifying failure mechanisms, and connecting those findings to training interventions. These examples show both engineering and research paths. [Anthropic description](https://job-boards.greenhouse.io/anthropic/jobs/5198255008), [Scale AI description](https://scale.com/careers/4728014005).

Responsibilities in this role family can include:

- Define the capability or product behavior that a test should measure.
- Build evaluation datasets, scoring rules, and reproducible runners.
- Examine failures by category rather than reporting one average score.
- Investigate regressions and distinguish a real change from measurement noise.
- Build reports and dashboards that support training or release decisions.

## Skills to develop

Develop Python, data analysis, software testing, statistics, and experimental design. Practice clear rubrics, data quality checks, benchmark versioning, and communicating uncertainty. Understand the application domain well enough to recognize a plausible but incorrect answer.

Anthropic asks for strong Python, production-system experience, and careful interpretation of ambiguous results. Scale's research example expects substantial ML/post-training knowledge and lists advanced degrees and research publications among its preferred qualifications. The specific requirements vary with how research-intensive the role is. [Anthropic requirements](https://job-boards.greenhouse.io/anthropic/jobs/5198255008), [Scale AI requirements](https://scale.com/careers/4728014005).

## A portfolio project that shows the work

**Suggested project: an evaluation suite for a document-answering assistant.** These are learning deliverables, not hiring thresholds:

1. Write 60 original test questions across answerable, ambiguous, unsupported, and adversarial categories using public or synthetic documents.
2. Define correctness, source support, and appropriate abstention in a written scoring rubric before comparing systems.
3. Keep a held-out test split and compare two configurations under the same conditions.
4. Have two reviewers independently score a sample of 20 answers; report agreement and discuss disagreements.
5. Publish category-level results, repeated-run variation, the test setup, and at least five investigated failures.

Include the dataset's provenance, a reproducible runner, a results table, and a short release recommendation. State what the suite does not measure. If you use a model as a judge, manually audit a sample and document its errors.

## Entry routes and search terms

QA automation, software engineering, analytics, research assistance, and domain expertise can provide useful foundations. Build evidence that you can design a test, implement it, and explain its limits. A research-lab role may demand deeper ML experience than an application evaluation role; a portfolio alone does not guarantee readiness for either.

Search **evaluation engineer**, **model evaluations**, **AI quality engineer**, and **research engineer evaluations**. Compare [LLM engineer](./llm-engineer) if you prefer building the application being tested, or [ML engineer](./ml-engineer) for broader model lifecycle ownership.

[Plan your learning →](../roadmap) · [How this research is sourced →](../research/methodology)

## Sources and review date

Primary employer descriptions accessed **November 5, 2026**. This is an access date, not a publication date; postings may change or close. Portfolio projects and entry routes are editorial guidance.

- [Anthropic — Research Engineer, Post-Training Model Evaluations](https://job-boards.greenhouse.io/anthropic/jobs/5198255008)
- [Scale AI — Machine Learning Research Scientist, Evaluations](https://scale.com/careers/4728014005)
