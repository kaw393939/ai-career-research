<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { jobs, researchDate } from '../../data/jobs'
import { assessFit, degreeSummary, timingSummary, facts } from '../../data/eligibility.mjs'
import '../jobs.css'
const audiences = ['Starting out', 'All levels', 'Mid level', 'Senior']
const audience = ref('Starting out'), query = ref(''), locationFilter = ref('All US examples')
const availability = ref('Open / uncertain at review'), hideRestrictions = ref(false), shortlistOnly = ref(false)
const profile = ref({degree:'',year:'',experience:'',research:'',sponsorship:'',citizenship:'',state:'',stage:''})
const shortlist = ref<Record<string,string>>({}), storageMessage = ref('Shortlists and notes stay in this browser. Eligibility preferences are held only for this visit. Nothing here is sent to an employer.')
const storageKey = 'ai-career-atlas-shortlist-v1'
onMounted(() => { try { const saved=JSON.parse(localStorage.getItem(storageKey) || '{}'); if(saved && typeof saved==='object' && !Array.isArray(saved)) shortlist.value=Object.fromEntries(Object.entries(saved).filter(([id,note])=>jobs.some(job=>job.id===id)&&typeof note==='string').map(([id,note])=>[id,String(note).slice(0,2000)])) } catch { storageMessage.value='Persistent browser storage is unavailable or invalid. Your shortlist works for this visit only.' } })
watch(shortlist, value => { try { localStorage.setItem(storageKey,JSON.stringify(value)) } catch { storageMessage.value='Browser storage is unavailable. Your shortlist works for this visit only.' } }, {deep:true})
function toggleSaved(id:string) { const next={...shortlist.value}; if(id in next) delete next[id]; else next[id]=''; shortlist.value=next }
function clearSaved() { shortlist.value={}; shortlistOnly.value=false; try { localStorage.removeItem(storageKey) } catch {} }
const savedCount = computed(()=>Object.keys(shortlist.value).length)
const startingCount = computed(()=>jobs.filter(job=>['Internship','Entry level'].includes(job.level)&&job.status!=='Closed example').length)
const fit = (job:typeof jobs[number]) => assessFit(job,profile.value)
const visibleJobs = computed(()=> {
 const terms=query.value.toLowerCase().trim().split(/\s+/).filter(Boolean)
 return jobs.filter(job=> {
  const level=audience.value==='All levels'||(audience.value==='Starting out'&&['Internship','Entry level'].includes(job.level))||job.level===audience.value
  const location=locationFilter.value==='All US examples'||(locationFilter.value==='Remote — US only'?job.workMode==='Remote — US':facts[job.id]?.metro||job.workMode==='Remote — US')
  const status=availability.value==='Include closed examples'||(availability.value==='Open when checked only'?job.status==='Open when checked':job.status!=='Closed example')
  const text=[job.title,job.employer,job.role,job.location,job.eligibility,job.experience,...job.skills].join(' ').toLowerCase()
  return level&&location&&status&&terms.every(term=>text.includes(term))&&(!hideRestrictions.value||!fit(job).restrictions.length)&&(!shortlistOnly.value||job.id in shortlist.value)
 })
})
const groups = computed(()=>['Internship','Entry level','Mid level','Senior'].map((level,index)=>({level,number:String(index+1).padStart(2,'0'),examples:visibleJobs.value.filter(job=>job.level===level)})).filter(group=>group.examples.length))
function resetFilters(){audience.value='Starting out';query.value='';locationFilter.value='All US examples';availability.value='Open / uncertain at review';hideRestrictions.value=false;shortlistOnly.value=false;profile.value={degree:'',year:'',experience:'',research:'',sponsorship:'',citizenship:'',state:'',stage:''}}

