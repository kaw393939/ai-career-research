---
title: Build your career roadmap
description: A practical plan for moving from career research to a small AI portfolio project with measurable evidence.
---

# One direction. One project. Real evidence.

You do not need to learn every AI tool before starting. Choose a kind of work, identify a small skill gap, and build something that lets you practice it.

This roadmap is **editorial guidance**, not an employer requirement or a promise of employment. Adjust the pace to your background and available time. Use the [sourced role profiles](./roles/) to check the responsibilities behind your chosen direction.

## 1. Start from what you know

| Your background | A useful first direction | What to practice next |
| --- | --- | --- |
| Web or software development | AI engineer / LLM engineer | Model integration, retrieval, evaluation, latency and cost |
| Data analysis or statistics | ML engineer / evaluation | Reproducible Python projects, validation, APIs, deployment |
| Customer delivery or consulting | Forward-deployed engineer | Full-stack implementation, data integration, technical discovery |
| Cloud, infrastructure, or enterprise IT | AI solutions architect | AI application patterns, evaluation, architecture tradeoffs |
| A different field or early in your studies | Explore two profiles before choosing | Programming basics, Git, HTTP, data handling, one small application |

These are possible starting points, not qualifications by themselves. For example, a strong consulting background does not replace the coding expected in an engineering role.

## 2. Read three job descriptions

The [US job-example library](./jobs/) starts with internships and entry-level roles. Check enrollment, graduation dates, degree level, location, and work authorization before adding an example to your shortlist. Use experienced examples to understand future responsibilities; they do not all represent immediate application targets.

Choose a role and read three relevant employer descriptions, including examples in its profile. Build a simple evidence table:

| Requirement or task | Evidence I already have | Evidence I can build |
| --- | --- | --- |
| Integrate an external API | A previous web app | Add a model-backed feature with error handling |
| Evaluate output quality | A testing course | Create a small, versioned test set and scoring rubric |
| Work with stakeholders | A group project | Write a realistic problem brief and record tradeoffs |

Record the date, employer, location, level, and link. Count repeated responsibilities; keep required and preferred qualifications separate. Read each listing on its own terms.

## 3. Build shared foundations

Practice enough programming to read, change, and explain your code. Learn Git, HTTP/JSON, basic SQL, test design, and how to run an application. Add statistics and ML foundations when your chosen role calls for them.

Useful official starting references include the [Python tutorial](https://docs.python.org/3/tutorial/), [MDN web development learning materials](https://developer.mozilla.org/en-US/docs/Learn_web_development), [Git documentation](https://git-scm.com/doc), and [Google's Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course).

The sequence matters more than the number of tools. Finish a small working slice before adding a second framework.

## 4. Choose a portfolio project

Pick a project from your chosen role profile or adapt one of these:

- **Product:** a document assistant that cites its sources and can say when it lacks evidence.
- **Customer delivery:** a support triage workflow based on a written stakeholder brief, with a useful manual fallback.
- **Models:** a prediction pipeline with a baseline, held-out data, reproducible training, and monitoring.
- **Evaluation:** a test suite that compares two system versions against a fixed rubric and explains failures.
- **Architecture:** a proposed AI workflow with a small prototype, a cost model, and an explanation of its operational constraints.

Use public, synthetic, or appropriately licensed data. A prototype using a local model or recorded example outputs can teach useful skills; label simulated behavior clearly.

## 5. Define “done” before you build

Make the project reviewable. For a document assistant, an example acceptance plan might be:

1. A new reader can install and run it from the README.
2. The repository includes 20 fixed test questions with expected evidence and scoring guidance.
3. The report separates answer quality, citation support, latency, and cost.
4. A test covers missing evidence, a failed request, and a misleading instruction in a document.
5. The write-up names at least three observed failure cases and explains the next improvement.

These numbers are suggested project criteria, not hiring benchmarks. Set your own targets before you run the evaluation, and report misses honestly.

## 6. Publish the evidence

Include a readable README, setup instructions, a small demonstration, an architecture sketch, the evaluation procedure, and a limitations section. Explain what you personally built and which libraries or models you used.

Write one short case study: **problem → design decision → observed result → limitation → next step**. Tie it back to the responsibilities in your evidence table.

## 7. Revisit your direction

After completing a project, compare what you enjoyed with the actual work described in your target roles. You might enjoy stakeholder discovery more than model tuning, or error analysis more than feature delivery. Update the project and choose your next learning step from that evidence.

**Continue exploring:** [Compare the six roles](./roles/) · [Decode the vocabulary](./research/glossary)
