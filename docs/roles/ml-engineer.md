---
title: Machine Learning Engineer
description: Understand the established ML engineering role and its changing relationship with generative AI.
---

# Machine Learning Engineer

A **machine learning engineer** builds, deploys, and maintains systems that turn data and trained models into useful production capabilities.

**Focus:** model and data lifecycle · **Related titles:** applied ML engineer, ML software engineer, MLOps engineer

## How this role is changing

**Editorial classification: Established role with AI responsibilities.** Foundation models broaden an established production-ML discipline. Traditional foundations: Statistics, Software systems. This is a responsibility-based interpretation of the employer evidence below, not a claim that a title is newly invented.

## What the work looks like

ML engineering is an established role that predates the current generative AI wave. Its scope can now include foundation models alongside prediction, classification, recommendation, and other conventional ML applications. Google's official role description includes both conventional approaches and generative AI, with responsibilities covering pipelines, deployment, monitoring, and model improvement. [Google Cloud role definition](https://cloud.google.com/learn/certification/machine-learning-engineer).

Amazon's EXR OPS description illustrates production ownership: data and feature pipelines, translating research into services, monitoring performance, retraining, and operational support. Its Alexa AI description instead emphasizes language model training, inference, and optimization. The shared title does not identify a single specialty. [Amazon EXR OPS role](https://www.amazon.jobs/en/jobs/10556687/machine-learning-engineer-exr-ops-tech-team), [Amazon Alexa AI role](https://www.amazon.jobs/jobs/10381642).

Typical work includes:

- Check and transform data; investigate leakage and quality problems.
- Implement repeatable training, validation, and release pipelines.
- Evaluate models against baselines and task-specific metrics.
- Serve predictions with acceptable performance and reliability.
- Monitor behavior and plan updates when data or usage changes.

## Skills to develop

Practice Python, SQL, software testing, data pipelines, and one modeling framework. Learn probability, statistics, supervised learning, data splitting, and the limits of your chosen metric. Add version control, packaging, service deployment, monitoring, and reproducible experiments.

Google's role definition stresses programming, data systems, model architecture, MLOps, and interpreting metrics. Amazon's production example adds the ordinary software lifecycle: design, code review, testing, deployment, and ongoing support. [Google Cloud](https://cloud.google.com/learn/certification/machine-learning-engineer), [Amazon EXR OPS](https://www.amazon.jobs/en/jobs/10556687/machine-learning-engineer-exr-ops-tech-team).

## A portfolio project that shows the work

**Suggested project: a support-ticket routing service.** Use an openly licensed or synthetic dataset and document its limitations. These are practice deliverables, not employer requirements:

1. Define the label set and create separate training, validation, and held-out test sets; explain how you prevent duplicates crossing the split.
2. Compare a majority-class baseline with a simple classifier before adding complexity.
3. Report macro F1, per-class errors, and a confusion matrix on the untouched test set.
4. Package preprocessing and prediction together behind a small API with automated input checks.
5. Measure latency under a documented load and demonstrate how you would detect changing class distributions.

Publish a reproducible training command, a versioned model artifact, deployment instructions, and a rollback plan. Explain which errors would be most costly to the intended user.

## Entry routes and title boundaries

Software engineering, data engineering, and applied data science are useful adjacent routes. Students can start with an internship or a supervised project where they own a small model through deployment. Larger distributed training roles may require considerably more experience.

Compare [LLM engineer](./llm-engineer) when a role centers on language model applications. Compare evaluation engineering when the central deliverable is trustworthy measurement. Search **ML engineer**, **applied machine learning engineer**, and **machine learning software engineer**; inspect whether each role emphasizes modeling, infrastructure, or applications.

[Plan your learning →](../roadmap) · [How this research is sourced →](../research/methodology)

## Sources and review date

Primary sources accessed **November 5, 2026**. This is an access date, not a publication date. Certification descriptions are vendor-specific role frameworks, not universal hiring standards; postings may change or close. Portfolio and entry-route suggestions are editorial guidance.

- [Google Cloud — Professional Machine Learning Engineer](https://cloud.google.com/learn/certification/machine-learning-engineer)
- [Amazon — Machine Learning Engineer, EXR OPS Tech Team](https://www.amazon.jobs/en/jobs/10556687/machine-learning-engineer-exr-ops-tech-team)
- [Amazon — Machine Learning Engineer, Alexa AI](https://www.amazon.jobs/jobs/10381642)
