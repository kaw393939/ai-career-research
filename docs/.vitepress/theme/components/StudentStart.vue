<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { withBase } from 'vitepress'
import { roles } from '../../data/roles'
const selected = ref('')
const choiceButtons = ref<HTMLButtonElement[]>([])
async function resetChoice() {
 const field = selected.value
 selected.value = ''
 await nextTick()
 choiceButtons.value.find(button => button.dataset.field === field)?.focus()
}
const choices = [
 {field:'Software & applications',title:'Build useful applications',hint:'Turn an idea into something people can use.'},
 {field:'Security & governance',title:'Protect people and systems',hint:'Investigate risks, permissions, and safeguards.'},
 {field:'Networking & telecom',title:'Connect things reliably',hint:'Understand the networks behind AI workloads.'},
 {field:'Data & models',title:'Find meaning in data',hint:'Prepare data, test ideas, and explain results.'},
 {field:'Cloud & platform',title:'Make systems run well',hint:'Explore infrastructure, performance, and reliability.'},
 {field:'Quality & reliability',title:'Find out why things fail',hint:'Design tests and make quality measurable.'},
 {field:'Customer & product',title:'Solve problems with people',hint:'Connect user needs to technical decisions.'},
 {field:'Embedded & robotics',title:'Work with physical systems',hint:'Connect software, autonomy, and the real world.'}
]
const matches = computed(()=>roles.filter(role=>role.field===selected.value))
</script>
<template>
<section id="first-step" class="student-start" aria-labelledby="student-start-heading">
 <div class="student-start-intro"><div><p class="eyebrow">A SMALL FIRST STEP</p><h2 id="student-start-heading">Start with what <em>interests you.</em></h2></div><p>Choose a field to see related roles, or <a :href="withBase('/roles/')">browse all roles ↗</a>.</p></div>
 <fieldset class="interest-picker"><legend>What would you like to work on?</legend><div class="interest-options"><button v-for="choice in choices" :key="choice.field" ref="choiceButtons" :data-field="choice.field" type="button" :aria-pressed="selected===choice.field" @click="selected=selected===choice.field?'':choice.field"><strong>{{choice.title}}</strong><span>{{choice.hint}}</span><span aria-hidden="true" class="choice-arrow">{{selected===choice.field?'✓':'↗'}}</span></button></div></fieldset>
 <p class="interest-status" role="status" aria-live="polite">{{selected?`${matches.length} related ${matches.length===1?'profile':'profiles'} in ${selected}.`:'No field selected.'}}</p>
 <div v-if="selected" class="interest-results"><div class="interest-results-heading"><h3>Related roles</h3><button type="button" @click="resetChoice">Reset my choice</button></div><div class="interest-role-grid"><a v-for="role in matches" :key="role.id" :href="withBase(role.link)"><span>{{role.field}}</span><h4>{{role.title}} <span aria-hidden="true">↗</span></h4><p>{{role.description}}</p><small>Foundations: {{role.foundations.join(' · ')}}</small></a></div></div>
 <div class="worksheet-offer"><div><h3>Keep your notes.</h3><p>An editable worksheet to compare a role, check requirements, and choose a project.</p></div><a :href="withBase('/first-role-worksheet.md')" download="ai-career-first-role-worksheet.md">Download worksheet <span aria-hidden="true">↓</span><small>Markdown · editable text</small></a></div>
</section>
</template>

<style scoped>
.student-start-intro > p > a { color: #315e46; font-weight: 600; text-decoration: underline; text-underline-offset: 3px; }
</style>
