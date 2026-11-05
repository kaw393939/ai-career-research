<script setup lang="ts">
import { computed, ref } from 'vue'
import { jobs, researchDate } from '../../data/jobs'
import '../jobs.css'

type Audience = 'Starting out' | 'All levels' | 'Mid level' | 'Senior'
const audiences: Audience[] = ['Starting out', 'All levels', 'Mid level', 'Senior']
const audience = ref<Audience>('Starting out')
const query = ref('')
const locationFilter = ref('All US examples')
const levelOrder = ['Internship', 'Entry level', 'Mid level', 'Senior'] as const
const levelNotes = {
  Internship: 'Start with the enrollment, program dates, and eligibility requirements.',
  'Entry level': 'Compare the actual experience requirements, including the kind of experience accepted.',
  'Mid level': 'Look for independent delivery, production ownership, and collaboration expectations.',
  Senior: 'Compare the scope of technical decisions, organizational influence, and leadership.'
}

const visibleJobs = computed(() => {
  const terms = query.value.toLowerCase().trim().split(/\s+/).filter(Boolean)
  return jobs.filter(job => {
    const matchesLevel = audience.value === 'All levels' ||
      (audience.value === 'Starting out' && ['Internship', 'Entry level'].includes(job.level)) ||
      job.level === audience.value
    const matchesLocation = locationFilter.value !== 'Remote — US only' || job.workMode === 'Remote — US'
    const searchable = [job.employer, job.title, job.role, job.location, job.workMode,
      job.eligibility, job.experience, ...job.responsibilities, ...job.skills, ...job.transferable]
      .join(' ').toLowerCase()
    return matchesLevel && matchesLocation && terms.every(term => searchable.includes(term))
  })
})

const groups = computed(() => levelOrder.map((level, index) => ({
  level,
  number: String(index + 1).padStart(2, '0'),
  id: `jobs-${level.toLowerCase().replaceAll(' ', '-')}`,
  description: levelNotes[level],
  examples: visibleJobs.value.filter(job => job.level === level)
})).filter(group => group.examples.length))

const startingCount = computed(() => jobs.filter(job => ['Internship', 'Entry level'].includes(job.level)).length)

function resetFilters() {
  audience.value = 'Starting out'
  query.value = ''
  locationFilter.value = 'All US examples'
}

function statusClass(status: string) {
  if (status === 'Open when checked') return 'jobs-status-open'
  if (status === 'Closed example') return 'jobs-status-closed'
  return 'jobs-status-uncertain'
}
</script>

