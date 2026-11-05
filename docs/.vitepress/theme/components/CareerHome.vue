<script setup lang="ts">
import { withBase } from 'vitepress'
import { roles } from '../../data/roles'
import { jobs } from '../../data/jobs'
</script>

<template>
  <div class="atlas-home">
    <section class="atlas-hero" aria-labelledby="hero-heading">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span> CLEAR EVIDENCE. ROOM TO EXPLORE.</p>
        <h1 id="hero-heading">Find your<br>direction.<br><span>Build from here.</span></h1>
        <p class="hero-description">Explore how AI is changing security, networking, software, and data. Start with work that interests you, then read the evidence and choose one practical next step.</p>
        <div class="hero-actions">
          <a class="atlas-button primary" href="#first-step">Choose a field <span aria-hidden="true">↗</span></a>
          <a class="text-link" :href="withBase('/jobs/')">See internships <span aria-hidden="true">→</span></a>
        </div>
        <div class="hero-footnote"><span class="mini-stars" aria-hidden="true">✳</span><span>{{ roles.length }} profiles · {{ new Set(roles.map(role => role.field)).size }} technology fields.<br>{{ jobs.length }} selected employer examples, including historical and pipeline listings.</span></div>
      </div>
      <div class="atlas-map" role="img" aria-label="Illustrative map of example career directions in software, networking, security, data, testing, and customer work. These paths overlap and are not a ranking.">
        <div class="map-topline"><span>THE AI CAREER LANDSCAPE</span><span>FIELD NOTES / 001</span></div>
        <svg class="map-lines" viewBox="0 0 520 450" aria-hidden="true">
          <defs><pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#bfcbba" /></pattern></defs>
          <rect width="520" height="450" fill="url(#dots)" />
          <circle cx="260" cy="227" r="152" stroke="#c3cebb" stroke-dasharray="4 7" fill="none" />
          <circle cx="260" cy="227" r="95" stroke="#d2dbca" fill="none" />
          <path d="M260 227 132 112M260 227 387 99M260 227 410 260M260 227 287 370M260 227 108 320M260 227 92 218" stroke="#8aa185" stroke-width="1.5" />
          <g fill="#315e46"><circle cx="132" cy="112" r="5"/><circle cx="387" cy="99" r="5"/><circle cx="410" cy="260" r="5"/><circle cx="287" cy="370" r="5"/><circle cx="108" cy="320" r="5"/><circle cx="92" cy="218" r="5"/></g>
        </svg>
        <div class="map-center"><span class="map-center-symbol" aria-hidden="true">✳</span><span>PATHS TO<br>EXPLORE</span></div>
        <div class="map-label label-ai"><i class="node-dot green"></i> AI engineer</div>
        <div class="map-label label-fde"><i class="node-dot orange"></i> Networking</div>
        <div class="map-label label-llm"><i class="node-dot purple"></i> AI security</div>
        <div class="map-label label-ml"><i class="node-dot blue"></i> ML engineer</div>
        <div class="map-label label-eval"><i class="node-dot pink"></i> Quality & testing</div>
        <div class="map-label label-architect"><i class="node-dot yellow"></i> Customer & product</div>
        <div class="map-bottomline"><span><span class="status-dot"></span> MANY WAYS INTO AI</span><span>FIND YOUR DIRECTION ↗</span></div>
      </div>
    </section>

    <div class="research-strip source-strip"><span class="strip-label">EVIDENCE YOU CAN OPEN</span><a :href="withBase('/jobs/sources.html')">Employer descriptions ↗</a><a :href="withBase('/research/occupational-context.html')">BLS &amp; O*NET context ↗</a><a :href="withBase('/njit.html')">NJIT learning resources ↗</a><a :href="withBase('/research/methodology.html')">How we research ↗</a></div>

    <StudentStart />

    <section class="home-jobs-start" aria-labelledby="jobs-start-heading">
      <div><p class="eyebrow">READY TO LOOK AT AN OPPORTUNITY?</p><h2 id="jobs-start-heading">Your curiosity.<br><em>The employer’s requirements.</em></h2><p>When a role catches your interest, read one employer example. Check the degree, timing, location, and experience requirements before adding it to your shortlist.</p></div>
      <div class="home-stage-links"><a :href="withBase('/jobs/')"><span>01</span><div><strong>Internships & entry level</strong><small>Student programs, new graduates, and early-career examples</small></div><span aria-hidden="true">↗</span></a><a :href="withBase('/jobs/#career-stage-filters')"><span>02</span><div><strong>Compare career stages</strong><small>Select Mid level or Senior to explore experienced roles</small></div><span aria-hidden="true">↗</span></a><a :href="withBase('/research/emerging-roles.html')"><span>03</span><div><strong>Look beyond the familiar titles</strong><small>AI platforms, agents, product management, and responsible AI</small></div><span aria-hidden="true">↗</span></a></div>
    </section>

    <section id="explore" class="role-section" aria-labelledby="explore-heading">
      <div class="section-intro"><div><p class="eyebrow">01 / EXPLORE THE LANDSCAPE</p><h2 id="explore-heading">Different titles. <em>Real work.</em></h2></div><p>Find the kind of problems you want to solve.<br>Then get to know the role behind them.</p></div>
      <RoleExplorer />
    </section>

    <section class="path-section" aria-labelledby="path-heading">
      <div class="path-intro"><p class="eyebrow">02 / MAKE IT PRACTICAL</p><h2 id="path-heading">You don’t need to<br>learn <em>everything.</em></h2><p>Start with one direction. Build something small, measure what works, and let the evidence shape your next step.</p><a class="atlas-button light" :href="withBase('/roadmap.html')">Choose one project <span aria-hidden="true">↗</span></a></div>
      <ol class="path-steps"><li><span>01</span><div><h3>Read one real description.</h3><p>Compare responsibilities across real job descriptions. The same title can mean different things.</p></div></li><li><span>02</span><div><h3>Build one project with proof.</h3><p>A working demo, a clear evaluation, and an honest write-up tell a stronger story.</p></div></li><li><span>03</span><div><h3>Connect what you already know.</h3><p>Software, data, design, and domain knowledge can each be a useful starting point.</p></div></li></ol>
    </section>

    <section class="field-note"><span class="field-note-icon" aria-hidden="true">↳</span><div><p class="eyebrow">A NOTE FROM THE FIELD</p><h2>The title is a starting point.</h2><p>“AI forward engineer” may refer to a <a :href="withBase('/roles/forward-deployed-engineer.html')">forward-deployed engineer</a>. “AI engineer” and “LLM engineer” often overlap. This atlas follows responsibilities and evidence, because titles alone don’t tell the whole story.</p></div><a class="text-link" :href="withBase('/research/glossary.html')">Decode the language <span aria-hidden="true">↗</span></a></section>
    <div class="home-colophon"><span>YOUR NEXT STEP, GROUNDED IN REAL WORK.</span><span>REVIEWED NOV 05, 2026</span></div>
  </div>
</template>
