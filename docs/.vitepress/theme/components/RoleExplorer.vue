<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { roles } from '../../data/roles'
const query = ref('')
const field = ref('All fields')
const interest = ref('All work')
const fields = ['All fields', ...new Set(roles.map(role => role.field))]
const interests = ['All work', 'Build products', 'Work with customers', 'Models & quality']
const selected = ref<string[]>([])
const visible = computed(() => roles.filter(role => (field.value === 'All fields' || field.value === role.field) && (interest.value === 'All work' || interest.value === role.category) && `${role.title} ${role.description} ${role.skills.join(' ')} ${role.foundations.join(' ')}`.toLowerCase().includes(query.value.toLowerCase().trim())))
const compared = computed(() => roles.filter(role => selected.value.includes(role.id)))
function toggle(id: string) { selected.value = selected.value.includes(id) ? selected.value.filter(value => value !== id) : [...selected.value, id].slice(-3) }
</script>
<template>
<div class="role-explorer">
  <div class="role-controls">
    <label>Technology field<select v-model="field" aria-label="Technology field"><option v-for="item in fields" :key="item">{{ item }}</option></select></label>
    <label>Work interest<select v-model="interest" aria-label="Work interest"><option v-for="item in interests" :key="item">{{ item }}</option></select></label>
    <label>Search roles<input v-model="query" type="search" placeholder="Role, skill, or foundation" aria-label="Search all career roles"></label>
  </div>
  <p class="explorer-count" aria-live="polite">{{ visible.length }} of {{ roles.length }} profiles · Editorial categories, not standardized occupation labels.</p>
  <p>Choose up to three profiles to compare. Selecting another replaces the oldest selection.</p>
  <div class="role-grid">
    <article v-for="role in visible" :key="role.id" class="role-card explorer-card">
      <p class="card-tag">{{ role.field }}</p><h3><a :href="withBase(role.link)">{{ role.title }} ↗</a></h3>
      <p class="classification-label">{{ role.classification }}</p><p class="card-description">{{ role.description }}</p>
      <div class="skill-list"><span v-for="skill in role.skills" :key="skill">{{ skill }}</span></div>
      <p class="foundation-note"><strong>Keep the foundations:</strong> {{ role.foundations.join(' · ') }}</p>
      <button class="compare-toggle" type="button" :aria-pressed="selected.includes(role.id)" @click="toggle(role.id)">{{ selected.includes(role.id) ? 'Remove from comparison' : 'Compare this role' }}</button>
    </article>
  </div>
  <div v-if="!visible.length" class="empty-state"><h3>No matching profiles.</h3><button type="button" @click="field='All fields'; interest='All work'; query=''">Reset role filters</button></div>
  <section v-if="compared.length" class="role-comparison" aria-labelledby="compare-heading"><h3 id="compare-heading">Your role comparison</h3><button type="button" @click="selected=[]">Clear comparison</button>
    <div class="comparison-scroll" tabindex="0" aria-label="Scrollable role comparison"><table><caption>Compare selected roles; descriptions are qualitative editorial summaries of the linked employer evidence.</caption><thead><tr><th scope="col">Question</th><th v-for="role in compared" :key="role.id" scope="col"><a :href="withBase(role.link)">{{ role.title }}</a></th></tr></thead><tbody>
      <tr><th scope="row">What would I do?</th><td v-for="role in compared" :key="role.id">{{ role.description }}</td></tr>
      <tr><th scope="row">What changes with AI?</th><td v-for="role in compared" :key="role.id">{{ role.change }}</td></tr>
      <tr><th scope="row">Foundations</th><td v-for="role in compared" :key="role.id">{{ role.foundations.join(', ') }}</td></tr>
      <tr><th scope="row">Skills to investigate</th><td v-for="role in compared" :key="role.id">{{ role.skills.join(', ') }}</td></tr>
    </tbody></table></div><p>Interest is separate from eligibility. <a :href="withBase('/jobs/')">Check actual job requirements next →</a></p>
  </section>
</div>
</template>
