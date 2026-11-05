---
title: LLM Engineer
description: Research the responsibilities, skills, entry routes, and portfolio evidence for large language model engineering.
---

# LLM Engineer

An **LLM engineer** builds and operates software that uses large language models to solve a defined task, often combining model access, retrieval, tools, and evaluation.

**Focus:** language model applications · **Related titles:** generative AI engineer, NLP engineer, AI/ML engineer

## What the work looks like

The title overlaps substantially with [AI engineer](./ai-engineer). Read the description to see whether the employer wants application development, model adaptation, inference infrastructure, or research.

For example, seRevel's LLM Engineer description emphasizes retrieval, agent tools, regression tests, data permissions, and operating cost. REI Systems uses the combined title “AI/ML & LLM Engineer” for work spanning traditional ML, enterprise search, and generative AI services. These are examples of title variation, rather than a universal job definition. [seRevel role](https://serevel.ai/careers/llm-engineer/), [REI Systems role](https://careers-reisystems.icims.com/jobs/3523/ai-ml-%26-llm-engineer/job?in_iframe=1).

Typical responsibilities in these descriptions include:

- Ingest documents and attach useful metadata and access permissions.
- Design retrieval: chunking, embeddings, ranking, and context selection.
- Connect model responses to application features and approved tools.
- Compare changes using repeatable evaluations.
- Track response quality, latency, cost, and production failures.

The work can include fine-tuning, but neither the title nor every application requires training a foundation model. Check whether a posting prioritizes model training or shipping a dependable service.

## Skills to develop

Build a solid programming foundation in Python or TypeScript, HTTP APIs, data processing, Git, and automated testing. Then practice retrieval, structured outputs, prompt and context design, failure handling, and evaluation. seRevel specifically asks for TypeScript/Node, production retrieval, and evidence that evaluations distinguish improvements from regressions. REI also emphasizes Python, SQL, deployment, monitoring, and version tracking. [seRevel requirements](https://serevel.ai/careers/llm-engineer/), [REI responsibilities](https://careers-reisystems.icims.com/jobs/3523/ai-ml-%26-llm-engineer/job?in_iframe=1).

## A portfolio project that shows the work

**Suggested project: a source-citing course handbook assistant.** Use public course documents or a small synthetic document collection. These are learning targets, not hiring thresholds:

1. Create a held-out set of 40 questions, including 10 that the documents cannot answer.
2. Compare a keyword-search baseline with your retrieval approach using the same questions.
3. Define a rubric for answer correctness, citation support, and appropriate abstention before testing.
4. Publish the results, example failures, model/configuration versions, median latency, and measured cost under a stated test setup.
5. Demonstrate that restricted documents cannot be retrieved by an unauthorized test user.

Deliver a reproducible repository, a short demo, and an error analysis. Explain one change that failed and how the evidence changed your next decision.

## Entry routes and search terms

One practical route is backend or full-stack development followed by responsibility for an LLM feature. NLP, data engineering, and ML experience can also transfer. Students can demonstrate the same lifecycle at smaller scale through team projects or internships.

The cited seRevel description expects shipped production work; REI describes its role as mid-senior. These examples should not be read as evidence that the title is routinely entry-level. Search **LLM engineer**, **generative AI software engineer**, and **AI application engineer**, then compare actual requirements.

[Plan your learning →](../roadmap) · [How this research is sourced →](../research/methodology)

## Sources and review date

Primary employer descriptions accessed **November 5, 2026**. This is an access date, not a publication date; postings may change or close. Suggested portfolio projects and entry routes are editorial guidance.

- [seRevel — LLM Engineer](https://serevel.ai/careers/llm-engineer/)
- [REI Systems — AI/ML & LLM Engineer, job 2026-3523](https://careers-reisystems.icims.com/jobs/3523/ai-ml-%26-llm-engineer/job?in_iframe=1)