</script>
<template>
<div class="job-examples">
 <div class="jobs-research-note"><div><p class="jobs-kicker">A RESEARCH SNAPSHOT, WITH SOURCES</p><p>Reviewed {{researchDate}}. This selected library is not the entire job market. Open when checked describes the review date, not guaranteed availability today.</p></div></div>
 <div class="jobs-toolbar">
  <div class="jobs-audience" role="group" aria-label="Filter job examples by career stage"><button v-for="option in audiences" :key="option" type="button" :class="{'jobs-selected':audience===option}" :aria-pressed="audience===option" @click="audience=option">{{option}}<span v-if="option==='Starting out'" class="jobs-count">{{startingCount}}</span></button></div>
  <div class="jobs-search-row"><label class="jobs-query"><span>Search examples</span><div class="jobs-input-wrap"><input v-model="query" type="search" placeholder="Title, employer, skill, or location" aria-label="Search job examples"></div></label><label class="jobs-location-filter"><span>Work location</span><select v-model="locationFilter" aria-label="Filter job examples by work location"><option>All US examples</option><option>Remote — US only</option><option>NYC/NJ or US remote</option></select></label><label class="jobs-location-filter"><span>Availability at review</span><select v-model="availability" aria-label="Availability at review"><option>Open / uncertain at review</option><option>Open when checked only</option><option>Include closed examples</option></select></label></div>
  <details class="eligibility-controls"><summary>Check selected eligibility requirements <span>Optional · explainable checks</span></summary>
   <p>These checks compare only recorded facts. They do not decide whether you qualify. Unknown, equivalent-experience, exact term, field-of-study and other conditions still need review. Preferences are not saved.</p>
   <div class="eligibility-grid">
    <label>Degree to compare<select v-model="profile.degree" aria-label="Degree to compare"><option value="">Do not assess</option><option value="bachelor">Bachelor's</option><option value="master">Master's</option><option value="phd">PhD</option></select></label>
    <label>Graduation year<input v-model="profile.year" type="number" min="2020" max="2040" placeholder="Optional, e.g. 2028" aria-label="Graduation year"></label>
    <label>Relevant professional years<input v-model="profile.experience" type="number" min="0" max="50" placeholder="Optional, e.g. 0" aria-label="Relevant professional years"></label>
    <label>Enrollment at role start<select v-model="profile.stage" aria-label="Enrollment at role start"><option value="">Do not assess</option><option value="student">Still enrolled</option><option value="graduate">Graduated by role start</option></select></label>
    <label>Prior research evidence<select v-model="profile.research" aria-label="Prior research evidence"><option value="">Do not assess</option><option value="no">No prior research</option><option value="yes">I have research evidence</option></select></label>
    <label>Sponsorship check<select v-model="profile.sponsorship" aria-label="Sponsorship check"><option value="">Do not assess / prefer not to say</option><option value="needed">Sponsorship needed</option></select></label>
    <label>Citizenship check<select v-model="profile.citizenship" aria-label="Citizenship check"><option value="">Do not assess / prefer not to say</option><option value="not-us">Not a US citizen</option></select></label>
    <label>Remote state to check<select v-model="profile.state" aria-label="Remote state to check"><option value="">Do not assess</option><option value="NJ">New Jersey</option><option value="NY">New York</option><option value="CA">California</option><option value="TX">Texas</option><option value="WA">Washington</option><option value="CO">Colorado</option><option value="MA">Massachusetts</option><option value="OTHER">Another US state</option></select></label>
   </div>
   <label class="jobs-check"><input v-model="hideRestrictions" type="checkbox"> Hide examples with an identified restriction; keep unknowns visible</label>
  </details>
  <div class="shortlist-toolbar"><p>{{storageMessage}}</p><label class="jobs-check"><input v-model="shortlistOnly" type="checkbox"> Show saved examples ({{savedCount}})</label><button type="button" @click="clearSaved">Clear shortlist and notes</button></div>
 </div>
 <div class="jobs-results-summary"><p aria-live="polite"><strong>{{visibleJobs.length}}</strong> {{visibleJobs.length===1?'example':'examples'}} · {{audience}}</p><button type="button" @click="resetFilters">Reset filters ↺</button></div>
 <div v-if="!visibleJobs.length" class="jobs-empty"><h2>No examples match those filters.</h2><p>This can reflect limited library coverage, not absence of jobs. Broaden the geography or criteria, retain unknowns, or inspect another stage.</p><button type="button" @click="resetFilters">Show internships and entry-level examples →</button></div>
 <section v-for="group in groups" :key="group.level" class="jobs-level-section" :aria-label="group.level+' examples'"><div class="jobs-level-heading"><div class="jobs-level-title"><span>{{group.number}}</span><h2>{{group.level==='Internship'?'Internships':group.level+' examples'}}</h2><span class="jobs-level-total">{{group.examples.length}}</span></div></div>
  <div class="jobs-card-grid"><article v-for="job in group.examples" :id="job.id" :key="job.id" class="jobs-card" :aria-label="job.title">
   <header class="jobs-card-header"><div class="jobs-card-meta"><strong>{{job.employer}}</strong><span class="jobs-status" :class="{'jobs-status-closed':job.status==='Closed example','jobs-status-uncertain':job.status==='Status uncertain'}">{{job.status}}</span></div><p class="jobs-role-category">{{job.role}}</p><h3>{{job.title}}</h3><p class="jobs-place">{{job.location}}</p><p>{{job.workMode}} · {{job.level}}</p><ul class="jobs-glance"><li>{{degreeSummary(job)}}</li><li>{{timingSummary(job)}}</li><li>{{facts[job.id]?.experience==null?'Experience: read requirements':facts[job.id].experience+'+ relevant professional years; read alternatives'}}</li></ul>
    <button class="save-job" type="button" :aria-pressed="job.id in shortlist" :aria-label="(job.id in shortlist?'Remove saved job: ':'Save job: ')+job.title" @click="toggleSaved(job.id)">{{job.id in shortlist?'Saved ✓ · Remove':'Save to shortlist +'}}</button>
   </header>
   <div v-if="fit(job).assessed" class="job-fit" :class="{'fit-restricted':fit(job).restrictions.length}"><strong>{{fit(job).status}}</strong><ul><li v-for="reason in [...fit(job).restrictions,...fit(job).unknown,...fit(job).checks]" :key="reason">{{reason}}</li></ul><p>Selected checks only. Read the complete requirements and confirm with the employer.</p></div>
   <div v-if="job.id in shortlist" class="shortlist-note"><label :for="'note-'+job.id">My shortlist reason / questions</label><textarea :id="'note-'+job.id" v-model="shortlist[job.id]" maxlength="2000" rows="3" placeholder="Saved on this browser only; avoid sensitive information."></textarea></div>
   <details class="jobs-full-details"><summary>Read requirements, work & portfolio idea</summary><div class="jobs-card-body"><div class="jobs-facts"><h4>What the posting asks for</h4><dl><div><dt>Experience</dt><dd>{{job.experience}}</dd></div><div><dt>Eligibility</dt><dd>{{job.eligibility}}</dd></div><div><dt>Pay</dt><dd>{{job.compensation||'See employer posting; pay not summarized here.'}}</dd></div></dl></div><div class="jobs-work-list"><h4>The work, in plain language</h4><ul><li v-for="item in job.responsibilities" :key="item">{{item}}</li></ul></div><ul class="jobs-skill-tags"><li v-for="skill in job.skills" :key="skill">{{skill}}</li></ul><p class="level-explanation"><strong>Why this level? Our interpretation:</strong> {{job.levelReason}}</p><div class="jobs-portfolio"><p class="jobs-editorial-label">PORTFOLIO IDEA · EDITORIAL GUIDANCE</p><p>{{job.portfolio}}</p><p class="jobs-transferable">Connect existing skills: {{job.transferable.join(' · ')}}</p></div></div></details>
   <footer class="jobs-card-footer"><a :href="job.sourceUrl" target="_blank" rel="noopener noreferrer">Read employer posting ↗<span class="jobs-sr-only">: {{job.title}} at {{job.employer}} (opens in a new tab)</span></a><span class="jobs-source">{{job.sourceLabel}} · Checked {{job.checked}}</span></footer>
  </article></div>
 </section>
 <div class="jobs-next-stage"><div><h2>Compare the responsibility, then choose a project.</h2><p>Job eligibility, career interests, and learning goals are different decisions.</p></div><button type="button" @click="audience='All levels'">Compare all career stages ↗</button></div>
</div>
</template>
