# Decision provenance release checklist

1. Commit the Revisions plan before implementation. Give each finding a stable REV ID, link its source, intended behavior, release and GitHub issue. Link the plan from the site menu.
2. Record the decision ID, rationale, alternatives, uncertainty and revisit conditions. Cite primary research where applicable. Separate factual evidence from editorial design choices.
3. Reference the issue in each implementation commit or PR. Comment on the issue with immutable commit and file links as implementation proceeds. Preserve old evidence when a new revision supersedes it.
4. Run `npm run check`. Exercise changed controls in Chrome; measure actual viewport dimensions before claiming a mobile pass. Capture screenshots and store them in the repository when used as release evidence. Record accessibility checks and any limits honestly.
5. Push and verify a successful GitHub Pages deployment for the implementation SHA. Inspect the public changes and asset downloads. A local build or a queued run is not a deployed result.
6. Update the plan, worklog and release history with code, validation and deployment evidence. Publish the GitHub release from a verified source SHA. Close issues only after acceptance is met; leave unmet scope open or explicitly split it into a linked follow-up.
7. For documentation that records the deployment itself, use a separate tracking commit and verify its deployment too. Link its run in the issue to avoid a self-referential source hash.
