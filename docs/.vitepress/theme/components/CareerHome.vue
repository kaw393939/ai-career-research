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
        <p class="hero-description">Explore AI careers in software, security, networking, and data. Choose a field or start with an internship.</p>
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

    <div id="explore" class="home-chooser-anchor"><StudentStart /></div>

    <section class="home-next-step" aria-labelledby="path-heading">
      <div><p class="eyebrow">PUT IT INTO PRACTICE</p><h2 id="path-heading">Practice one skill.</h2><p>Find a small project for the role you want to explore.</p></div>
      <a class="atlas-button light" :href="withBase('/roadmap.html')">Choose one project <span aria-hidden="true">↗</span></a>
    </section>

    <div class="home-colophon"><span>YOUR NEXT STEP, GROUNDED IN REAL WORK.</span><span>REVIEWED NOV 05, 2026</span></div>
  </div>
</template>

<style scoped>
.home-chooser-anchor { scroll-margin-top: 100px; }
.home-next-step { display: flex; align-items: center; justify-content: space-between; gap: 28px; margin-top: 32px; padding: 30px 34px; background: #214a37; color: #f3f5e8; border-radius: 8px; }
.home-next-step .eyebrow { color: #bdcea6; }
.home-next-step h2 { margin-top: 9px; font-size: 28px; line-height: 1.3; font-weight: 600; letter-spacing: -.8px; }
.home-next-step p:not(.eyebrow) { margin-top: 10px; color: #c2cebb; font-size: 13px; line-height: 1.8; }
.home-next-step .atlas-button { flex-shrink: 0; margin-top: 0; font-size: 12px; }
@media (max-width: 650px) { .home-next-step { flex-direction: column; align-items: flex-start; gap: 20px; padding: 25px; }.home-next-step h2 { font-size: 25px; } }
</style>
