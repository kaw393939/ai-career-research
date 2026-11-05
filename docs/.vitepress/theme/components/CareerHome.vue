<script setup lang="ts">
import { withBase } from 'vitepress'
import { jobs } from '../../data/jobs'

const startingJobs = jobs.filter(job => ['Internship', 'Entry level'].includes(job.level) && job.status !== 'Closed example').length

</script>

<template>
  <div class="atlas-home">
    <section class="atlas-hero" aria-labelledby="hero-heading">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span> A FIELD GUIDE TO THE NEXT CHAPTER OF WORK</p>
        <h1 id="hero-heading">Big shifts.<br>New roles.<br><span>Your next move.</span></h1>
        <p class="hero-description">Find a practical way into AI. Start with real US internships and entry-level jobs, understand the requirements, and explore where the work could take you.</p>
        <div class="hero-actions">
          <a class="atlas-button primary" :href="withBase('/jobs/')">Find your starting point <span aria-hidden="true">↗</span></a>
          <a class="text-link" href="#explore">Explore the roles <span aria-hidden="true">→</span></a>
        </div>
        <div class="hero-footnote"><span class="mini-stars" aria-hidden="true">✳</span><span>{{ jobs.length }} employer examples · {{ startingJobs }} early-career starting points.<br>US locations and explicitly US-eligible remote work.</span></div>
      </div>
      <div class="atlas-map" role="img" aria-label="Illustrative map of AI career paths, connecting product building, models and quality, and customer work. These are overlapping paths, not a ranking.">
        <div class="map-topline"><span>THE AI CAREER LANDSCAPE</span><span>FIELD NOTES / 001</span></div>
        <svg class="map-lines" viewBox="0 0 520 450" aria-hidden="true">
          <defs><pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#bfcbba" /></pattern></defs>
          <rect width="520" height="450" fill="url(#dots)" />
          <circle cx="260" cy="227" r="152" stroke="#c3cebb" stroke-dasharray="4 7" fill="none" />
          <circle cx="260" cy="227" r="95" stroke="#d2dbca" fill="none" />
          <path d="M260 227 132 112M260 227 387 99M260 227 410 260M260 227 287 370M260 227 108 320M260 227 92 218" stroke="#8aa185" stroke-width="1.5" />
          <g fill="#315e46"><circle cx="132" cy="112" r="5"/><circle cx="387" cy="99" r="5"/><circle cx="410" cy="260" r="5"/><circle cx="287" cy="370" r="5"/><circle cx="108" cy="320" r="5"/><circle cx="92" cy="218" r="5"/></g>
        </svg>
        <div class="map-center"><span class="map-center-symbol" aria-hidden="true">✳</span><span>YOUR<br>POSSIBILITIES</span></div>
        <div class="map-label label-ai"><i class="node-dot green"></i> AI engineer</div>
        <div class="map-label label-fde"><i class="node-dot orange"></i> Forward-deployed</div>
        <div class="map-label label-llm"><i class="node-dot purple"></i> LLM engineer</div>
        <div class="map-label label-ml"><i class="node-dot blue"></i> ML engineer</div>
        <div class="map-label label-eval"><i class="node-dot pink"></i> AI evaluation</div>
        <div class="map-label label-architect"><i class="node-dot yellow"></i> Solutions architect</div>
        <div class="map-bottomline"><span><span class="status-dot"></span> MANY WAYS INTO AI</span><span>FIND YOUR DIRECTION ↗</span></div>
      </div>
    </section>

    <div class="research-strip"><span class="strip-label">RESEARCH, WITH CONTEXT</span><p>Employer sources <span>+</span> Skills that transfer <span>+</span> Projects you can build</p><a :href="withBase('/research/methodology.html')">How we research <span aria-hidden="true">↗</span></a></div>

    <section class="home-jobs-start" aria-labelledby="jobs-start-heading">
      <div><p class="eyebrow">START WITH OPPORTUNITIES YOU CAN ASSESS</p><h2 id="jobs-start-heading">Internships first.<br><em>Requirements in plain sight.</em></h2><p>Check the degree, graduation date, work location, and experience before deciding if a title fits. Then compare how the responsibility grows.</p></div>
      <div class="home-stage-links"><a :href="withBase('/jobs/')"><span>01</span><div><strong>Internships & entry level</strong><small>Student programs, new graduates, and early-career examples</small></div><span aria-hidden="true">↗</span></a><a :href="withBase('/jobs/#career-stage-filters')"><span>02</span><div><strong>Compare career stages</strong><small>Select Mid level or Senior to explore experienced roles</small></div><span aria-hidden="true">↗</span></a><a :href="withBase('/research/emerging-roles.html')"><span>03</span><div><strong>Look beyond the familiar titles</strong><small>AI platforms, agents, product management, and responsible AI</small></div><span aria-hidden="true">↗</span></a></div>
    </section>

    <section id="explore" class="role-section" aria-labelledby="explore-heading">
      <div class="section-intro"><div><p class="eyebrow">01 / EXPLORE THE LANDSCAPE</p><h2 id="explore-heading">Different titles. <em>Real work.</em></h2></div><p>Find the kind of problems you want to solve.<br>Then get to know the role behind them.</p></div>
      <RoleExplorer />
    </section>

    <section class="path-section" aria-labelledby="path-heading">
      <div class="path-intro"><p class="eyebrow">02 / MAKE IT PRACTICAL</p><h2 id="path-heading">You don’t need to<br>learn <em>everything.</em></h2><p>Start with one direction. Build something small, measure what works, and let the evidence shape your next step.</p><a class="atlas-button light" :href="withBase('/roadmap.html')">Find your starting point <span aria-hidden="true">↗</span></a></div>
      <ol class="path-steps"><li><span>01</span><div><h3>Read the work, not just the title.</h3><p>Compare responsibilities across real job descriptions. The same title can mean different things.</p></div></li><li><span>02</span><div><h3>Build one project with proof.</h3><p>A working demo, a clear evaluation, and an honest write-up tell a stronger story.</p></div></li><li><span>03</span><div><h3>Connect what you already know.</h3><p>Software, data, design, and domain knowledge can each be a useful starting point.</p></div></li></ol>
    </section>

    <section class="field-note"><span class="field-note-icon" aria-hidden="true">↳</span><div><p class="eyebrow">A NOTE FROM THE FIELD</p><h2>The title is a starting point.</h2><p>“AI forward engineer” may refer to a <a :href="withBase('/roles/forward-deployed-engineer.html')">forward-deployed engineer</a>. “AI engineer” and “LLM engineer” often overlap. This atlas follows responsibilities and evidence, because titles alone don’t tell the whole story.</p></div><a class="text-link" :href="withBase('/research/glossary.html')">Decode the language <span aria-hidden="true">↗</span></a></section>
    <div class="home-colophon"><span>BUILT FOR CURIOUS PEOPLE. GROUNDED IN REAL WORK.</span><span>REVIEWED NOV 05, 2026</span></div>
  </div>
</template>