<template>
  <div class="job-examples">
    <div class="jobs-research-note">
      <span class="jobs-note-icon" aria-hidden="true">↳</span>
      <div>
        <p class="jobs-kicker">A RESEARCH SNAPSHOT, WITH SOURCES</p>
        <p>Reviewed {{ researchDate }}. These examples explain real job requirements. Posting availability can change; check the employer’s page before applying.</p>
      </div>
    </div>

    <div class="jobs-toolbar">
      <div class="jobs-audience" role="group" aria-label="Filter job examples by career stage">
        <button v-for="option in audiences" :key="option" type="button"
          :class="{ 'jobs-selected': audience === option }" :aria-pressed="audience === option"
          @click="audience = option">
          {{ option }}<span v-if="option === 'Starting out'" class="jobs-count">{{ startingCount }}</span>
        </button>
      </div>
      <div class="jobs-search-row">
        <label class="jobs-query">
          <span>Search examples</span>
          <div class="jobs-input-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/></svg>
            <input v-model="query" type="search" placeholder="Title, employer, skill, or location" aria-label="Search job examples">
          </div>
        </label>
        <label class="jobs-location-filter">
          <span>Work location</span>
          <select v-model="locationFilter" aria-label="Filter job examples by work location">
            <option>All US examples</option>
            <option>Remote — US only</option>
          </select>
        </label>
      </div>
    </div>

    <div class="jobs-results-summary">
      <p aria-live="polite" aria-atomic="true"><strong>{{ visibleJobs.length }}</strong> {{ visibleJobs.length === 1 ? 'example' : 'examples' }}<span> · {{ audience === 'Starting out' ? 'Internships and entry-level roles first' : audience }}</span></p>
      <button v-if="query || locationFilter !== 'All US examples' || audience !== 'Starting out'" type="button" @click="resetFilters">Reset filters <span aria-hidden="true">↺</span></button>
    </div>

    <div v-if="!visibleJobs.length" class="jobs-empty">
      <h2>No examples match those filters.</h2>
      <p>Try a broader skill or employer, select all US examples, or explore another career stage.</p>
      <button type="button" @click="resetFilters">Show internships and entry-level examples <span aria-hidden="true">→</span></button>
    </div>

    <section v-for="group in groups" :id="group.id" :key="group.level" class="jobs-level-section" :aria-labelledby="`${group.id}-heading`">
      <div class="jobs-level-heading">
        <div class="jobs-level-title"><span class="jobs-level-number">{{ group.number }}</span><h2 :id="`${group.id}-heading`">{{ group.level === 'Internship' ? 'Internships' : `${group.level} examples` }}</h2><span class="jobs-level-total">{{ group.examples.length }}</span></div>
        <p>{{ group.description }}</p>
      </div>

      <div class="jobs-card-grid">
        <article v-for="job in group.examples" :id="job.id" :key="job.id" class="jobs-card" :aria-labelledby="`${job.id}-title`">
          <header class="jobs-card-header">
            <div class="jobs-card-meta"><span class="jobs-employer">{{ job.employer }}</span><span :class="['jobs-status', statusClass(job.status)]">{{ job.status }}</span></div>
            <p class="jobs-role-category">{{ job.role }}</p>
            <h3 :id="`${job.id}-title`">{{ job.title }}</h3>
            <div class="jobs-place"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/></svg><span>{{ job.location }}</span></div>
            <p class="jobs-work-mode">{{ job.workMode }}</p>
          </header>

          <div class="jobs-card-body">
            <div class="jobs-facts">
              <h4>What the posting asks for</h4>
              <dl>
                <div><dt>Experience</dt><dd>{{ job.experience }}</dd></div>
                <div><dt>Eligibility</dt><dd>{{ job.eligibility }}</dd></div>
                <div><dt>Pay</dt><dd>{{ job.compensation || 'See employer posting; pay not summarized here.' }}</dd></div>
              </dl>
            </div>

            <div class="jobs-work-list"><h4>The work, in plain language</h4><ul><li v-for="responsibility in job.responsibilities" :key="responsibility">{{ responsibility }}</li></ul></div>
            <ul class="jobs-skill-tags" aria-label="Skills mentioned in this example"><li v-for="skill in job.skills" :key="skill">{{ skill }}</li></ul>

            <details class="jobs-interpretation">
              <summary>Why this level? <span>Our interpretation</span></summary>
              <p>{{ job.levelReason }}</p>
            </details>

            <div class="jobs-portfolio"><p class="jobs-editorial-label"><span aria-hidden="true">↗</span> PORTFOLIO IDEA · EDITORIAL GUIDANCE</p><p>{{ job.portfolio }}</p><p v-if="job.transferable.length" class="jobs-transferable"><strong>Connect existing skills:</strong> {{ job.transferable.join(' · ') }}</p></div>
          </div>

          <footer class="jobs-card-footer"><a :href="job.sourceUrl" target="_blank" rel="noopener noreferrer">Read employer posting <span aria-hidden="true">↗</span><span class="jobs-sr-only">: {{ job.title }} at {{ job.employer }} (opens in a new tab)</span></a><span class="jobs-source">{{ job.sourceLabel }} · Checked {{ job.checked }}</span></footer>
        </article>
      </div>
    </section>

    <div v-if="audience === 'Starting out' && visibleJobs.length" class="jobs-next-stage"><div><p class="jobs-kicker">LOOK AHEAD</p><h2>See how the responsibility grows.</h2><p>Compare these starting points with the scope of mid-level and senior examples.</p></div><button type="button" @click="audience = 'All levels'">Compare all career stages <span aria-hidden="true">↗</span></button></div>
  </div>
</template>
